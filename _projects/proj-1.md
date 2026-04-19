---
layout: post
title: 'Philadelphia Housing Price Prediction Model'
thumbnail: /assets/img/projects/proj-1/thumbnail.png
tagline: 'Predicting home sale prices in Philadelphia using spatial hedonic regression by integrating demographic and spatial data.'
---

This project builds a spatial hedonic regression model trained on real transaction data, incorporating property characteristics and neighborhood context. The model accounts for spatial autocorrelation using spatial lag variables and cross-validation strategies designed for geographic data.

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html" image="projects/proj-1/thumbnail.png" %}

A key finding: prediction errors clustered spatially — pointing to neighborhood-level dynamics the model couldn't capture, and indicating where official valuations may be systematically off.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html)
[View Power Point →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/Presentation_slides.html#/title-slide)

**Tools:** R · tidyverse · sf · spdep · ggplot2