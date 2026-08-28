---
layout: single
title: "Public Submission Profile"
permalink: /ai/submission-profile/
author_profile: false
lang: en
excerpt: "Reusable public metadata for preparing academic materials."
visibility: public
status: current
last_updated: 2026-08-28
---

{% assign person = site.data.person %}
{% assign ai = site.data.ai_defaults %}

This page contains public, reusable metadata for preparing academic materials. It is not a completed submission form and does not authorize submission.

## Author metadata

- **Author name:** {{ person.name }}
- **Current title:** {{ person.title }}
- **Institution:** {{ person.institution }}
- **Public email:** [{{ person.email }}](mailto:{{ person.email }})
- **ORCID:** [{{ person.orcid_id }}]({{ person.orcid_url }})
- **Dissertation status:** {{ person.degree_status }}

## Research fields

- **Umbrella field:** {{ person.umbrella_field }}
- **Primary fields:** {{ person.primary_fields | join: "; " }}
- **Cross-cutting areas:** {{ person.cross_cutting_areas | join: "; " }}

## JEL code pool

{{ ai.jel_selection_rule }}

### Core pool

{% for item in ai.jel_core %}- `{{ item[0] }}` — {{ item[1] }}
{% endfor %}

### Project-specific options

{% for item in ai.jel_project_specific %}- `{{ item[0] }}` — {{ item[1] }}
{% endfor %}

## Statements requiring manuscript-level confirmation

There is no universal public default. {{ ai.statements_rule }} Confirm each item against the manuscript, coauthor agreement, and current journal requirements.
