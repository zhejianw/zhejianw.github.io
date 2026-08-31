---
layout: single
title: "Prompt Library · Data Acquisition Layer"
permalink: /ai/prompts/en/acquisition/
lang: en
prompt_lang: en
prompt_layer: acquisition
translation_key: acquisition
translation_of: /ai/prompts/acquisition/
source_path: ai/prompts/acquisition/index.md
source_blob_sha: ac51f1be1db70e4e22958c010e51b5dbe0aa00d1
translation_status: synced
author_profile: false
prompt_library: true
prompt_collapse: true
analytics: false
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-08-31
---

{% include prompt-language-switch.html %}
{% include prompt-layer-tabs.html %}

This module stores reusable operational playbooks for the data-acquisition stage of research. The current entry covers Chinese government websites, from discovery, stable fetching, and deterministic parsing to provenance, quality audits, and cross-session continuity.

<div class="prompt-usage-note">
  <strong>How to use it</strong><br>
  Copy the complete playbook into the session responsible for data acquisition, then add the project-specific objective, allowed domains, output directories, and stopping rules. The body is preserved from the source file rather than rewritten for the website.
</div>

## Acquisition Prompt 1 · Chinese Government Web Harvesting Playbook {#government-web-harvesting-playbook}

<p class="prompt-description">Establish an auditable, restartable, and cross-session operating standard for harvesting data from Chinese government websites.</p>

**Recommended mode: Extra High; execution requires browser and local coding tools**

~~~text
{% include prompt-content/GOV_CN_HARVEST_PLAYBOOK.md %}
~~~

<nav class="prompt-workflow" aria-label="Research workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/en/setup/">Setup</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/en/notes/">Continue to Notes / Evidence</a>
</nav>
