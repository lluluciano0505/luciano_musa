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
  <h2>Experience Map</h2>

  <div class="experience-map-frame">
    <div id="experience-map" class="experience-map" role="img" aria-label="Map showing the cities where Jingqi Lu studied and worked"></div>
  </div>
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
            <div class="experience-entry-period">{{ item.period }}</div>
            <div class="experience-entry-category">{{ item.category }}</div>
          </div>
          <div class="experience-entry-body">
            <h3>{{ item.institution }}</h3>
            <div class="experience-entry-role">{{ item.role }}</div>
            <p>{{ item.summary }}</p>
            {% if item.details %}
              <ul class="experience-details">
                {% for detail in item.details %}
                  <li>{{ detail }}</li>
                {% endfor %}
              </ul>
            {% endif %}
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
            <div class="experience-entry-period">{{ item.period }}</div>
            <div class="experience-entry-category">{{ item.category }}</div>
          </div>
          <div class="experience-entry-body">
            <h3>{{ item.institution }}</h3>
            <div class="experience-entry-role">{{ item.role }}</div>
            <p>{{ item.summary }}</p>
            {% if item.details %}
              <ul class="experience-details">
                {% for detail in item.details %}
                  <li>{{ detail }}</li>
                {% endfor %}
              </ul>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<script id="experience-data" type="application/json">{{ site.data.experience | jsonify }}</script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>