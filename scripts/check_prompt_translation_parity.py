#!/usr/bin/env python3
"""Mechanical parity guard for the bilingual Prompt Library.

This script checks structure and staleness. It deliberately does not claim to
measure semantic translation quality. Error output contains paths and rule names,
not prompt bodies.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scripts" / "prompt_translation_manifest.json"
CJK = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]")
FRONT_MATTER = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.S)
EXPLICIT_ANCHOR = re.compile(r"\{#([^}]+)\}")
HTML_ID = re.compile(r'\bid=["\']([^"\']+)["\']')
PROMPT_BLOCK = re.compile(r"^~~~text\s*$.*?^~~~\s*$", re.M | re.S)
HREF = re.compile(r'href=["\']([^"\']+)["\']')
MODE_LINE = re.compile(r"^\*\*(?:推荐模式|Recommended mode)[：:]\s*(.*?)\*\*\s*$", re.M | re.I)
MODE_TOKEN = re.compile(
    r"(?<![A-Za-z])(?:GPT Pro|Fable High\s*/\s*Max|Fable High|Fable Max|Opus High\s*/\s*Max|Opus High|Opus Max|Extra High|High|Pro)(?![A-Za-z])",
    re.I,
)


def issue(issues: list[tuple[str, str]], rule: str, path: Path) -> None:
    try:
        rel = path.relative_to(ROOT).as_posix()
    except ValueError:
        rel = str(path)
    issues.append((rule, rel))


def git_blob(path: Path) -> str:
    result = subprocess.run(
        ["git", "hash-object", str(path.relative_to(ROOT))],
        cwd=ROOT,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    return result.stdout.strip() if result.returncode == 0 else ""


def parse_front_matter(text: str) -> dict[str, str]:
    match = FRONT_MATTER.search(text)
    if not match:
        return {}
    data: dict[str, str] = {}
    for raw in match.group(1).splitlines():
        if not raw.strip() or raw.lstrip().startswith("#") or ":" not in raw:
            continue
        key, value = raw.split(":", 1)
        value = value.strip().strip('"').strip("'")
        data[key.strip()] = value
    return data


def ordered_ids(text: str) -> list[str]:
    found: list[tuple[int, str]] = []
    found.extend((m.start(), m.group(1)) for m in EXPLICIT_ANCHOR.finditer(text))
    found.extend((m.start(), m.group(1)) for m in HTML_ID.finditer(text))
    return [value for _, value in sorted(found)]


def explicit_anchors(text: str) -> list[str]:
    return EXPLICIT_ANCHOR.findall(text)


def mode_signature(text: str) -> list[list[str]]:
    signatures: list[list[str]] = []
    for line in MODE_LINE.findall(text):
        tokens = [
            re.sub(r"\s*/\s*", "/", re.sub(r"\s+", " ", m.group(0).lower()))
            for m in MODE_TOKEN.finditer(line)
        ]
        signatures.append(tokens)
    return signatures


def route_to_output(route: str) -> Path:
    path = urlparse(route).path.strip("/")
    return ROOT / "_site" / path / "index.html"


def main() -> int:
    issues: list[tuple[str, str]] = []
    if not MANIFEST.is_file():
        issue(issues, "TRANSLATION_MANIFEST_MISSING", MANIFEST)
    else:
        try:
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            issue(issues, "TRANSLATION_MANIFEST_INVALID", MANIFEST)
            manifest = {"layers": []}

        for layer in manifest.get("layers", []):
            source = ROOT / layer["source"]
            translation = ROOT / layer["translation"]
            if not source.is_file():
                issue(issues, "CHINESE_SOURCE_MISSING", source)
                continue
            if not translation.is_file():
                issue(issues, "ENGLISH_TRANSLATION_MISSING", translation)
                continue

            zh = source.read_text(encoding="utf-8")
            en = translation.read_text(encoding="utf-8")
            fm = parse_front_matter(en)

            required = {
                "lang": "en",
                "prompt_lang": "en",
                "prompt_layer": layer["key"],
                "translation_status": "synced",
                "source_path": layer["source"],
                "source_blob_sha": git_blob(source),
                "noindex": "true",
                "sitemap": "false",
                "visibility": "unlisted-public",
                "analytics": "false",
            }
            for key, expected in required.items():
                if fm.get(key, "").lower() != expected.lower():
                    issue(issues, f"EN_FRONT_MATTER_{key.upper()}_MISMATCH", translation)

            zh_anchors = explicit_anchors(zh)
            en_anchors = explicit_anchors(en)
            if zh_anchors != en_anchors:
                issue(issues, "EXPLICIT_ANCHOR_ORDER_MISMATCH", translation)
            if len(en_anchors) != int(layer["explicit_anchors"]):
                issue(issues, "EN_EXPLICIT_ANCHOR_COUNT_MISMATCH", translation)
            if ordered_ids(zh) != ordered_ids(en):
                issue(issues, "ALL_ID_ORDER_MISMATCH", translation)

            zh_blocks = len(PROMPT_BLOCK.findall(zh))
            en_blocks = len(PROMPT_BLOCK.findall(en))
            if zh_blocks != en_blocks:
                issue(issues, "PROMPT_BLOCK_COUNT_MISMATCH", translation)
            if en_blocks != int(layer["prompt_blocks"]):
                issue(issues, "EN_PROMPT_BLOCK_COUNT_MISMATCH", translation)

            if mode_signature(zh) != mode_signature(en):
                issue(issues, "RECOMMENDED_MODE_SIGNATURE_MISMATCH", translation)

            all_ids = ordered_ids(en)
            duplicates = [value for value, count in Counter(all_ids).items() if count > 1]
            if duplicates:
                issue(issues, "EN_DUPLICATE_ID", translation)

            if CJK.search(en):
                issue(issues, "UNINTENDED_CJK_IN_ENGLISH_PAGE", translation)

            if fm.get("permalink") != layer["translation_route"]:
                issue(issues, "EN_ROUTE_MISMATCH", translation)
            if fm.get("translation_of") != layer["source_route"]:
                issue(issues, "TRANSLATION_OF_ROUTE_MISMATCH", translation)

            # Source snapshot drift is intentionally a failure even if English
            # front matter was manually changed without semantic review.
            current_blob = git_blob(source)
            if layer.get("reviewed_source_blob_sha") != current_blob:
                issue(issues, "MANIFEST_SOURCE_BLOB_STALE", source)

            # Check planned English layer routes after a site build exists.
            if (ROOT / "_site").is_dir():
                for href in HREF.findall(en):
                    if href.startswith("/ai/prompts/en"):
                        target = route_to_output(href.split("#", 1)[0])
                        if not target.is_file():
                            issue(issues, "GENERATED_ENGLISH_ROUTE_MISSING", translation)

    if issues:
        print("Prompt translation parity failed. Prompt contents are not printed.")
        for rule, path in sorted(set(issues)):
            print(f"- {rule}: {path}")
        return 1

    print("Prompt translation mechanical parity passed for all configured layers.")
    print("Semantic equivalence still requires the reviewed correspondence files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
