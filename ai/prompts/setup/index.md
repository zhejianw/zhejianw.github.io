---
title: "Prompt 库 · Project Setup Layer"
permalink: /ai/prompts/setup/
prompt_layer: setup
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-09-01
---

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

## Setup Prompt 1 · Research Proposal Capsule {#research-proposal-capsule}

<p class="prompt-description">将早期想法或暂缓项目封存为可比较、可重启的 proposal capsule，用于 research portfolio 管理。</p>

<p class="prompt-usage-note"><strong>适用入口：</strong>可以从正在运行的 research session 封存，也可以把 GPT Pro 网页分析转成项目档案；本轮只形成 proposal record，不默认启动研究。</p>

**推荐模式：Extra High；需要裁决 publication ceiling 或项目去留时使用 Pro**

~~~text
# [Project Title]

**Short name:**
**Status:** INBOX / SCREENING / READY / ACTIVE / PARKED / KILLED / SUBMITTED
**Last updated:** YYYY-MM-DD

---

## 0. One-sentence idea

> 用一句话说清楚：什么 shock / variation，影响什么 outcome，在什么 population / setting 中？

Example:

> Exploit the staggered introduction of X across Chinese counties to estimate its causal effect on Y using county-level administrative and satellite data.

---

## 1. Research Question

### Main question
这篇 paper 真正要回答什么？

### Secondary questions
- Mechanism 1:
- Mechanism 2:
- Heterogeneity:
- Additional outcome:

不要一开始列太多。Main question 原则上只能有一个。

---

## 2. Why Economists Care

### Economic significance
为什么这个问题本身重要？

### Broader economic theme
它在讨论什么更大的经济学问题？

例如：
- information frictions
- human capital
- firm dynamics
- market integration
- regulation
- political economy
- household behavior
- technology adoption

### Policy relevance
如果结果成立，会改变我们对什么政策或制度的认识？

---

## 3. Paper Identity

如果这篇文章成功，别人应该用一句什么话描述它？

> “This is a paper about ______ using ______.”

**Primary field:**
**Secondary field:**

**Likely audience:**

---

## 4. Core Contribution

### Contribution 1 — Question
我们回答了哪个现有文献尚未回答清楚的问题？

### Contribution 2 — Identification
我们的 causal variation 有什么价值？

### Contribution 3 — Data
是否使用了新的数据、粒度、时间跨度、链接方式？

### Contribution 4 — Finding / mechanism
如果预期结果成立，它改变了什么认识？

### Closest existing paper
- Paper:
- What it does:
- What we do differently:

如果目前 contribution 不清楚，直接写：

> **CURRENT CONCERN: contribution not yet established.**

---

# 5. Institutional Setting / Treatment

## Treatment / shock

**Treatment:**
**Unit:** individual / firm / county / prefecture / country / etc.
**Timing:**
**Geographic scope:**

### Institutional mechanism
政策 / shock 实际是怎么发生的？

### Treatment assignment
谁被 treatment，为什么？

### Important dates
| Date | Event | Relevance |
|---|---|---|
| | | |

### Potential contamination
- anticipation:
- retroactivity:
- concurrent policies:
- spillovers:
- treatment misclassification:

---

# 6. Identification

## Baseline design

**Design:**
DID / event study / RDD / IV / shift-share / synthetic control / natural experiment / etc.

### Treatment group

### Comparison group

### Estimand

### Core identifying assumption

用一句明确的话写出来：

> Identification requires that ______.

### Why might the assumption hold?

### Why might it fail?

---

## 6.1 Threats to identification

按严重性排序：

**Threat 1**
   - Why it matters:
   - Possible test:
   - Possible solution:
**Threat 2**
   - ...
**Threat 3**
   - ...
---

## 6.2 Falsification / diagnostics

计划做哪些真正有信息量的测试？

- pre-trends
- placebo treatment
- placebo outcome
- balance
- manipulation test
- alternative timing
- unaffected population
- negative controls
- spillover tests

只列能够改变我们对 identification 信念的测试。

---

# 7. Data Architecture

## 7.1 Unit of observation

例如：

> county × year, 2010–2025

或：

> firm × month

---

## 7.2 Must-have datasets

### Dataset A — [name]

**Purpose:**
它解决什么核心变量？

**Variables needed:**
- treatment
- outcome
- controls
- identifiers

