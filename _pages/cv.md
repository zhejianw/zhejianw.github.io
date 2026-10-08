---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
lang: en
ref: cv
last_updated: 2026-10-08
excerpt: "Curriculum vitae of Zhejian Wang, Postdoctoral Fellow at Peking University."
redirect_from:
  - /resume
  - /resume/
---

{% assign person = site.data.person %}

{{ person.about_paragraphs | first }}

<div class="taste-actions">
  <a class="taste-button taste-button--primary" href="{{ person.cv_pdf | relative_url }}">Download PDF CV</a>
</div>

The CV includes academic appointments, education, publications, selected research in progress, teaching, and professional experience. Updated {{ person.cv_pdf_as_of }}.

[PKU email](mailto:{{ person.email }}) · [UDel email](mailto:{{ person.secondary_email }})
