---
layout: single
title: "Research"
permalink: /research/
author_profile: false
lang: en
ref: research
last_updated: 2026-10-08
excerpt: "Research programs in digital regulation, education and human capital, and household institutions."
---

{{ site.data.person.research_statement }}

## Publications

{% include publication-list.html view="modern" %}

## Work in Progress

Current research includes the following ongoing areas.

{% for project in site.data.research.ongoing_research %}
### {{ project.title }}

{{ project.summary }}

{% endfor %}
