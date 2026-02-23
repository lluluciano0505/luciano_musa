---
layout: post
title: 'Geolife Daily Mobility: Reconstructing Urban Movement from GPS Trajectories'
thumbnail: /assets/img/projects/proj-3/thumbnail.png
---

How do people actually move through a city — and what patterns emerge when you look at thousands of days of real GPS data? This project uses the [Microsoft Research Geolife dataset](https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/), a collection of high-resolution GPS trajectories from 182 users over several years in Beijing, to reconstruct daily home-based mobility patterns and examine the structure of urban movement at the individual level.

The core analytical task was converting raw GPS points into meaningful behavioral units: visit events, home-stay periods, and home-based trips. This required careful data cleaning to handle irregular sampling rates, gaps in tracking, and the inherent noise in consumer-grade GPS — before any meaningful analysis could begin.

{% include image.html url="https://lluluciano0505.github.io/Python-Mobility/" image="projects/proj-3/thumbnail.png" %}

From there, the project examines two complementary questions. First, within a given trip, how does the probability of returning home evolve over time — and does that hazard function vary systematically across users, times of day, or activity types? Second, across users, do distinct mobility "types" emerge — people whose movement patterns cluster in recognizable ways — and what might those clusters tell us about how different people relate to urban space?

The analysis is structured across four notebooks, moving from data cleaning through trip reconstruction, cross-user verification, and final synthesis. Key outputs include visit-level tables with home/away classifications, fitted hazard and survival curves, and user-level clustering based on mobility signatures.

The project sits at the intersection of mobility analytics, behavioral geography, and urban data science — and reflects a broader interest in using computational methods to understand how people experience and navigate cities.

[View Full Project →](https://lluluciano0505.github.io/Python-Mobility/)

**Tools:** Python · pandas · geopandas · numpy · matplotlib · scipy · Quarto
