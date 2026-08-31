---
title: "Prompt 库 · Notes → Brief Routing"
excerpt: "在文献改变问题集合之后，决定何时重开 evidence、何时锁定 Brief 的迭代工作流。"
permalink: /ai/prompts/routing/
prompt_layer: routing
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-08-31
---

{% include prompt-layer-tabs.html %}

<p class="prompt-usage-note"><strong>这不是线性移交。</strong> 文献负责改变问题集合，Pro 负责裁决哪些问题值得重新打开 evidence，Claude Code 回到本地 data / code / notes 解决；只有 paper-level uncertainty 足够低时才锁定 Brief。</p>

<nav class="prompt-workflow" aria-label="Notes to Brief routing workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/notes/">Open Notes</a><span class="workflow-arrow">→</span>
  <a href="#routing-literature-triage">Literature</a><span class="workflow-arrow">→</span>
  <a href="#routing-ex-ante-hypothesis-outcome-audit">Hypotheses</a><span class="workflow-arrow">→</span>
  <a href="#routing-evidence-brief-router">Router</a><span class="workflow-arrow">↺</span>
  <a href="#routing-existing-data-targeted-notes">Targeted Evidence</a><span class="workflow-arrow">→</span>
  <a href="#routing-candidate-brief">Candidate Brief</a><span class="workflow-arrow">→</span>
  <a href="#routing-candidate-brief-reverse-audit">Reverse Audit</a><span class="workflow-arrow">↺</span>
  <a href="#routing-final-brief-lock">Final Brief</a>
</nav>

<section class="routing-map" aria-labelledby="routing-map-title">
  <div class="routing-map__header">
    <h2 id="routing-map-title">Evidence routing map</h2>
    <p>只让会改变 paper-level judgment 的问题重新打开项目。</p>
  </div>
  <ol class="routing-map__rail">
    <li>
      <a href="#routing-literature-triage"><span>Literature</span><strong>Triage → Read → Hypotheses → Synthesize</strong></a>
    </li>
    <li class="is-decision">
      <a href="#routing-evidence-brief-router"><span>Pro Router</span><strong>Enough, reopen, narrow, or stop?</strong></a>
    </li>
    <li>
      <a href="#routing-existing-data-targeted-notes"><span>Evidence loop</span><strong>Existing data or new data</strong></a>
    </li>
    <li>
      <a href="#routing-candidate-brief"><span>Candidate Brief</span><strong>Design the strongest defensible paper</strong></a>
    </li>
    <li class="is-decision">
      <a href="#routing-candidate-brief-reverse-audit"><span>Reverse audit</span><strong>Check against the full local world</strong></a>
    </li>
    <li>
      <a href="#routing-final-brief-lock"><span>Brief lock</span><strong>Materialize one authoritative Brief</strong></a>
    </li>
  </ol>
  <div class="routing-map__branches" aria-label="Router outcomes">
    <span>Evidence sufficient → Candidate Brief</span>
    <span>Existing-data question → Targeted Notes → Router</span>
    <span>New-data question → Feasibility → Acquisition → Router</span>
    <span>Untestable / low-value → Claim boundary or Discussion</span>
    <span>Fatal problem → Downgrade or stop</span>
  </div>
</section>

<nav class="prompt-section-toc" aria-label="Routing prompt index">
  <strong>Prompts</strong>
  <a href="#routing-literature-triage">0 Triage</a><span class="toc-separator">·</span>
  <a href="#routing-close-reading">1 Read</a><span class="toc-separator">·</span>
  <a href="#routing-ex-ante-hypothesis-outcome-audit">1A Hypotheses</a><span class="toc-separator">·</span>
  <a href="#routing-brief-input-pack">2 Synthesize</a><span class="toc-separator">·</span>
  <a href="#routing-evidence-brief-router">3 Route</a><span class="toc-separator">·</span>
  <a href="#routing-existing-data-targeted-notes">4A Existing data</a><span class="toc-separator">·</span>
  <a href="#routing-new-data-feasibility">4B Feasibility</a><span class="toc-separator">·</span>
  <a href="#routing-new-data-acquisition">4C Acquisition</a><span class="toc-separator">·</span>
  <a href="#routing-evidence-return">5 Return</a><span class="toc-separator">·</span>
  <a href="#routing-candidate-brief">6 Candidate</a><span class="toc-separator">·</span>
  <a href="#routing-candidate-brief-reverse-audit">7 Audit</a><span class="toc-separator">·</span>
  <a href="#routing-final-brief-lock">8 Lock</a><span class="toc-separator">·</span>
  <a href="#routing-materialize-final-brief">9 Materialize</a>
