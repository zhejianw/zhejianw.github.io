#!/usr/bin/env python3
"""Fail safely when common private artifacts enter this public repository.

The guard reports file paths and rule identifiers only. It never prints matching
content, which avoids echoing possible secrets into public Actions logs.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MAX_FILE_BYTES = 20 * 1024 * 1024

BLOCKED_EXTENSIONS = {
    ".7z",
    ".db",
    ".doc",
    ".docx",
    ".dta",
    ".duckdb",
    ".gz",
    ".kdbx",
    ".key",
    ".p12",
    ".pem",
    ".pfx",
    ".rar",
    ".sav",
    ".sqlite",
    ".sqlite3",
    ".tar",
    ".xls",
    ".xlsm",
    ".xlsx",
    ".zip",
}

BLOCKED_PATH_PARTS = {
    "confidential",
    "credentials",
    "inbox",
    "passwords",
    "private",
    "secrets",
}

ALLOWED_ENV_FILES = {".env.example"}

UNLISTED_AI_HTML_PAGES = {
    "_pages/ai-context.md",
    "_pages/ai-submission-profile.md",
    "_pages/ai-writing-guidance.md",
    "ai/index.md",
}

PRIVATE_KEY_PATTERN = re.compile(
    ("-----BEGIN " + r"(?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----").encode()
)

CONTENT_USE_SCOPE = (
    "This permission is limited to task-level retrieval and use and does not extend "
    "to model training, reusable corpus or index construction, persistent profiling, "
    "or external action."
)

ACTION_REF_PATTERN = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+@[0-9a-fA-F]{40}$")


def tracked_files() -> list[Path]:
    result = subprocess.run(
        ["git", "ls-files", "-z"],
        cwd=ROOT,
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
    )
    if result.returncode == 0:
        return [ROOT / item.decode("utf-8") for item in result.stdout.split(b"\0") if item]

    return [
        path
        for path in ROOT.rglob("*")
        if path.is_file() and ".git" not in path.relative_to(ROOT).parts
    ]


def add_issue(issues: list[tuple[str, str]], rule: str, path: Path) -> None:
    issues.append((rule, path.relative_to(ROOT).as_posix()))


def validate_ai_metadata(path: Path, data: bytes, issues: list[tuple[str, str]]) -> None:
    relative = path.relative_to(ROOT).as_posix()
    if relative in UNLISTED_AI_HTML_PAGES:
        text = data.decode("utf-8", errors="replace")
        required = (
            "visibility: unlisted-public",
            "status:",
            "last_updated:",
            "noindex: true",
            "sitemap: false",
        )
        if not all(item in text for item in required):
            add_issue(issues, "AI_HTML_UNLISTED_METADATA_REQUIRED", path)
    elif relative.startswith("ai/prompts/") and path.suffix.lower() == ".md":
        text = data.decode("utf-8", errors="replace")
        required = (
            "visibility: unlisted-public",
            "status:",
            "last_updated:",
            "noindex: true",
            "sitemap: false",
        )
        if not all(item in text for item in required):
            add_issue(issues, "PROMPT_UNLISTED_METADATA_REQUIRED", path)
    elif relative == "AI_CONTEXT.md" or (
        relative.startswith("ai/") and path.suffix.lower() == ".md" and path.name != "README.md"
    ):
        text = data.decode("utf-8", errors="replace")
        required = ("visibility: unlisted-public", "status:", "last_updated:")
        if not all(item in text for item in required):
            add_issue(issues, "AI_UNLISTED_METADATA_REQUIRED", path)

    if relative == "ai/profile.json":
        try:
            profile = json.loads(data.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            add_issue(issues, "PROFILE_JSON_INVALID", path)
            return
        if profile.get("visibility") != "unlisted-public" or not profile.get("last_updated"):
            add_issue(issues, "PROFILE_UNLISTED_METADATA_REQUIRED", path)

    if relative == "ai/context.json":
        try:
            context = json.loads(data.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            add_issue(issues, "CONTEXT_JSON_INVALID", path)
            return
        if (
            context.get("visibility") != "unlisted-public"
            or not context.get("last_updated")
            or context.get("canonical_source") != "https://zhejianwang.com/ai/context.json"
        ):
            add_issue(issues, "CONTEXT_UNLISTED_METADATA_REQUIRED", path)


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


def parse_bot_registry(
    text: str, path: Path, issues: list[tuple[str, str]]
) -> dict[str, tuple[str, str, str]]:
    entries: dict[str, tuple[str, str, str]] = {}
    for line in text.splitlines():
        if not line.startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) != 6 or not cells[0].startswith("`"):
            continue
        token = cells[0].strip("`")
        rule = cells[3].strip("`")
        source = cells[4]
        last_verified = cells[5]
        entries[token] = (rule, source, last_verified)

        if not re.search(r"\]\(https://[^)]+\)", source):
            add_issue(issues, "BOT_REGISTRY_FIRST_PARTY_HTTPS_SOURCE_REQUIRED", path)
        try:
            datetime.strptime(last_verified, "%Y-%m-%d")
        except ValueError:
            add_issue(issues, "BOT_REGISTRY_VERIFIED_DATE_INVALID", path)
    return entries


def validate_policy_controls(issues: list[tuple[str, str]]) -> None:
    """Keep the repository's crawler and content-use notices mutually consistent."""

    security_path = ROOT / ".well-known" / "security.txt"
    if not security_path.is_file():
        add_issue(issues, "SECURITY_TXT_MISSING", security_path)
    else:
        fields: dict[str, str] = {}
        for line in security_path.read_text(encoding="utf-8").splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                fields[key.strip()] = value.strip()

        expected = {
            "Canonical": "https://zhejianwang.com/.well-known/security.txt",
            "Policy": "https://github.com/zhejianw/zhejianw.github.io/security/policy",
            "Preferred-Languages": "en, zh",
        }
        if not fields.get("Contact", "").startswith("mailto:"):
            add_issue(issues, "SECURITY_TXT_CONTACT_INVALID", security_path)
        for key, value in expected.items():
            if fields.get(key) != value:
                add_issue(issues, f"SECURITY_TXT_{key.upper().replace('-', '_')}_INVALID", security_path)

        try:
            expires = datetime.fromisoformat(fields["Expires"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            add_issue(issues, "SECURITY_TXT_EXPIRES_INVALID", security_path)
        else:
            now = datetime.now(timezone.utc)
            if expires <= now:
                add_issue(issues, "SECURITY_TXT_EXPIRED", security_path)
            if expires - now >= timedelta(days=365):
                add_issue(issues, "SECURITY_TXT_EXPIRES_TOO_DISTANT", security_path)

    robots_path = ROOT / "robots.txt"
    registry_path = ROOT / "BOT_REGISTRY.md"
    if not robots_path.is_file():
        add_issue(issues, "ROBOTS_TXT_MISSING", robots_path)
        robots_text = ""
    else:
        robots_text = robots_path.read_text(encoding="utf-8")

    if not registry_path.is_file():
        add_issue(issues, "BOT_REGISTRY_MISSING", registry_path)
        registry_text = ""
    else:
        registry_text = registry_path.read_text(encoding="utf-8")

    robot_groups = parse_robots(robots_text)
    registry_entries = parse_bot_registry(registry_text, registry_path, issues)
    named_robot_agents = set(robot_groups) - {"*"}
    if named_robot_agents != set(registry_entries):
        add_issue(issues, "BOT_REGISTRY_ROBOTS_MISMATCH", registry_path)
    for agent in sorted(named_robot_agents & set(registry_entries)):
        rule, _source, _last_verified = registry_entries[agent]
        try:
            key, value = (part.strip().lower() for part in rule.split(":", 1))
        except ValueError:
            add_issue(issues, "BOT_REGISTRY_RULE_INVALID", registry_path)
            continue
        if (key, value) not in {
            (directive.lower(), target.lower())
            for directive, target in robot_groups.get(agent, [])
        }:
            add_issue(issues, "BOT_REGISTRY_RULE_MISMATCH", registry_path)
    if ("allow", "/") not in robot_groups.get("Claude-User", []):
        add_issue(issues, "CLAUDE_USER_EXPLICIT_ALLOW_REQUIRED", robots_path)
    if ("allow", "/") not in robot_groups.get("*", []):
        add_issue(issues, "ROBOTS_WILDCARD_ALLOW_REQUIRED", robots_path)
    if "Sitemap: https://zhejianwang.com/sitemap.xml" not in robots_text:
        add_issue(issues, "ROBOTS_SITEMAP_REQUIRED", robots_path)

    tdm_path = ROOT / ".well-known" / "tdmrep.json"
    try:
        tdm = json.loads(tdm_path.read_text(encoding="utf-8"))
    except (OSError, UnicodeDecodeError, json.JSONDecodeError):
        add_issue(issues, "TDMREP_INVALID", tdm_path)
    else:
        expected_tdm = [
            {
                "location": "/",
                "tdm-reservation": 1,
                "tdm-policy": "https://zhejianwang.com/content-use/",
            }
        ]
        if tdm != expected_tdm:
            add_issue(issues, "TDMREP_POLICY_MISMATCH", tdm_path)

    content_use_path = ROOT / "_pages" / "content-use.md"
    try:
        content_use = content_use_path.read_text(encoding="utf-8")
    except OSError:
        add_issue(issues, "CONTENT_USE_POLICY_MISSING", content_use_path)
    else:
        if CONTENT_USE_SCOPE not in content_use:
            add_issue(issues, "CONTENT_USE_TASK_SCOPE_REQUIRED", content_use_path)

    security_policy_path = ROOT / "SECURITY.md"
    if not security_policy_path.is_file():
        add_issue(issues, "SECURITY_POLICY_MISSING", security_policy_path)

    workflows_path = ROOT / ".github" / "workflows"
    for workflow_path in sorted(workflows_path.glob("*.y*ml")):
        workflow_text = workflow_path.read_text(encoding="utf-8")
        for match in re.finditer(r"^\s*uses:\s*([^\s#]+)", workflow_text, re.MULTILINE):
            action_ref = match.group(1)
            if action_ref.startswith("./"):
                continue
            if not ACTION_REF_PATTERN.fullmatch(action_ref):
                add_issue(issues, "ACTION_REF_NOT_FULL_SHA", workflow_path)


def main() -> int:
    issues: list[tuple[str, str]] = []

    validate_policy_controls(issues)

    for path in tracked_files():
        relative = path.relative_to(ROOT)
        relative_text = relative.as_posix()
        lower_parts = {part.lower() for part in relative.parts}
        lower_name = path.name.lower()

        if lower_name.startswith(".env") and lower_name not in ALLOWED_ENV_FILES:
            add_issue(issues, "ENV_FILE_BLOCKED", path)

        if lower_parts & BLOCKED_PATH_PARTS:
            add_issue(issues, "PRIVATE_PATH_BLOCKED", path)

        if path.suffix.lower() in BLOCKED_EXTENSIONS:
            add_issue(issues, "PRIVATE_FORMAT_BLOCKED", path)

        if not path.exists():
            add_issue(issues, "TRACKED_FILE_MISSING", path)
            continue

        size = path.stat().st_size
        if size > MAX_FILE_BYTES:
            add_issue(issues, "FILE_TOO_LARGE", path)

        if size <= 2 * 1024 * 1024:
            data = path.read_bytes()
            if PRIVATE_KEY_PATTERN.search(data):
                add_issue(issues, "PRIVATE_KEY_MATERIAL", path)
            validate_ai_metadata(path, data, issues)

    if issues:
        print("Public repository guard failed. No file contents are shown.")
        for rule, relative_text in sorted(set(issues)):
            print(f"- {rule}: {relative_text}")
        print("Move the material to private staging or document a narrowly reviewed exception.")
        return 1

    print("Public repository guard passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
