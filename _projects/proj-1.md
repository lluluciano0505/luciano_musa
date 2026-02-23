---
layout: post
title: 'Philadelphia Housing Price Prediction Model'
thumbnail: /assets/img/projects/proj-1/thumbnail.png
---

Can we predict home sale prices in Philadelphia with enough accuracy to be useful for policy? This project builds a spatial hedonic regression model trained on real transaction data, incorporating not just property characteristics but the neighborhood context that shapes value in ways traditional models often miss.

The model accounts for spatial autocorrelation — the fact that nearby homes tend to sell for similar prices — using spatial lag variables and cross-validation strategies designed for geographic data. I tested multiple model specifications and evaluated performance across different neighborhoods to understand where predictions hold up and where they break down.

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html" image="projects/proj-1/thumbnail.png" %}

One of the key findings was that price prediction errors were not randomly distributed — they clustered spatially, pointing to neighborhood-level dynamics that the model's features couldn't fully capture. That kind of structured residual is itself informative for policy: it tells you where official valuations may be systematically off.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html)
[View Power Point →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/Presentation_slides.html#/title-slide)

**Tools:** R · tidyverse · sf · spdep · ggplot2