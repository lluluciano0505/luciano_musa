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
<script>
(function () {
  var data = JSON.parse(document.getElementById('experience-data').textContent);

  var map = L.map('experience-map', {
    scrollWheelZoom: false,
    zoomControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 14
  }).addTo(map);

  var eduColor   = '#2d5f5f';
  var expColor   = '#3a5f7f';

  function makeIcon(color) {
    return L.divIcon({
      className: '',
      html: '<div style="width:14px;height:14px;border-radius:50%;background:' + color + ';border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10]
    });
  }

  var bounds = [];

  data.forEach(function (item) {
    if (item.latitude == null || item.longitude == null) return;
    var latlng = [item.latitude, item.longitude];
    var color  = item.section === 'Education' ? eduColor : expColor;
    var marker = L.marker(latlng, { icon: makeIcon(color) });
    marker.bindPopup(
      '<strong>' + item.institution + '</strong>' +
      '<em>' + item.role + '</em><br>' +
      item.city + ', ' + item.region + '<br>' +
      '<span style="color:#5a6a6a;font-size:0.75rem;">' + item.period + '</span>'
    );
    marker.addTo(map);
    bounds.push(latlng);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [40, 40] });
  }
})();
</script>