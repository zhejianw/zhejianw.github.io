---
layout: single
title: "Public AI Context"
permalink: /ai/context/
author_profile: false
lang: en
excerpt: "A human-reviewed public reference for AI assistants and collaborators."
visibility: public
status: current
last_updated: 2026-08-28
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}
{% assign publication = research.papers[research.featured_publication] %}

This page is a human-reviewed public reference for AI assistants and collaborators. It contains only information approved for public disclosure.

## Identity and current status

- **Name:** {{ person.name }}
- **Pronouns:** {{ person.pronouns }}
- **Current title:** {{ person.title }}, {{ person.institution }}
- **Dissertation:** {{ person.degree_status }}
- **Email:** [{{ person.email }}](mailto:{{ person.email }})
- **ORCID:** [{{ person.orcid_id }}]({{ person.orcid_url }})

Do not describe {{ person.name }} as having received the Ph.D. until the degree has been formally conferred and this page has been updated.

## Research profile

{{ person.research_statement }}

- **Umbrella field:** {{ person.umbrella_field }}
- **Primary fields:** {{ person.primary_fields | join: "; " }}
- **Cross-cutting areas:** {{ person.cross_cutting_areas | join: "; " }}

## Confirmed peer-reviewed publication

{{ publication.authors }}. “{{ publication.full_title }}.” *{{ publication.journal }}* {{ publication.volume }}, {{ publication.article }} ({{ publication.year }}). [DOI]({{ publication.doi }}).

## Canonical sources

- [Research](/research/)
- [Current HTML CV](/cv/)
- [Authoring and collaboration guidelines](/ai/writing-guidance/)
- [Public submission profile](/ai/submission-profile/)
- [Machine-readable context](/ai/context.json)
- [Compact plain-text context](/ai/context.txt)

## Interpretation boundary

- Prefer current HTML and structured pages over dated PDF copies.
- Check dates before repeating time-sensitive claims.
- If sources conflict, state the conflict instead of guessing.
- Do not infer private facts or unpublished project details.
- This page does not authorize submission, correspondence, account access, or any other external action.
