---
layout: classic-single
title: "Curriculum Vitae"
permalink: /classic/cv/
author_profile: true
lang: en
ref: cv
canonical_url: /cv/
last_updated: 2026-08-28
excerpt: "Current academic profile, research, teaching, and professional experience."
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}
{% assign teaching = site.data.teaching %}
{% assign publication = research.papers[research.featured_publication] %}

{{ person.short_bio }} {{ person.degree_status }}

<div class="classic-actions">
  <a class="classic-button" href="mailto:{{ person.email }}">Email</a>
  <a class="classic-button" href="{{ person.cv_pdf | relative_url }}">PDF CV · {{ person.cv_pdf_as_of }}</a>
</div>

*This HTML CV is the current public version. The downloadable PDF is a dated copy and may contain superseded project statuses.*

## Education

{% for item in person.education %}
**{{ item.degree }}**  
{{ item.institution }} · {{ item.years | default: item.year }}{% if item.note %}  
{{ item.note }}{% endif %}

{% endfor %}

## Research fields

{{ person.primary_fields | join: '; ' }}. Cross-cutting areas: {{ person.cross_cutting_areas | join: '; ' }}.

## Peer-reviewed publication

**{{ publication.full_title }}**  
{{ publication.journal }}, {{ publication.volume }}, {{ publication.article }} ({{ publication.year }}). [DOI]({{ publication.doi }}).

## Working papers and work in progress

<ul class="classic-paper-list">
{% for program in research.programs %}
  {% for paper_id in program.paper_ids %}
    {% unless paper_id == research.featured_publication %}
      {% assign paper = research.papers[paper_id] %}
      <li><strong>{{ paper.title }}</strong><br><span class="classic-paper-meta">{{ paper.authors }} · {{ paper.status }}</span></li>
    {% endunless %}
  {% endfor %}
{% endfor %}
</ul>

## Teaching

**Instructor:** {% for course in teaching.instructor %}{{ course.course }} ({{ course.code }}), {{ course.term }}{% unless forloop.last %}; {% endunless %}{% endfor %}.

**Teaching Assistant:** {% assign all_ta = teaching.teaching_assistant.graduate | concat: teaching.teaching_assistant.undergraduate %}{% for course in all_ta %}{{ course.course }} ({{ course.code }}), {{ course.term }}{% unless forloop.last %}; {% endunless %}{% endfor %}.

## Fellowships and funding

{% for item in person.fellowships_and_funding %}
- **{{ item.title }}**, {{ item.institution }}, {{ item.years | default: item.year }}
{% endfor %}

## Professional experience

{% for item in person.industry_experience %}
**{{ item.organization }} · {{ item.unit }}**  
{{ item.roles }} · {{ item.years }} · {{ item.location }}  
{{ item.description }}
{% endfor %}

## Skills and languages

**Software:** {{ person.skills.software | join: ', ' }}.  
**Languages:** {{ person.skills.languages | join: '; ' }}.

## Academic references

{{ person.academic_references | join: '; ' }}.