</nav>

## Routing Prompt 0 · Literature Triage {#routing-literature-triage}

<p class="prompt-description">先给文献分配阅读预算，只保留可能改变最终 Brief 的高价值论文。</p>

**推荐模式：CC Fable High**

~~~text
现在处于 Notes / Evidence 已经较丰富、准备向 Brief 收敛的阶段。

先扫描项目现有 literature corpus，不要立即逐篇做完整总结。根据每篇文献改变最终 research brief 的潜在价值建立 reading queue：

- paper-defining / closest；
- identification、measurement 或 methodology 上可能具有 binding effect；
- interpretation / mechanism / external-validity relevant；
- contextual；
- low-information / 暂时无需继续投入。

判断标准不是期刊等级或与关键词的表面相似度，而是这篇文献是否可能改变 paper identity、identification、claim boundary、contribution、interpretation 或下一步 evidence demand。

核实版本和 publication status，并标记哪些文献必须精读正文及 appendix，哪些只需重点阅读，哪些目前没有继续投入的必要。

把结果写入 literature reading map。不要为了完整给所有论文相同权重，也不要在这一阶段形成最终 paper story。
~~~

## Routing Prompt 1 · Close Reading {#routing-close-reading}

<p class="prompt-description">逐篇精读真正重要的论文，并把 binding implications 落盘。</p>

**推荐模式：CC Opus Max；真正 binding 的论文可用 Fable High/Max 再读**

~~~text
按照当前 literature reading map 逐篇处理真正重要的文献。

实际阅读正文及必要的 appendix，不要只依赖 abstract、已有 citation note 或搜索摘要。每篇重要论文形成独立 literature memo，准确记录：

研究问题、setting / data、empirical design、strongest finding，以及它与本项目真正的 overlap 和 difference。

重点回答的不是“这篇论文讲了什么”，而是：

这篇论文对我们的 identification、measurement、estimand、interpretation、contribution、framing 或 evidence demand 到底意味着什么；它是否占据了我们原本想声称的 intellectual territory；是否产生 novelty / credibility threat；是否提出了当前 evidence 尚未解决的重要问题。

不同论文不必使用相同篇幅。低信息量文献只留下足以避免未来重复阅读的记录。

每篇完成后将判断写入项目 literature notes，并更新跨文献 literature matrix。不要依靠当前 session context 保存长期记忆，也不要提前把所有文献拼成一个 manuscript story。
~~~

## Routing Prompt 1A · Ex Ante Hypothesis & Outcome Audit {#routing-ex-ante-hypothesis-outcome-audit}

<p class="prompt-description">先固定事前 hypothesis hierarchy 与对应 measurement，再以同一标准裁决现有 evidence 和下一步。</p>

**推荐模式：GPT Pro；最好在 closest literature 精读完成后、Evidence / Brief Router 之前使用**

~~~text
重新审视当前项目的核心 hypotheses 和 outcomes。暂时不要从现有 estimates、显著性、precision 或“哪个结果最好看”出发；先基于 theory、institutional setting 和 closest literature，判断我们事前真正有理由预期哪些 outcomes 应该发生什么变化，以及哪些 measurement 最直接对应这些 hypotheses。

在这套 hypothesis hierarchy 固定之后，再把现有 evidence 映射回来：哪些 hypotheses 得到支持，哪些形成可信的 null / precise null，哪些只是 underpowered、measurement 不合格、identification 不成立，哪些还缺关键数据。

