---
layout: home-taste
title: "Zhejian Wang"
seo_title: "Zhejian Wang - Applied Microeconomist"
permalink: /
author_profile: false
lang: en
ref: home
taste_motion: true
last_updated: 2026-08-28
excerpt: "Applied microeconomist studying digital regulation, education policy, and household institutions."
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}
{% assign publication = research.papers[research.featured_publication] %}

<section class="taste-home-hero" aria-labelledby="home-title">
  <div class="taste-home-hero__ambient taste-home-hero__ambient--one" aria-hidden="true"></div>
  <div class="taste-home-hero__ambient taste-home-hero__ambient--two" aria-hidden="true"></div>
  <div class="taste-shell taste-home-hero__grid">
    <div class="taste-home-hero__copy">
      <p class="taste-home-hero__discipline">{{ person.umbrella_field }}</p>
      <h1 id="home-title">Zhejian<br>Wang</h1>
      <p class="taste-home-hero__lede">{{ person.research_statement }}</p>
      <p class="taste-home-hero__status">{{ person.title }} at the {{ person.institution }}. {{ person.degree_status }}</p>
      <div class="taste-actions">
        <a class="taste-button taste-button--primary" href="{{ '/research/' | relative_url }}">Explore research</a>
        <a class="taste-button" href="{{ '/cv/' | relative_url }}">View current CV</a>
      </div>
      <nav class="taste-home-links" aria-label="Academic profiles and contact">
        <a href="{{ person.google_scholar }}">Google Scholar</a>
        <a href="{{ person.orcid_url }}">ORCID</a>
        <a href="mailto:{{ person.email }}">Email</a>
      </nav>
      <aside class="taste-credential" aria-label="Peer-reviewed publication">
        <p class="taste-credential__label">Peer-reviewed publication</p>
        <p><a href="{{ publication.details_url | relative_url }}"><em>{{ publication.full_title }}</em></a></p>
        <p>{{ publication.journal }}, {{ publication.volume }}, {{ publication.article }} ({{ publication.year }}) · <a href="{{ publication.details_url | relative_url }}">Paper details</a> · <a href="{{ publication.doi }}">DOI</a></p>
      </aside>
    </div>

    <figure class="taste-home-portrait">
      <div class="taste-home-portrait__frame">
        <picture>
          <source type="image/avif" srcset="{{ '/images/portrait/zhejian-wang-480.avif' | relative_url }} 480w, {{ '/images/portrait/zhejian-wang-768.avif' | relative_url }} 768w, {{ '/images/portrait/zhejian-wang-1200.avif' | relative_url }} 1200w, {{ '/images/portrait/zhejian-wang-1600.avif' | relative_url }} 1600w" sizes="(max-width: 760px) 88vw, (max-width: 1060px) 36vw, 400px">
          <source type="image/webp" srcset="{{ '/images/portrait/zhejian-wang-480.webp' | relative_url }} 480w, {{ '/images/portrait/zhejian-wang-768.webp' | relative_url }} 768w, {{ '/images/portrait/zhejian-wang-1200.webp' | relative_url }} 1200w, {{ '/images/portrait/zhejian-wang-1600.webp' | relative_url }} 1600w" sizes="(max-width: 760px) 88vw, (max-width: 1060px) 36vw, 400px">
          <img src="{{ '/images/portrait/zhejian-wang-768.jpg' | relative_url }}" srcset="{{ '/images/portrait/zhejian-wang-480.jpg' | relative_url }} 480w, {{ '/images/portrait/zhejian-wang-768.jpg' | relative_url }} 768w, {{ '/images/portrait/zhejian-wang-1200.jpg' | relative_url }} 1200w, {{ '/images/portrait/zhejian-wang-1600.jpg' | relative_url }} 1600w" sizes="(max-width: 760px) 88vw, (max-width: 1060px) 36vw, 400px" alt="Portrait of Zhejian Wang" width="768" height="1024" decoding="async" fetchpriority="high">
        </picture>
      </div>
      <figcaption>Digital regulation · Education policy · Household institutions</figcaption>
    </figure>
  </div>
</section>

<div class="taste-marquee" aria-label="Research fields">
  <div class="taste-marquee__track">
    <div class="taste-marquee__set">
      <span>Digital regulation</span><i aria-hidden="true"></i><span>Education and human capital</span><i aria-hidden="true"></i><span>Household institutions</span><i aria-hidden="true"></i><span>Applied microeconomics</span><i aria-hidden="true"></i>
    </div>
    <div class="taste-marquee__set" aria-hidden="true">
      <span>Digital regulation</span><i></i><span>Education and human capital</span><i></i><span>Household institutions</span><i></i><span>Applied microeconomics</span><i></i>
    </div>
  </div>
</div>

<section class="taste-section taste-agenda" aria-labelledby="agenda-title">
  <div class="taste-shell taste-agenda__grid">
    <div class="taste-agenda__intro">
      <p class="taste-eyebrow">Research agenda</p>
      <h2 id="agenda-title">One question,<br>several margins.</h2>
      <p>Across schools, platforms, and households, my work asks how institutions and technologies reshape consequential choices.</p>
    </div>
    <div class="taste-bento">
      {% for program in research.programs %}
        <article class="taste-bento-card {% case forloop.index %}{% when 1 %}taste-bento-card--seven{% when 2 %}taste-bento-card--five taste-bento-card--blue{% when 3 %}taste-bento-card--five taste-bento-card--warm{% endcase %} taste-animate-card"><h3>{{ program.title }}</h3><p>{{ program.summary }}</p></article>
      {% endfor %}
      <article class="taste-bento-card taste-bento-card--seven taste-bento-card--red taste-animate-card"><h3>Causal empirical evidence</h3><p>Policy variation, administrative records, and nationally representative survey data.</p></article>
    </div>
  </div>
</section>

<section class="taste-section taste-selected-work" aria-labelledby="selected-work-title">
  <div class="taste-shell">
    <div class="taste-section-heading">
      <div><p class="taste-eyebrow">Research portfolio</p><h2 id="selected-work-title">Selected research</h2></div>
      <a class="taste-text-link" href="{{ '/research/' | relative_url }}">View all research</a>
    </div>
    <div class="taste-work-accordion" data-work-accordion>
      {% for paper_id in research.selected_home %}
        {% assign paper = research.papers[paper_id] %}
        <article class="taste-work-panel{% if forloop.first %} is-active{% endif %}" data-work-panel>
          <button class="taste-work-panel__trigger" id="home-work-trigger-{{ forloop.index }}" type="button" aria-expanded="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="home-work-panel-{{ forloop.index }}"><span class="taste-work-panel__short">{{ paper.field | default: 'Publication' }}</span></button>
          <div class="taste-work-panel__body" id="home-work-panel-{{ forloop.index }}" role="region" aria-labelledby="home-work-trigger-{{ forloop.index }}">
            <div><p class="taste-card__kind">{{ paper.status }}</p><h3>{{ paper.title }}</h3><p>{{ paper.question }}</p></div>
            <div class="taste-work-panel__meta"><p>{% if paper.journal %}<em>{{ paper.journal }}</em>, {{ paper.volume }}, {{ paper.article }} ({{ paper.year }}){% else %}{{ paper.authors }}{% endif %}</p>{% if paper.details_url %}<a href="{{ paper.details_url | relative_url }}">Read paper details</a>{% elsif paper.pdf %}<a href="{{ paper.pdf | relative_url }}">Open draft</a>{% endif %}</div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
