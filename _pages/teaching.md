---
layout: single
title: "Teaching"
permalink: /teaching/
author_profile: false
lang: en
ref: teaching
last_updated: 2026-10-08
excerpt: "Economics instruction across introductory, upper-level, and graduate courses at the University of Delaware."
---

{% assign teaching = site.data.teaching %}

<p class="taste-lede">My teaching emphasizes clear economic reasoning, empirical applications, and the connection between formal concepts and real-world policy questions.</p>

<div class="taste-card-grid">
  <section class="taste-content-card taste-content-card--seven taste-content-card--blue" markdown="1">

## {{ teaching.discussion_role }}

**Undergraduate courses · Department of Economics · {{ teaching.institution }}**

{% for course in teaching.instructor %}- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

{{ teaching.discussion_summary }}

  </section>

  <section class="taste-content-card taste-content-card--five taste-content-card--warm" markdown="1">

## Teaching approach

{{ teaching.teaching_approach }}

  </section>

  <section class="taste-content-card taste-content-card--five" markdown="1">

## Graduate courses

**Teaching Assistant**

{% for course in teaching.teaching_assistant.graduate %}- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

  </section>

  <section class="taste-content-card taste-content-card--seven taste-content-card--red" markdown="1">

## Undergraduate courses

**Teaching Assistant**

{% for course in teaching.teaching_assistant.undergraduate %}- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

  </section>
</div>

## Supporting students

{{ teaching.supporting_students }}

{% if teaching.evaluations_available %}Teaching evaluations are available upon request.{% endif %}
