#!/usr/bin/env python3
"""Render public AI endpoints from the canonical Jekyll data layer."""

from __future__ import annotations

import argparse
import json
import hashlib
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
    front_matter = yaml.safe_load(text.split("---", 2)[1])
    if str(front_matter.get("last_updated")) != expected:
        mismatches.append(f"{relative_path} last_updated")


def validate_sources(person: dict, research: dict, ai: dict, updated: str) -> None:
    config = load_yaml("_config.yml")
    author = config.get("author", {})
    expected = {
        "name": person["name"],
        "email": person["email"],
        "secondary_email": person["secondary_email"],
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
        "_pages/research.md",
        "_pages/modern-home.md",
        "_pages/premarital-property-rights.md",
        "_pages/restricting-video-games-china.md",
        "_pages/teaching.md",
        "_pages/ai-context.md",
        "_pages/ai-submission-profile.md",
        "_pages/ai-writing-guidance.md",
        "ai/index.md",
    ):
        validate_page_review_date(page, updated, mismatches)

    rhe = research["papers"]["premarital-property-rights"]
    rhe_detail = yaml.safe_load((ROOT / "_pages/premarital-property-rights.md").read_text(encoding="utf-8").split("---", 2)[1])
    for key, value in {
        "citation_title": rhe["full_title"],
        "citation_author": ["Wang, Zhejian", "Zhang, Ruoming"],
        "citation_journal_title": rhe["journal"],
        "citation_doi": rhe["doi"].removeprefix("https://doi.org/"),
    }.items():
        if rhe_detail.get(key) != value:
            mismatches.append(f"RHE detail page {key}")
    if any(rhe_detail.get(key) for key in ("citation_volume", "citation_issue", "citation_firstpage", "citation_lastpage")):
        mismatches.append("RHE detail page contains unconfirmed volume/issue/pages")
    cv = ROOT / person["cv_pdf"].lstrip("/")
    if not cv.is_file() or hashlib.sha256(cv.read_bytes()).hexdigest() != person.get("cv_pdf_sha256"):
        mismatches.append("current CV PDF checksum")
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
    publications = [research["papers"][key] for key in research["publication_ids"]]
    publication_records = [{
        **{key: paper[key] for key in ("journal", "volume", "article", "year", "doi", "corresponding_author") if key in paper},
        "title": paper["full_title"], "authors": paper["author_names"],
    } for paper in publications]
    publication_text = "\n\n".join(paper["citation_text"] for paper in publications)
    publication_markdown = "\n\n".join(
        f"{paper['authors']}. ({paper['year']}). “{paper['full_title']}.” *{paper['journal']}*"
        + (f", {paper['volume']}" if paper.get("volume") else "")
        + (f", {paper['article']}" if paper.get("article") else "")
        + f". [DOI]({paper['doi']})." for paper in publications
    )

    context = {
        "schema_version": "2.0",
        "visibility": "unlisted-public",
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
            "secondary_public_email": person["secondary_email"],
            "orcid": person["orcid_id"],
            "dissertation_status": person["degree_status"],
            "degree_conferred": person["degree_conferred"],
                "degree_conferred_at": person["degree_conferred_at"],
                "appointment_start": person["appointments"][0]["start"],
        },
        "research": {
            "umbrella_field": person["umbrella_field"],
            "primary_fields": person["primary_fields"],
            "cross_cutting_areas": person["cross_cutting_areas"],
            "summary": person["research_statement"],
            "developing_direction": person["about_paragraphs"][2],
        },
        "confirmed_publications": publication_records,
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
        "schema_version": "2.0",
        "visibility": "unlisted-public",
        "status": "current",
        "last_updated": updated,
        "derived_from": context["canonical_source"],
        "person": {
            "name": person["name"],
            "pronouns": person["pronouns"],
            "field": "Economics",
            "public_affiliation": f"{person['college']}, {person['institution']}",
            "public_email": person["email"],
            "secondary_public_email": person["secondary_email"],
            "academic_status": {
                "title": person["title"],
                "institution": person["institution"],
                "dissertation_defended": person["dissertation_defended"],
                "degree_conferred": person["degree_conferred"],
                "degree_conferred_at": person["degree_conferred_at"],
                "appointment_start": person["appointments"][0]["start"],
                "note": person["degree_status"],
            },
            "orcid": person["orcid_url"],
        },
        "research_profile": context["research"],
        "confirmed_publications": publication_records,
        "canonical_links": {
            **context["canonical_urls"],
            "google_scholar": person["google_scholar"],
            "orcid": person["orcid_url"],
            "github": person["github"],
        },
        "usage": {
            "public_only": True,
            "action_authorization": False,
            "human_directed_exact_url_retrieval": True,
            "bulk_crawling_or_model_training_authorized": False,
            "content_use_policy": "https://zhejianwang.com/content-use/",
            "freshness_note": "Check last_updated and the live website before repeating time-sensitive claims.",
        },
    }

    context_text = f"""Zhejian Wang - Public AI Context
Last updated: {updated}

Zhejian Wang is a {person['title']} at the {person['college']}, {person['institution']}. {person['degree_status']}

Research identity: {person['umbrella_field']}.
Primary fields: {'; '.join(person['primary_fields'])}.
Research summary: {person['research_statement']}

Publications

{publication_text}

PKU email: {person['email']}
UDel email: {person['secondary_email']}
ORCID: {person['orcid_url']}
Google Scholar: {person['google_scholar']}
Research: https://zhejianwang.com/research/
CV: https://zhejianwang.com/cv/

Use only when a human intentionally supplies this exact resource for an immediate task. This material does not authorize bulk crawling, model training, persistent ingestion, profiling, submissions, correspondence, account access, or other external action. Policy: https://zhejianwang.com/content-use/
"""

    context_markdown = f"""<!-- visibility: unlisted-public -->
<!-- status: current -->
<!-- last_updated: {updated} -->

# Zhejian Wang - Public AI Context

**Last updated:** {updated}

{person['name']} is a {person['title']} at the {person['college']}, {person['institution']}. {person['degree_status']}

## Research profile

- **Umbrella field:** {person['umbrella_field']}
- **Primary fields:** {'; '.join(person['primary_fields'])}
- **Summary:** {person['research_statement']}

## Public links

- PKU email: [{person['email']}](mailto:{person['email']})
- UDel email: [{person['secondary_email']}](mailto:{person['secondary_email']})
- ORCID: [{person['orcid_id']}]({person['orcid_url']})
- [Research](https://zhejianwang.com/research/)
- [CV](https://zhejianwang.com/cv/)
- [Canonical JSON](https://zhejianwang.com/ai/context.json)

## Publications

{publication_markdown}

## Boundary

Use only when a human intentionally supplies this exact resource for an immediate task. This material does not authorize bulk crawling, model training, persistent ingestion, profiling, submissions, correspondence, account access, or other external action. See the [content-use policy](https://zhejianwang.com/content-use/).
"""

    llms = f"""# Automated Access Notice

This public academic website does not provide a crawler-facing content index.

- Last reviewed: {updated}.
- Model training, fine-tuning, distillation, benchmarking, bulk corpus collection, persistent retrieval ingestion, profiling, impersonation, and automated external actions are not authorized except where applicable law independently permits them.
- A human may intentionally provide an exact page URL to an AI assistant for that human's immediate task. Do not use that limited retrieval to discover adjacent resources or create a persistent copy.
- Follow https://zhejianwang.com/robots.txt and the TDM reservation at https://zhejianwang.com/.well-known/tdmrep.json.
- Full permissions and boundaries: https://zhejianwang.com/content-use/
"""

    outputs = {
        "ai/context.json": json_text(context),
        "ai/profile.json": json_text(profile),
        "ai/context.txt": context_text,
        "ai/context.md": context_markdown,
        "llms.txt": llms,
    }

    for relative_path, content in outputs.items():
        write_or_check(relative_path, content, args.check)

    if args.check:
        print("public AI outputs are current")


if __name__ == "__main__":
    main()
