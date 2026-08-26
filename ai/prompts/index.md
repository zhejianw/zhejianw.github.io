---
layout: single
title: "Prompt库"
permalink: /ai/prompts/
author_profile: false
lang: zh-CN
sitemap: false
noindex: true
visibility: public
status: current
last_updated: 2026-08-26
---

## 通用审阅原则

### Meta Prompt

~~~text
不要机械地按照我列出的项目逐项打勾。先完整理解文章，再判断真正影响论文质量、可信度和发表概率的问题。我的问题只是审阅视角，不是对你的约束；如果你发现我没有提到但更重要的问题，优先指出。

修改建议要有优先级。区分哪些是必须修改、哪些是明显改善、哪些只是可选优化。

不要为了“显得完整”而机械建议增加 regression、robustness 或 literature。新增分析必须能够解决一个明确的 identification、interpretation、positioning 或 referee concern，否则宁可不加。

对每个重要问题尽量说明：

1. 问题出现在哪里；
2. 为什么是问题；
3. 最优修改方向；
4. 修改后是否会对文章其他部分产生连锁影响。

核心目标不是让文章“内容更多”，而是让文章更可信、更容易读、更难被攻击，并且形成最优叙事。
~~~

## 二、Paper Identity 与 Contribution

### Prompt 7：Paper Identity ★★★★★

~~~text
先不要逐句修改。站在 editor 和 applied microeconomist 的角度，判断这篇文章到底是一篇“什么文章”。

请分别用一句话概括：

- research question；
- empirical design；
- central finding；
- paper-level contribution。

然后判断目前 manuscript 是否围绕同一个清晰的 paper identity 展开。

重点检查：

- Title、Abstract、Introduction、Results、Discussion/Conclusion 所描述的是不是同一篇文章；
- 是否同时存在几个彼此竞争的 paper identities；
- 哪一个 identity 最强、最 defensible、最适合目标期刊；
- 是否存在一些结果虽然有趣，但正在稀释主线；
- contribution 是否建立在真正新的 margin 上，而不是仅仅“换数据、换国家、换 outcome”；
- 作者是否把最重要的东西说小了，或者把次要结果说得太大。

最后告诉我：

**如果只能保留一个 central message，这篇文章最应该让读者记住什么。**
~~~

### Prompt 8：Claim Hierarchy ★★★★★

~~~text
把全文所有重要 claims 按层级重新梳理。

区分：

1. central claim；
2. supporting claims；
3. secondary findings；
4. suggestive evidence；
5. robustness evidence；
6. contextual/descriptive evidence。

检查目前 manuscript 是否错误地给不同证据相同的叙事权重。

特别检查：

- weak evidence 是否被写成 strong evidence；
- null results 是否被写成 “no effect”；
- statistically significant 是否被错误等同于 economically important；
- descriptive evidence 是否被赋予 causal interpretation；
- mechanism evidence 是否实际上只能支持 suggestive interpretation；
- robustness results 是否正在抢占 main results 的叙事空间。

重新给出一个最优的 claim hierarchy，并指出哪些 claims 应该升级、降级、移到 appendix 或删除。
~~~

## 图表与附录

### Prompt 1

~~~text
考虑到读者受众是《期刊名》，从正确性、美观、排版、简洁、无异议、自洽、方便读者理解、最优叙事等角度，包括标题、notes、里面的数学符号、缩写符号等等。
~~~

### Prompt 6

~~~text
你重新规划下图表的顺序（顺序是否妥当、是否能帮助叙述的flow），以及是否应该出现在正文，即是否应该从appendix转移到正文，是否应该从正文转移到appendix。整理appendix内容的顺序，section/subsection顺序，是否有适合从appendix转移到正文及正文的footnotes的。
~~~

## 全文结构与格式

### Prompt 2

~~~text
你把所有标题、子标题都过一遍，包括appendix和manuscript正文，看看是否需要修改和优化的，给出修改意见。从正确性、美观、排版、简洁、无异议、自洽、方便读者理解、最优叙事等角度 。
~~~

### Prompt 3

~~~text
将全文的格式都过一遍，重点检查粗体、斜体、段落首句的格式是否出现滥用的情况。
~~~

## 章节审核

### Prompt 4：Introduction

~~~text
这个稿件的introduction你审核下是否符合经典的投稿规范。

0. 结构是否合理，篇幅等是否合理，是否缺失模块。
1. hook是否合适，是否能引起读者的注意。是否在合适的地方提出research idea，对research idea描述是否准确。literature 和 contribution的介绍是否优秀，是否过于泛泛而谈。
2. finding部分是否准确，是否有不该出现的过于详细的内容，是否有该出现但是没出现的内容。是否过于计量化、统计化，读者是否能快速理解。
3. implication是否准确，是否在合理的范围提高本文的格调。
~~~

### Prompt 5：Discussion

~~~text
Discussion

你想想，discussion有什么修改意见。

我对于discussion没有什么太多很多指引，我的想法是，很多内容应该埋在appendix，而不应该堆在discussion（discussion很容易成为垃圾堆）。

discussion应该回应一些很容易会想到的、明显的文章缺陷（但是不一定能够解决，只能适当做些讨论），这一块很微妙，不能成为自害，但是又不能对明显应该讨论的话题缺失。如果能用文章提到的主体数据回应最好了，或者用容易获得的公开数据、统计数据回应也很好，实在不行利用同行审阅后的文献的观点/内容回应也可以。可以讨论的话题，例如如何外推我们的发现（或者说为什么不能外推、什么时候适合外推）；例如一些selection bias，measurement error，endogenous，representative

discussion可能也需要适当地与最接近的文献互动，讨论与其关系，是如何互补（而不是互相伤害，如果与近的文献观点违背，要尽量谈出一些框架使得两者可以共存）。
~~~
