---
layout: post
title: 'The Urban Asset Classifier'
thumbnail: /assets/img/projects/proj-5/proj5.png
tagline: 'Urban projects drown in unorganized files. This LLM pipeline classifies thousands of them into a structured, searchable archive — in minutes, for cents.'
---

Architecture and planning projects generate thousands of files — CAD drawings, PDFs, shapefiles, spreadsheets — that pile up in directories no one has time to sort. DataTaxonomy automates the entire classification process using a four-layer pipeline combining rule-based extraction with LLM reasoning.

**Layer 1** extracts raw metadata: filenames, content samples, CAD attributes. **Layer 2** passes that to an LLM (Gemini 2.0 Flash via OpenRouter) for semantic classification of domain, phase, scale, and confidentiality. **Layer 3** flags sensitive assets and validates dates. **Layer 4** exposes a RAG engine for natural-language Q&A over the full archive.

{% include image.html url="https://github.com/lluluciano0505/DataTaxonomy" image="projects/proj-5/proj5.png" %}

The semantic confidentiality classifier is where the system earns its keep: it distinguishes "30% slope" (public engineering data) from "30% fee markup" (confidential commercial terms) — the kind of context judgment that keyword matching cannot do reliably.

Estimated throughput: **1,000 files in ~10 minutes for ~$0.50**, delivered through a Streamlit dashboard with Plotly visualizations.

[View Repository →](https://github.com/lluluciano0505/DataTaxonomy)

**Tools:** Python 3.10+ · Streamlit · OpenRouter API (Gemini 2.0 Flash) · Plotly · pandas · concurrent.futures
