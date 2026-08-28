---
layout: classic-single
title: "Teaching"
permalink: /classic/teaching/
author_profile: true
lang: en
ref: teaching
canonical_url: /teaching/
last_updated: 2026-08-28
excerpt: "Economics instruction at the University of Delaware."
---

{% assign teaching = site.data.teaching %}

My teaching emphasizes clear economic reasoning, empirical applications, and the connection between formal concepts and real-world policy questions.

## Instructor

**Undergraduate courses · Department of Economics · {{ teaching.institution }}**

{% for course in teaching.instructor %}
- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

As an instructor for discussion sections, I independently led weekly sessions for large introductory economics courses. Students registered for my sections separately from the main lecture, and I prepared materials, delivered instruction, graded assignments, and held office hours.

## Teaching assistant

### Graduate courses

{% for course in teaching.teaching_assistant.graduate %}
- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

### Undergraduate courses

{% for course in teaching.teaching_assistant.undergraduate %}
- *{{ course.course }} ({{ course.code }})* — {{ course.term }}
{% endfor %}

## Teaching approach

I connect core economic principles to real-world policy questions and use short empirical exercises to reinforce theory, interpretation, and quantitative reasoning.
