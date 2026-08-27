---
layout: single
title: "Prompt 库 · Project Setup Layer"
permalink: /ai/prompts/setup/
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

**Layers：Project Setup · [Notes / Evidence](/ai/prompts/notes/) · [Brief](/ai/prompts/brief/) · [Manuscript](/ai/prompts/)**

## Setup Prompt 1

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
