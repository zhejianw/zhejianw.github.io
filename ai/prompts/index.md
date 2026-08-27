---
layout: single
title: "Prompt 库 · Manuscript Layer"
permalink: /ai/prompts/
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

**Layers：[Notes / Evidence](/ai/prompts/notes/) · [Brief](/ai/prompts/brief/) · Manuscript**

本页收录 manuscript-level 的审阅、诊断、重组与投稿前检查 Prompts。

## 通用审阅原则

### Meta Prompt

**推荐模式：随具体 Prompt；不单独运行**

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

**推荐模式：Pro**

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

**推荐模式：Pro**

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

## 三、Abstract 与 Conclusion

### Prompt 9：Abstract ★★★★★

**推荐模式：Extra High**

~~~text
按照《期刊名》的读者和 editor 的阅读习惯审核 Abstract。

不要只做语言润色，重点判断 Abstract 是否完成了以下任务：

- 很快让读者知道研究问题为什么值得研究；
- 明确说清楚 data / institutional setting / empirical design；
- 准确传达最重要的 findings；
- numerical magnitudes 是否只保留真正有信息量的数字；
- null findings 是否表达准确；
- contribution 是否具体，而不是泛泛地说 “contributes to several literatures”；
- implication 是否超出了 identification 能支持的范围；
- 是否存在正文很重要但 Abstract 没有出现的东西；
- 是否存在 Abstract 强调、但正文实际上不重要的东西。

最后判断：

**如果 editor 只读 Abstract，他会不会准确理解这篇文章是什么、做了什么、发现了什么、为什么值得送审。**
~~~

### Prompt 10：Conclusion

**推荐模式：Extra High**

~~~text
审核 Conclusion 是否真正完成了文章的收束，而不是重复 Introduction 或变成第二个 Discussion。

重点检查：

- 是否简洁回到 research question；
- 是否准确总结 strongest evidence；
- 是否把 contribution 与 findings 联系起来；
- 是否出现正文没有建立的新 argument；
- 是否重复大量具体 regression results；
- 是否在最后几段不必要地扩大政策含义；
- 是否有必要明确 boundary conditions / external validity；
- 是否可以进一步缩短。

如果文章已经有较长 Discussion，尤其检查 Conclusion 是否还有独立存在的必要，以及 Discussion 和 Conclusion 的分工是否合理。
~~~

## 四、Data、Measures 与 Empirical Design

### Prompt 11：Data and Measures ★★★★★

**推荐模式：Extra High**

~~~text
从一个第一次接触这套数据的 applied microeconomics referee 的视角审核 Data and Measures。

重点检查：

### Sample

- population、sampling frame、analysis sample 是否区分清楚；
- inclusion/exclusion criteria 是否透明；
- sample construction 是否可以被读者复现；
- 各种 subsample 出现时是否有明确理由；
- sample size 的变化是否能被解释。

### Timing

- survey timing、policy timing、treatment timing、outcome measurement timing 是否清楚；
- 是否存在 reader 容易误解的时间关系。

### Measures

- treatment、outcomes、controls 的定义是否准确；
- self-reported / administrative / constructed measures 是否交代清楚；
- units、coding、normalization、direction 是否一致；
- binary / continuous / standardized outcomes 的解释是否容易理解；
- proxy variables 是否被描述得比其实际含义更强。

### Presentation

- 是否有过多 data-cleaning technical details 应该进入 appendix；
- 是否有关键 measurement information 被埋在 footnote 或 appendix；
- summary statistics 应该在哪里出现以及应该展示什么。

最后模拟 referee：

**如果我要攻击 sample selection、measurement error、representativeness 或 variable construction，最容易攻击哪几点？**
~~~

### Prompt 12：Analytic Strategy / Identification ★★★★★

**推荐模式：Pro**

~~~text
从 applied microeconometrics 的角度审核 Analytic Strategy。

第一步不要看 regression 写得复杂不复杂，而是回答：

**这篇文章究竟依靠什么 variation 识别什么 estimand？**

然后检查：

- treatment group / comparison group；
- treatment timing；
- identifying variation；
- identifying assumptions；
- estimand；
- regression specification；

