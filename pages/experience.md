---
layout: page
title: Experience
permalink: /experience
---

<section class="experience-hero">
  <p class="experience-intro">
    My academic and professional path has moved through China, the UK, the Netherlands,
    the US, and Denmark. This page maps the institutions and teams that shaped how I think
    about cities, data, and design.
  </p>

  <div class="experience-stats">
    <div class="experience-stat">6 institutions</div>
    <div class="experience-stat">5 countries</div>
    <div class="experience-stat">Education + research + practice</div>
  </div>
</section>

<section class="experience-map-shell">
  <div class="experience-map-header">
    <div>
      <h2>Mercator Projection</h2>
      <p>
        Each point is positioned from real latitude and longitude coordinates using a
        Mercator projection, then connected as a route across study, work, and research contexts.
      </p>
    </div>
    <div class="experience-map-note">Experience Visualization</div>
  </div>

  <div class="experience-map-frame">
    <svg id="experience-map" class="experience-map" viewBox="0 0 1200 620" role="img" aria-labelledby="experience-map-title experience-map-desc">
      <title id="experience-map-title">Global experience map</title>
      <desc id="experience-map-desc">A Mercator-projected map showing Jingqi Lu's education and work experience across China, the United Kingdom, the Netherlands, the United States, and Denmark.</desc>
      <rect width="1200" height="620" fill="transparent"></rect>
      <g class="experience-map-grid" id="experience-map-grid"></g>
      <path class="experience-map-route" id="experience-map-route"></path>
      <g id="experience-map-points"></g>
    </svg>
  </div>

  <p class="experience-caption">
    The route starts in China, extends through London and Amsterdam, crosses to Philadelphia,
    and reconnects with Copenhagen through current practice-oriented collaboration.
  </p>
</section>

<section class="experience-grid">
  {% for item in site.data.experience %}
    <article class="experience-card">
      <div class="experience-card-meta">{{ item.category }}</div>
      <h3>{{ item.role }}</h3>
      <div class="experience-card-location">{{ item.institution }} · {{ item.city }}, {{ item.region }}</div>
      <p>{{ item.summary }}</p>
      <div class="experience-tags">
        {% for tag in item.tags %}
          <span class="experience-tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </article>
  {% endfor %}
</section>

<script id="experience-data" type="application/json">{{ site.data.experience | jsonify }}</script>