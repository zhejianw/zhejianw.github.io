---
layout: single
title: "Prompt 库 · Brief Layer"
permalink: /ai/prompts/brief/
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

**Layers：[Manuscript](/ai/prompts/) · [Notes / Evidence](/ai/prompts/notes/) · Brief**

## Brief Prompt 1

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

## Brief Prompt 2

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
