---
title: "Prompt 库 · Notes / Evidence Layer"
permalink: /ai/prompts/notes/
prompt_layer: notes
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-09-01
---

{% include prompt-layer-tabs.html %}

## Notes Prompt 0A · Initial Empirical Design Map {#initial-empirical-design-map}

<p class="prompt-description">大规模探索前，从本地材料建立数据、设定、识别与实施决策地图。</p>

**推荐模式：Extra High；Questions for GPT Pro 应再交由 Pro 单独裁决**

~~~text
在大规模展开 Notes / Evidence exploration 之前，先基于当前 data、code 和 documentation 快速建立一份 empirical design map。实际检查本地文件，不要凭印象总结，也暂时不要为了“探索完整”大量跑 regressions。

重点弄清楚：

1. **Data / variables**
   - 目前有哪些数据源，各自位于哪里；
   - 有哪些重要 variables，它们来自哪个数据库；
   - observation 的最小单位、可聚合层级、时间范围、主要 identifiers 和可链接关系是什么；
   - 哪些变量存在 coverage、missingness、时间或样本限制。
2. **Specification space**
   - 最小、最透明的 regression / descriptive relationship 是什么；
   - 合理的 FE、controls、weights / inference choices 大致有哪些；
   - 哪些 controls 比较干净，哪些可能是 endogenous / bad controls 但在特定问题下仍值得考虑；
   - 每个重要 FE / control 实际可能处理什么 concern，以及它本身可能带来什么问题，包括改变 identifying variation、estimand 或因为 missingness 改变 sample。
3. **Identification**
   - 基于现有 institutional setting 和 data，最自然的 candidate identification strategies / estimands 是什么；
   - 哪些结果最多只能 descriptive，哪些在额外 assumptions 下可能支持 causal interpretation；
   - 目前真正需要 methodological judgment、而不是靠继续查看本地文件就能解决的问题是什么。
4. **Implementation decisions**
   - 当前 code / data construction 中有哪些 coding、merge、timing、sample、variable construction 或 aggregation decisions 会实质影响 specification、estimand 或 interpretation；
   - 标出相关代码和文件位置，以及尚未确定的选择。

最后单独形成一个 **Questions for GPT Pro** 部分：只提出真正需要高级经济学判断、且答案可能改变后续 Notes exploration 的少数问题。每个问题都附上足够的本地事实，使一个没有本次 Claude 对话上下文的 GPT Pro 可以直接判断。不要把普通 coding/debugging 问题塞进去。

目标不是提前形成 paper story，而是让我们在开始大规模探索前清楚知道：**手里到底有什么、合理的 empirical space 有多大、哪些选择只是工程问题、哪些真正需要经济学裁决的问题。**
~~~

## Notes Prompt 0B · Empirical Design Map Update {#update-empirical-design-map}

<p class="prompt-description">根据最新数据、代码与输出刷新设计地图，只保留当前有效判断。</p>

**推荐模式：Extra High；涉及关键识别或 estimand 重判时可使用 Pro**

~~~text
更新现有 `empirical_design_map.md`。先重新检查当前 data、code、documentation 和主要 outputs，不要默认旧 map 仍然正确。

重点判断：

- 数据源、variables、granularity、time coverage、identifiers、linkage 或 missingness 是否发生变化；
- 当前 specification space 是否因为新的 data construction、sample、FE、controls、weights、inference 或 coding decisions 而改变；
- 旧 map 中关于 identifying variation、candidate estimands、causal / descriptive interpretation 或 implementation constraints 的判断，哪些仍成立，哪些需要修正、降级或删除；
- 是否出现新的会实质影响 specification、estimand 或 interpretation 的 coding / merge / timing / aggregation decisions；
- 原有 `Questions for GPT Pro` 中哪些已经解决、哪些已经失效、哪些新的问题现在值得升级。

只更新真正改变的内容，不要把文件无限扩张成 changelog。保留当前最准确的 design map，并在必要时简短注明重要判断为何改变。

目标是让当前 map 始终准确反映：**现在手里有什么、合理 empirical space 是什么、哪些事实已经确定、哪些经济学判断仍需要裁决。**
~~~

## Notes Prompt 0C · Implement GPT Pro Review {#implement-gpt-pro-review}

<p class="prompt-description">以本地事实核验 Pro 意见，完成高价值检查并更新权威证据。</p>

**推荐模式：Extra High；涉及较多文件、代码和诊断时使用可持续工作的 agent 模式**

~~~text
下面是 GPT Pro 基于当前材料给出的 methodological / substantive review。把它视为高级分析和需要验证的判断，不是机械执行清单。