不要因为现有结果漂亮而反向修改 hypothesis、outcome 或经济故事。只有当一个结果同时对应强 ex ante prediction、合适 measurement、可信 identification，并且 precision 足以区分经济上有意义的效应时，才赋予它强 substantive interpretation。

最后判断：目前真正最值得研究的 hypotheses 是什么，现有 evidence 能支持到哪里，以及下一步最高 information value 是补分析、补数据、改变 framing，还是接受这个方向没有足够有意义的证据。
~~~

## Routing Prompt 2 · Literature Synthesis → Brief Input Pack {#routing-brief-input-pack}

<p class="prompt-description">把完整 evidence、design 与 closest literature 压缩成供 Pro 裁决的输入包。</p>

**推荐模式：CC Fable High/Max**

~~~text
基于完整 Notes / Evidence、empirical design map 和已经精读的 literature corpus，为下一步 GPT Pro 的 paper-level adjudication 制作 `brief_input_pack.md`。

不要替 Pro 写最终 research brief，也不要机械汇总所有 literature notes。只压缩真正可能改变 paper identity 的信息：

- 当前最可信的 evidence 和最强 counterevidence；
- identification / estimand 当前真正支持到什么程度；
- 3–8 篇真正 closest papers，它们分别已经占据了什么 intellectual territory；
- 哪些 literature 实质限制、挑战或改变我们的 contribution；
- 哪些 methodology / measurement literature 对当前 design 是 binding 的；
- 当前仍然合理存在的 competing paper framings；
- 哪些事实已经确定，哪些仍存在真正 uncertainty；
- 文献新产生了哪些可能需要补 evidence 的问题；
- 最需要 GPT Pro 裁决的少数 paper-level questions。

重要判断尽量指向准确的本地 evidence、output、literature memo 或原始 paper 路径。

目标是信息压缩，而不是制造另一份巨大的 literature review。
~~~

## Routing Prompt 3 · Evidence / Brief Router {#routing-evidence-brief-router}

<p class="prompt-description">核心裁决器：决定哪些问题已足够、哪些值得回到 evidence、哪些应收窄或停止。</p>

**推荐模式：GPT Pro；最好使用 fresh session**

~~~text
基于当前完整的 evidence summary、empirical design map 和 literature synthesis，判断这个项目现在最有价值的下一步是什么。

暂时不要为了进入 manuscript 而强行形成最终 story。重点判断 literature 和现有 evidence 是否产生了新的、真正值得解决的 evidence demand。

对于每个可能影响 paper-level judgment 的 unresolved issue，判断它属于哪一种：

- 现有 evidence 已经足够，可以直接在 Brief 中裁决；
- 只需重新检查现有 data / code；
- 需要利用现有数据生成新的 substantive evidence；
- 需要获取新的、现实可获得的数据；
- 需要代价很高或可行性不确定的新数据 / design；
- 本质上无法通过合理新增 evidence 解决，应通过收窄 claim、改变 framing 或接受 limitation 处理；
- 足以使当前 paper version 应被显著降级或停止。

不要因为 literature 提出了一个 logically possible concern 就自动增加工作。

只有当新增 evidence 的不同可能结果会实质改变 paper identity、identification、central claim、contribution、interpretation 或“这篇 paper 是否值得继续”时，才建议重新打开 Data / Notes 层。

最后给出明确 routing：

哪些问题现在已经足够；
哪些返回现有数据；
哪些值得获取新数据；
哪些留给 Brief / Discussion 处理；
哪些可能改变整个项目；
以及满足什么条件以后可以进入 Candidate Brief。
~~~

<aside class="routing-input-note" aria-label="Router input pack">
  <strong>Stage 3 推荐输入</strong>
  <span><code>brief_input_pack.md</code></span>
  <span>current evidence release / Notes synthesis</span>
  <span><code>empirical_design_map.md</code></span>
  <span>极少数最重要论文全文</span>
  <span>旧 Brief 可作参考，但不得继承其 framing</span>
