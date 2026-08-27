---
layout: single
title: "Prompt 库 · Notes / Evidence Layer"
permalink: /ai/prompts/notes/
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

**Layers：[Manuscript](/ai/prompts/) · Notes / Evidence · [Brief](/ai/prompts/brief/)**

## Notes Prompt 1

~~~text
基于目录中现有的自动科研工作流，对“中国成年人的幸福感与抑郁/沮丧是否出现分化？——基于 CGSS 2012–2023 七期重复截面的证据”进行充分探索。
目标是尽可能扩充高质量、可复用的 notes/evidence layer，而不是尽快形成故事。系统探索所有有 substantive meaning 且 defensible 的 estimand 和 specification families，包括合理的 dependent variables/codings、controls、FE、clustering/inference、functional forms、weights、sample restrictions，以及 distributional、heterogeneity、decomposition 等分析；主动补充我没有点到但值得探索的方向。不要机械做 specification 笛卡尔积，也不要按显著性筛选结果。
所有有信息价值的探索，包括 null、unstable、failed 和被关闭的路线，都匹配 code 和 log 写入 notes，并保留判断理由。只有经充分探索后仍然稳定、有意义、可辩护的素材进入 manuscript brief，再由 manuscript brief 加工到 manuscript。
~~~

## Notes Prompt 2

**使用方式：以下模块必须逐个喂给 AI，不能一起喂。**

~~~text
## 0. 总控

只工作在 notes / evidence layer，不进入 manuscript brief 或 manuscript。

目标是建立尽可能完整、可靠、可复用的 evidence base。所有有信息价值的 positive、null、unstable、failed、contradictory 和 dead-end 结果都保留，并匹配 code、log 和 output。不要按显著性筛选，也不要机械穷举无意义的 specifications。

~~~

---

~~~text
## H1. 横向：Research-space expansion

围绕当前研究问题做横向探索。

主动寻找所有值得进入 notes 的新 estimands、outcomes、heterogeneity、distributional patterns、decompositions、diagnostics、alternative explanations 和其他未想到的 research branches。

目标是扩大有价值的研究空间，而不是形成故事。

~~~

---

~~~text
## H2. 横向：Empirical-space expansion

对当前值得研究的 branches，探索其他有 substantive meaning 且 defensible 的 measurement、sample、specification 和 inference choices，包括合理的 outcome coding、controls、FE、functional forms、weights、clustering / inference 和 sample definitions。

每个 specification family 都必须对应明确的 substantive、measurement、identification 或 inference 问题；没有明确目的的不跑。

不要按显著性筛选，也不要机械穷举组合。

~~~

---

~~~text
## V1. 纵向：Deep investigation

选择当前最值得深挖、最可能改变研究判断的 branch，充分向下探索。

做到足以判断它是成立、有限成立、尚不确定，还是应该关闭。

完整保留 evidence、code、log、output 和判断理由；不要因为出现漂亮结果而提前停止。

~~~

---

~~~text
## V2. 纵向：Adversarial audit

针对当前最影响研究结论的 finding 或 claim，主动尝试把它推翻，包括重要的 positive、null 和 heterogeneous findings。

优先寻找 plausible failure modes，包括 measurement、sample composition、survey design、coding、timing、alternative explanation 和 identification / inference 问题。

攻击应针对真实的 failure mode，而不是为了改变显著性而搜索 specification。

~~~

---

~~~text
## H3. 再横向：Evidence-conditioned discovery

重新阅读当前 notes、results、异常、矛盾和 dead ends。

问：已有证据产生了哪些此前没有想到、但现在值得探索的新问题或 branches？

只扩展有 substantive 或 diagnostic value 的方向。

~~~

---

~~~text
## C1. 收敛：Branch adjudication

整理并裁决当前 research state。

每条 branch 简要保留：

**status → strongest evidence → strongest counterevidence → unresolved question → next best action**

合并重复探索，关闭低价值路线，更新 dead-end 和 decision records，并决定下一轮资源投向。

不要进入 manuscript brief。

~~~

---

~~~text
## X1. 按需：Contradiction resolution

当重要 evidence 彼此冲突时调用。

找出当前 notes 中无法被同一个简单解释同时容纳的证据。

判断矛盾来自 measurement、sample、estimand、timing、specification、heterogeneity、noise，还是意味着原有解释需要改变。

优先寻找能够区分 competing explanations 的新证据，而不是替某个结果辩护。

~~~

---

~~~text
## 循环

**H1 → H2 → V1 → V2 → H3 → C1 → loop**

出现重要矛盾时，随时插入 **X1**。

不要求每轮所有 branches 都完整走一遍。

停止标准不是 specification 饱和，而是：

> 对所有高价值 research branches，继续探索已经很难显著改变我们对研究问题的判断。
~~~
