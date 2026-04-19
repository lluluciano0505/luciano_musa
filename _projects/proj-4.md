---
layout: post
title: 'LSTM Spatial Flow Prediction: Modeling Urban Mobility with Deep Learning'
thumbnail: /assets/img/projects/proj-4/thumbnail.png
tagline: 'Using LSTM networks to predict urban flow patterns across space and time — modeling the rhythm of a city at 500m resolution.'
---

This project builds an LSTM model to predict next-step mobility flows across a metropolitan grid using the [YJMob100K dataset](https://www.nature.com/articles/s41597-022-01754-0) — anonymized mobile phone trajectories at 500m × 500m resolution and 30-minute intervals.

Given 4 hours of movement history per grid cell, the model predicts the next inflow or outflow. Each cell's feature vector combines the current flow value, ~85 POI-category dimensions, and sinusoidal time encodings, queried via DuckDB with an 80/20 temporal split.

{% include image.html url="https://lluluciano0505.github.io/AI_Mobility/model222_ipyn.html" image="projects/proj-4/thumbnail.png" %}

Two models are compared: a **linear baseline** (ignores temporal order) and a **2-layer LSTM** (hidden size 64). The baseline fails catastrophically; the LSTM generalizes well (train MSE ≈ 3.79, test MSE ≈ 4.15), accurately reproducing citywide flow structure across space and time.

[View Full Notebook →](https://lluluciano0505.github.io/AI_Mobility/model222_ipyn.html)

**Tools:** Python · PyTorch · DuckDB · pandas · numpy · matplotlib · Google Colab