</aside>

## Routing Prompt 4A · Existing Data → Targeted Notes {#routing-existing-data-targeted-notes}

<p class="prompt-description">只用现有数据解决会改变 Brief 的少数 uncertainty，不重开全部 specification space。</p>

**推荐模式：Fable High；任务高度机械时可用 Opus High/Max**

~~~text
下面是 Brief Router 认为仍然值得用现有数据解决的少数 evidence questions。

只围绕这些问题暂时返回 Notes / Evidence layer。不要重新开放整个 specification space，也不要顺手增加无关 robustness。

对每个问题先明确：

为什么它可能改变 paper-level judgment；
现有 data 能否真正区分 competing explanations；
最有信息价值的 analysis / diagnostic 是什么；
不同可能结果分别会怎样改变 identification、claim、framing 或 contribution。

然后完成最小但足够有区分力的分析，将 positive、null、contradictory 或 failed evidence 都如实写入对应 Notes / outputs。

如果新 evidence 改变了 design understanding，相应更新 empirical design map。
~~~

## Routing Prompt 4B · New Data → Feasibility {#routing-new-data-feasibility}

<p class="prompt-description">新增数据前先做 value-of-information 与现实可行性判断。</p>

**推荐模式：Fable High**

~~~text
Brief development 暴露出一个可能需要新增数据才能解决的关键 evidence gap。

先不要直接大规模抓取数据。

调查：

理想数据到底是什么；
现实中有哪些可能来源；
granularity、time coverage、identifiers、linkability、measurement quality 和获取难度如何；
公开下载、API、网页抓取、申请、购买或人工构建分别需要什么成本；
有哪些下位替代；
不同数据质量分别能够解决多少 identification / interpretation 问题。

最重要的是判断：

如果获得这些数据，它的不同可能结果是否真的会改变 paper identity、identification、central claim、contribution 或是否值得继续这篇 paper。

如果不会，不要获取。

如果 expected information value 足够高且数据现实可得，提出最小必要 acquisition plan；如果获取成本明显超过研究价值，说明 paper 应如何在没有该数据的情况下调整。
~~~

## Routing Prompt 4C · New Data → Acquisition / Integration {#routing-new-data-acquisition}

<p class="prompt-description">按已裁决的最小方案获取并接入数据，再回到 Notes 回答原始问题。</p>

**推荐模式：Opus Max**

~~~text
根据已经裁决的数据 acquisition plan，获取并整理解决当前 evidence gap 所需的最小数据。

优先保证 provenance、coverage、identifiers、timing 和 linkage 可以审计，不为了扩大数据库而额外抓取无关内容。

保留原始输入和获取记录，建立必要的 cleaning / linkage code，并验证新增数据与现有 analysis unit 的匹配质量。

完成后不要直接修改 manuscript framing。回到 Notes / Evidence layer，利用新数据回答它最初被获取来解决的 research question，并记录它是否真正改变了原来的判断。
~~~

## Routing Prompt 5 · Evidence Return → Pro {#routing-evidence-return}

<p class="prompt-description">把本轮针对性证据压缩成可重新交给 Router 的裁决材料。</p>

**推荐模式：Fable High**

~~~text
基于本轮针对性 evidence work，制作一份 `return_to_brief_adjudication.md`，供 GPT Pro 重新裁决。

不要把完整分析过程复制进去。简洁说明：

- Pro 上一轮要求解决什么；
- 实际核查或新增了什么 evidence；
- 得到了什么结果；
- 哪些原有 concern 已解决、被加强、被修改或无法解决；
- 这些 evidence 对 identification、claim boundary、paper framing 或 contribution 实际意味着什么；
- 目前还剩哪些真正可能改变 Brief 的问题。

附上关键 data / code / outputs / notes 的准确路径。

同时给我一份中文综述。不要用代码名、回归编号和 methodology jargon 堆砌；像向一个懂 applied micro、但没看过本轮代码的合作者解释一样，告诉我：

现在最可信的故事是什么；
我们为什么相信它；
这一轮到底改变了什么；
还剩什么真正的问题。
~~~