这几个东西是否彼此一致。

进一步检查：

- control variables 是否必要，是否存在 bad controls；
- fixed effects 的作用是否解释准确；
- standard errors / clustering level 是否合理；
- specification 是否与 institutional setting 一致；
- coefficient interpretation 是否准确；
- causal language 是否与 identification strength 匹配；
- parallel trends、sorting、anticipation、spillover、composition 等 threats 中，哪些是真正 relevant；
- 哪些 identification concerns 必须正文回应；
- 哪些可以通过 appendix evidence 回应；
- 哪些无法解决，只应该谨慎界定 interpretation。

尤其避免把 Analytic Strategy 写成 regression specification 的堆积。

目标是让一个懂计量但不了解这个 institutional setting 的读者，可以快速理解：

**为什么这个 design 能回答 research question。**
~~~

### Prompt 13：Estimand Audit

**推荐模式：Pro**

~~~text
全文专门做一次 estimand audit。

检查每一个主要 table / figure 实际估计的对象是什么、彼此是否可比。不同 exhibit 不必估计完全相同的对象；如果不同，判断这种差异是否有明确目的、是否被清楚披露、是否与相应 claim 匹配。

包括：

- unit of observation / aggregation level；
- population / target population；
- treatment；
- comparison group；
- treatment timing / time horizon；
- outcome / outcome scale；
- functional form；
- conditioning set / fixed effects；
- weighting；
- sample restriction。

重点寻找：

- robustness specification 实际改变了 estimand，但正文仍把它解释成同一个 effect；
- subsample analysis 改变了 target population；
- standardized outcomes 改变了 interpretation；
- PPML / LPM / OLS 等不同模型下 coefficient 被直接比较；
- treatment definition 在不同 section 中发生细微变化。

最后给出一个 estimand crosswalk：逐个列出主要 table / figure、上述 estimand elements 及其对应 claim，并标记为 same、intentionally different 或 unintentionally changed。

对于每个重要差异，告诉我应该修改 regression、table / figure 的呈现、解释方式或措辞，还是只需要明确其边界。不要为了表面一致而强迫所有分析估计同一个 estimand。
~~~

## 五、Results

### Prompt 14：Results Narrative ★★★★★

**推荐模式：Extra High**

~~~text
不要把 Results 当成 regression output 的说明书。

请先结合 paper identity、claim hierarchy 和 analytic strategy，重新判断 Results section 的最优叙事顺序。

重点审核：

- 每个 subsection 是否围绕一个 substantive question，而不是围绕一张 table；
- 关键结果段落是否先告诉读者 substantive finding，再提供最有信息量的 estimate 与 uncertainty，而不是机械采用同一种段落模板；
- 是否出现逐列报告 coefficient / standard error / significance stars 的情况；
- 哪些数字真正值得在正文出现；
- economic magnitude 是否解释充分；
- uncertainty 是否表达准确；
- dependent mean / SD / baseline probability 是否在需要时帮助读者理解 magnitude；
- null results 是否解释得过多；
- heterogeneity / mechanism / robustness 是否打断 main-results flow；
- substantive interpretation 或 causal language 是否超过 identification 能支持的范围；
- figure 和 table 是否出现在读者最需要它们的位置。

最后重新设计 Results 的 narrative spine：

**读者应该按照什么顺序知道哪些事实，才能最自然地接受文章的 central claim。**

给出建议的 subsection 顺序、每个 subsection 的一句话任务，以及需要前移、后移、合并或转入 appendix 的内容。
~~~

### Prompt 15：Null Results

**推荐模式：Extra High；若 null finding 直接影响 central claim，使用 Pro**

~~~text
专门审核全文对 null / imprecise estimates 的处理。

不要把 null 自动视为问题或不重要的结果；它的含义取决于 estimand、estimate、confidence interval、统计精度以及 economically meaningful effect 的范围。

检查：

