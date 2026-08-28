#!/usr/bin/env python3
"""Render public AI and CV endpoints from the canonical Jekyll data layer."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]


def load_yaml(relative_path: str) -> dict:
    with (ROOT / relative_path).open(encoding="utf-8") as stream:
        return yaml.safe_load(stream)


def normalized(value: str) -> str:
    return value if value.endswith("\n") else value + "\n"


def write_or_check(relative_path: str, content: str, check: bool) -> None:
    path = ROOT / relative_path
    expected = normalized(content)

    if check:
        if not path.exists() or path.read_text(encoding="utf-8") != expected:
            raise SystemExit(f"Generated public AI file is stale: {relative_path}")
        return

    path.write_text(expected, encoding="utf-8", newline="\n")
    print(f"updated {relative_path}")


def json_text(data: dict) -> str:
    return json.dumps(data, ensure_ascii=False, indent=2)


def validate_page_review_date(relative_path: str, expected: str, mismatches: list[str]) -> None:
    text = (ROOT / relative_path).read_text(encoding="utf-8")
    if f"last_updated: {expected}" not in text:
        mismatches.append(f"{relative_path} last_updated")


def validate_sources(person: dict, research: dict, ai: dict, updated: str) -> None:
    config = load_yaml("_config.yml")
    author = config.get("author", {})
    expected = {
        "name": person["name"],
        "email": person["email"],
        "orcid": person["orcid_url"],
        "googlescholar": person["google_scholar"],
        "bio": person["sidebar_bio"],
        "pronouns": person["pronouns"],
        "location": person["location"],
        "employer": person["institution"],
        "github": person["github"].removeprefix("https://github.com/"),
    }

    mismatches = [
        f"_config.yml author.{key}"
        for key, value in expected.items()
        if author.get(key) != value
    ]
    if author.get("avatar") == "19.jpg":
        mismatches.append("_config.yml author.avatar still references the 15 MB source portrait")
    if "images/19.jpg" not in config.get("exclude", []):
        mismatches.append("_config.yml must exclude the 15 MB source portrait from the built site")

    publication = research["papers"][research["featured_publication"]]
    detail_page = (ROOT / "_pages/restricting-video-games-china.md").read_text(encoding="utf-8")
    for field, value in {
        "publication title": publication["full_title"],
        "DOI": publication["doi"].removeprefix("https://doi.org/"),
        "volume": f'citation_volume: "{publication["volume"]}"',
        "article number": publication["article"],
        "year": str(publication["year"]),
    }.items():
        if value not in detail_page:
            mismatches.append(f"paper detail page {field}")

    for page in (
        "_pages/about.md",
        "_pages/cv.md",
        "_pages/research.md",
        "_pages/restricting-video-games-china.md",
        "_pages/teaching.md",
        "_pages/ai-context.md",
        "_pages/ai-submission-profile.md",
        "_pages/ai-writing-guidance.md",
        "ai/index.md",
    ):
        validate_page_review_date(page, updated, mismatches)

    if mismatches:
        raise SystemExit("Canonical site-data mismatch:\n- " + "\n- ".join(mismatches))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    person = load_yaml("_data/person.yml")
    research = load_yaml("_data/research.yml")
    ai = load_yaml("_data/ai_defaults.yml")
    updated = max(
        str(person["last_reviewed"]),
        str(research["last_reviewed"]),
        str(ai["last_reviewed"]),
    )
    validate_sources(person, research, ai, updated)
    publication = research["papers"][research["featured_publication"]]

    context = {
        "schema_version": "1.1",
        "visibility": "public",
        "status": "current",
        "last_updated": updated,
        "canonical_source": "https://zhejianwang.com/ai/context.json",
        "identity": {
            "name": person["name"],
            "pronouns": person["pronouns"],
            "title": person["title"],
            "institution": person["institution"],
            "college": person["college"],
            "public_email": person["email"],
            "orcid": person["orcid_id"],
            "dissertation_status": person["degree_status"],
            "degree_conferred": person["degree_conferred"],
        },
        "research": {
            "umbrella_field": person["umbrella_field"],
            "primary_fields": person["primary_fields"],
            "cross_cutting_areas": person["cross_cutting_areas"],
            "summary": person["research_statement"],
        },
        "confirmed_publication": {
            "title": publication["full_title"],
            "journal": publication["journal"],
            "volume": publication["volume"],
            "article": publication["article"],
            "year": publication["year"],
            "doi": publication["doi"],
        },
        "submission": {
            "jel_core": list(ai["jel_core"]),
            "jel_project_specific": list(ai["jel_project_specific"]),
            "jel_selection_rule": ai["jel_selection_rule"],
            "statements_rule": ai["statements_rule"],
        },
        "collaboration": ai["collaboration"],
        "canonical_urls": {
            "home": person["website"],
            "research": "https://zhejianwang.com/research/",
            "cv": "https://zhejianwang.com/cv/",
            "ai_context": "https://zhejianwang.com/ai/context/",
            "writing_guidance": "https://zhejianwang.com/ai/writing-guidance/",
            "submission_profile": "https://zhejianwang.com/ai/submission-profile/",
        },
    }

    profile = {
        "schema_version": "1.2",
        "visibility": "public",
        "status": "current",
        "last_updated": updated,
        "derived_from": context["canonical_source"],
        "person": {
            "name": person["name"],
            "pronouns": person["pronouns"],
            "field": "Economics",
            "public_affiliation": person["institution"],
            "public_email": person["email"],
            "academic_status": {
                "title": person["title"],
                "institution": person["institution"],
                "dissertation_defended": person["dissertation_defended"],
                "degree_conferred": person["degree_conferred"],
                "note": person["degree_status"],
            },
            "orcid": person["orcid_url"],
        },
        "research_profile": context["research"],
        "canonical_links": {
            **context["canonical_urls"],
            "google_scholar": person["google_scholar"],
            "orcid": person["orcid_url"],
            "github": person["github"],
        },
        "usage": {
            "public_only": True,
            "action_authorization": False,
            "freshness_note": "Check last_updated and the live website before repeating time-sensitive claims.",
        },
    }

    context_text = f"""Zhejian Wang - Public AI Context