<p class="prompt-usage-note"><strong>Stage 5 完成后：</strong>把产出的 <code>return_to_brief_adjudication.md</code> 重新交给 Stage 3 Router；不要直接写 Brief。</p>

## Routing Prompt 6 · Candidate Brief {#routing-candidate-brief}

<p class="prompt-description">在 paper-level evidence 足够后，比较 competing identities 并设计最强可辩护论文。</p>

**推荐模式：GPT Pro；独占一个完整 pass**

~~~text
现在 evidence routing 已经基本完成，可以进入 Brief layer。

基于当前 evidence、literature 和最新 adjudication，重新判断在现有材料下最值得形成的一篇 paper。不要继承作者此前的 framing，也不要因为某个分析投入很多工作就提高它的叙事权重。

允许先存在多个 competing paper identities；比较后选择 strongest defensible version。

形成一份 candidate research brief，明确：

- 一句话 paper identity；
- 核心 research question，以及为什么经济学上值得研究；
- identification / estimand、关键 assumptions 和 claim boundary；
- central claim、supporting claims 和明确不能声称的东西；
- 最关键的 evidence spine；
- 哪些 evidence 应进入正文，哪些放 appendix，哪些应舍弃；
- 3–8 篇 closest literature 以及本文真正增加的 intellectual margin；
- 最自然的 economic interpretation / mechanism，以及重要 alternative interpretations；
- manuscript 最合理的 narrative architecture；
- 每个主要 section 应承担什么功能；
- main tables / figures 应分别让读者学到什么；
- appendix 应承担哪些 supporting / diagnostic evidence；
- Discussion 真正值得处理的问题；
- 仍存在但不足以阻止写作的 uncertainty。

目标不是把已有 analysis 尽可能塞进 paper，而是设计出在现有 evidence 下最强、最清楚、最 defensible 的 manuscript。

如果过程中发现一个之前遗漏、且真的足以改变 paper-level judgment 的 evidence gap，不要强行完成 Brief；明确指出并重新 route 回 evidence layer。
~~~

## Routing Prompt 7 · Reverse Audit of Candidate Brief {#routing-candidate-brief-reverse-audit}

<p class="prompt-description">用完整本地 evidence 与 literature 反查 Pro 压缩世界中的遗漏、误读与过度 claim。</p>

**推荐模式：Fable High/Max**

~~~text
下面是 GPT Pro 根据当前 evidence 和 literature 提出的 candidate research brief。

不要机械接受，也不要因为这是高级模型的判断就替它寻找支持。

利用完整本地 Notes、data、code、outputs、empirical design map、literature memos 和必要的原始 papers，对这份 Brief 做一次独立的事实与文献反向核验。

判断：

- central claims 是否真的被当前 evidence 支持；
- identification / estimand 是否被正确描述；
- 是否存在被 Brief 遗漏但会改变 framing 的 positive、null、contradictory 或 failed evidence；
- closest literature 是否被准确理解；
- contribution 是否真的没有被现有论文占据；
- proposed evidence spine 和 exhibits 是否都有当前 artifacts 支持；
- 是否存在漂亮但数据实际上无法支撑的 interpretation；
- 是否错误地把 suggestive mechanism 写成 tested mechanism；
- 是否仍存在足以重新打开 Data / Notes 的 material uncertainty。

不要因为审核而重新无限探索。

最终制作 `return_to_pro_brief_audit.md`：

明确哪些部分确认；
哪些应修改；
哪些必须重新裁决；
哪些问题如果不处理会阻止锁定 Brief。

同时给我一份普通中文综述，解释最终 paper 大概会是什么样，以及目前真正还有什么分歧。
~~~

<p class="prompt-usage-note"><strong>Reverse-audit 分流：</strong>如果不同答案会改变核心 paper，回到 Stage 3 Router；如果没有，进入 Final Brief Lock。</p>

## Routing Prompt 8 · Final Brief Lock {#routing-final-brief-lock}

