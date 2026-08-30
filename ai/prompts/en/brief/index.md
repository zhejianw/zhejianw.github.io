---
layout: single
title: "Prompt Library · Brief Layer"
permalink: /ai/prompts/en/brief/
lang: en
prompt_lang: en
prompt_layer: brief
translation_key: brief
translation_of: /ai/prompts/brief/
source_path: ai/prompts/brief/index.md
source_blob_sha: 45f156db1b8c0265293f6448e80292cff7d3ff81
translation_status: synced
author_profile: false
prompt_library: true
prompt_collapse: true
analytics: false
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-08-30
---

{% include prompt-language-switch.html %}
{% include prompt-layer-tabs.html %}

<nav class="prompt-workflow" aria-label="Brief workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/en/notes/">Evidence</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/en/routing/">Routing / Brief Lock</a><span class="workflow-arrow">→</span>
  <a href="#paper-ceiling">Ceiling</a><span class="workflow-arrow">→</span>
  <a href="#journal-mapping">Journal</a><span class="workflow-arrow">→</span>
  <a href="#journal-requirements">Requirements</a><span class="workflow-arrow">→</span>
  <a href="#literature-map">Literature</a><span class="workflow-arrow">→</span>
  <a href="#journal-brief">Locked Brief</a><span class="workflow-arrow">→</span>
  <a href="#build-manuscript">Manuscript</a>
</nav>

## Brief Prompt 1 · Paper Ceiling {#paper-ceiling}

<p class="prompt-description">Work backward from the evidence to identify the strongest paper identity and a realistic publication ceiling.</p>

**Recommended mode: Pro**

~~~text
Use only the current notes / evidence base. For now, do not inherit any existing manuscript framing, and do not assume that a story the author has already considered is necessarily the best one.

Your task is to work backward from the available evidence and determine:

**Under the best possible framing, evidence organization, and writing standards, what is the strongest paper this research could become?**

First identify the strongest defensible version:

- the most important research question that the current evidence can answer;
- the most credible identification / empirical leverage;
- the strongest central finding;
- the most appropriate claim boundary;
- the most valuable contribution;
- the most natural journal audience;
- which evidence should form the backbone of the paper and which evidence can only be supporting / suggestive;
- whether the evidence supports multiple distinct paper candidates, and which candidate has the highest ceiling.

Then assess the idea’s **maximum plausible publication ceiling**. This is an assessment of the upper bound of the evidence and the idea itself—not of how well the current manuscript is written, and not a prediction that the paper will necessarily be accepted.

You may use the following categories:

1. **Top general economics**
2. **Top field**
3. **General economics A-level**
4. **General economics B-level**
5. **Outside economics A-level**
6. **Outside economics B-level**
7. **C-level SSCI**
8. **Not yet sufficient to support a worthwhile full paper**

In making this assessment, focus on:

- the importance and general interest of the research question;
- substantive novelty, rather than merely new data, a new country, or a new outcome;
- identification credibility;
- whether the effect / pattern is sufficiently informative;
- whether the evidence forms a coherent empirical fact rather than an isolated result;
- whether the research changes existing understanding, distinguishes competing explanations, or opens a new margin;
- how much the closest literature has already established;
- external relevance / conceptual reach;
- whether remaining uncertainty constrains the central claim;
- whether the evidence architecture could withstand referee scrutiny at the proposed level.

Do not lower the research or writing standard merely because the assessed ceiling is lower.

**Regardless of the final ceiling, the manuscript should subsequently be developed to the highest standard: claims must be accurate, identification rigorous, the narrative disciplined, and figures, tables, and prose concise. A lower target journal is not a reason to accept avoidable weaknesses, redundancy, or poor presentation.**

At the same time, do not fabricate a contribution, expand claims, or demand a large amount of low-value additional analysis merely to force the paper toward a higher tier.

Conclude with:

1. **Strongest paper identity**: one sentence stating what this paper should fundamentally be;
2. **Central question / central claim / contribution**;
3. **Maximum plausible ceiling**;
4. **Why the paper’s ceiling is at this level**;
5. **The single most important constraint preventing it from reaching the next level**;
6. Whether that constraint:
   - can be addressed by reorganizing the existing evidence;
   - might be addressed by a small amount of high-value analysis;
   - would require new data / identification;
   - is intrinsic to the ceiling of the research question itself;
