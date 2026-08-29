---
title: "Prompt 库 · Submission / Replication Layer"
permalink: /ai/prompts/submission/
prompt_layer: submission
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-08-27
---

{% include prompt-layer-tabs.html %}

本页负责实际投稿文件、定稿复现包与重要节点冻结；三项按真实发生顺序排列。

<nav class="prompt-section-toc" aria-label="Submission prompt sections">
  <strong>Jump to</strong>
  <a href="#actual-submission-package">Submission Package</a><span class="toc-separator">·</span>
  <a href="#clean-room-replication">Replication</a><span class="toc-separator">·</span>
  <a href="#frozen-project-snapshot">Snapshot</a>
</nav>

## Actual Submission Package {#actual-submission-package}

<p class="prompt-description">组装并交叉核验今天实际上传的投稿文件与系统元数据。</p>

**推荐模式：Pro；如 journal requirements 尚未核实，先联网核实**

~~~text
根据 journal requirements 和 final manuscript，准备并审核实际 submission package：anonymous manuscript、title page、cover letter、highlights（如需）、declarations、data/code statement、supplementary files，以及 submission-system metadata；确认相互一致并符合期刊要求。

缺失信息不要猜测，明确列为 blocker。除非我另行明确授权，不要实际提交。
~~~

## Clean-Room Replication Package {#clean-room-replication}

<p class="prompt-description">构建与定稿论文严格匹配的可复现交付包。</p>

**推荐模式：Pro**

~~~text
基于已经定稿的 manuscript、appendix、最终数据和现有 research code，构建一套与当前论文严格匹配的 **clean-room replication package**。目标不是整理研究过程，而是让一个不了解本项目的第三方在干净环境中按照 README，从允许提供的原始输入或最早可共享输入出发，通过一个明确的 master / run-all 入口，成功重建分析数据、主要 tables / figures 和核心结果。代码使用相对路径，固定必要的软件、依赖和随机种子，不依赖缓存、个人电脑环境、隐藏文件或未说明的手工操作；restricted data 明确说明获取方式和无法公开的边界。只保留复现论文所需的最小代码和文件，删除 exploration、dead ends、debug、个人路径、凭据、TODO、AI/对话痕迹和无关注释，但不要为了极简牺牲可读性或改写已经验证的核心实现。让 manuscript 中的重要 table / figure / sample / estimate 能方便对应到生成代码，尽量避免手填数字。提供简洁 README，说明环境、数据、目录、运行方式、预期输出和限制。完成后把 package 放到独立干净目录，从零完整运行一次，并核对关键 outputs、sample sizes 和核心 estimates；只有 clean run 成功且与当前定稿一致，才视为完成。
~~~

## Frozen Project Snapshot {#frozen-project-snapshot}

<p class="prompt-description">冻结足以完整重启项目的重要节点快照。</p>

**推荐模式：Pro**

~~~text
在当前重要节点结束后，为整个项目建立一个**独立、冻结、最小但足以完整重启工作的 project snapshot**，放入 `99_archive/`，并以日期、阶段和期刊清楚命名。冻结的是这份 snapshot，不限制 active project 后续继续修改。

先梳理整个项目，只保留未来恢复研究真正需要的 authoritative materials，不机械复制 scratch、cache、临时输出和重复文件。Snapshot 至少应保存：本次实际提交的 manuscript / appendix / submission package；当时的 current brief、journal requirements、HANDOFF 和关键 project rules；足以理解 established、uncertain、contradicted 和 dead-end evidence 的 notes / evidence releases；与核心结果对应的 data、code、logs、outputs 和 replication package；bibliography / literature 中无法轻易重新获得或对项目判断关键的材料；软件环境、依赖、随机种子和外部数据来源信息。数据过大、受限或不能合法打包时，不要复制，改为保存精确 provenance、文件标识 / checksum、获取方式和重建说明。

为 snapshot 建立一个简洁的 `ARCHIVE_README.md` 作为唯一重启入口，说明：

- freeze date、项目阶段、投稿期刊和当时状态；
- 当时实际提交的是哪些文件；
- authoritative manuscript、brief、evidence、data、code 和 replication 入口；
- central research question、当前最可信结论和重要边界；
- 已关闭或失败的重要路线及关闭原因；
- 尚未解决的问题、潜在后续 branches 和最合理的下一步；
- raw data → final data → results → manuscript 的重建路径；
- 数月后重新启动项目时应该先读什么、先运行什么、再做什么。

生成 manifest，记录 snapshot 中关键文件及校验信息，并检查内部路径和引用有效。尽可能在独立环境中验证核心代码 / replication entry point 仍可运行。Snapshot 中不得保留个人凭据、API keys、无关机器路径、AI 对话痕迹或不必要的临时材料。

最后从“几个月后一个没有当前聊天上下文的新 session 接手项目”的视角审计一次：如果仅获得这个 snapshot，是否能够准确知道**项目是什么、做到哪里、为什么做成这样、哪些路不要重复走、结果如何复现、下一步从哪里开始**。只有这些问题都能回答，才视为冻结完成。冻结后不要再修改该 snapshot；未来重大节点另建新的 snapshot。
~~~
