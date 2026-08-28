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

PRIVATE_KEY_PATTERN = re.compile(
    ("-----BEGIN " + r"(?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----").encode()
)


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
    if relative.startswith("ai/prompts/") and path.suffix.lower() == ".md":
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
        required = ("visibility: public", "status:", "last_updated:")
        if not all(item in text for item in required):
            add_issue(issues, "AI_METADATA_REQUIRED", path)

    if relative == "ai/profile.json":
        try:
            profile = json.loads(data.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            add_issue(issues, "PROFILE_JSON_INVALID", path)
            return
        if profile.get("visibility") != "public" or not profile.get("last_updated"):
            add_issue(issues, "PROFILE_PUBLIC_METADATA_REQUIRED", path)

    if relative == "ai/context.json":
        try:
            context = json.loads(data.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            add_issue(issues, "CONTEXT_JSON_INVALID", path)
            return
        if (
            context.get("visibility") != "public"
            or not context.get("last_updated")
            or context.get("canonical_source") != "https://zhejianwang.com/ai/context.json"
        ):
            add_issue(issues, "CONTEXT_CANONICAL_METADATA_REQUIRED", path)


def main() -> int:
    issues: list[tuple[str, str]] = []

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
