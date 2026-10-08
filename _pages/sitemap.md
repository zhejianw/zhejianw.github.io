---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: false
excerpt: "A concise directory of the site's public, human-facing pages."
---

<div class="taste-card-grid">
  <section class="taste-content-card taste-content-card--seven taste-content-card--blue" markdown="1">

## Academic profile

- [Home]({{ '/' | relative_url }})
- [Research]({{ '/research/' | relative_url }})
- [Teaching]({{ '/teaching/' | relative_url }})
- [CV]({{ '/cv/' | relative_url }})

  </section>

  <section class="taste-content-card taste-content-card--five taste-content-card--warm" markdown="1">

## Published research

{% for paper_id in site.data.research.publication_ids %}
{% assign paper = site.data.research.papers[paper_id] %}
- [{{ paper.full_title }}]({{ paper.details_url | relative_url }})
{% endfor %}

  </section>

  <section class="taste-content-card taste-content-card--full" markdown="1">

## Site policies

- [Content, Crawling, and AI Use]({{ '/content-use/' | relative_url }})
- [Security reporting](https://github.com/zhejianw/zhejianw.github.io/security/policy)

  </section>
</div>