- “no effect”“no evidence”“not statistically significant”“small and precisely estimated” 是否被正确区分；
- confidence intervals 是否允许排除 economically meaningful effects；
- 是否把 power 不足误写为 absence of effect；
- 是否为了保护 paper 而过度弱化重要 null finding；
- 是否有大量逐项解释 null outcomes 导致文章显得 defensive；
- null finding 的正文或 appendix placement 是否由 substantive importance 决定，而不是由 statistical significance 决定。

判断哪些 null findings：

- 是论文的重要 substantive result；
- 只是 secondary outcome；
- 适合正文一句话概括；
- 应进入 appendix；
- 不值得讨论。

对于重要的 null finding，给出最准确的表述，并说明现有 confidence interval 能否支持 evidence of absence，还是只能支持 absence of evidence。
~~~

## 六、Robustness、Heterogeneity、Mechanisms

### Prompt 16：Robustness Architecture ★★★★☆

**推荐模式：Extra High**

~~~text
不要单纯判断 robustness “够不够多”，而是重新设计 robustness architecture。

对每一个 robustness exercise 回答：

**它究竟在回应哪个明确的 identification、measurement、inference、interpretation、external-validity 或 referee concern？**

如果没有明确 concern，直接指出。

区分：

- alternative specification；
- sensitivity analysis；
- falsification/placebo；
- alternative sample；
- alternative measurement；
- inference robustness；
- specification robustness。

检查是否存在：

- 多个 robustness 实际回答同一个问题；
- 没有明确 purpose 的 specification dumping；
- robustness 改变了 estimand，但正文仍把它解释为同一个 effect；
- robustness 比 main result 更复杂、更难解释；
- 重要 falsification 被埋得太深；
- 无信息量的 robustness 占据正文；
- 真正重要的 concern 没有对应的 targeted evidence，却存在大量低价值检查。

最后为每项 robustness 标明：它回应的 concern、独立信息价值、与 main estimand 的关系，以及应当归入：

**正文必须保留 / appendix 保留 / 可以删除。**
~~~

### Prompt 27：Pre-Submission Robustness Adjudication ★★★★★

**推荐模式：Pro**

~~~text
请把这篇已经较成熟的 manuscript 和 appendix 当作接近投稿版本，从 senior referee / editor 的角度重新审视。

重点不是继续扩张分析，而是判断：**还有哪些 robustness / diagnostic 是真正有必要补的，哪些只是 nice-to-have，哪些即使能做也没有必要做。**

优先寻找可能影响 identification、interpretation、credibility 或 referee decision 的缺口，并特别注意现有 robustness 是否已经足以回应这些 concern。

请给出一个有边界的裁决：

- **应当现在做**
- **有价值但可不做**
- **不建议再做**

不要因为“还可以做”就建议增加分析，也不要为了预防所有可能的 referee comment 而过度自害。目标是找到投稿前边际价值最高的少数 robustness。
~~~

### Prompt 17：Heterogeneity and Mechanisms

**推荐模式：Extra High；若 mechanism 是 central contribution，使用 Pro**

~~~text
审核 heterogeneity 和 mechanism 部分是否真的提高论文价值。

重点区分：

- treatment-effect heterogeneity；
- mechanism evidence；
- descriptive correlation；
- exploratory subgroup analysis。

检查：

- subgroup 是否有 ex ante substantive motivation；
- subgroup variable 是否为 pre-treatment；按 post-treatment variable 分组或 conditioning 是否可能引入偏误；
- subgroup sample 是否过小；
- interaction 与 subgroup regressions 的解释是否一致；
- 是否正式检验组间 estimates 的差异，而不是把“一组显著、另一组不显著”当作组间差异；
- multiple testing 是否成为问题，confirmatory 与 exploratory analyses 是否被准确区分；
- heterogeneous estimates 是否真的彼此 statistically different；
- mechanism outcome 的 timing 是否合理，是否位于可信的 causal chain 上；
- 是否把 mediator / correlate 错误称为 mechanism；
- evidence strength 是否足以支持 mechanism language。

最后判断每组分析：

**main text / appendix / drop。**

不要因为已经做了分析，就默认它必须留在文章里。
~~~

## 七、Literature

### Prompt 18：Literature Positioning ★★★★★

**推荐模式：Pro**

~~~text
不要把 literature review 当成 citation accumulation。

