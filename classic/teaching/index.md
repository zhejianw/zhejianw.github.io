---
layout: classic-single
title: "Teaching"
permalink: /classic/teaching/
author_profile: true
lang: en
ref: teaching
canonical_url: /teaching/
last_updated: 2026-10-08
excerpt: "Economics instruction at the University of Delaware."
---

{% assign teaching = site.data.teaching %}

My teaching emphasizes clear economic reasoning, empirical applications, and the connection between formal concepts and real-world policy questions.

## {{ teaching.discussion_role }}

**Undergraduate courses · Department of Economics · {{ teaching.institution }}**

{% for course in teaching.instructor %}
- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

{{ teaching.discussion_summary }}

## Teaching assistant

### Graduate courses

{% for course in teaching.teaching_assistant.graduate %}
- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

### Undergraduate courses

{% for course in teaching.teaching_assistant.undergraduate %}
- *{{ course.course }}{% if course.code %} ({{ course.code }}){% endif %}* — {{ course.term }}
{% endfor %}

## Teaching approach

{{ teaching.teaching_approach }}

## Supporting students

{{ teaching.supporting_students }}

{% if teaching.evaluations_available %}Teaching evaluations are available upon request.{% endif %}
