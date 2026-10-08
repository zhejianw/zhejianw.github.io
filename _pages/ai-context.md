---
layout: single
title: "Public AI Context"
permalink: /ai/context/
author_profile: false
lang: en
excerpt: "A human-reviewed public reference for AI assistants and collaborators."
visibility: unlisted-public
noindex: true
sitemap: false
status: current
last_updated: 2026-10-08
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}

This unlisted page is a human-reviewed, public-by-URL reference for an AI assistant or collaborator that receives this exact link from Zhejian Wang. It contains only information approved for public disclosure and is governed by the [content-use policy](/content-use/).

## Identity and current status

- **Name:** {{ person.name }}
- **Pronouns:** {{ person.pronouns }}
- **Current title:** {{ person.title }}, {{ person.college }}, {{ person.institution }}
- **Dissertation:** {{ person.degree_status }}
- **PKU email:** [{{ person.email }}](mailto:{{ person.email }})
- **UDel email:** [{{ person.secondary_email }}](mailto:{{ person.secondary_email }})
- **ORCID:** [{{ person.orcid_id }}]({{ person.orcid_url }})

The Ph.D. was formally conferred on August 18, 2026. The current PKU appointment began in September 2026.

## Research profile

{{ person.research_statement }}

- **Umbrella field:** {{ person.umbrella_field }}
- **Primary fields:** {{ person.primary_fields | join: "; " }}
- **Cross-cutting areas:** {{ person.cross_cutting_areas | join: "; " }}

## Publications

{% include publication-list.html view="modern" %}

## Canonical sources

- [Research](/research/)
- [CV](/cv/)
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