围绕最接近本文的文献重新构造 intellectual positioning。

需要实际检索并核实文献，不要凭印象虚构 papers、bibliographic details、findings 或 publication status。首先识别 3–8 篇真正 closest papers；如果真正接近的不足 3 篇，不要为了达到数量而填入 distant literature。

请分别回答：

- 完整 citation、版本及 publication status 是什么；
- 它研究的问题是什么；
- data / setting 是什么；
- empirical design 是什么；
- strongest finding 是什么；
- 与本文最实质性的 overlap 在哪里；
- 本文究竟增加了什么新的 evidence、identification、measurement、interpretation 或 information。

然后判断目前 Introduction 是否：

- 对 closest literature 讨论太少；
- 对 distant literature 讨论太多；
- 把 contribution 写成 “first paper to...” 式脆弱 novelty claim；
- 构造了 strawman；
- 用数据或 setting 的差异冒充 substantive contribution。

最重要的是帮助我找到一个框架，使本文与 closest papers 的关系表现为：

**extends / complements / reconciles / distinguishes / provides evidence on a previously unresolved margin**

而不是人为制造冲突。最后给出最优 positioning logic，并明确哪些 novelty claims 可以保留、需要收窄或应当删除。
~~~

### Prompt 19：单篇文献深度审核 ★★★★★

**推荐模式：Pro；仅用于真正 closest 或可能威胁论文的文献，普通文献使用 Extra High**

~~~text
仔细阅读这篇文章，并判断它对我的 manuscript 到底意味着什么。

先确认所读文件的版本、日期和 publication status。不要只依赖 abstract 或 search snippet；如果无法访问足够的正文，明确标记哪些判断尚未核实。对重要判断尽量给出对应的 section、page、table 或 figure。

不要只告诉我“应该引用”。

分别回答：

### Citation

- 是否应该 cite；
- 如果 cite，应该出现在 Introduction、Institutional Background、Methods、Results、Discussion 还是 Appendix；
- 应该 cite 它的哪一个具体观点或发现。

### Contribution

- 它是否削弱本文 novelty；
- overlap 到底发生在 research question、setting、data、design、outcome 还是 interpretation；
- 哪些地方高度重合，哪些地方实际上不同；
- manuscript 是否需要重新表述 contribution。

### Substance

- 它有没有提出本文应该回应的 substantive issue；
- 是否应该在 Introduction 主动定位；
- 是否应该在 Discussion 回应；
- 是否有内容不值得主动展开，以免无意义地扩大文章负担。

不能仅仅因为一篇直接相关的文献会削弱 novelty，就建议隐瞒或不引用；请区分 citation obligation 与叙事上是否需要展开。

### Methodology

- 它的方法论中有没有值得借鉴的设计、检验、measurement 或 presentation；
- 如果方法较旧，哪些思想仍值得借鉴；
- 哪些适合正文；
- 哪些只值得作为 appendix robustness；
- 哪些做法已经被更可靠的方法取代，不值得跟随。不要仅凭发表年份判断方法是否 outdated。

最后给出总体判断：

**必须精读并回应 / 应引用但不需要展开 / 可以普通引用 / 与本文关系很弱。**
~~~

### Prompt 20：Citation Audit

**推荐模式：Extra High**

~~~text
对全文 citation 做一次独立审核，不讨论文字风格。

区分两类任务：一是 manuscript 内部的 citation-reference 一致性；二是 citation 是否真正支持对应 statement。第二类判断必须建立在实际读取 source 的基础上；无法取得或尚未核实的 source 要明确标记，不要凭标题或印象判断。

检查：

- substantive factual claims 是否有 citation；
- citation 是否真的支持对应 statement；
- 是否引用 secondary source，而更适合引用 original source；
- institutional facts 是否有 authoritative source；
- 是否出现一个 citation 承担过多 claims；
- 是否有 citation cluster；
- 是否遗漏最接近的文献；
- 是否存在相关性已经降低、但仍机械保留的旧引用；不要仅仅因为文献较旧就建议删除；
- bibliography 中是否有正文未引用，或正文 citation 与 reference 不一致。

