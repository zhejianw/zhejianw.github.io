---
layout: single
title: "Prompt 库 · Brief Layer"
permalink: /ai/prompts/brief/
author_profile: false
lang: zh-CN
sitemap: false
noindex: true
prompt_library: true
prompt_layer: brief
visibility: unlisted-public
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

{% include prompt-layer-tabs.html %}

<nav class="prompt-workflow" aria-label="Brief workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/notes/">Evidence</a><span class="workflow-arrow">→</span>
  <a href="#paper-ceiling">Ceiling</a><span class="workflow-arrow">→</span>
  <a href="#journal-mapping">Journal</a><span class="workflow-arrow">→</span>
  <a href="#journal-requirements">Requirements</a><span class="workflow-arrow">→</span>
  <a href="#literature-map">Literature</a><span class="workflow-arrow">→</span>
  <a href="#journal-brief">Locked Brief</a><span class="workflow-arrow">→</span>
  <a href="#build-manuscript">Manuscript</a>
</nav>

## Brief Prompt 1 · Paper Ceiling {#paper-ceiling}

<p class="prompt-description">从证据反推最强论文身份与合理发表上限。</p>

**推荐模式：Pro**

~~~text
只基于当前 notes / evidence base，暂时不要继承任何现有 manuscript framing，也不要因为作者已经想到某个故事就默认那个故事是最优的。

你的任务是从现有 evidence 反推出：

**这项研究在最优 framing、最优 evidence organization 和最高写作标准下，最多能够长成一篇什么样的 paper。**

先识别 strongest defensible version：

- 最重要且能够被现有 evidence 回答的 research question；
- 最可信的 identification / empirical leverage；
- 最强的 central finding；
- 最合理的 claim boundary；
- 最有价值的 contribution；
- 最自然的 journal audience；
- 哪些 evidence 应成为 paper backbone，哪些只能作为 supporting / suggestive evidence；
- 是否存在多个不同的 paper candidates，以及哪一个 ceiling 最高。

然后判断这个 idea 的 **maximum plausible publication ceiling**。这里评估的是 evidence 和 idea 本身的上限，不是当前 manuscript 写得怎么样，也不是预测一定能中。

可以使用以下层级：

1. **Top general economics**
2. **Top field**
3. **General economics A-level**
4. **General economics B-level**
5. **Outside economics A-level**
6. **Outside economics B-level**
7. **C-level SSCI**
8. **目前不足以形成值得投稿的完整 paper**

判断时重点考虑：

- research question 的重要性和 general interest；
- substantive novelty，而不是仅仅新数据、新国家或新 outcome；
- identification credibility；
- effect / pattern 是否足够 informative；
- evidence 是否形成完整而非偶然的 empirical fact；
- 是否改变已有认识、区分 competing explanations 或打开新的 margin；
- closest literature 已经回答了多少；
- external relevance / conceptual reach；
- remaining uncertainty 是否限制 central claim；
- evidence architecture 是否足以支撑该层级的 referee scrutiny。

不要因为判断 ceiling 较低就降低研究或写作标准。

**无论最终 ceiling 属于哪一级，后续 manuscript 都按最高标准处理：claim 必须准确，identification 必须严谨，叙事必须克制，图表和文字必须简洁，不能因为目标期刊较低而接受本可避免的漏洞、冗余或低质量表达。**

同时不要为了强行冲击更高层级而虚构 contribution、扩大 claims，或要求大量低边际价值分析。

最后给出：

1. **Strongest paper identity**：一句话说明这篇 paper 最应该是什么；
2. **Central question / central claim / contribution**；
3. **Maximum plausible ceiling**；
4. **为什么最多到这个层级**；
5. **阻止它进入上一层级的最核心瓶颈是什么**；
6. 这个瓶颈属于：
   - 可以利用现有 evidence 重新组织解决；
   - 少量高价值分析可能解决；
   - 需要新的 data / identification 才可能解决；
   - 本质上属于 research question 本身的 ceiling；
7. 是否存在一个不同 framing 的 paper candidate，虽然内容不同但 ceiling 更高；
8. 基于当前 evidence，推荐进入 manuscript 的最强版本。

