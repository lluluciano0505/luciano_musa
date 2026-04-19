---
layout: post
title: 'The Urban Asset Classifier'
thumbnail: /assets/img/projects/proj-5/proj5.png
tagline: 'An LLM-powered pipeline that classifies thousands of unstructured urban project files into structured, queryable archives — automatically.'
---

Urban projects generate thousands of files — CAD drawings, PDFs, shapefiles, spreadsheets — that end up in disorganized directories. DataTaxonomy is a four-layer pipeline that automates classification using rule-based extraction and LLMs.

**Layer 1** extracts raw metadata (filenames, content samples, CAD attributes). **Layer 2** passes it to an LLM for semantic classification of domain, phase, scale, and confidentiality. **Layer 3** flags sensitive assets and validates dates. **Layer 4** exposes a RAG engine for natural-language Q&A over the archive.

{% include image.html url="https://github.com/lluluciano0505/DataTaxonomy" image="projects/proj-5/proj5.png" %}

The semantic confidentiality classifier distinguishes "30% slope" (public) from "30% fee markup" (confidential) — context judgment that keyword matching can't do reliably. Estimated throughput: 1,000 files in ~10 minutes for ~$0.50, delivered through a Streamlit dashboard with Plotly visualizations.

[View Repository →](https://github.com/lluluciano0505/DataTaxonomy)

**Tools:** Python 3.10+ · Streamlit · OpenRouter API (Gemini 2.0 Flash) · Plotly · pandas · concurrent.futures
