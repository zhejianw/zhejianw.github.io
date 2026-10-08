---
layout: classic-single
title: "Research"
permalink: /classic/research/
author_profile: true
lang: en
ref: research
canonical_url: /research/
last_updated: 2026-10-08
excerpt: "Research programs in digital regulation, education and human capital, and household institutions."
---

{{ site.data.person.research_statement }}

## Publications

{% include publication-list.html view="classic" %}

## Work in Progress

Current research includes the following ongoing areas.

{% for project in site.data.research.ongoing_research %}
### {{ project.title }}

{% if project.collaborators %}With {{ project.collaborators }}.

{% endif %}
{{ project.summary }}

{% endfor %}