特别检查 Introduction 和 Discussion：

是否存在“看起来引用很多，但 intellectual engagement 很弱”的情况。

最后将问题分为：必须修正 / 需要查阅原文后核实 / 可选优化。
~~~

## 八、全文横向一致性

### Prompt 21：Full-Manuscript Consistency Audit ★★★★★

**推荐模式：Extra High；manuscript 与 appendix 很长时可使用 Pro**

~~~text
不要评价文章好不好，专门寻找全文内部不一致。

逐项核对 Title、Abstract、正文、Conclusion/Discussion、tables、figures、notes 和 appendix：

- sample definition；
- sample size；
- dates；
- policy description；
- variable definitions；
- treatment definition；
- outcome units；
- coefficient signs；
- numerical magnitudes；
- decimal precision；
- table/figure numbering；
- section references；
- appendix references；
- terminology；
- abbreviations；
- mathematical notation；
- fixed effects；
- clustering；
- control variables；
- significance notation；
- main findings 的语言表述。

特别寻找这种问题：

**每一处单独看都没有错，但不同地方放在一起会产生矛盾。**

不同 sample、estimand 或 specification 产生的差异不自动构成错误；判断它是否是有意差异、是否已清楚说明，以及对应 claim 是否匹配。

只报告真正存在的问题，不要为了完整而编造问题。对每个问题给出发生冲突的具体位置、建议采用的 canonical value / definition / wording，以及修改后的连锁影响。
~~~

### Prompt 22：Revision Ripple-Effect Audit ★★★★★

**推荐模式：Extra High；major revision 最终提交前可使用 Pro**

~~~text
这是修改稿，不要重新从头泛泛审稿。

需要同时提供上一版 manuscript、当前 manuscript、上一轮 editor/referee 要求，以及 response memo 或 change log。缺少相关材料时，明确说明哪些要求无法核实，不要推测已经完成。

首先逐项核实上一轮要求修改的内容是否真的完成，而不是仅仅表面上改了文字。对每项要求指出原要求、当前对应位置及完成证据。

然后重点寻找：

**旧问题解决之后，新修改有没有制造新的问题。**

例如：

- 改了 sample definition，但 table notes 没同步；
- 改了主结论，但 Abstract / Discussion 仍保留旧表述；
- 移动了 table，但正文引用顺序错了；
- 新增 robustness 后，analytic strategy 没解释；
- 删除 subsection 后，后文仍然引用；
- 修改术语后全文 terminology 不统一；
- 修改结果后 Introduction 中 numerical summary 没同步。

把问题分成：

1. 上一轮尚未完成；
2. 已完成且没有问题；
3. 修改后产生的新问题；
4. 因材料或证据不足而无法核实。
~~~

### Prompt 23：Terminology and Notation Audit

**推荐模式：High；重要稿件最终可用 Extra High 验收**

~~~text
专门审核全文 terminology、abbreviations 和 mathematical notation。

重点检查：

- 同一个概念是否用了多个名字；
- 不同概念是否被相同简称混淆；
- abbreviation 是否过多；
- abbreviation 是否第一次出现时定义；
- table 和正文缩写是否一致；
- treatment / post / interaction term 命名是否直观；
- mathematical symbols 是否有未定义、重复定义或意义变化；
- β、δ、γ 等 notation 是否真的有必要；
- equation notation 是否帮助理解，还是制造阅读成本。

不要为了表面统一而替换领域内的标准术语、制度的正式名称，或确有必要区分的概念。

原则：

**能不用 notation 就不强行 notation；需要 notation 时必须全篇稳定。**

最后给出 canonical terminology and notation map：列出推荐术语或符号、精确定义、首次定义位置、目前存在的 variants，以及需要同步修改的正文、equations、tables、figures、notes 和 appendix 位置。
~~~

## 九、图表、Footnotes、Appendix

### Prompt 1

**推荐模式：High；重要稿件最终可用 Extra High 验收**

~~~text
考虑到读者受众是《期刊名》，从正确性、美观、排版、简洁、无异议、自洽、方便读者理解、最优叙事等角度，包括标题、notes、里面的数学符号、缩写符号等等。
~~~