7. Whether a substantively different framing could produce a different paper candidate with a higher ceiling;
8. The strongest version that should proceed toward a manuscript given the current evidence.

Do not rate the paper optimistically merely because a higher-ranked journal is conceivable, and do not mechanically downgrade it merely because the evidence is imperfect. The central question is:

**If a very strong applied microeconomist were given this evidence and developed it as well as it can reasonably be developed, where would the paper’s plausible ceiling lie?**
~~~

## Brief Prompt 2 · Journal Mapping {#journal-mapping}

<p class="prompt-description">Verify current journal information and design the submission path with the best risk–return profile.</p>

**Recommended mode: Pro; requires live web search and verification**

~~~text
Using the current paper brief, the evidence, and the previous assessment of the publication ceiling, identify the journals that are the best fit for this paper and design the optimal submission path.

Actively search for and verify current information rather than relying only on prior knowledge.

For the most plausible candidate journals, compare:

- fit with the paper and evidence that the journal actually publishes closely related work;
- annual publication volume;
- acceptance / desk-rejection information, clearly noting when reliable public data are unavailable and providing a reasoned estimate where appropriate;
- submission fees, publication fees, and whether non-OA publication is available without an APC;
- the latest Impact Factor;
- whether the journal is indexed in SSCI;
- recognition and positioning within the economics profession;
- review speed, R&R burden, and publication difficulty;
- whether the author profile or empirical approach may create meaningful field-fit friction.

Do not mechanically produce a long list of journals. Focus on the options with the best **risk–return trade-off**.

Conclude with:

1. **First-choice journal**
2. **Second and third choices**
3. **Recommended submission sequence**
4. Why a rejection at each stage should lead to the next journal
5. Which apparently prestigious journals are not worth trying, and which somewhat lower-ranked journals offer unusually good value

The objective is to maximize the paper’s **ultimate publication value**, taking account of time, acceptance probability, fees, and revision costs—not merely to maximize the Impact Factor.
~~~

## Brief Prompt 3 · Journal Requirements {#journal-requirements}

<p class="prompt-description">Extract and preserve the target journal’s official submission requirements.</p>

**Recommended mode: Extra High**

~~~text
Below are the target journal’s official submission requirements. Read them in full and preserve them as the governing journal requirements for all subsequent manuscript, appendix, and submission preparation in this project.

Extract and record every mandatory requirement and important recommendation relevant to submission, including formatting, word limits, anonymization, title page, abstract, keywords, classification codes, figures and tables, references, appendix / supplementary materials, data and code statements, file requirements, fees, and OA options.

Distinguish **mandatory / recommended / unclear**. Do not treat general academic conventions as journal-specific requirements.

This step is only for establishing and updating the journal requirements; do not modify the manuscript. All subsequent review and revision should treat these requirements as constraints by default.
~~~

## Brief Prompt 4 · Literature Map {#literature-map}

<p class="prompt-description">Verify and prioritize the core literature, while identifying positioning and novelty risks.</p>

**Recommended mode: Pro; requires live literature search and verification**

~~~text
Using the current notes / evidence, paper brief, and target journal, build a genuinely useful reference map for this paper. Actually search for and verify the literature; do not rely on memory to invent papers, bibliographic details, findings, or publication status.

Classify the literature by importance:

1. **Essential**
2. **Recommended**
3. **Optional**

Prioritize the genuinely closest papers and the papers that could affect the paper identity / contribution / identification / interpretation, rather than accumulating citations for the sake of completeness.

For each paper, briefly record:

- full citation, version, and publication status;
- **access status**: OA / a legally available working-paper or repository version / non-OA;
- why the paper matters for this project;
- its most important overlap with or difference from this paper;
- where it would be most useful in the manuscript, or what should be learned from it.

Pay particular attention to papers that may materially weaken novelty, change the framing, provide a key method or interpretation, or be papers that a referee would reasonably expect the authors to know.

All else equal, prefer OA or legally accessible versions, but do not exclude genuinely important work merely because it is not OA.

Finally, identify the small number of papers that deserve immediate close reading and state whether any important literature blind spot remains.
~~~

