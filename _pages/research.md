---
layout: single
title: "Research"
permalink: /research/
author_profile: false
lang: en
ref: research
last_updated: 2026-08-28
excerpt: "Research programs in digital regulation, education and human capital, and household institutions."
---

{% assign research = site.data.research %}
{% assign publication = research.papers[research.featured_publication] %}

<p class="taste-lede">My research is organized around three connected programs: digital regulation and platforms, education and human capital, and household institutions. Across them, I use policy variation and large-scale microdata to study consequential behavioral responses.</p>

<p class="taste-eyebrow">Peer-reviewed publication</p>

<article class="taste-paper-feature">
  <div>
    <h2><a href="{{ publication.details_url | relative_url }}">{{ publication.full_title }}</a></h2>
    <p>{{ publication.question }}</p>
  </div>
  <div class="taste-paper-feature__meta">
    <p><em>{{ publication.journal }}</em><br>Volume {{ publication.volume }} · Article {{ publication.article }} · {{ publication.year }}</p>
    <p><a href="{{ publication.doi }}">DOI</a> · <a href="{{ publication.details_url | relative_url }}">Paper details</a></p>
  </div>
</article>

{% for program in research.programs %}
<section class="taste-research-program" id="program-{{ program.id }}" aria-labelledby="program-{{ program.id }}-title">
  <header class="taste-research-program__header">
    <h2 id="program-{{ program.id }}-title">{{ program.title }}</h2>
    <p>{{ program.summary }}</p>
  </header>

  <div class="taste-paper-list">
    {% for paper_id in program.paper_ids %}
      {% unless paper_id == research.featured_publication %}
        {% assign paper = research.papers[paper_id] %}
        <article class="taste-paper-card">
          <p class="taste-card__kind">{{ paper.status }}</p>
          <h3>{% if paper.details_url %}<a href="{{ paper.details_url | relative_url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
          <p>{{ paper.authors }}</p>
          <p>{{ paper.question }}</p>
          {% if paper.evidence %}<p class="taste-paper-card__evidence"><strong>Evidence:</strong> {{ paper.evidence }}</p>{% endif %}
          {% if paper.pdf %}<p><a href="{{ paper.pdf | relative_url }}">Open draft</a></p>{% elsif paper.details_url %}<p><a href="{{ paper.details_url | relative_url }}">Paper details</a> · <a href="{{ paper.doi }}">DOI</a></p>{% endif %}
        </article>
      {% endunless %}
    {% endfor %}
  </div>
</section>
{% endfor %}