**Unit:**
**Coverage:**
**Time period:**
**Access route:** API / download / scraping / application / paid / private
**Cost:**
**Current status:**

选择一个：

- NOT CHECKED
- EXISTS, ACCESS UNVERIFIED
- ACCESS VERIFIED
- PARTIALLY ACQUIRED
- FULLY ACQUIRED
- CLEANED
- MERGED
- ANALYSIS READY

**Current holdings:**
- 已经有什么文件？
- 存在哪里？
- 覆盖到哪里？
- 缺什么？

**Main risks:**
- missing years
- inconsistent identifiers
- no treatment timing
- aggregation too coarse
- access instability
- etc.

---

### Dataset B — [name]

同上。

---

## 7.3 Nice-to-have datasets

### Dataset C
**Potential value:**
**Current status:**
**Necessary?** NO

---

# 8. Data Acquisition Status

这是 portfolio 管理中非常重要的一栏。

| Component | Needed for | Status | Current coverage | Missing | Next action |
|---|---|---|---|---|---|
| Treatment data | Identification | VERIFIED | 2015–2024 | 2014 | Locate archive |
| Outcome data | Main result | ACQUIRED | Full | None | Clean IDs |
| Controls | Baseline | PARTIAL | 80% counties | Tibet etc. | Merge |
| Mechanism data | Mechanism | NOT CHECKED | — | All | Low priority |

---

## 8.1 Existing assets

已经掌握、可以直接复用的东西：

- existing raw data:
- cleaned panel:
- crosswalk:
- API scripts:
- scraper:
- shapefiles:
- policy dates:
- previous code:
- related literature library:

这部分很重要，因为它决定项目真实 marginal cost。

---

## 8.2 Missing critical components

### Critical missing item 1
如果没有它，项目会怎样？

### Critical missing item 2

---

# 9. Sample

### Target sample

### Approximate N

### Treatment count

### Pre-period length

### Post-period length

### Geographic coverage

### Known sample-selection issues

如果还不知道：

> **N currently UNKNOWN. Must be established before promotion to ACTIVE.**

---

# 10. Outcomes

## Primary outcome

### Definition
### Source
### Frequency
### Measurement concerns

---

## Secondary outcomes

1.
2.
3.

---

## Mechanism outcomes

1.
2.

不要在 proposal 阶段堆几十个 outcome。

---

# 11. Baseline Empirical Specification

写到足够说明设计即可，不需要提前完成整套 robustness。

例如：

\[
Y_{it} = \alpha_i + \lambda_t + \beta Treatment_{it} + \epsilon_{it}
\]

或者写 event-study / RDD / IV 结构。

### Fixed effects

### Standard errors / clustering

### Weighting

### Main estimator

### Important estimator issues
例如：
- staggered adoption
- heterogeneous treatment effects
- few clusters
- spatial correlation
- generated treatment measure

---

# 12. Literature Map

不要做 exhaustive bibliography，只抓真正决定项目空间的文献。

## Closest papers

### Paper 1
**Question:**
**Design:**
**Data:**
**Main result:**
**Overlap with us:**
**Remaining space:**

### Paper 2
...

---

## Literature verdict

选择一个：

- CLEAR SPACE
- PROBABLY SPACE
- CROWDED BUT DIFFERENTIABLE
- HIGH DUPLICATION RISK
- ESSENTIALLY DONE

### Main literature risk

---

# 13. Cheapest Decisive Tests

这一栏优先级极高。

按顺序列出最便宜、最可能改变项目命运的测试。

## Gate 1 — [question]

**Question:**
例如：
> Does project-level treatment timing actually exist?

**Cost:** 1–2 hours / 1 day / etc.
**Success condition:**
**Failure condition:**
**If failed:** KILL / PARK / redesign

---

## Gate 2 — [question]

同上。

---

## Gate 3 — [question]

同上。

---

# 14. Kill Criteria

提前写清楚什么情况下应该停止。

项目应该被 KILL，如果：

__________________
__________________
__________________
__________________
例如：

- treatment timing cannot be recovered;
- effective treated sample < 30;
- nearest literature already uses same shock + same outcome;
- pre-treatment outcome trends are structurally incompatible with design;
- key dataset only exists at an unusably aggregated level.

---

# 15. What Would Make This an A / B / C Paper?

## A-version
如果最好的情况成立，这篇文章需要有什么？

- stronger identification?
- unique data?
- major mechanism?
- broad economic implication?

