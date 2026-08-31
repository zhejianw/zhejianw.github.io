---
title: "Prompt 库 · Data Acquisition Layer"
permalink: /ai/prompts/acquisition/
prompt_layer: acquisition
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-08-31
---

{% include prompt-layer-tabs.html %}

本模块保存研究数据获取阶段可复用的 operational playbooks。当前条目针对中文政府网站：从发现线索、稳定抓取和确定性解析，到 provenance、质量审计与跨 session 续作。

<div class="prompt-usage-note">
  <strong>使用方式</strong><br>
  将完整 playbook 复制给负责数据采集的 session，再补充本项目的具体目标、允许域名、输出目录和停止条件。正文按原始文件保存，不在网页中自行改写。
</div>

## Acquisition Prompt 1 · Chinese Government Web Harvesting Playbook {#government-web-harvesting-playbook}

<p class="prompt-description">为中文政府网站数据采集建立可审计、可恢复、可跨 session 延续的完整工作规范。</p>

**推荐模式：Extra High；执行阶段需要浏览器与本地代码工具**

~~~text
{% include prompt-content/GOV_CN_HARVEST_PLAYBOOK.md %}
~~~

<nav class="prompt-workflow" aria-label="Research workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/setup/">Setup</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/notes/">Continue to Notes / Evidence</a>
</nav>
