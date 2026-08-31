#!/usr/bin/env python3
"""Build the public metadata-only search index for the Prompt Library.

The index deliberately excludes prompt bodies and mode text. It contains only
the layer, visible title, short description, anchor id, and public URL.
"""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "data" / "prompt-index.json"
LAYERS = (
    ("zh", "Setup", ROOT / "ai" / "prompts" / "setup" / "index.md", "/ai/prompts/setup/"),
    ("zh", "Acquisition", ROOT / "ai" / "prompts" / "acquisition" / "index.md", "/ai/prompts/acquisition/"),
    ("zh", "Notes", ROOT / "ai" / "prompts" / "notes" / "index.md", "/ai/prompts/notes/"),
    ("zh", "Routing", ROOT / "ai" / "prompts" / "routing" / "index.md", "/ai/prompts/routing/"),
    ("zh", "Brief", ROOT / "ai" / "prompts" / "brief" / "index.md", "/ai/prompts/brief/"),
    ("zh", "Manuscript", ROOT / "ai" / "prompts" / "index.md", "/ai/prompts/"),
    ("zh", "Submission", ROOT / "ai" / "prompts" / "submission" / "index.md", "/ai/prompts/submission/"),
    ("en", "Setup", ROOT / "ai" / "prompts" / "en" / "setup" / "index.md", "/ai/prompts/en/setup/"),
    ("en", "Acquisition", ROOT / "ai" / "prompts" / "en" / "acquisition" / "index.md", "/ai/prompts/en/acquisition/"),
    ("en", "Notes", ROOT / "ai" / "prompts" / "en" / "notes" / "index.md", "/ai/prompts/en/notes/"),
    ("en", "Routing", ROOT / "ai" / "prompts" / "en" / "routing" / "index.md", "/ai/prompts/en/routing/"),
    ("en", "Brief", ROOT / "ai" / "prompts" / "en" / "brief" / "index.md", "/ai/prompts/en/brief/"),
    ("en", "Manuscript", ROOT / "ai" / "prompts" / "en" / "index.md", "/ai/prompts/en/"),
    ("en", "Submission", ROOT / "ai" / "prompts" / "en" / "submission" / "index.md", "/ai/prompts/en/submission/"),
)

HEADING_RE = re.compile(r"^#{2,3}\s+(.+?)\s+\{#([^}]+)\}\s*$")
DESCRIPTION_RE = re.compile(r'^<p class="prompt-description">(.*?)</p>\s*$')
TAG_RE = re.compile(r"<[^>]+>")


def clean_text(value: str) -> str:
    value = TAG_RE.sub("", value)
    value = value.replace("`", "").replace("**", "")
    return " ".join(html.unescape(value).split())


def build_index() -> list[dict[str, str]]:
    records: list[dict[str, str]] = []

    for lang, layer, source, page_url in LAYERS:
        lines = source.read_text(encoding="utf-8").splitlines()
        for index, line in enumerate(lines):
            heading = HEADING_RE.match(line)
            if not heading:
                continue

            description = None
            has_prompt_body = False
            for candidate in lines[index + 1 : index + 12]:
                match = DESCRIPTION_RE.match(candidate)
                if match:
                    description = clean_text(match.group(1))
                if candidate.startswith("~~~") or candidate.startswith("```"):
                    has_prompt_body = True
                    break
                if candidate.startswith("##"):
                    break

            # Structural section headings have no prompt-description and are
            # intentionally absent from the cross-layer prompt index. The
            # same applies to workflow containers without a copyable body.
            if description is None or not has_prompt_body:
                continue

            title, prompt_id = heading.groups()
            records.append(
                {
                    "lang": lang,
                    "layer": layer,
                    "title": clean_text(title),
                    "description": description,
                    "id": prompt_id,
                    "url": f"{page_url}#{prompt_id}",
                }
            )

    return records


def render() -> str:
    return json.dumps(build_index(), ensure_ascii=False, indent=2) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--check",
        action="store_true",
        help="fail if the committed index does not match the prompt metadata",
    )
    args = parser.parse_args()
    expected = render()

    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text(encoding="utf-8") != expected:
            print("Prompt metadata index is missing or stale. Run scripts/build_prompt_index.py")
            return 1
        print(f"Prompt metadata index is current ({len(build_index())} records).")
        return 0

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(expected, encoding="utf-8", newline="\n")
    print(f"Wrote {OUTPUT.relative_to(ROOT)} ({len(build_index())} records).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