## B-version
现实中更可能做到什么？

## C-version
如果核心 contribution 较弱，但结果仍然 publishable，最低版本是什么？

### Is the C-version still worth doing?
YES / NO / UNCLEAR

这对 stopping rule 很有帮助。

---

# 16. Expected Journal / Field Position

不要假精确。

### Optimistic ceiling

### Realistic target range

### Floor

### Relevant fields
- Development
- Labor
- Health
- IO
- Public
- Urban
- Political economy
- etc.

---

# 17. Expected Cost and Cycle

## Human attention

LOW / MEDIUM / HIGH

## AI / coding workload

LOW / MEDIUM / HIGH

## Data acquisition

LOW / MEDIUM / HIGH

## Institutional research

LOW / MEDIUM / HIGH

## Coordination cost

SOLO / LOW / MEDIUM / HIGH

## Time to decisive evidence

例如：
> 2–5 days

## Time to first credible empirical result

例如：
> 2–4 weeks

## Time to submission if successful

例如：
> 2–4 months

---

# 18. Authorship / Collaboration

## Current owner / lead

## Potential coauthors

### What unique complementarity would each person provide?

不要因为“认识这个人”就默认合作。

### Is another human coauthor actually necessary?
YES / NO / UNKNOWN

### Governance risks
- first-author requirements
- deadline mismatch
- journal preference mismatch
- slow feedback
- institutional constraints
- data ownership
- etc.

---

# 19. Portfolio Fit

### Why now?

为什么这个项目值得**现在**做，而不是半年后？

### What does it add to the current portfolio?

- publication probability
- research identity
- new field
- new dataset
- methodological capital
- collaboration
- high-upside lottery ticket

### Opportunity cost

如果启动它，现在不能做什么？

---

# 20. Current Evidence

## What we currently know

1.
2.
3.

## What we currently do NOT know

1.
2.
3.

严格区分 FACT / INFERENCE / SPECULATION。

---

# 21. Current Verdict

**Status:**
READY / SCREENING / PARKED / KILLED / ACTIVE

**Priority:**
A / B / C

**Confidence:**
HIGH / MEDIUM / LOW

### Bottom line

用 3–6 句话回答：

- 为什么值得/不值得做；
- 最大 upside；
- 最大 risk；
- 当前是否应该占用 Active slot。

---

# 22. Next Action

只写**一个**下一步。

> NEXT ACTION: __________________

最好是一个能够改变 decision 的动作，而不是：
“继续研究。”

---

# 23. Decision Log

### YYYY-MM-DD
**New evidence:**
**Belief update:**
**Decision:**
**Reason:**

---

# 24. Sources / Provenance

## Proposal origins
- GPT conversation:
- Claude memo:
- personal idea:
- collaborator discussion:

## Key sources
- paper / DOI
- government document
- dataset documentation
- API
- website

## Local files
- path/to/file
- path/to/data
~~~

## Setup Prompt 2 · Workspace Bootstrap {#project-workspace-bootstrap}

<p class="prompt-description">建立统一目录、Claude 工作规则与跨 session 的项目状态入口。</p>

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

## 目录与 artifact 规则

- 不随意新增、重命名或重组一级目录；临时材料进入现有 scratch / archive 位置。
- `01_inbox/` 是新材料入口；维护 `INBOX_LOG.md` 记录重要材料的来源和去向。
- `02_data_raw/` 保留原始输入；`04_data_final/` 的分析数据原则上应能通过 `03_code/` 重建。
- 重要 evidence 应能追溯到相应 data、code、log 和 output。
- `07_notes/` 是 append-only evidence history。positive、null、unstable、contradictory、failed 和 dead-end evidence 均可保留。
- `08_brief/` 是 living layer，用于从 evidence 中裁决最终 paper identity、claim hierarchy 和 evidence architecture；始终保持一个 authoritative current brief。
- `09_manuscript/01_current/` 是唯一 authoritative manuscript，使用 LaTeX 并维护成功编译的当前 PDF；旧版本进入 backups。
- Submission / R&R 材料集中在 `10_submission/`。

## 创建根目录 `CLAUDE.md`

`CLAUDE.md` 只服务 Claude Code，并保持很短。写入以下长期工作原则：