<p class="prompt-description">解决候选 Brief 与本地反审计的冲突，锁定最终 authoritative research brief。</p>

**推荐模式：GPT Pro**

~~~text
这是 Claude Code 利用完整本地 evidence、code、outputs 和 literature corpus 对 candidate Brief 做的反向核验。

重新裁决，不要因为上一版 Brief 是你提出的就维护原判断。

解决目前真正存在的冲突，删除没有充分支持的 framing 或 claims，并形成最终 authoritative research brief。

最终 Brief 应明确锁定：

paper identity；
research question；
identification / estimand / claim boundary；
claim hierarchy；
evidence spine；
closest literature 和 contribution；
economic interpretation；
manuscript narrative architecture；
section-level structure；
main tables / figures；
appendix boundary；
Discussion responsibilities；
明确不能写的 claims；
仍然存在但不再值得阻止 manuscript 的 uncertainty。

如果仍有一个问题的不同答案足以实质改变上述内容，则不要假装 Brief 已经完成，而是明确 route 回 evidence。

否则停止增加低边际价值分析，锁定 Brief。
~~~

## Routing Prompt 9 · Materialize Final Brief {#routing-materialize-final-brief}

<p class="prompt-description">把最终裁决落到唯一 current Brief，并同步项目阶段与跨 session 状态。</p>

**推荐模式：Opus High**

~~~text
下面是 GPT Pro 已经最终裁决的 authoritative research brief。

将它整理并写入 `08_brief/` 中唯一的 current authoritative Brief。保持其 substantive judgments，不重新打开已经裁决的 paper identity、claim hierarchy 或 evidence architecture。

补充必要的本地路径，使 Brief 中的重要 evidence、tables / figures、literature memos 和 outputs 可以被后续 manuscript work 找到，但不要把 Brief 扩张成 research notes。

如果项目正式从 Notes / Evidence 进入 Manuscript preparation，相应更新 `PROJECT.md` 的 current stage 和 authoritative Brief path，并更新 `HANDOFF.md`，让新的 Claude session 能够从这个 Brief 开始工作。

完成后汇报 authoritative Brief 的准确路径。
~~~

<section class="routing-stop-rule" aria-labelledby="routing-stop-rule-title">
  <h2 id="routing-stop-rule-title">贯穿 Stage 3–7 的停止规则</h2>
  <blockquote>这个新增问题的不同可能答案，会不会改变 paper identity、identification、central claim、contribution、interpretation，或者是否值得继续这篇 paper？</blockquote>
  <div class="routing-stop-rule__cases">
    <p><strong>值得重开 Notes</strong><br>A → strong causal paper<br>B → descriptive paper<br>C → project dies</p>
    <p><strong>不要阻止 Brief</strong><br>A → appendix 多一张表<br>B → appendix 少一张表</p>
  </div>
</section>

## 模型分工

<div class="routing-model-table" markdown="1">

| Stage | 默认模型 |
| --- | --- |
| Literature triage | Fable High |
| Literature close reading | Opus Max |
| Binding papers second pass | Fable High/Max |
| Literature synthesis / input pack | Fable High/Max |
| Evidence routing | **GPT Pro** |
| Existing-data targeted evidence | Fable High / Opus Max |
| New-data feasibility | Fable High |
| Data acquisition | Opus Max |
| Evidence return synthesis | Fable High |
| Candidate Brief | **GPT Pro** |
| Candidate Brief reverse audit | Fable High/Max |
| Final Brief | **GPT Pro** |
| Brief 落盘 / state update | Opus High |

</div>

<p class="prompt-usage-note"><strong>核心分工：</strong>Claude Code 负责把现实世界读取准确；Pro 负责做稀缺的经济学裁决。任何裁决都允许被新 evidence 推翻，但只有高 information value 的问题才有资格重新打开项目。</p>

<nav class="prompt-workflow" aria-label="Continue after Brief lock">
  <strong>Next</strong>
  <a href="/ai/prompts/brief/">Continue to Brief Layer</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/">Manuscript Layer</a>
</nav>
