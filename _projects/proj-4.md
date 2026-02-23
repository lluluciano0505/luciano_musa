---
layout: post
title: 'LSTM Spatial Flow Prediction: Modeling Urban Mobility with Deep Learning'
thumbnail: /assets/img/projects/proj-4/thumbnail.png
---

Can a deep learning model learn how a city breathes — the ebb and flow of people moving through urban space across the course of a day? This project builds and evaluates an LSTM-based sequence model for predicting next-step mobility flows across a metropolitan grid, using the [YJMob100K dataset](https://www.nature.com/articles/s41597-022-01754-0), an anonymized mobile phone trajectory dataset covering a large Japanese city at 500m × 500m spatial resolution and 30-minute temporal intervals.

The core modeling challenge is spatiotemporal: given the movement history of a grid cell over the past 4 hours (eight 30-minute slots), predict the flow into or out of that cell in the next time step. This is not a simple regression problem — flow patterns vary by time of day, day of week, land use context, and local urban structure, all of which need to be incorporated into the model.

{% include image.html url="https://lluluciano0505.github.io/AI_Mobility/model222_ipyn.html" image="projects/proj-4/thumbnail.png" %}

Each grid cell is characterized by a feature vector combining the current flow value, a rich set of POI-category counts (~85 dimensions capturing the local urban context), and sinusoidal time encodings for time-of-day and day-of-week. The data is stored and queried efficiently via DuckDB, with an 80/20 temporal split ensuring the model is evaluated on genuinely future observations — not randomly shuffled samples.

Two models are compared. A **linear baseline** flattens each input sequence into a single feature vector and applies a single fully connected layer — ignoring temporal order entirely. An **LSTM** (hidden size 64, 2 layers) processes the same sequences recurrently, maintaining a hidden state that accumulates temporal context before making a prediction via a final linear head.

The results are unambiguous: the linear baseline fails catastrophically (test MSE orders of magnitude worse), while the LSTM achieves stable generalization (train MSE ≈ 3.79, test MSE ≈ 4.15). Spatial visualizations across six representative time steps confirm that the LSTM reproduces the broad structure of citywide flow — accurately capturing both low-flow residential zones and high-intensity commercial corridors. Prediction errors concentrate in the densest, most volatile areas, pointing toward future extensions using attention mechanisms or spatial graph models.

[View Full Notebook →](https://lluluciano0505.github.io/AI_Mobility/model222_ipyn.html)

**Tools:** Python · PyTorch · DuckDB · pandas · numpy · matplotlib · Google Colab