- 与我主要使用中文交流；正式 research artifacts 使用英文，必须保留原文的材料除外。
- Stata 是主要实证环境；manuscript 使用 LaTeX。
- 每个新的 substantive work session 开始时，先读取根目录 `PROJECT.md` 和 `HANDOFF.md`，判断当前 research stage，再按需读取它们指向的少量 authoritative artifacts；不要无差别加载整个项目。
- 当前 filesystem、data、code、logs 和 outputs 优先于旧聊天、旧 summary 或过时版本。
- 项目的总体 workflow 是 **Data / Analysis → Notes / Evidence → Brief → Manuscript → Submission / Replication**。这是工作层级而不是不可逆的 gate，新的 evidence 可以使工作返回前一层。
- Data / Analysis 阶段重点理解数据、构造和 empirical possibilities；不要提前锁定 paper story。
- Notes / Evidence 阶段允许广泛探索并保存 informative positive、null、unstable、contradictory 和 failed evidence；不要因为未来 manuscript framing 而选择性保留结果。
- Brief 阶段才从 evidence 中裁决 strongest defensible paper identity、central claims 和 evidence architecture。
- Manuscript 阶段以 authoritative Brief 和当前 evidence 为事实边界，形成并迭代唯一 current manuscript。
- Submission / Replication 阶段以当前定稿和 journal requirements 为准。
- 对未来 session 仍然重要的信息应写入合适的项目 artifact，而不是只保留在聊天上下文或依赖模型记忆。
- 外部 AI、referee 或用户提供的修改意见是 input，不要机械执行；先理解 underlying concern，再选择最有效且与全文协调的处理方式。
- substantive manuscript 修改后保持 LaTeX 可编译，并检查相关内容的连锁影响。

不要把当前 results、paper story、session history、literature summary 或大量项目细节写进 `CLAUDE.md`。不要使用 `@PROJECT.md` 或 `@HANDOFF.md` 将它们自动 import 到 `CLAUDE.md`；应在工作开始时按需读取。

## 创建根目录 `PROJECT.md`

作为项目的 durable map，而不是 research brief。初始化：

- project name；
- 一两句话的 broad research scope；
- 当前 research stage；
- authoritative data / code / outputs / notes / brief / manuscript / submission 入口；尚未建立的明确标记；
- 主要 data sources 及 raw → final → results 的 reconstruction entry，建立后持续更新；
- 关键 software / environment；
- Notes / Brief / Manuscript 的 artifact roles 和 authoritative-version 规则；
- 我的个人网站：<https://zhejianwang.com/>，以后需要稳定的 author、affiliation、contact 信息时优先参考；
- 其他真正长期、跨 session 有价值的 project-specific information。

在 Brief 尚未形成前，不要把 provisional central claim、mechanism、contribution 或 publication framing 固化进 `PROJECT.md`。Brief 建立后，`PROJECT.md` 只链接 authoritative Brief，不复制其内容。

## 创建根目录 `HANDOFF.md`

作为当前 working-state snapshot，初始化：

- 当前 stage 与 immediate goal；
- 当前 authoritative files / code / outputs；
- 已完成的实质工作；
- 当前重要 decisions；
- unresolved issues / blockers；
- 下一步最合理的少数动作；
- 如有未完成运行或环境问题，记录 continuation point。

`HANDOFF.md` 记录现在，而不是完整历史。research evidence 留在 Notes，长期项目规则留在 `PROJECT.md`，Claude 工作规则留在 `CLAUDE.md`。

先检查当前目录已有内容，避免覆盖已有有效文件；建立缺失结构和状态文件后停止，不开始 substantive research。
~~~

## Setup Prompt 3 · Environment Bootstrap {#environment-bootstrap}

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

## Setup Prompt 4 · Existing Project Stage Triage {#existing-project-stage-triage}

<p class="prompt-description">接手已有实证项目，依据本地权威材料判断当前 research stage 与最有价值的下一步。</p>

**推荐模式：Extra High**

~~~text
你现在接手的是一个 empirical research project。先理解当前项目文件、已有 data / code / outputs、Notes、Brief、Manuscript 和项目状态，再判断目前处在哪个 research stage。后续大体按照下面的框架推进。

## 总体框架

Data / Analysis → Notes / Evidence → Brief → Manuscript

这不是不可逆的线性 pipeline。后面的工作如果暴露出真正重要的新问题，可以返回前面的 stage；但只有当新问题可能实质改变 identification、paper identity、central claim、contribution、interpretation 或“这个项目是否值得继续”时，才值得重新打开前一层。