### Prompt 6

**推荐模式：Extra High**

~~~text
你重新规划下图表的顺序（顺序是否妥当、是否能帮助叙述的flow），以及是否应该出现在正文，即是否应该从appendix转移到正文，是否应该从正文转移到appendix。整理appendix内容的顺序，section/subsection顺序，是否有适合从appendix转移到正文及正文的footnotes的。
~~~

### Prompt 24：Standalone Table/Figure Audit

**推荐模式：High；复杂或承载核心结论的 table / figure 使用 Extra High**

~~~text
假设读者只看这一张 table / figure，不读正文。

判断它是否能够基本独立理解。不要把“独立理解”理解为把方法和背景全部塞进 notes；目标是让读者能够正确理解展示对象、关键比较、结果及其不确定性。区分 table 和 figure，只检查实际适用的项目。

检查：

- title 是否准确；
- subtitle / panel title 是否必要；
- dependent variable 是否清楚；
- sample 是否清楚；
- units 是否清楚；
- treatment variable、comparison group / reference category 是否清楚；
- fixed effects / controls 是否表达准确；
- standard errors / clustering 是否清楚；
- stars 是否定义；
- estimates、confidence intervals、axes、legends 或 scales 是否容易正确解读；
- mean / SD 是否需要；
- observation count 是否需要；
- notes 是否过长；
- abbreviation 是否过多；
- decimal precision 是否统一；
- 表格或图形的视觉 hierarchy 是否合理。

同时判断：

**哪些信息应该在表内，哪些应该在 notes，哪些应该在正文，哪些根本不需要出现。**

如需修改，给出 revised title / panel titles / notes，以及必要的版式调整；不要为了显得完整而重写没有问题的部分。
~~~

### Prompt 25：Footnote Audit

**推荐模式：High；footnotes 很多或涉及重要识别与解释问题时使用 Extra High**

~~~text
把全文 footnotes 单独审核一遍。审核时结合 footnote 所在的正文句子判断，不要孤立阅读；尤其检查移除 footnote 后，正文是否仍然准确、完整且不会误导。

判断每一个 footnote 应该属于：

- 正文；
- footnote；
- appendix；
- 删除。

特别寻找：

- 核心 identifying assumption 被埋在 footnote；
- 重要 sample information 被埋在 footnote；
- substantive result 被埋在 footnote；
- 会实质改变 claim 的 qualification 被埋在 footnote；
- 很长的 defensive footnote；
- 与主线无关的 literature discussion；
- technical detail 本应进入 appendix；
- footnote 只是因为作者舍不得删除而存在。

目标不是减少 footnote 数量本身，而是保证 footnote 真正承担“有用但会打断正文”的信息。

只列出需要处理的 footnotes，并对每一处说明位置、推荐归属、原因和具体修改方向；没有问题的 footnotes 可以整体确认，不必逐条复述。
~~~

### Prompt 26：Appendix as Evidence Architecture

**推荐模式：Extra High；appendix 很长或承载核心 identification evidence 时可使用 Pro**

~~~text
不要把 appendix 当成主文放不下内容的垃圾场。

把 appendix 看成 supporting evidence architecture。

对每一个 appendix section / table / figure 判断它服务于什么：

- identification；
- robustness；
- measurement；
- institutional detail；
- supplementary result；
- derivation / technical material。

同时建立 appendix item 与正文中具体 claim、concern 或引用位置之间的对应关系。

检查：

- 是否存在没有被正文引用的 orphan appendix；
- 是否存在 appendix 内容其实对 main identification 太重要，应该进入正文；
- 是否有正文内容可以放心移入 appendix；
- appendix 顺序是否应该跟随正文中问题出现的顺序；
- section / subsection hierarchy 是否清楚；
- 同一 concern 的证据是否散落在多个位置；
- 正文是否在读者需要相应证据时，准确指向 appendix。

最终重新规划整个 appendix 的结构，并给出 proposed outline、各现有项目的新位置，以及需要同步修改的正文 cross-references。不要仅仅为了形式整齐而重排；每项调整都应改善证据与主文 claim 的对应关系。
~~~

