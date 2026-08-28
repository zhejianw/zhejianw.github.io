---
layout: classic-single
title: "Welcome"
permalink: /classic/
author_profile: true
lang: en
ref: home
canonical_url: /
last_updated: 2026-08-28
excerpt: "Classic academic view of Zhejian Wang's research profile."
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}
{% assign publication = research.papers[research.featured_publication] %}

<div class="classic-callout">
  This is the classic academic view. It uses the same current research, CV, and contact data as the <a href="{{ '/' | relative_url }}">new editorial view</a>.
</div>

I am a **{{ person.title }}** at the **{{ person.institution }}**. {{ person.degree_status }} I am an **applied microeconomist** working in the economics of education, digital economics, and family and household economics. {{ person.research_statement }}

<div class="classic-actions">
  <a class="classic-button" href="{{ '/classic/cv/' | relative_url }}">CV</a>
  <a class="classic-button" href="{{ '/classic/research/' | relative_url }}">Research</a>
  <a class="classic-button" href="mailto:{{ person.email }}">Email</a>
</div>

## Research fields

**Umbrella field:** {{ person.umbrella_field }}.

**Primary fields:** {{ person.primary_fields | join: '; ' }}.

**Cross-cutting areas:** {{ person.cross_cutting_areas | join: '; ' }}.

## Peer-reviewed publication

[**{{ publication.full_title }}**]({{ '/classic/research/restricting-video-games-china/' | relative_url }}) — *{{ publication.journal }}*, **{{ publication.volume }}**, {{ publication.article }} ({{ publication.year }}). [DOI]({{ publication.doi }}).

## Selected research

<ul class="classic-paper-list">
{% for paper_id in research.selected_home %}
  {% assign paper = research.papers[paper_id] %}
  <li><strong>{{ paper.title }}</strong><br><span class="classic-paper-meta">{{ paper.authors }} · {{ paper.status }}</span><br>{{ paper.question }}</li>
{% endfor %}
</ul>

## Academic references

{{ person.academic_references | join: '; ' }}. Full contact details are available on the [CV page]({{ '/classic/cv/' | relative_url }}).

Please feel free to contact me at [{{ person.email }}](mailto:{{ person.email }}).