先结合当前 data、code、outputs 和 `empirical_design_map.md` 判断每条意见依赖的事实是否成立，再决定最合适的处理方式。区分：

- 已被本地 evidence 支持、可以直接采纳的判断；
- 需要额外 diagnostic / regression / data check 才能判断的问题；
- 基于错误或过时事实、需要修正的意见；
- 有道理但不值得实施或会改变 estimand / research question 的建议；
- 仍然需要 GPT Pro 再裁决的问题。

完成真正有价值的检查、分析和必要修改，并相应更新 Notes / `empirical_design_map.md` 等 authoritative artifacts。不要为了回应 Pro 而无限扩展 specification space。

最后给我两份输出：

1. **Return to GPT Pro**：可以使用准确的 econometrics / methodology terminology，简洁说明哪些意见被确认、修改或拒绝；新做了什么；得到什么新 evidence；目前还剩哪些真正需要 Pro 判断的问题。写到独立 markdown 文件，并给出准确路径。
2. **给我的中文综述**：把技术结果翻译成研究者能快速理解的普通语言。优先回答：
   - 这个项目现在最可信的故事是什么；
   - 我们为什么相信它；
   - 哪几条 evidence 最关键；
   - 哪些原来的担心现在被解决了，哪些还没有；
   - 这一轮之后，我们对项目的判断到底发生了什么变化；
   - 下一步最值得做什么。

不要用大量缩写、methodology jargon、文件名、变量名、回归编号或工程细节堆砌汇报。必要的技术术语可以保留，但第一次出现时要说明它在这个项目里实际意味着什么。不要只告诉我“做了哪些分析”，要告诉我“这些分析让我们现在相信什么”。

如果本轮结果使之前的 design understanding 实质改变，更新 `empirical_design_map.md`；不要把完整过程写成 changelog。
~~~

## Notes Prompt 0D · GPT Pro Re-adjudication {#gpt-pro-re-adjudication}

<p class="prompt-description">依据新核查证据重新裁决识别、设定与解释是否已经站得住。</p>

**推荐模式：Pro**

~~~text
这是 Claude Code 根据你上一轮意见重新核查本地 data、code 和 evidence 后的汇报。

请重新裁决：哪些原有 concerns 已经被充分解决，哪些仍然成立，哪些因为新 evidence 应该修改判断；目前 identification、specification 和 interpretation 是否已经足够 defensible，以及还有没有少数真正值得在进入下一阶段前处理的问题。

不要因为上一轮已经提出过某个 concern 就坚持它；以这轮新 evidence 为准。也不要为了完整继续增加低边际价值的 robustness。
~~~

## Notes Prompt 1 · Single-Prompt Exploration {#case-specific-notes-exploration}

<p class="prompt-description">围绕具体研究问题扩展可复用证据层。</p>

**推荐模式：Pro；边界明确的单项探索可使用 Extra High**

~~~text
基于目录中现有的自动科研工作流，对“中国成年人的幸福感与抑郁/沮丧是否出现分化？——基于 CGSS 2012–2023 七期重复截面的证据”进行充分探索。
目标是尽可能扩充高质量、可复用的 notes/evidence layer，而不是尽快形成故事。系统探索所有有 substantive meaning 且 defensible 的 estimand 和 specification families，包括合理的 dependent variables/codings、controls、FE、clustering/inference、functional forms、weights、sample restrictions，以及 distributional、heterogeneity、decomposition 等分析；主动补充我没有点到但值得探索的方向。不要机械做 specification 笛卡尔积，也不要按显著性筛选结果。
所有有信息价值的探索，包括 null、unstable、failed 和被关闭的路线，都匹配 code 和 log 写入 notes，并保留判断理由。只有经充分探索后仍然稳定、有意义、可辩护的素材进入 manuscript brief，再由 manuscript brief 加工到 manuscript。
~~~

## Notes Prompt 2 · Modular Evidence Workflow {#modular-evidence-workflow}

<p class="prompt-description">按模块推进证据发现、压力测试、矛盾解决与收敛。</p>

<p class="prompt-usage-note"><strong>使用方式：</strong>以下模块必须逐个喂给 AI，不能一起喂。</p>

<nav class="prompt-workflow" aria-label="Notes evidence workflow">
  <strong>Cycle</strong>
  <a href="#notes-control">0</a><span class="workflow-arrow">→</span>
  <a href="#research-space-expansion">H1</a><span class="workflow-arrow">→</span>
  <a href="#empirical-space-expansion">H2</a><span class="workflow-arrow">→</span>
  <a href="#deep-investigation">V1</a><span class="workflow-arrow">→</span>
  <a href="#adversarial-audit">V2</a><span class="workflow-arrow">→</span>
  <a href="#evidence-conditioned-discovery">H3</a><span class="workflow-arrow">→</span>
  <a href="#branch-adjudication">C1</a><span class="workflow-arrow">→ loop</span>
  <span class="workflow-arrow">· conflict →</span><a href="#contradiction-resolution">X1</a>
