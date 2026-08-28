---
layout: single
title: "Teaching"
permalink: /teaching/
author_profile: false
lang: en
ref: teaching
last_updated: 2026-08-28
excerpt: "Economics instruction across introductory, upper-level, and graduate courses at the University of Delaware."
---

{% assign teaching = site.data.teaching %}

<p class="taste-lede">My teaching emphasizes clear economic reasoning, empirical applications, and the connection between formal concepts and real-world policy questions.</p>

<div class="taste-card-grid">
  <section class="taste-content-card taste-content-card--seven taste-content-card--blue" markdown="1">

## Instructor

**Undergraduate courses · Department of Economics · {{ teaching.institution }}**

{% for course in teaching.instructor %}- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

As an instructor for discussion sections, I independently led weekly sessions for large introductory economics courses. Students registered for my sections separately from the main lecture, and I prepared materials, delivered instruction, graded assignments, and held office hours.

  </section>

  <section class="taste-content-card taste-content-card--five taste-content-card--warm" markdown="1">

## Teaching approach

These courses emphasized applying core economic principles to real-world problems. I integrated short empirical exercises and policy examples to reinforce theory and build students' analytical and quantitative skills.

  </section>

  <section class="taste-content-card taste-content-card--five" markdown="1">

## Graduate courses

**Teaching Assistant**

{% for course in teaching.teaching_assistant.graduate %}- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

  </section>

  <section class="taste-content-card taste-content-card--seven taste-content-card--red" markdown="1">

## Undergraduate courses

**Teaching Assistant**

{% for course in teaching.teaching_assistant.undergraduate %}- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

  </section>
</div>

## Supporting students

As a Teaching Assistant, I led review sessions, graded assignments and exams, and provided one-on-one support. These roles strengthened my ability to explain complex material clearly and adapt instruction to different levels of quantitative preparation.

Teaching evaluations are available upon request.
