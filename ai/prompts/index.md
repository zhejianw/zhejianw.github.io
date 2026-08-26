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