Last updated: {updated}

Zhejian Wang is a {person['title']} at the {person['institution']}. {person['degree_status']}

Research identity: {person['umbrella_field']}.
Primary fields: {'; '.join(person['primary_fields'])}.
Research summary: {person['research_statement']}

Confirmed publication: {publication['full_title']}. {publication['journal']} {publication['volume']}, {publication['article']} ({publication['year']}). {publication['doi']}

Public email: {person['email']}
ORCID: {person['orcid_url']}
Google Scholar: {person['google_scholar']}
Research: https://zhejianwang.com/research/
Current HTML CV: https://zhejianwang.com/cv/

Use only as public reference material. Do not describe the Ph.D. as conferred until the canonical context is updated. This material does not authorize submissions, correspondence, account access, or other external action.
"""

    context_markdown = f"""<!-- visibility: public -->
<!-- status: current -->
<!-- last_updated: {updated} -->

# Zhejian Wang - Public AI Context

**Last updated:** {updated}

{person['name']} is a {person['title']} at the {person['institution']}. {person['degree_status']}

## Research profile

- **Umbrella field:** {person['umbrella_field']}
- **Primary fields:** {'; '.join(person['primary_fields'])}
- **Summary:** {person['research_statement']}

## Public links

- Email: [{person['email']}](mailto:{person['email']})
- ORCID: [{person['orcid_id']}]({person['orcid_url']})
- [Research](https://zhejianwang.com/research/)
- [Current HTML CV](https://zhejianwang.com/cv/)
- [Canonical JSON](https://zhejianwang.com/ai/context.json)

## Confirmed peer-reviewed publication

{publication['authors']}. “{publication['full_title']}.” *{publication['journal']}* {publication['volume']}, {publication['article']} ({publication['year']}). [DOI]({publication['doi']}).

## Boundary

Use only as public reference material. Do not describe the Ph.D. as conferred until the canonical context is updated. This material does not authorize submissions, correspondence, account access, or other external action.
"""

    llms = f"""# Zhejian Wang

> Public academic website and deliberately limited AI-readable profile for Zhejian Wang, an applied microeconomist.

## Start here

- [Canonical machine-readable context](https://zhejianwang.com/ai/context.json): Current public identity, academic status, research profile, and collaboration boundary.
- [Compact plain-text context](https://zhejianwang.com/ai/context.txt): Copy-ready public context.
- [Public AI context](https://zhejianwang.com/ai/context/): Human-readable identity and interpretation boundary.
- [Authoring and collaboration guidelines](https://zhejianwang.com/ai/writing-guidance/): Safe defaults for manuscript and submission support.
- [Public submission profile](https://zhejianwang.com/ai/submission-profile/): Public author metadata and a manuscript-specific JEL code pool.
- [Research](https://zhejianwang.com/research/): Current research programs and papers.
- [Curriculum Vitae](https://zhejianwang.com/cv/): Current public HTML CV.

## Usage notes

- Last reviewed: {updated}.
- {person['degree_status']}
- Prefer the canonical JSON and current HTML pages over dated PDF copies.
- Do not infer private facts or treat this material as permission to submit, contact third parties, or take external actions.
- If sources conflict, identify the conflict and prefer the most recently updated canonical source.
"""

    cv_json = {
        "schema_version": "1.0",
        "status": "current-public-profile",
        "last_updated": updated,
        "canonical_url": "https://zhejianwang.com/cv/",
        "basics": {
            "name": person["name"],
            "label": person["title"],
            "email": person["email"],
            "website": person["website"],
            "summary": person["short_bio"],
            "location": {"city": "Newark", "region": "Delaware", "countryCode": "US"},
            "profiles": [
                {"network": "Google Scholar", "url": person["google_scholar"]},
                {"network": "ORCID", "url": person["orcid_url"]},
                {"network": "GitHub", "url": person["github"]},
            ],
        },
        "education": person["education"],
        "work": person["industry_experience"],
        "skills": person["skills"],
        "publications": [context["confirmed_publication"]],
        "research_programs": research["programs"],
        "presentations": person["presentations"],
        "references": [
            {"name": name, "contact": "Available upon request"}
            for name in person["academic_references"]
        ],
    }

    outputs = {
        "ai/context.json": json_text(context),
        "ai/profile.json": json_text(profile),
        "ai/context.txt": context_text,
        "ai/context.md": context_markdown,
        "llms.txt": llms,
        "_data/cv.json": json_text(cv_json),
    }

    for relative_path, content in outputs.items():
        write_or_check(relative_path, content, args.check)

    if args.check:
        print("public AI outputs are current")


if __name__ == "__main__":
    main()