### 1. Data / Analysis

这一层负责把现实世界和可分析的数据建立起来：

- 获取、理解、清洗和链接数据；
- 弄清 variable provenance、unit、time coverage、measurement、missingness 和关键 coding decisions；
- 建立可靠、可复现的 analysis pipeline；
- 理解真正可利用的 variation、measurement quality 和 statistical precision。

不要因为手里已经有某个 outcome 或某个漂亮 result，就反向构造 research story。必要时可以因为后续 literature / identification / measurement 问题重新回来获取新数据。

### 2. Notes / Evidence

这一层负责探索和保存科学证据，而不是尽快写成 paper。

Notes / Evidence 原则上是 append-oriented scientific memory：

- positive、null、unstable、contradictory、failed 和 dead-end evidence 都可以保留；
- 如果一个旧结果后来被推翻、降级或证明不可信，不要为了保持故事整洁而删除它；记录新的 evidence、否定原因和当前判断；
- evidence 应尽量能够追溯到 data、code、log 和 output；
- 广泛探索有 substantive meaning 的 outcomes、estimands、heterogeneity、measurement、specifications、alternative explanations 和 diagnostics，但不要机械穷举，也不要按 significance 选择结果。

这一层允许故事很乱。不要因为已经形成一个喜欢的 framing，就让之后的探索只服务于它。

在解释结果时尽量 hypothesis-first：先根据 theory、institutional setting 和 literature 判断什么本来应该发生，再看 evidence 是否支持，而不是从显著结果或精确零反向寻找故事。

### 3. Brief

当 Notes / Evidence 已经足够丰富以后，工作目标发生变化：

不再问“还能发现什么”，而是问：

**现有 evidence 最值得形成一篇什么 paper？**

Brief 负责裁决：

- strongest defensible research question；
- identification / estimand 和 claim boundary；
- paper identity；
- central claim 与 supporting claims；
- evidence spine；
- closest literature 和真正的 literature gap；
- economic interpretation；
- 哪些 evidence 进入正文、appendix 或舍弃；
- journal audience / publication target；
- manuscript 应该怎样组织。

Notes 是 evidence history；Brief 不是历史记录。

原则上只维护一个 authoritative current Brief。新的判断出现时直接更新和重构 Brief，而不是不断 append 或同时保留几个互相竞争的 current versions。

Literature 在这一阶段尤其重要，但 literature 不只是“帮助写 literature review”。它可能：

- 改变 contribution / framing；
- 暴露 identification 或 measurement 问题；
- 要求返回 Notes 做 targeted evidence；
- 甚至证明值得返回 Data 获取新数据。

如果 literature 提出的 concern 即使得到不同结果也不会改变 paper-level judgment，就不要为了完整而重新打开大量分析。

### 4. Manuscript

Manuscript 是 Brief 的展开，而不是重新发现 paper identity 的地方。

以 authoritative Brief 和当前 evidence 为事实边界，维护一个 authoritative current manuscript。

Manuscript 阶段主要通过不同角度反复审阅和打磨：

- paper identity / claim hierarchy；
- identification / specification / inference；
- Results narrative；
- literature positioning；
- mechanisms / interpretation；
- tables / figures / appendix；
- numerical / terminology / cross-manuscript consistency；
- prose / readability；
- senior-coauthor perspective；
- hostile-referee perspective；
- final integration / production checks。

不要因为某项分析已经做过，就默认必须写进 manuscript。

如果 manuscript review 暴露的是 presentation 或 wording 问题，就在 manuscript 内解决。

如果暴露的是 paper identity / evidence architecture 问题，返回 Brief。

如果暴露的是新的 substantive uncertainty，返回 Notes。

如果发现现有数据根本无法回答一个会改变 paper 的关键问题，可以返回 Data。

## 工作原则

- 当前 filesystem、data、code 和 outputs 优先于旧聊天和旧 summary。
- 不要机械执行 GPT Pro、referee 或我的意见；先判断 underlying concern，再结合本地事实决定如何处理。
- 不要为了“完整”增加低边际价值分析。
- 新工作的 value of information 是重要判断标准：不同可能结果如果不会改变 paper-level judgment，就不要让它阻止收敛。
- 对未来 session 仍重要的信息写入合适的项目 artifact，不依赖聊天记忆。
- 与我交流时优先用清楚的中文解释“我们现在相信什么、为什么、下一步为什么值得做”，不要用大量代码名、回归编号和 methodology jargon 代替研究判断；正式 research artifacts 使用英文。