不要因为“可能存在更高档期刊”就乐观评级，也不要因为 evidence 不完美就机械降档。重点判断：

**如果一个非常强的 applied microeconomist 拿到这套 evidence，并把它做到能够做到的最好，这篇 paper 的合理上限在哪里。**
~~~

## Brief Prompt 2 · Journal Mapping {#journal-mapping}

<p class="prompt-description">核实期刊信息并设计风险收益最优的投稿路径。</p>

**推荐模式：Pro；执行时需要联网搜索并核实当前信息**

~~~text
基于当前 paper brief、evidence 和上一轮对 publication ceiling 的判断，为这篇文章寻找最合适的投稿期刊，并设计最优投稿路径。

请主动搜索并核实当前信息，不要只依赖已有知识。

对最有可能的候选期刊比较：

- paper fit 与实际发表同类文章的情况；
- 年发文量；
- acceptance / desk-reject 情况（没有可靠公开数据时明确说明并合理估计）；
- submission fee、publication fee、是否可以选择非 OA 而不支付 APC；
- 最新 Impact Factor；
- 是否 SSCI；
- economics profession 内的认可度和定位；
- 审稿速度、R&R 摩擦和发表难度；
- 作者身份或研究方法是否可能存在明显的 field-fit friction。

不要机械罗列大量期刊。重点寻找**风险—收益比最优**的选择。

最后给出：

1. **首选期刊**
2. **第二、第三选择**
3. **建议的投稿顺序**
4. 每一步被拒后为什么转投下一本
5. 哪些看似档次高但实际上不值得投，哪些看似稍低但性价比很高

目标是最大化这篇 paper 的**最终发表价值**，同时考虑时间、接受概率、费用和 revision 成本，而不是单纯追求最高 IF。
~~~

## Brief Prompt 3 · Journal Requirements {#journal-requirements}

<p class="prompt-description">提炼并保存目标期刊的官方投稿约束。</p>

**推荐模式：Extra High**

~~~text
下面是目标期刊的官方投稿要求。请完整阅读并作为本项目后续 manuscript、appendix 和 submission preparation 的期刊规范保存。
提炼并记录所有与投稿有关的硬性要求和重要建议，包括格式、字数、匿名、标题页、abstract、keywords、分类代码、图表、参考文献、appendix / supplementary materials、data/code statement、文件要求、费用和 OA 等。
区分 **mandatory / recommended / unclear**。不要把一般学术惯例误当成该刊规定。
这一步只建立和更新 journal requirements，不修改 manuscript。后续所有审阅和修改默认以这些要求为约束。
~~~

## Brief Prompt 4 · Literature Map {#literature-map}

<p class="prompt-description">分级核实核心文献并识别定位与新颖性风险。</p>

**推荐模式：Pro；执行时需要联网检索并核实文献**

~~~text
基于当前 notes / evidence、paper brief 和目标期刊，为这篇 paper 建立一份真正有用的参考文献目录。请实际检索并核实文献，不要凭印象补 papers、bibliographic details、findings 或 publication status。

按重要性分为：

1. **必须参考**
2. **建议参考**
3. **可以参考**

优先识别真正 closest、会影响 paper identity / contribution / identification / interpretation 的文献，而不是为了完整而堆 citation。

每篇文献简洁记录：

- 完整 citation、版本和 publication status；
- **OA 状态**：OA / 可合法获得 working-paper or repository version / 非 OA；
- 为什么这篇文献对本项目重要；
- 它与本文最关键的 overlap 或区别；
- 最适合在本文哪里使用，或需要从中重点学习什么。

特别留意：是否存在可能明显削弱 novelty、改变 framing、提供关键方法或解释、或 referee 很可能期待看到的文献。

在质量相近时优先推荐 OA 或容易合法获取的版本，但不要为了 OA 排除真正重要的文献。

最后指出目前**最值得优先精读的少数文献**，以及是否还存在明显的 literature blind spot。
~~~

## Brief Prompt 5 · Lock Manuscript Brief {#journal-brief}

