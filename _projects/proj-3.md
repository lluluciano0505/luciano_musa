---
layout: post
title: 'Geolife Daily Mobility: Reconstructing Urban Movement from GPS Trajectories'
thumbnail: /assets/img/projects/proj-3/thumbnail.png
tagline: 'Reconstructing daily mobility patterns from thousands of real GPS trajectories in Beijing — turning raw location data into behavioral insight.'
---

Using the [Microsoft Research Geolife dataset](https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/) — 182 users, several years of GPS trajectories in Beijing — this project converts raw location data into visit events, home-stay periods, and home-based trips.

{% include image.html url="https://lluluciano0505.github.io/Python-Mobility/" image="projects/proj-3/thumbnail.png" %}

Two questions drive the analysis: how does the probability of returning home evolve within a trip, and do distinct mobility "types" emerge across users? Outputs include fitted hazard and survival curves and user-level clustering based on mobility signatures.

[View Full Project →](https://lluluciano0505.github.io/Python-Mobility/)

**Tools:** Python · pandas · geopandas · numpy · matplotlib · scipy · Quarto
