---
layout: single
title: "Prompt 库 · Project Setup Layer"
permalink: /ai/prompts/setup/
author_profile: false
lang: zh-CN
sitemap: false
noindex: true
prompt_library: true
prompt_layer: setup
visibility: unlisted-public
status: current
last_updated: 2026-08-29
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

{% include prompt-layer-tabs.html %}

## Setup Prompt 0 · Idea Feasibility Gate {#idea-feasibility-gate}

<p class="prompt-description">把初步研究想法发展为可核验的 proposal，并作出是否立项的明确裁决。</p>

**推荐模式：Pro**

~~~text
下面只有一个初步 research idea。请把它发展成一份足以判断“值不值得真正开项目”的 applied micro research proposal。

**Idea：<一句话 research idea>**

请实际检索并核实相关政策、institutional setting、closest literature 和数据来源，不要凭印象补事实、文献或数据可得性。

重点回答：

1. 最强的 research question 是什么，为什么经济学上值得研究；
2. closest literature 做到了哪里，本文最可能的 substantive contribution 是什么，能与哪些重要或经典文献对话；
3. 最可信的 identification strategy 是什么，核心 identifying assumptions 和主要 threats 是什么；
4. 为实现最强设计，理想数据是什么；现实中目前能获得什么。逐项说明数据来源、时间/空间粒度、可链接性、公开程度、获取方式、价格和申请难度，并区分 **必须存在 / 重要增强 / nice-to-have**；
5. 在现有数据条件下，最强可执行版本是什么；如果关键数据不存在，是否有可信的下位替代，还是应该直接停止；
6. 预期可能出现哪些 substantively different findings，以及不同 findings 会怎样改变 contribution 和 publication ceiling；
7. 综合 idea、identification、data feasibility 和 literature，判断 **maximum plausible ceiling、合理投稿目标和最优投稿路径**。

不要为了把 idea 做成论文而强行乐观。明确区分 **已核实事实、合理推断和目前未知**。最后给出一个明确裁决：**值得立即推进 / 先验证关键数据后再决定 / 暂不值得做**，并指出下一步最有信息价值的少数行动。
~~~

## Setup Prompt 1 · Workspace Bootstrap {#project-workspace-bootstrap}

<p class="prompt-description">建立统一目录、状态文件与项目治理规则。</p>

**推荐模式：High；已有目录复杂时使用 Extra High**

~~~text
你现在位于一个新 research project 的根目录。先建立并初始化项目工作空间，暂时不要开始 substantive research。

## 固定目录结构

建立以下目录；这是项目的 authoritative directory structure：
```text
01_inbox/

02_data_raw/
  01_original/
  02_external/
  03_documentation/

03_code/
  01_setup/
  02_cleaning/
  03_analysis/
  04_validation/
  05_exhibits/
  99_legacy/

04_data_final/
  01_analysis/
  02_auxiliary/
  03_dictionary/

05_outputs/
  01_logs/
  02_tables/
  03_figures/
  04_diagnostics/
  99_scratch/

06_literature/
  01_papers/
  02_bibliography/
  03_notes/
  04_search_records/

07_notes/
  01_evidence/
  02_branches/
  03_audits/
  04_dead_ends/
  05_releases/

08_brief/
  99_backups/

09_manuscript/
  01_current/
  99_backups/

10_submission/
  01_journal_requirements/
  02_current_package/
  03_correspondence/
  04_reviews_rr/
  99_previous_submissions/

99_archive/
  01_retired/
  02_snapshots/
```

## 目录治理

- 所有文件夹名称必须以数字开头。
- **不得自行新增、重命名或重组一级目录。**
- 二级目录也默认使用以上结构。只有现有目录确实无法合理容纳某类长期材料时才新增；新增前先在 `PROJECT.md` 中说明理由和用途。
- 不创建 `misc/`、`temp/`、`new/`、`final_final/` 等临时目录。临时输出进入 `05_outputs/99_scratch/`，废弃材料进入 `99_archive/`。
- `01_inbox/` 是所有新材料的入口。收到文件后判断其性质并移动到正确位置，同时维护 `01_inbox/INBOX_LOG.md` 记录来源、原文件名、处理时间和最终去向。
- `02_data_raw/` 原则上只读，不覆盖、不手工修改。`04_data_final/` 中的数据必须能够通过 `03_code/` 从 raw data 重建。
- 重要 evidence 必须能够追溯到对应 data、code、log 和 output。