<p class="prompt-description">锁定面向目标期刊的论文主线、主张边界与证据结构。</p>

**推荐模式：Pro**

~~~text
基于当前 notes / evidence base、已经形成的 paper brief，以及目标期刊的 audience、定位和投稿规范，重新裁决这篇 paper 的最优版本。

不要开始写 manuscript。先决定：

- 最强且最适合该期刊的 research question；
- central claim 和 claim boundary；
- 哪些 evidence 构成 paper backbone；
- 哪些作为 supporting / diagnostic / robustness evidence；
- 哪些虽然有信息价值，但不应进入这篇 paper；
- heterogeneity、mechanism、null results 和 secondary outcomes 应占什么权重；
- 最适合该期刊的 contribution 和 positioning；
- 哪些 claims 应升级、降级或删除。

期刊定位只用于选择最优叙事和证据组合，**不能成为降低 identification、writing 或 evidence standards 的理由**，也不要为了迎合期刊而夸大 contribution。

最后给出一个简洁的 **journal-specific manuscript brief**：\
**question → identification → central claim → supporting claims → evidence spine → contribution → scope/boundary**。

如果当前 evidence 与该期刊并不匹配，直接指出，不要硬凑。
~~~

<div class="prompt-transition-label" aria-hidden="true">↓ Transition to Manuscript</div>

## Build Manuscript {#build-manuscript}

<p class="prompt-description">将已锁定的 Brief 转化为唯一可编译论文工程。</p>

**推荐模式：Pro**

~~~text
基于已经锁定的 manuscript brief、notes / evidence base、目标期刊要求和提供的 JDE `.tex` 参考稿，建立这篇 paper 的 manuscript layer。

直接创建和迭代实际 manuscript，不要只给 outline 或写作建议。

### 基本约束

- **Manuscript 是唯一的 living document。** 始终维护一个 authoritative current version；重大修改前可以备份，但不要不断生成彼此竞争的 V1/V2/V3。Brief 和 manuscript 可以删改重构；notes / evidence layer 原则上 append-only，旧结果即使被降级为 dead end 也不从 evidence history 中抹掉。
- **交付必须是可工作的 LaTeX project。** 创建/维护 `.tex` 及必要文件，并成功编译生成可直接审阅的 PDF。每轮 substantive revision 后重新编译并检查明显的引用、浮动体、分页、overflow 和 cross-reference 问题。
- **Brief 决定 paper identity，evidence 决定事实边界。** 所有 claims、数字、样本、结果和 interpretation 必须能回到现有 evidence。可以自主选择、压缩和重组 evidence，但不要虚构或为了填满论文而扩大分析。
- **以提供的 JDE `.tex` 作为主要 style reference。** 学习其成熟的 citation、spacing、sectioning、equation、footnote、figure/table placement、caption/note 和整体 LaTeX 习惯；吸收格式和工程规范，不机械复制其内容结构。
- Manuscript 原则上包含经济学论文常规模块：**Abstract、Introduction、Background / Institutional Context、Data、Empirical Methodology / Strategy、Results、Heterogeneity / Mechanisms（如有必要）、Discussion、Conclusion**。这不是刚性模板；根据 paper identity 和 evidence 自主合并、拆分、重排或省略不必要模块。
- **Figures / tables 是 evidence architecture 的一部分。** 正文只保留理解 central question、identification 和 main claims 真正需要的 exhibits；supporting diagnostics、robustness、secondary outcomes 和技术性材料优先进入 appendix。图表应简洁、可独立理解、格式统一，并放在最有利于阅读 flow 的位置。不要为了展示已有分析而堆积 exhibits。

### 写作原则

始终按高水平 economics manuscript 的标准构建论文，不因目标期刊层级较低而降低 identification、claim discipline、写作、图表或排版标准。

让文章围绕清晰的：

**research question → empirical leverage / identification → evidence → interpretation → contribution**

自然展开。

在具体 section、篇幅、figure/table 组合和叙事顺序上保持自主判断。优先形成一篇完整、自洽、克制、可以直接从 PDF 整体审阅并继续迭代的 manuscript，而不是过早追求局部文字完美。
~~~