开始工作时，先判断当前项目实际位于哪个 stage、当前 authoritative artifacts 是什么，以及下一步最符合这套框架的少数动作。不要为了遵守框架而机械推进 stage；以当前 evidence 和 research value 为准。
~~~

## Setup Prompt 5 · Durable Project Map Refresh {#project-map-refresh}

<p class="prompt-description">让 PROJECT.md 始终保持为精简、准确且可跨 session 使用的项目地图。</p>

**推荐模式：High；项目结构复杂或长期状态变化较多时使用 Extra High**

~~~text
初始化或更新根目录 `PROJECT.md`，使其准确充当这个 research project 的 durable map。

先根据当前项目文件判断实际状态，不要沿用已经过时的信息。只记录未来多个 session 都持续有用的内容：

- project name 和 broad research scope；
- 当前 research stage；
- authoritative data、code、outputs、notes、brief、manuscript、journal requirements 和 replication 入口；不存在的不要虚构；
- 主要数据来源、关键 identifiers / linkage 以及 raw → final → results 的 reconstruction entry；
- 稳定的软件环境和必要依赖；
- Notes / Brief / Manuscript 等 artifacts 的角色和 current-version 规则；
- 其他真正稳定、无法轻易从当前 artifacts 推断、且未来工作持续需要知道的 project-specific information。

保持简洁，以路径和事实为主。

不要把 `PROJECT.md` 写成 HANDOFF、research notes、changelog 或 manuscript brief。当前 estimates、显著性、临时 branches、最近一次 session 做了什么等不进入这里。

在 Notes / Evidence 阶段，只保留宽泛 research scope，不提前锁定 paper identity。Brief 一旦建立，paper identity、central claims、contribution 和 evidence architecture 以 authoritative Brief 为准；`PROJECT.md` 只记录其准确路径，不复制内容。

如果现有 `PROJECT.md` 已基本正确，只更新真正发生变化的部分。
~~~

## Setup Prompt 6 · Session Handoff Refresh {#session-handoff-refresh}

<p class="prompt-description">在上下文压缩或重要节点结束前完成必要收尾，并为下一个 Claude session 留下精简交接。</p>

**推荐模式：High；项目状态复杂或路径分散时使用 Extra High**

~~~text
初始化或更新根目录 `HANDOFF.md`，用于下一个没有本次聊天上下文的 Claude session 继续当前工作。

在写 HANDOFF 之前，先判断：基于目前仍完整的 session context，是否还有少数高价值工作适合在压缩前直接完成——尤其是如果现在不做，压缩后会难以可靠重建，或会让项目停留在不必要的半完成状态。若有且当前可以直接完成，先完成，再写 HANDOFF；不要因此启动新的大型 research branch、低边际价值分析或无边界扩展。

然后读取当前 `PROJECT.md` 和与本轮工作直接相关的 artifacts，更新当前 working state。只保留对继续工作真正重要的信息：

- 当前 research stage 与 immediate goal；
- authoritative files / code / outputs 的准确路径；
- 本轮真正改变了什么；
- 已定的重要 decisions 及必要的一句话理由；
- 尚未解决的问题、不确定性或 blockers；
- 下一步最合理的 1–3 个动作；
- 如有未完成运行、compile、数据处理或环境问题，准确说明 continuation point。

保持约 1–2 分钟可以读完，优先重写当前状态而不是无限 append。

不要复制 research notes、完整 changelog、所有操作细节、长期项目规则或旧 session 历史；这些分别留在 Notes、logs / archive、`PROJECT.md` 或 git history 中。

如果本轮发生了真正的 project-level change，例如 research stage、authoritative path、data / reconstruction entry 或其他长期状态已经改变，则同步修正 `PROJECT.md` 中对应信息；不要为了同步而把相同内容重复写进两个文件。

目标是：新的 Claude session 自动获得 `CLAUDE.md` 后，只需读取 `PROJECT.md`、`HANDOFF.md` 以及其中指向的少量当前 artifacts，就能准确恢复工作。

完成后，在最终回复中单独给出 `HANDOFF.md` 的准确路径，优先给出绝对路径，方便我直接复制到新的 session；不要把 HANDOFF 正文重复粘贴到聊天中。
~~~