## 全文结构与格式

### Prompt 2

**推荐模式：High；重要稿件最终可用 Extra High 验收**

~~~text
你把所有标题、子标题都过一遍，包括appendix和manuscript正文，看看是否需要修改和优化的，给出修改意见。从正确性、美观、排版、简洁、无异议、自洽、方便读者理解、最优叙事等角度 。
~~~

### Prompt 3

**推荐模式：High**

~~~text
将全文的格式都过一遍，重点检查粗体、斜体、段落首句的格式是否出现滥用的情况。
~~~

## 章节审核

### Prompt 4：Introduction

**推荐模式：Extra High**

~~~text
这个稿件的introduction你审核下是否符合经典的投稿规范。

0. 结构是否合理，篇幅等是否合理，是否缺失模块。
1. hook是否合适，是否能引起读者的注意。是否在合适的地方提出research idea，对research idea描述是否准确。literature 和 contribution的介绍是否优秀，是否过于泛泛而谈。
2. finding部分是否准确，是否有不该出现的过于详细的内容，是否有该出现但是没出现的内容。是否过于计量化、统计化，读者是否能快速理解。
3. implication是否准确，是否在合理的范围提高本文的格调。
~~~

### Prompt 5：Discussion

**推荐模式：Extra High；涉及 weakness 取舍或全局裁决时使用 Pro**

~~~text
Discussion

你想想，discussion有什么修改意见。

我对于discussion没有什么太多很多指引，我的想法是，很多内容应该埋在appendix，而不应该堆在discussion（discussion很容易成为垃圾堆）。

discussion应该回应一些很容易会想到的、明显的文章缺陷（但是不一定能够解决，只能适当做些讨论），这一块很微妙，不能成为自害，但是又不能对明显应该讨论的话题缺失。如果能用文章提到的主体数据回应最好了，或者用容易获得的公开数据、统计数据回应也很好，实在不行利用同行审阅后的文献的观点/内容回应也可以。可以讨论的话题，例如如何外推我们的发现（或者说为什么不能外推、什么时候适合外推）；例如一些selection bias，measurement error，endogenous，representative

discussion可能也需要适当地与最接近的文献互动，讨论与其关系，是如何互补（而不是互相伤害，如果与近的文献观点违背，要尽量谈出一些框架使得两者可以共存）。
~~~

## 十、外部攻击：Editor 与 Referee

### Prompt 27：Five-Minute Editor Read ★★★★★

**推荐模式：Pro**

~~~text
模拟《期刊名》的 editor。

你没有时间仔细读全文，只按照真实 desk-review 的方式快速阅读：

1. Title；
2. Abstract；
3. Introduction；
4. main figures/tables；
5. Conclusion；
6. 必要时扫一眼 design。

告诉我：

- 你认为这篇文章是什么；
- strongest selling point 是什么；
- 最明显的 weakness 是什么；
- contribution 是否足够清楚；
- empirical design 是否让人产生立即的不信任；
- 哪些地方让你觉得 manuscript 太长、太散或太复杂；
- 哪个问题最可能导致 desk rejection。

最后只给出 **最影响送审概率的修改意见**，不要把 minor wording issues 混进来。
~~~

### Prompt 28：Hostile Referee Simulation ★★★★★

**推荐模式：Pro**

~~~text
假设你是一位专业、认真，但没有义务帮助作者的 referee。

你的目标不是总结文章，而是寻找拒稿理由。

请从以下方面攻击文章：

- novelty；
- identification；
- measurement；
- sample selection；
- external validity；
- interpretation；
- statistical inference；
- literature positioning；
- robustness；
- mechanisms；
- presentation。

但不要为了攻击而制造不成立的问题。

每一个 concern 判断：

- Fatal；
- Major；
- Moderate；
- Minor。

然后进一步区分：

- manuscript 已经有证据可以回应，只是没有表达好；
- 可以通过低成本修改或 appendix 解决；
- 需要实质性新分析；
- 基本无法解决，只能收窄 claim。

最后告诉我：

**如果只能提前消灭三个 referee concerns，最应该消灭哪三个。**
~~~

### Prompt 29：Friendly Senior Coauthor