## Brief Prompt 5 · Lock Manuscript Brief {#journal-brief}

<p class="prompt-description">Lock the paper’s journal-specific central argument, claim boundary, and evidence architecture.</p>

**Recommended mode: Pro**

~~~text
Using the current notes / evidence base, the paper brief already developed, and the target journal’s audience, positioning, and submission requirements, re-adjudicate the optimal version of this paper.

Do not begin writing the manuscript. First decide:

- the strongest research question that also fits the target journal;
- the central claim and claim boundary;
- which evidence forms the backbone of the paper;
- which evidence should serve as supporting / diagnostic / robustness evidence;
- which evidence is informative but does not belong in this paper;
- how much weight heterogeneity, mechanisms, null results, and secondary outcomes should receive;
- the contribution and positioning that are most appropriate for the target journal;
- which claims should be upgraded, downgraded, or removed.

Journal positioning should be used only to choose the best narrative and evidence mix. **It must not be used to lower identification, writing, or evidence standards**, and it must not be used to exaggerate the contribution in order to appeal to the journal.

Conclude with a concise **journal-specific manuscript brief**:

**question → identification → central claim → supporting claims → evidence spine → contribution → scope / boundary**

If the current evidence does not fit the target journal, say so directly rather than forcing a fit.
~~~

<div class="prompt-transition-label" aria-hidden="true">↓ Transition to Manuscript</div>

## Build Manuscript {#build-manuscript}

<p class="prompt-description">Turn the locked Brief into the single authoritative, compilable manuscript project.</p>

**Recommended mode: Pro**

~~~text
Using the locked manuscript brief, the notes / evidence base, the target journal requirements, and the supplied JDE `.tex` reference manuscript, establish the manuscript layer for this paper.

Directly create and iterate the actual manuscript. Do not merely provide an outline or writing advice.

### Core constraints

- **The manuscript is a single living document.** Always maintain one authoritative current version. A backup may be created before major revisions, but do not continually create competing V1 / V2 / V3 versions. The Brief and manuscript may be cut, revised, or restructured; the notes / evidence layer is append-only in principle, and earlier results are not erased from the evidence history even if they are later downgraded to dead ends.
- **The deliverable must be a functioning LaTeX project.** Create and maintain the `.tex` source and all necessary supporting files, and compile them successfully into a PDF that can be reviewed directly. After each substantive revision, recompile and check for obvious citation, float, pagination, overflow, and cross-reference problems.
- **The Brief determines the paper identity; the evidence determines the factual boundary.** Every claim, number, sample, result, and interpretation must be traceable to the existing evidence. You may select, compress, and reorganize the evidence, but do not invent material or expand the analysis merely to fill out the paper.
- **Use the supplied JDE `.tex` manuscript as the primary style reference.** Learn from its mature conventions for citations, spacing, sectioning, equations, footnotes, figure and table placement, captions and notes, and overall LaTeX practice. Absorb its formatting and engineering conventions without mechanically copying its substantive structure.
- In principle, the manuscript should contain the conventional components of an economics paper: **Abstract, Introduction, Background / Institutional Context, Data, Empirical Methodology / Strategy, Results, Heterogeneity / Mechanisms (when warranted), Discussion, and Conclusion**. This is not a rigid template. Merge, separate, reorder, or omit sections when the paper identity and evidence make that preferable.
- **Figures and tables are part of the evidence architecture.** The main text should contain only the exhibits genuinely needed to understand the central question, identification, and main claims. Supporting diagnostics, robustness checks, secondary outcomes, and technical material should generally be placed in the appendix. Exhibits should be concise, self-contained, internally consistent, and positioned where they best support the reading flow. Do not include exhibits merely to display how much analysis has been conducted.

### Writing principles

Develop the paper throughout to the standard of a high-level economics manuscript. Do not lower the standard of identification, claim discipline, writing, figures and tables, or typesetting merely because the target journal is less selective.

Let the paper develop naturally around a clear sequence:

**research question → empirical leverage / identification → evidence → interpretation → contribution**

Exercise independent judgment over the specific section structure, length, figure and table combination, and narrative order. Prioritize a complete, coherent, disciplined manuscript that can be reviewed as a whole in PDF form and iterated further, rather than pursuing local perfection too early.
~~~
