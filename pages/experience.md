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
        Mercator projection. Instead of a route diagram, this view shows the geographic spread
        of the places where I studied and worked.
      </p>
    </div>
    <div class="experience-map-note">Experience Visualization</div>
  </div>

  <div class="experience-map-frame">
    <svg id="experience-map" class="experience-map" viewBox="0 0 1200 620" role="img" aria-labelledby="experience-map-title experience-map-desc">
      <title id="experience-map-title">Global experience map</title>
      <desc id="experience-map-desc">A Mercator-projected map showing Jingqi Lu's education and work experience across China, the United Kingdom, the Netherlands, the United States, and Denmark.</desc>
      <rect width="1200" height="620" class="experience-map-ocean"></rect>
      <g id="experience-map-land"></g>
      <g id="experience-map-region-labels"></g>
      <g id="experience-map-points"></g>
    </svg>
  </div>

  <p class="experience-caption">
    The projection spans East Asia, Western Europe, and the US East Coast, where the main parts
    of my academic and professional experience took place.
  </p>
</section>

{% assign education_items = site.data.experience | where: 'section', 'Education' %}
{% assign experience_items = site.data.experience | where: 'section', 'Experience' %}

<section class="experience-cv">
  <div class="experience-section">
    <div class="experience-section-label">Education</div>
    <div class="experience-list">
      {% for item in education_items %}
        <article class="experience-entry">
          <div class="experience-entry-meta">
            <div class="experience-entry-city">{{ item.city }}, {{ item.region }}</div>
            <div class="experience-entry-category">{{ item.category }}</div>
          </div>
          <div class="experience-entry-body">
            <h3>{{ item.institution }}</h3>
            <div class="experience-entry-role">{{ item.role }}</div>
            <p>{{ item.summary }}</p>
            <div class="experience-tags">
              {% for tag in item.tags %}
                <span class="experience-tag">{{ tag }}</span>
              {% endfor %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>

  <div class="experience-section">
    <div class="experience-section-label">Experience</div>
    <div class="experience-list">
      {% for item in experience_items %}
        <article class="experience-entry">
          <div class="experience-entry-meta">
            <div class="experience-entry-city">{{ item.city }}, {{ item.region }}</div>
            <div class="experience-entry-category">{{ item.category }}</div>
          </div>
          <div class="experience-entry-body">
            <h3>{{ item.institution }}</h3>
            <div class="experience-entry-role">{{ item.role }}</div>
            <p>{{ item.summary }}</p>
            <div class="experience-tags">
              {% for tag in item.tags %}
                <span class="experience-tag">{{ tag }}</span>
              {% endfor %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<script id="experience-data" type="application/json">{{ site.data.experience | jsonify }}</script>