## 文档状态规则

- `07_notes/` 是 **append-only evidence history**。positive、null、unstable、contradictory、failed 和 dead-end 结果都保留，不因后续判断变化而抹掉。
- `08_brief/` 是 **living document**。始终维护一个 authoritative current brief；重大更新前可备份至 `99_backups/`。
- `09_manuscript/01_current/` 是唯一 authoritative manuscript。使用 LaTeX，维护当前 `.tex`、bibliography、必要附件以及成功编译的最新 PDF。旧版本进入 `99_backups/`，不要制造多个并行的 current manuscripts。
- Submission 和 R&R 材料统一进入 `10_submission/`，不要散落在 manuscript 或根目录。

## 根目录状态文件

创建并维护：

### `PROJECT.md`

作为项目长期规则和地图，至少记录：

- project name 和一句话说明；
- 当前 research stage；
- 上述目录结构及每个目录用途；
- directory governance；
- authoritative brief / manuscript / data / code 入口；
- raw → final data 的复现入口（建立后更新）；
- Notes / Brief / Manuscript 的版本规则；
- 我的个人网站：`<个人网站URL>`。以后需要稳定的 author、affiliation、contact 等个人信息时优先参考该网站，不要反复询问；
- 项目中形成的其他长期规则。

后续 session 开始工作前应先读取 `PROJECT.md`，不要自行重新设计项目结构。

### `HANDOFF.md`

作为跨 session 的当前交接状态，保持简洁并持续更新：

- 当前阶段；
- 最近完成的工作；
- 当前 authoritative files；
- 重要已定决策；
- active branches / unresolved issues；
- blockers；
- 最合理的下一步。

它记录**当前状态**而不是完整研究历史；完整 evidence history 留在 Notes。

先检查当前目录已有内容，避免覆盖已有文件，再建立缺失的结构和初始化文件。完成 bootstrap 后停止，不开始分析或写 manuscript。
~~~

## Setup Prompt 2 · Environment Bootstrap {#environment-bootstrap}

<p class="prompt-description">验证实证与写作环境并记录长期配置。</p>

**推荐模式：High；环境调用异常时使用 Extra High**

~~~text
初始化并记录本项目的基础工作环境与长期规则：

- 本项目以 **Stata** 为主要实证环境。确认 Stata 可被当前工作目录稳定调用；如不能，解决调用、PATH、license 或必要 package 问题，并验证能够实际运行 `.do` 文件。
- 确认 **LaTeX** 工具链可用，并实际编译一个最小 `.tex` 生成 PDF；后续 manuscript 均维护可编译的 LaTeX + PDF。
- 将稳定的环境信息和必要依赖简洁写入 `PROJECT.md`；不要为此建立复杂的管理体系。
- 与我交互以中文为主，必要时保留英文术语；项目中的正式产物一律使用英文，原始资料或必须保留原文的内容除外。
- 对后续 session 仍然重要的状态或决定，应写入项目中合适的现有文件，而不是只留在对话里。

完成环境确认和记录后停止，不开始 substantive research。
~~~

## Setup Prompt 3 · Session Handoff Refresh {#session-handoff-refresh}

<p class="prompt-description">在重要节点结束时刷新当前交接状态，确保下一次 AI 冷启动能够准确续接。</p>

**推荐模式：High；项目状态复杂或路径分散时使用 Extra High**

~~~text
更新根目录 `HANDOFF.md`，用于下一次 AI session 冷启动接手本项目。

只记录对后续继续工作真正重要的当前状态：

- 当前阶段与目标；
- authoritative files / code / outputs 的准确路径；
- 本轮真正改变了什么；
- 已定的重要决策及必要理由；
- 尚未解决的问题或不确定性；
- 下一步最合理的少数动作；
- 如有未完成运行或环境问题，说明从哪里继续。

保持简洁，优先更新当前状态而不是无限 append。不要把 research notes、完整 changelog、所有操作细节或长期历史复制进 HANDOFF；这些应留在对应的 notes / archive / git history 中。

目标是：一个没有本次聊天上下文的新 session，只读 `PROJECT.md`、`HANDOFF.md` 和其中指向的文件，就能准确继续工作。
~~~