</nav>

### 0. 总控 {#notes-control}

<p class="prompt-description">限定证据层目标、保存范围与基本纪律。</p>

**推荐模式：High**

~~~text
## 0. 总控

只工作在 notes / evidence layer，不进入 manuscript brief 或 manuscript。

目标是建立尽可能完整、可靠、可复用的 evidence base。所有有信息价值的 positive、null、unstable、failed、contradictory 和 dead-end 结果都保留，并匹配 code、log 和 output。不要按显著性筛选，也不要机械穷举无意义的 specifications。

~~~

---

### H1. 横向：Research-space expansion {#research-space-expansion}

<p class="prompt-description">横向发现具有实质价值的新研究分支。</p>

**推荐模式：Extra High**

~~~text
## H1. 横向：Research-space expansion

围绕当前研究问题做横向探索。

主动寻找所有值得进入 notes 的新 estimands、outcomes、heterogeneity、distributional patterns、decompositions、diagnostics、alternative explanations 和其他未想到的 research branches。

目标是扩大有价值的研究空间，而不是形成故事。

~~~

---

### H2. 横向：Empirical-space expansion {#empirical-space-expansion}

<p class="prompt-description">围绕明确问题扩展可辩护的实证选择。</p>

**推荐模式：Extra High**

~~~text
## H2. 横向：Empirical-space expansion

对当前值得研究的 branches，探索其他有 substantive meaning 且 defensible 的 measurement、sample、specification 和 inference choices，包括合理的 outcome coding、controls、FE、functional forms、weights、clustering / inference 和 sample definitions。

每个 specification family 都必须对应明确的 substantive、measurement、identification 或 inference 问题；没有明确目的的不跑。

不要按显著性筛选，也不要机械穷举组合。

~~~

---

### V1. 纵向：Deep investigation {#deep-investigation}

<p class="prompt-description">深挖关键分支并裁定其证据状态。</p>

**推荐模式：Extra High；决定性分支可使用 Pro**

~~~text
## V1. 纵向：Deep investigation

选择当前最值得深挖、最可能改变研究判断的 branch，充分向下探索。

做到足以判断它是成立、有限成立、尚不确定，还是应该关闭。

完整保留 evidence、code、log、output 和判断理由；不要因为出现漂亮结果而提前停止。

~~~

---

### V2. 纵向：Adversarial audit {#adversarial-audit}

<p class="prompt-description">以真实失效机制对核心发现进行压力测试。</p>

**推荐模式：Extra High；核心结论最终压力测试可使用 Pro**

~~~text
## V2. 纵向：Adversarial audit

针对当前最影响研究结论的 finding 或 claim，主动尝试把它推翻，包括重要的 positive、null 和 heterogeneous findings。

优先寻找 plausible failure modes，包括 measurement、sample composition、survey design、coding、timing、alternative explanation 和 identification / inference 问题。

攻击应针对真实的 failure mode，而不是为了改变显著性而搜索 specification。

~~~

---

### H3. 再横向：Evidence-conditioned discovery {#evidence-conditioned-discovery}

<p class="prompt-description">从既有异常与矛盾中发现新研究方向。</p>

**推荐模式：Extra High**

~~~text
## H3. 再横向：Evidence-conditioned discovery

重新阅读当前 notes、results、异常、矛盾和 dead ends。

问：已有证据产生了哪些此前没有想到、但现在值得探索的新问题或 branches？

只扩展有 substantive 或 diagnostic value 的方向。

~~~

---

### C1. 收敛：Branch adjudication {#branch-adjudication}

<p class="prompt-description">汇总证据、裁决分支并安排后续资源。</p>

**推荐模式：Pro**

~~~text
## C1. 收敛：Branch adjudication

整理并裁决当前 research state。

每条 branch 简要保留：

**status → strongest evidence → strongest counterevidence → unresolved question → next best action**

合并重复探索，关闭低价值路线，更新 dead-end 和 decision records，并决定下一轮资源投向。

不要进入 manuscript brief。

~~~

---

### X1. 按需：Contradiction resolution {#contradiction-resolution}

<p class="prompt-description">解释冲突证据并设计可区分的新检验。</p>

**推荐模式：Pro**

~~~text
## X1. 按需：Contradiction resolution

当重要 evidence 彼此冲突时调用。

找出当前 notes 中无法被同一个简单解释同时容纳的证据。