**推荐模式：Pro**

~~~text
现在不要模拟 referee，而是模拟一个非常强的 senior coauthor。

你的目标不是挑错，而是在**尽量不增加大量新工作**的前提下，把文章提高一个档次。

寻找：

- 可以更锋利的 research question；
- 可以更好的 framing；
- 可以更聪明地组织已有 evidence 的方式；
- 可以删掉的枝节；
- 可以利用已有结果形成的更强 argument；
- 一两个 high-return、low-cost 的 additional analyses；
- 更好的 figure/table presentation；
- 更准确、更有价值的 literature positioning。

重点寻找 **high return / low marginal cost** 的修改，而不是重新设计整篇论文。
~~~

## 十一、删减与叙事效率

### Prompt 30：Compression Pass ★★★★★

**推荐模式：Extra High**

~~~text
假设编辑要求 manuscript 在不损失 substantive content 的情况下缩短约 15–20%。

不要机械删字，而是判断文章的信息结构。

寻找：

- 重复出现的 argument；
- Introduction 与 Discussion 重复；
- Results 重复 table 内容；
- institutional background 过长；
- robustness 在正文占比过高；
- literature review 中不服务 contribution 的内容；
- 可以合并的 paragraphs；
- 可以转为 footnote 的内容；
- 可以转 appendix 的内容；
- 完全可以删除的内容。

同时保护：

- identification logic；
- strongest findings；
- contribution；
- necessary caveats。

目标是：

**删完以后论文不是信息更少，而是 signal-to-noise ratio 更高。**
~~~

### Prompt 31：Paragraph-Level Narrative Audit

**推荐模式：Extra High**

~~~text
逐段审核正文，但不要主要做 grammar editing。

对每一段判断：

- 这一段的唯一任务是什么；
- 第一两句是否马上表达这个任务；
- 是否同时承担两个以上不相关任务；
- 是否与上一段自然衔接；
- 是否与下一段形成 logical progression；
- 是否有 sentence 可以删除而不损失信息；
- 是否存在先给细节、后告诉读者为什么重要的问题。

特别寻找：

**technically correct but narratively misplaced** 的段落。
~~~

## 十三、一个很有价值的最终 Meta-Prompt

### Prompt 33：What Am I Not Seeing? ★★★★★

**推荐模式：Pro**

~~~text
前面不要套用任何固定 checklist。

完整阅读 manuscript 后，回答一个问题：

**作为作者，我现在最可能没有意识到什么？**

可以是：

- paper identity；
- contribution；
- identification；
- reader confusion；
- hidden contradiction；
- closest literature；
- interpretation；
- presentation；
- referee concern；
- 一个被低估的 strong result；
- 一个被高估的 weak result；
- 一个不值得继续投入时间的部分。

不要重复那些明显、机械、任何文章都适用的建议。

寻找只有在真正理解这篇 manuscript 后才会发现的问题。

最后只告诉我最重要的 3–5 个。
~~~

## 十四、用于多轮修改后的“总验收”

### Prompt 34：Manuscript Integration Audit ★★★★★

**推荐模式：Pro**

~~~text
这篇文章已经经历很多轮局部修改。

现在不要再把 Introduction、Data、Results、Discussion 分开看，而是把 manuscript 当成一个完整产品。

检查整篇文章是否形成以下完整链条：

**Question → Institutional Setting → Identification → Evidence → Interpretation → Contribution → Implication**

寻找任何断裂：

- Introduction 提出的问题后面没有回答；
- design 识别的 estimand 与 research question 不一致；
- Results 回答了一个与 Introduction 不完全相同的问题；
- Discussion 讨论的 implication 超出了 Results；
- contribution 依赖正文没有真正建立的 finding；
- appendix 解决了 concern，但正文没有告诉读者；
- title / abstract 承诺了正文并未交付的内容。

最后不要给我几十条零散修改意见。

告诉我：

1. 整篇文章现在是否已经“立住”；
2. 最大的三个 remaining weaknesses；
3. 下一轮修改最应该集中在哪里；
4. 哪些部分已经足够好，不应该继续折腾。
~~~
