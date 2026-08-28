---
layout: classic-single
title: "Research"
permalink: /classic/research/
author_profile: true
lang: en
ref: research
canonical_url: /research/
last_updated: 2026-08-28
excerpt: "Research programs in digital regulation, education and human capital, and household institutions."
---

{% assign research = site.data.research %}
{% assign publication = research.papers[research.featured_publication] %}

My research is organized around three connected programs: digital regulation and platforms, education and human capital, and household institutions. Across them, I use policy variation and large-scale microdata to study consequential behavioral responses.

## Peer-reviewed publication

<ul class="classic-paper-list">
  <li>
    <strong><a href="{{ '/classic/research/restricting-video-games-china/' | relative_url }}">{{ publication.full_title }}</a></strong><br>
    <span class="classic-paper-meta">{{ publication.journal }}, {{ publication.volume }}, {{ publication.article }} ({{ publication.year }})</span><br>
    {{ publication.question }} <a href="{{ publication.doi }}">DOI</a>
  </li>
</ul>

{% for program in research.programs %}
## {{ program.title }}

{{ program.summary }}

<ul class="classic-paper-list">
{% for paper_id in program.paper_ids %}
  {% unless paper_id == research.featured_publication %}
    {% assign paper = research.papers[paper_id] %}
    <li>
      <strong>{{ paper.title }}</strong><br>
      <span class="classic-paper-meta">{{ paper.authors }} · {{ paper.status }}</span><br>
      {{ paper.question }}{% if paper.pdf %} <a href="{{ paper.pdf | relative_url }}">PDF</a>{% endif %}
    </li>
  {% endunless %}
{% endfor %}
</ul>
{% endfor %}
