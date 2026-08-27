---
layout: single
title: "Prompt 库 · Submission / Replication Layer"
permalink: /ai/prompts/submission/
author_profile: false
lang: zh-CN
sitemap: false
noindex: true
visibility: public
status: current
last_updated: 2026-08-27
---

<style>
.page__content .highlighter-rouge,
.page__content .highlight,
.page__content pre {
  max-width: 100%;
}

.page__content pre,
.page__content pre code {
  white-space: pre-wrap !important;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.page__content .highlight,
.page__content pre {
  overflow-x: visible !important;
}
</style>

**Layers：[Project Setup](/ai/prompts/setup/) · [Notes / Evidence](/ai/prompts/notes/) · [Brief](/ai/prompts/brief/) · [Manuscript](/ai/prompts/) · Submission / Replication**

## Submission Prompt 1：Clean-Room Replication Package

**推荐模式：Pro**

~~~text
基于已经定稿的 manuscript、appendix、最终数据和现有 research code，构建一套与当前论文严格匹配的 **clean-room replication package**。目标不是整理研究过程，而是让一个不了解本项目的第三方在干净环境中按照 README，从允许提供的原始输入或最早可共享输入出发，通过一个明确的 master / run-all 入口，成功重建分析数据、主要 tables / figures 和核心结果。代码使用相对路径，固定必要的软件、依赖和随机种子，不依赖缓存、个人电脑环境、隐藏文件或未说明的手工操作；restricted data 明确说明获取方式和无法公开的边界。只保留复现论文所需的最小代码和文件，删除 exploration、dead ends、debug、个人路径、凭据、TODO、AI/对话痕迹和无关注释，但不要为了极简牺牲可读性或改写已经验证的核心实现。让 manuscript 中的重要 table / figure / sample / estimate 能方便对应到生成代码，尽量避免手填数字。提供简洁 README，说明环境、数据、目录、运行方式、预期输出和限制。完成后把 package 放到独立干净目录，从零完整运行一次，并核对关键 outputs、sample sizes 和核心 estimates；只有 clean run 成功且与当前定稿一致，才视为完成。
~~~