判断矛盾来自 measurement、sample、estimand、timing、specification、heterogeneity、noise，还是意味着原有解释需要改变。

优先寻找能够区分 competing explanations 的新证据，而不是替某个结果辩护。

~~~

---

### 循环 {#notes-cycle}

<p class="prompt-description">规定探索循环、插入条件与停止标准。</p>

**推荐模式：流程控制说明；必须逐个喂，不能与其他模块一起喂**

~~~text
## 循环

**H1 → H2 → V1 → V2 → H3 → C1 → loop**

出现重要矛盾时，随时插入 **X1**。

不要求每轮所有 branches 都完整走一遍。

停止标准不是 specification 饱和，而是：

> 对所有高价值 research branches，继续探索已经很难显著改变我们对研究问题的判断。
~~~

## Notes Prompt 3 · Literature Corpus Intake & Provenance {#literature-corpus-intake}

<p class="prompt-description">整理本地论文、附录和初步文献地图，建立可核验的书目清单与阅读状态边界。</p>

**推荐模式：Extra High；文件较多时使用可持续工作的 agent 模式**

~~~text
当前目标文件夹中包含我复制进来的 research papers 的 PDF；部分论文可能另有 appendix / online appendix / supplementary materials。还可能包含一份 GPT Pro 基于初步检索和当前项目状态生成的 literature analysis。

先整理这些材料，不要立即进入大规模 literature synthesis 或 manuscript writing。

### 1. 整理本地 literature corpus

实际检查目标文件夹中的所有相关文件，识别：

- 每篇 paper；
- 对应的 appendix / supplementary materials；
- working-paper / published version 等可能重复版本；
- 无法立即确定身份的文件。

将其合理整理到项目现有 `06_literature/` 结构中。正文 PDF 原则上进入 `06_literature/01_papers/`；appendix / supplement 应与对应 paper 保持清晰关联，不要让主文和附录失去对应关系。

文件命名应稳定、简洁、能够识别作者 / 年份 / paper，不要制造过深目录或很长路径。不要因为整理而删除可能有价值的版本；重复版本如需降级，保留足够 provenance 说明。

### 2. 建立基本 bibliographic inventory

基于实际 PDF 和已有 metadata，记录目前能够可靠确定的：

- authors；
- title；
- year；
- journal / working-paper status；
- main PDF path；
- appendix / supplement path；
- 是否存在多个版本；
- 当前是否已经实际阅读。

不确定的信息明确标记，不要凭文件名或 GPT Pro 的说法补全事实。

### 3. 保存 GPT Pro 的 literature analysis

把我附带的 GPT Pro literature analysis 作为一份独立的 **preliminary literature map / search record** 保存到合适的 `06_literature/` 位置，并保留原始内容和来源信息。

这份材料的作用是：

- 帮助确定哪些 papers 值得优先阅读；
- 提供可能的 closest literature、methodology、measurement、novelty threat 和 reading priorities；
- 记录当前阶段已经想到的 literature questions。

但必须明确标注：

**它不是 authoritative literature review，也不是已经核验过的事实层。**

GPT Pro 生成这份 map 时通常没有完整精读所有论文，因此其中关于 paper findings、methods、overlap、novelty、publication status 或对本项目含义的判断，都应视为需要后续通过实际阅读 paper / appendix 再确认的 preliminary guidance。

不要把其中的判断直接复制成正式 literature notes、Brief 或 manuscript claims。

### 4. 区分 literature map 与 actual reading notes

保持清晰边界：

- **literature map / search record**：告诉我们“可能应该读什么、为什么值得读、当前怀疑什么”；
- **paper reading memo**：只有实际阅读对应 paper 及必要 appendix 后，才记录“这篇 paper 实际做了什么、发现了什么、对本项目真正意味着什么”。

后续新的 close reading 应逐步验证、修正或否定 preliminary map，而不是围绕 map 寻找支持。

### 5. 完成后汇报

完成整理后，用中文简洁汇报：

- 一共识别了多少篇 papers；
- 多少篇有 appendix / supplement；
- 是否存在重复或无法识别的版本；
- papers、appendices、bibliographic inventory 和 GPT Pro literature map 分别存在哪里；
- 哪些材料目前只是 preliminary map，哪些已经属于实际阅读后的 evidence；
- 如果准备开始正式 close reading，最自然的下一步入口是什么。

这一轮以**整理、provenance 和状态区分**为主，不要因为已经看到 GPT Pro 的 literature analysis 就提前形成最终 literature conclusion。
~~~

<nav class="prompt-workflow" aria-label="Continue from Notes">
  <strong>Next</strong>
  <a href="/ai/prompts/routing/">Literature-informed Routing</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/brief/">Brief Layer</a>
</nav>
