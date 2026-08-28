---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
lang: en
ref: cv
last_updated: 2026-08-28
excerpt: "Current academic profile, research, teaching, and professional experience."
redirect_from:
  - /resume
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}
{% assign teaching = site.data.teaching %}
{% assign publication = research.papers[research.featured_publication] %}

<p class="taste-lede">{{ person.short_bio }} {{ person.degree_status }}</p>

<div class="taste-actions">
  <a class="taste-button taste-button--primary" href="mailto:{{ person.email }}">Email</a>
  <a class="taste-button" href="{{ person.cv_pdf | relative_url }}">PDF CV · {{ person.cv_pdf_as_of }}</a>
</div>

<p class="taste-document-note">This HTML CV is the current public version. The downloadable PDF is a dated copy and may contain superseded project statuses.</p>

<div class="taste-card-grid">
  <section class="taste-content-card taste-content-card--seven taste-content-card--blue" markdown="1">

## Education

{% for item in person.education %}
**{{ item.degree }}**<br>
{{ item.institution }} · {{ item.years | default: item.year }}{% if item.note %}<br>{{ item.note }}{% endif %}

{% endfor %}
  </section>

  <section class="taste-content-card taste-content-card--five taste-content-card--warm" markdown="1">

## Research fields

{% for field in person.primary_fields %}- {{ field }}
{% endfor %}

**Umbrella field:** {{ person.umbrella_field }}

  </section>

  <section class="taste-content-card taste-content-card--five" markdown="1">

## Cross-cutting areas

{% for field in person.cross_cutting_areas %}- {{ field }}
{% endfor %}

  </section>

  <section class="taste-content-card taste-content-card--seven taste-content-card--red" markdown="1">

## Research profile

{{ person.research_statement }}

  </section>
</div>

## Peer-reviewed publication

<article class="taste-paper-feature">
  <div>
    <h3><a href="{{ publication.details_url | relative_url }}">{{ publication.full_title }}</a></h3>
    <p>{{ publication.authors }}</p>
  </div>
  <div class="taste-paper-feature__meta">
    <p><em>{{ publication.journal }}</em><br>{{ publication.volume }}, {{ publication.article }} ({{ publication.year }})</p>
    <p><a href="{{ publication.details_url | relative_url }}">Details</a> · <a href="{{ publication.doi }}">DOI</a></p>
  </div>
</article>

## Working papers and selected work in progress

{% for program in research.programs %}
### {{ program.title }}

<div class="taste-paper-list">
  {% for paper_id in program.paper_ids %}
    {% unless paper_id == research.featured_publication %}
      {% assign paper = research.papers[paper_id] %}
      <article class="taste-paper-card">
        <p class="taste-card__kind">{{ paper.status }}</p>
        <h3>{{ paper.title }}</h3>
        <p>{{ paper.authors }}</p>
        {% if paper.pdf %}<p><a href="{{ paper.pdf | relative_url }}">Open draft</a></p>{% endif %}
      </article>
    {% endunless %}
  {% endfor %}
</div>
{% endfor %}

## Teaching

<div class="taste-paper-list">
  <article class="taste-paper-card">
    <p class="taste-card__kind">Instructor · {{ teaching.institution }}</p>
    <h3>Undergraduate instruction</h3>
    <ul>
      {% for course in teaching.instructor %}<li>{{ course.course }} ({{ course.code }}) · {{ course.term }}</li>{% endfor %}
    </ul>
  </article>
  <article class="taste-paper-card">
    <p class="taste-card__kind">Teaching assistant · {{ teaching.institution }}</p>
    <h3>Graduate and undergraduate courses</h3>
    <p>Seven courses, 2021-2025. See the <a href="{{ '/teaching/' | relative_url }}">Teaching page</a> for details.</p>
  </article>
</div>

## Fellowships and research funding

<ul class="taste-cv-list">
  {% for item in person.fellowships_and_funding %}<li><strong>{{ item.title }}</strong> · {{ item.institution }} <span>{{ item.years | default: item.year }}</span></li>{% endfor %}
</ul>

## Industry experience

{% for item in person.industry_experience %}
<article class="taste-cv-entry">
  <h3>{{ item.organization }} · {{ item.unit }}</h3>
  <p>{{ item.roles }} · {{ item.years }} · {{ item.location }}</p>
  <p>{{ item.description }}</p>
</article>
{% endfor %}

## Skills and languages

<div class="taste-card-grid">
  <section class="taste-content-card taste-content-card--seven taste-content-card--blue" markdown="1">

### Software

{{ person.skills.software | join: ", " }}.

  </section>
  <section class="taste-content-card taste-content-card--five taste-content-card--warm" markdown="1">

### Languages

{{ person.skills.languages | join: "; " }}.

  </section>
</div>

## Selected presentations

<ul class="taste-cv-list">
  {% for item in person.presentations %}<li><strong>{{ item.event }}</strong> <span>{{ item.date }}</span></li>{% endfor %}
</ul>

## Academic references

<p>{{ person.academic_references | join: ", " }}. Contact details are available upon request.</p>
