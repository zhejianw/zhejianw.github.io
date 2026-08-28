#!/usr/bin/env python3
"""Check the deployed crawler, TDM, and security-policy surfaces.

The monitor reports endpoint names and failed rule identifiers only. It does not
print response bodies, which keeps Actions logs concise and avoids reflecting
unexpected live content.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timedelta, timezone
from email.message import Message
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen


DEFAULT_BASE_URL = "https://zhejianwang.com/"
MAX_RESPONSE_BYTES = 2 * 1024 * 1024
ROOT = Path(__file__).resolve().parents[1]

BLOCKED_AGENTS = {
    "GPTBot",
    "ClaudeBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Amazonbot",
    "MistralAI-Training",
    "meta-externalagent",
    "OAI-SearchBot",
    "Claude-SearchBot",
    "PerplexityBot",
    "Amzn-SearchBot",
    "MistralAI-Index",
    "DuckAssistBot",
    "meta-webindexer",
    "GoogleOther",
    "GoogleOther-Image",
    "GoogleOther-Video",
}

CONTENT_USE_SCOPE = (
    "This permission is limited to task-level retrieval and use and does not extend "
    "to model training, reusable corpus or index construction, persistent profiling, "
    "or external action."
)
SECOND_PUBLIC_SURFACE_FRAGMENTS = (
    "raw.githubusercontent.com",
    "are a second public distribution surface",
)


class Monitor:
    def __init__(self, base_url: str) -> None:
        self.base_url = base_url.rstrip("/") + "/"
        self.failures: list[tuple[str, str]] = []

    def fail(self, endpoint: str, rule: str) -> None:
        self.failures.append((endpoint, rule))

    def fetch(self, path: str, expected_media_type: str) -> str | None:
        endpoint = path
        url = urljoin(self.base_url, path.lstrip("/"))
        request = Request(
            url,
            headers={
                "User-Agent": "ZhejianSitePolicyMonitor/1.0 (+https://zhejianwang.com/content-use/)"
            },
        )
        try:
            with urlopen(request, timeout=20) as response:
                status = getattr(response, "status", None)
                final_url = response.geturl()
                media_type = self.media_type(response.headers)
                charset = response.headers.get_content_charset()
                body = response.read(MAX_RESPONSE_BYTES + 1)
        except HTTPError as exc:
            self.fail(endpoint, f"HTTP_STATUS_{exc.code}")
            return None
        except (URLError, TimeoutError, OSError):
            self.fail(endpoint, "FETCH_FAILED")
            return None

        if status != 200:
            self.fail(endpoint, f"HTTP_STATUS_{status}")
        if final_url != url:
            self.fail(endpoint, "FINAL_URL_MISMATCH")
        if media_type != expected_media_type:
            self.fail(endpoint, f"CONTENT_TYPE_EXPECTED_{expected_media_type}")
        if (charset or "").lower() != "utf-8":
            self.fail(endpoint, "CHARSET_UTF8_REQUIRED")
        if len(body) > MAX_RESPONSE_BYTES:
            self.fail(endpoint, "RESPONSE_TOO_LARGE")
            return None

        try:
            return body.decode("utf-8")
        except UnicodeDecodeError:
            self.fail(endpoint, "UTF8_DECODE_FAILED")
            return None

    @staticmethod
    def media_type(headers: Message) -> str:
        return headers.get_content_type().lower()

    def check_security_txt(self) -> None:
        endpoint = "/.well-known/security.txt"
        text = self.fetch(endpoint, "text/plain")
        if text is None:
            return

        fields: dict[str, str] = {}
        for line in text.splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                fields[key.strip()] = value.strip()

        expected = {
            "Canonical": "https://zhejianwang.com/.well-known/security.txt",
            "Policy": "https://github.com/zhejianw/zhejianw.github.io/security/policy",
            "Preferred-Languages": "en, zh",
        }
        if not fields.get("Contact", "").startswith("mailto:"):
            self.fail(endpoint, "CONTACT_INVALID")
        for key, value in expected.items():
            if fields.get(key) != value:
                self.fail(endpoint, f"{key.upper().replace('-', '_')}_INVALID")

        try:
            expires = datetime.fromisoformat(fields["Expires"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            self.fail(endpoint, "EXPIRES_INVALID")
            return

        now = datetime.now(timezone.utc)
        if expires <= now:
            self.fail(endpoint, "EXPIRED")
        if expires - now <= timedelta(days=60):
            self.fail(endpoint, "EXPIRES_WITHIN_60_DAYS")
        if expires - now >= timedelta(days=365):
            self.fail(endpoint, "EXPIRES_TOO_DISTANT")

    def check_tdmrep(self) -> None:
        endpoint = "/.well-known/tdmrep.json"
        text = self.fetch(endpoint, "application/json")
        if text is None:
            return
        try:
            payload = json.loads(text)
        except json.JSONDecodeError:
            self.fail(endpoint, "JSON_INVALID")
            return

        expected = [
            {
                "location": "/",
                "tdm-reservation": 1,
                "tdm-policy": "https://zhejianwang.com/content-use/",
            }
        ]
        if payload != expected:
            self.fail(endpoint, "POLICY_MISMATCH")

    @staticmethod
    def parse_robots(text: str) -> dict[str, list[tuple[str, str]]]:
        groups: dict[str, list[tuple[str, str]]] = {}
        active_agents: list[str] = []
        group_has_directives = False

        for raw_line in text.splitlines():
            line = raw_line.split("#", 1)[0].strip()
            if not line or ":" not in line:
                continue
            key, value = (part.strip() for part in line.split(":", 1))
            key = key.lower()
            if key == "user-agent":
                if group_has_directives:
                    active_agents = []
                    group_has_directives = False
                active_agents.append(value)
                groups.setdefault(value, [])
                continue
            if not active_agents:
                continue
            for agent in active_agents:
                groups.setdefault(agent, []).append((key, value))
            group_has_directives = True

        return groups

    def check_robots(self) -> None:
        endpoint = "/robots.txt"
        text = self.fetch(endpoint, "text/plain")
        if text is None:
            return
        groups = self.parse_robots(text)

        expected_agents = BLOCKED_AGENTS | {"Claude-User", "*"}
        if set(groups) != expected_agents:
            self.fail(endpoint, "NAMED_AGENT_SET_MISMATCH")
        for agent in sorted(BLOCKED_AGENTS):
            if ("disallow", "/") not in groups.get(agent, []):
                self.fail(endpoint, f"{agent}_FULL_DISALLOW_REQUIRED")
        if ("allow", "/") not in groups.get("Claude-User", []):
            self.fail(endpoint, "CLAUDE_USER_EXPLICIT_ALLOW_REQUIRED")
        if ("allow", "/") not in groups.get("*", []):
            self.fail(endpoint, "WILDCARD_ALLOW_REQUIRED")
        if "Sitemap: https://zhejianwang.com/sitemap.xml" not in text:
            self.fail(endpoint, "SITEMAP_REQUIRED")

    def check_content_use(self) -> None:
        endpoint = "/content-use/"
        text = self.fetch(endpoint, "text/html")
        if text is None:
            return
        if CONTENT_USE_SCOPE not in text:
            self.fail(endpoint, "TASK_LEVEL_PERMISSION_SCOPE_MISSING")
        if not all(fragment in text for fragment in SECOND_PUBLIC_SURFACE_FRAGMENTS):
            self.fail(endpoint, "SECOND_PUBLIC_SURFACE_NOTICE_MISSING")

    def check_registry_review_date(self) -> None:
        endpoint = "BOT_REGISTRY.md"
        try:
            text = (ROOT / endpoint).read_text(encoding="utf-8")
        except OSError:
            self.fail(endpoint, "LOCAL_REGISTRY_MISSING")
            return
        match = re.search(
            r"^Next scheduled review:\s*(\d{4}-\d{2}-\d{2})\s*$",
            text,
            re.MULTILINE,
        )
        if not match:
            self.fail(endpoint, "NEXT_REVIEW_DATE_MISSING")
            return
        try:
            review_date = datetime.strptime(match.group(1), "%Y-%m-%d").date()
        except ValueError:
            self.fail(endpoint, "NEXT_REVIEW_DATE_INVALID")
            return
        if review_date < datetime.now(timezone.utc).date():
            self.fail(endpoint, "BOT_REGISTRY_REVIEW_OVERDUE")

    def run(self) -> int:
        if urlparse(self.base_url).scheme.lower() != "https":
            self.fail("base-url", "HTTPS_REQUIRED")
        self.check_security_txt()
        self.check_tdmrep()
        self.check_robots()
        self.check_content_use()
        self.check_registry_review_date()

        if self.failures:
            print("Live policy monitor failed. Response bodies are not shown.")
            for endpoint, rule in sorted(set(self.failures)):
                print(f"- {endpoint}: {rule}")
            return 1

        print("Live policy monitor passed: security.txt, TDMRep, robots, and content-use.")
        return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL)
    args = parser.parse_args()
    return Monitor(args.base_url).run()


if __name__ == "__main__":
    sys.exit(main())
