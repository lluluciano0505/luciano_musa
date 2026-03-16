---
layout: post
title: 'The Urban Asset Classifier'
thumbnail: /assets/img/projects/proj-5/proj5.png
tagline: 'LLM + RAG pipeline · Python · AI-powered urban file classification'
---

Large-scale urban projects — architecture, GIS, infrastructure — generate thousands of files over their lifetimes: CAD drawings, PDFs, shapefiles, financial spreadsheets. In practice, almost none of them are systematically organized. They pile up in labyrinthine directory trees, manually sorted (badly) or not sorted at all. When someone needs to audit a project archive, assess data sensitivity, or answer a basic question like *"what do we have from the design development phase?"*, the answer is usually: hours of manual triage.

DataTaxonomy is a four-layer classification pipeline that automates this process — combining classical rule-based extraction with Large Language Models to transform raw project folders into structured, queryable digital archives.

{% include image.html url="https://github.com/lluluciano0505/DataTaxonomy" image="projects/proj-5/proj5.png" %}

The pipeline processes files across four sequential layers. **Layer 1** handles raw metadata extraction — filenames, content samples, CAD attributes — using rules and regex. **Layer 2** passes that structured metadata to an LLM for semantic classification: inferring domain, design phase, scale, and confidentiality. **Layer 3** applies risk assessment logic, flagging sensitive assets and generating age warnings based on multi-source date verification. **Layer 4** exposes the processed archive through a full RAG (Retrieval-Augmented Generation) engine, letting teams ask natural-language questions and receive grounded answers with cited evidence from their own files.

The semantic confidentiality classification is one of the more technically interesting pieces: rather than flagging keywords like "30%", the LLM reads context to distinguish "30% slope" (public engineering data) from "30% fee markup" (confidential commercial terms). Simple keyword matching generates too many false positives to be useful at scale; context-aware judgment doesn't.

| Innovation | What it does | Impact |
|---|---|---|
| 🚀 Parallel Processing | `ThreadPoolExecutor` for concurrent file processing | 4–8× faster on large (400+) datasets |
| 🧠 Semantic Confidentiality | LLM context judgment over raw keyword matching | Eliminates false positives |
| 🎨 CAD Intelligence | Parses DWG/Revit metadata for discipline, phase, drawing code | Turns filenames into queryable data |
| 📅 Smart Year Validation | Multi-source verification (filename → content → mtime), 2000+ only | Prevents historical dating errors |
| 🔎 Ask the Archive | Full RAG engine over processed files | Natural language Q&A with citations |

Results are delivered through a no-code Streamlit dashboard with interactive Plotly visualizations — geographic heatmaps, timelines, and file explorers — designed for project teams who don't write code. Estimated throughput: 1,000 files in ~10 minutes for ~$0.50, versus over an hour in serial mode.

[View Repository →](https://github.com/lluluciano0505/DataTaxonomy)

**Tools:** Python 3.10+ · Streamlit · OpenRouter API (Gemini 2.0 Flash) · Plotly · pandas · concurrent.futures
