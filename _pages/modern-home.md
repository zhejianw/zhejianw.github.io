---
layout: home-taste
title: "Zhejian Wang"
seo_title: "Zhejian Wang"
permalink: /modern/
canonical_url: /
noindex: true
sitemap: false
author_profile: false
lang: en
ref: home
taste_motion: true
last_updated: 2026-10-08
excerpt: "Zhejian Wang is a Postdoctoral Fellow at the National School of Development, Peking University. His research in applied microeconomics examines digital regulation, education and human capital, and household economics."
---

{% assign person = site.data.person %}
{% assign research = site.data.research %}

<section class="taste-home-hero" aria-labelledby="home-title">
  <div class="taste-home-hero__ambient taste-home-hero__ambient--one" aria-hidden="true"></div>
  <div class="taste-home-hero__ambient taste-home-hero__ambient--two" aria-hidden="true"></div>
  <div class="taste-shell taste-home-hero__grid">
    <div class="taste-home-hero__copy">
      <p class="taste-home-hero__discipline">{{ person.umbrella_field }}</p>
      <h1 id="home-title">Zhejian<br>Wang</h1>
      {% for paragraph in person.about_paragraphs %}<p class="{% if forloop.first %}taste-home-hero__lede{% else %}taste-home-hero__status{% endif %}">{{ paragraph }}</p>{% endfor %}
      <div class="taste-actions">
        <a class="taste-button taste-button--primary" href="{{ '/research/' | relative_url }}">Explore research</a>
      </div>
      <nav class="taste-home-links" aria-label="Academic profiles and contact" data-nosnippet>
        <a href="{{ person.google_scholar }}">Google Scholar</a>
        <a href="{{ person.orcid_url }}">ORCID</a>
        <a href="mailto:{{ person.email }}">PKU email</a>
        <a href="mailto:{{ person.secondary_email }}">UDel email</a>
        <a href="{{ "/cv/" | relative_url }}">CV</a>
      </nav>
      <aside class="taste-credential" aria-label="Publications">
        <h2>Publications</h2>
        {% include publication-list.html view="modern" %}
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
