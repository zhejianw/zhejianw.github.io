---
layout: single
title: "Prompt Library · Manuscript Layer"
permalink: /ai/prompts/en/
lang: en
prompt_lang: en
prompt_layer: manuscript
translation_key: manuscript
translation_of: /ai/prompts/
source_path: ai/prompts/index.md
source_blob_sha: 760240e266a49475d2bbc3af065fc183c8e22743
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

This page is the review workbench for the manuscript layer: Quick Passes are for rapid scans; Deep Audits are for systematic judgment and final adjudication.

<div class="prompt-usage-note">
  <strong>Common paths</strong><br>
  <strong>Substantive revision:</strong> <a href="#prompt-paper-identity">Identity</a> → <a href="#prompt-identification-strategy">Identification</a> → <a href="#prompt-results-narrative">Results</a> → <a href="#prompt-integration-audit">Integration</a><br>
  <strong>Pre-submission:</strong> <a href="#prompt-editor-five-minute-read">Editor</a> → <a href="#prompt-hostile-referee">Referee</a> → <a href="#prompt-pre-submission-robustness">Robustness Adjudication</a> → <a href="#prompt-manuscript-consistency">Consistency</a> → <a href="#prompt-final-manuscript-audit">Final Audit</a><br>
  <strong>Local revision:</strong> select the relevant section or exhibit prompt directly.
</div>

<nav class="prompt-section-toc" aria-label="Manuscript prompt sections">
  <strong>Jump to</strong>
  <a href="#quick-passes">Quick</a><span class="toc-separator">·</span>
  <a href="#deep-audits">Deep</a><span class="toc-separator">·</span>
  <a href="#deep-a-identity">A Identity</a><span class="toc-separator">·</span>
  <a href="#deep-b-sections">B Sections</a><span class="toc-separator">·</span>
  <a href="#deep-c-evidence">C Evidence</a><span class="toc-separator">·</span>
  <a href="#deep-d-literature">D Literature</a><span class="toc-separator">·</span>
  <a href="#deep-e-exhibits">E Exhibits</a><span class="toc-separator">·</span>
  <a href="#deep-f-consistency">F Consistency</a><span class="toc-separator">·</span>
  <a href="#deep-g-adversarial">G Adversarial</a><span class="toc-separator">·</span>
  <a href="#deep-h-convergence">H Convergence</a>
</nav>

## General Instruction — Optional {#prompt-meta-review-principles}

<p class="prompt-description">May be prefixed to a specific review prompt when useful; it need not be run separately each time.</p>

**Recommended mode: follows the specific prompt; do not run separately**

~~~text
First understand the manuscript as a whole, then identify the issues that genuinely affect its quality, credibility, narrative, and publication prospects. The instructions below are review perspectives, not a checklist. If a more important problem exists, prioritize it. Do not recommend low-value additional analysis merely for completeness.
~~~

## Quick Passes {#quick-passes}

Short and open-ended, suitable for rapid scans. Use the Deep Audits below when systematic adjudication is needed.

### Q1A · Figure / Table {#prompt-table-figure-general-audit}

<p class="prompt-description">Review and improve a single figure or table for correctness, layout, and readability.</p>

**Recommended mode: High; use Extra High for the final review of an important manuscript**

~~~text
Given that the intended audience is the readership of **[Journal Name]**, review this figure / table for correctness, visual quality, layout, concision, lack of ambiguity, internal consistency, reader comprehension, and narrative effectiveness. Include the title, notes, mathematical notation, abbreviations, and any other relevant elements.
~~~

### Q1B · Interpretable Magnitudes {#prompt-interpretable-magnitudes}

<p class="prompt-description">Present main-text results on a scale readers can interpret directly without changing the estimand.</p>

**Recommended mode: High; use Extra High for nonlinear models or difficult estimand judgments**

~~~text
In the main-text tables and figures, prioritize economic magnitudes that readers can interpret directly. When the raw coefficient already has a natural meaning, show it directly. Otherwise, without changing the estimand, prefer a meaningful absolute change, percentage-point / percentage change, or magnitude relative to a clearly stated baseline mean. Technical scales may remain where necessary or in the appendix. Do not sacrifice interpretability merely to impose a uniform format.
~~~

### Q2 · Headings {#prompt-heading-audit}

<p class="prompt-description">Improve the accuracy, clarity, and narrative function of headings in the manuscript and appendix.</p>

**Recommended mode: High; use Extra High for the final review of an important manuscript**

~~~text
Review every title, section heading, and subsection heading in both the manuscript and appendix. Identify where revision would improve correctness, visual quality, layout, concision, lack of ambiguity, internal consistency, reader comprehension, or narrative effectiveness, and provide specific recommendations.
~~~

### Q3 · Formatting {#prompt-formatting-audit}

<p class="prompt-description">Identify overuse of bold, italics, and special formatting at paragraph openings.</p>

**Recommended mode: High**

~~~text
Review formatting throughout the manuscript, focusing especially on whether boldface, italics, or special formatting in the opening sentence of paragraphs is being overused.
~~~

### Q4 · Introduction {#prompt-introduction-audit}

<p class="prompt-description">Review the Introduction against classic submission standards for structure, hook, and contribution.</p>

**Recommended mode: Extra High**

~~~text
Review whether the Introduction conforms to the classic standards of a publishable economics manuscript.

0. Is the overall structure appropriate? Is the length reasonable? Is any essential component missing?
1. Is the hook appropriate and capable of drawing the reader in? Is the research idea introduced in the right place and described accurately? Is the literature and contribution discussion strong, or is it too generic?
2. Is the findings section accurate? Does it contain detail that should not be there, or omit information that should appear? Is it too econometric or statistical for the reader to understand quickly?
3. Are the implications accurate, and do they elevate the paper’s intellectual significance without exceeding what the evidence supports?
~~~

### Q5 · Discussion {#prompt-discussion-audit}

<p class="prompt-description">Control the scope of the Discussion and respond appropriately to external-validity and limitation concerns.</p>

**Recommended mode: Extra High; use Pro when the task requires global judgment about weaknesses and disclosure**

~~~text
Think carefully about how the Discussion should be revised.

My starting view is that much supporting material belongs in the appendix rather than being piled into the Discussion, which can easily become a dumping ground.

The Discussion should address the obvious limitations or concerns that a reader is likely to raise, even when they cannot be fully resolved. This requires balance: the paper should not needlessly undermine itself, but it also should not ignore issues that plainly require discussion. Where possible, respond using the paper’s main data. Easily obtainable public statistics may also help; if necessary, the peer-reviewed literature can provide relevant interpretation. Potential topics include where the findings may or may not generalize, and issues involving selection, measurement error, endogeneity, or representativeness.

The Discussion may also need to engage directly with the closest literature and explain how the findings complement it. Where the results differ, seek a coherent framework in which the studies can coexist rather than manufacturing conflict or damaging both arguments unnecessarily.
~~~

### Q6 · Exhibit Order {#prompt-exhibit-ordering}

<p class="prompt-description">Reorder main-text and appendix exhibits to improve narrative flow and placement.</p>

**Recommended mode: Extra High**

~~~text
Reconsider the order of all figures and tables. Assess whether the current order supports the narrative flow and whether each exhibit belongs in the main text or appendix. Identify material that should move from the appendix to the main text, or from the main text to the appendix. Also reorganize the appendix sections and subsections, and identify appendix material that would be better placed in the main text or in a main-text footnote.
~~~

<div id="deep-audits" class="prompt-transition-label">Deep Audits</div>

Organized in the order researchers are likely to use them, for global judgment, systematic review, and pre-submission convergence.

## A. Whole-Paper Identity {#deep-a-identity}

### Paper Identity {#prompt-paper-identity}

<p class="prompt-description">Identify the paper’s core identity, contribution, and single central message.</p>

**Recommended mode: Pro**

~~~text
Do not begin with sentence-level revision. From the perspective of an editor and applied microeconomist, determine what kind of paper this manuscript actually is.

In one sentence each, summarize:

- the research question;
- the empirical design;
- the central finding;
- the paper-level contribution.

Then assess whether the current manuscript is organized around one clear paper identity.

Focus on:

- whether the Title, Abstract, Introduction, Results, and Discussion / Conclusion describe the same paper;
- whether multiple competing paper identities are present;
- which identity is strongest, most defensible, and best suited to the target journal;
- whether interesting but secondary results are diluting the main line;
- whether the contribution rests on a genuinely new margin rather than merely a different dataset, country, or outcome;
- whether the manuscript understates its most important result or overstates a secondary one.

Finally tell me:

**If the reader could remember only one central message, what should this paper leave behind?**
~~~

### Claim Hierarchy {#prompt-claim-hierarchy}

<p class="prompt-description">Reorder the manuscript’s claims and narrative weight according to the strength of the evidence.</p>

**Recommended mode: Pro**

~~~text
Reconstruct the hierarchy of all important claims in the manuscript.

Distinguish:

1. central claim;
2. supporting claims;
3. secondary findings;
4. suggestive evidence;
5. robustness evidence;
6. contextual / descriptive evidence.

Assess whether the current manuscript gives evidence of different strength the same narrative weight.

Pay particular attention to whether:

- weak evidence is written as strong evidence;
- null results are written as “no effect”;
- statistical significance is incorrectly treated as economic importance;
- descriptive evidence is given a causal interpretation;
- mechanism evidence is actually only suggestive;
- robustness results are crowding out the main results.

Propose the optimal claim hierarchy and identify which claims should be upgraded, downgraded, moved to the appendix, or removed.
~~~

## B. Section Audits {#deep-b-sections}

### Abstract {#prompt-abstract-audit}

<p class="prompt-description">Diagnose the Abstract’s information structure using the target journal’s reading conventions.</p>

**Recommended mode: Extra High**

~~~text
Review the Abstract using the reading habits of the intended journal’s readers and editor.

Do not limit the review to language polishing. Assess whether the Abstract:

- quickly explains why the research question matters;
- clearly states the data / institutional setting / empirical design;
- accurately communicates the most important findings;
- retains only numerical magnitudes that are genuinely informative;
- describes null findings accurately;
- states a specific contribution rather than saying generically that the paper “contributes to several literatures”;
- avoids implications that exceed the identification;
- omits something that is central in the main text;
- emphasizes something that is not actually important in the main text.

Finally assess:

**If the editor reads only the Abstract, will they understand accurately what the paper is, what it does, what it finds, and why it deserves review?**
~~~

<p class="prompt-related-quick"><strong>Related Quick Pass:</strong> <a href="#prompt-introduction-audit">Q4 Introduction</a></p>

### Background / Institutional Context {#prompt-background-institutional-context}

<p class="prompt-description">Assess whether the institutional background supports the research question and identification accurately, sufficiently, and without excess.</p>

**Recommended mode: Extra High**

~~~text
Review the Background / Institutional Context from the perspective of an applied microeconomics referee encountering the setting for the first time.

The primary question is not language quality, but whether the section provides only the institutional information needed to understand the research question, treatment, timing, comparison group, and identification.

Check whether:

- the chronology is clear and the reader can understand the order of key events;
- statutory rules, formal policy, actual implementation, and enforcement are distinguished correctly;
- policy coverage, eligibility, exceptions, geographic scope, and implementation intensity are explained sufficiently for the empirical design;
- important institutional claims have reliable, authoritative sources that actually support them;
- the section has become a policy encyclopedia unrelated to the research question;
- the section omits institutional details on which the identification depends and which readers cannot infer themselves;
- Results, mechanisms, or the author’s interpretation have been inserted prematurely into the Background;
- particular details belong in the main text, a footnote, or the appendix.

End with a minimal but sufficient section structure and identify what must be added, can be compressed, should be moved, or can be deleted.
~~~

### Data & Measures {#prompt-data-measures}

<p class="prompt-description">Review the sample, timing, measurement, and credibility of data presentation.</p>

**Recommended mode: Extra High**

~~~text
Review Data and Measures from the perspective of an applied microeconomics referee seeing these data for the first time.

Focus on:

### Sample

- Are the population, sampling frame, and analysis sample distinguished clearly?
- Are inclusion and exclusion criteria transparent?
- Can the reader reproduce the sample construction?
- Does every subsample have a clear rationale?
- Can changes in sample size be explained?

### Timing

- Are survey timing, policy timing, treatment timing, and outcome-measurement timing clear?
- Is there a temporal relationship that readers are likely to misunderstand?

### Measures

- Are treatment, outcomes, and controls defined accurately?
- Are self-reported, administrative, and constructed measures described clearly?
- Are units, coding, normalization, and direction consistent?
- Are binary, continuous, and standardized outcomes easy to interpret?
- Are proxy variables described more strongly than their actual content warrants?

### Presentation

- Are excessive data-cleaning details better placed in the appendix?
- Is essential measurement information buried in a footnote or appendix?
- Where should summary statistics appear, and what should they show?

Finally simulate the referee’s attack:

**If I wanted to challenge sample selection, measurement error, representativeness, or variable construction, where would the manuscript be most vulnerable?**
~~~

### Analytic Strategy / Identification {#prompt-identification-strategy}

<p class="prompt-description">Clarify the identifying variation, estimand, and boundary of causal claims.</p>

**Recommended mode: Pro**

~~~text
Review the Analytic Strategy from an applied microeconometrics perspective.

Do not begin by asking whether the regression is sufficiently elaborate. First answer:

**What variation identifies what estimand in this paper?**

Then assess whether the following are mutually consistent:

- treatment group / comparison group;
- treatment timing;
- identifying variation;
- identifying assumptions;
- estimand;
- regression specification.

Further assess:

- whether control variables are necessary and whether any are bad controls;
- whether the role of fixed effects is explained accurately;
- whether standard errors / clustering are appropriate;
- whether the specification fits the institutional setting;
- whether the coefficient interpretation is accurate;
- whether causal language matches the strength of the identification;
- which threats among parallel trends, sorting, anticipation, spillovers, composition, and others are genuinely relevant;
- which identification concerns must be addressed in the main text;
- which can be addressed through appendix evidence;
- which cannot be resolved and should instead constrain interpretation.

Do not let the Analytic Strategy become a pile of regression specifications.

The objective is that a reader who understands econometrics but not this institutional setting can quickly understand:

**Why can this design answer the research question?**
~~~

### Identification Assumptions & Evidence Audit {#prompt-identification-assumptions-evidence}

<p class="prompt-description">Map the central identifying assumptions to the tests, diagnostics, and supporting evidence an economist would normally expect.</p>

**Recommended mode: Extra High; use Pro for final identification adjudication**

~~~text
What key assumptions does this study’s identification require? Under normal applied microeconomics standards, what corresponding tests, diagnostics, or supporting evidence would economists expect to see? Have we already provided them, were they implemented correctly, and are any genuinely important gaps still present?
~~~

### Empirical Specification Audit {#prompt-empirical-specification-audit}

<p class="prompt-description">Check whether the empirical specification accurately carries the identification, estimand, and coefficient interpretation.</p>

**Recommended mode: Extra High; use Pro for complex designs or final methodological adjudication**

~~~text
Reassess the empirical specification from the perspective of an applied microeconomics reader. Determine whether it accurately carries the identification and estimand, and whether the reader can understand every symbol, variable, fixed effect, control, and coefficient interpretation without ambiguity. Assess whether the notation follows economic convention and whether any wording or symbols are unnecessary, unconventional, or easy to misread.

Explain what the main fixed effects and controls actually do—provide identification, address a concern, improve precision, or merely follow convention—and whether the manuscript describes those roles correctly.

Then compare the current approach with what economists would normally expect for this type of design. Identify any specification or diagnostic that a reasonable reader would expect and that is substantively defensible but currently absent. Important material that should not be the main specification should at least be addressed in the appendix.

Do not mechanically add regressions. Identify only issues that genuinely affect understanding, credibility, or defensibility.
~~~

### Results Narrative {#prompt-results-narrative}

<p class="prompt-description">Reorganize the Results around substantive questions rather than regression output.</p>

**Recommended mode: Extra High**

~~~text
Do not treat the Results as a manual for reading regression output.

Using the paper identity, claim hierarchy, and analytic strategy, reconsider the optimal narrative order of the Results section.

Review whether:

- each subsection is organized around a substantive question rather than a table;
- each key results paragraph first states the substantive finding and then presents the most informative estimate and uncertainty, rather than following the same mechanical paragraph template every time;
- the text reports coefficients, standard errors, and significance stars column by column;
- the numbers included in the main text are genuinely worth showing;
- economic magnitudes are explained adequately;
- uncertainty is communicated accurately;
- the dependent-variable mean, standard deviation, or baseline probability is used when needed to interpret magnitude;
- null results receive too much explanation;
- heterogeneity / mechanism / robustness material interrupts the main-results flow;
- substantive interpretation or causal language exceeds what the identification supports;
- each figure and table appears where the reader most needs it.

Finally redesign the Results narrative spine:

**In what order must the reader learn which facts in order to accept the paper’s central claim most naturally?**

Provide the recommended subsection order, the one-sentence function of each subsection, and the material that should move earlier, later, be combined, or be transferred to the appendix.
~~~

### Heterogeneity & Mechanisms {#prompt-heterogeneity-mechanisms}

<p class="prompt-description">Distinguish useful heterogeneity and mechanism evidence from descriptive or exploratory subgroup results.</p>

**Recommended mode: Extra High; use Pro when mechanism is a central contribution**

~~~text
Review whether the heterogeneity and mechanism sections genuinely increase the paper’s value.

Distinguish carefully among:

- treatment-effect heterogeneity;
- mechanism evidence;
- descriptive correlation;
- exploratory subgroup analysis.

Check whether:

- each subgroup has an ex ante substantive motivation;
- the subgroup variable is pre-treatment, and whether grouping or conditioning on a post-treatment variable could introduce bias;
- subgroup samples are too small;
- interaction and subgroup-regression interpretations are consistent;
- differences between groups are tested formally rather than inferred from “significant in one group, insignificant in the other”;
- multiple testing is a concern and confirmatory analyses are distinguished accurately from exploratory analyses;
- heterogeneous estimates are statistically different from one another;
- the timing of a mechanism outcome is sensible and it lies on a credible causal chain;
- a mediator / correlate is incorrectly called a mechanism;
- the evidence is strong enough for the mechanism language used.

For each analysis, conclude:

**main text / appendix / drop.**

Do not assume that an analysis must remain merely because it has already been conducted.
~~~

### Economic Mechanism Interpretation Audit {#prompt-economic-mechanism-interpretation-audit}

<p class="prompt-description">Infer a defensible economic mechanism from the overall evidence while distinguishing observed links from untestable steps and alternative explanations.</p>

**Recommended mode: Extra High; use Pro when the mechanism carries the central contribution**

~~~text
Reconsider the economic mechanism that may actually be operating behind the paper. Do not treat a statistically significant, insignificant, or particular-sized coefficient as proof of a mechanism. Determine which mechanism is most naturally consistent with the overall evidence pattern, which parts of that mechanism are actually observed, which essential links are inherently not directly testable, and how the Discussion should connect the empirical evidence to the underlying process without overclaiming. If important alternative mechanisms can explain the same evidence, distinguish them explicitly.
~~~

<p class="prompt-related-quick"><strong>Related Quick Pass:</strong> <a href="#prompt-discussion-audit">Q5 Discussion</a></p>

### Conclusion {#prompt-conclusion-audit}

<p class="prompt-description">Check whether the Conclusion closes the paper accurately around the findings, boundaries, and significance.</p>

**Recommended mode: Extra High**

~~~text
Review whether the Conclusion genuinely closes the paper rather than repeating the Introduction or becoming a second Discussion.

Check whether it:

- returns concisely to the research question;
- accurately summarizes the strongest evidence;
- connects the contribution to the findings;
- introduces a new argument not established in the main text;
- repeats excessive regression detail;
- unnecessarily expands policy implications in the final paragraphs;
- should state boundary conditions / external validity more clearly;
- can be shortened further.

If the paper already has a substantial Discussion, assess whether a separate Conclusion is still needed and whether the division of labor between the two sections is appropriate.
~~~

## C. Evidence & Inference {#deep-c-evidence}

### Estimand Audit {#prompt-estimand-audit}

<p class="prompt-description">Check what each result estimates, whether the results are comparable, and whether each estimand matches the corresponding claim.</p>

**Recommended mode: Pro**

~~~text
Conduct a dedicated estimand audit of the entire manuscript.

For every main table / figure, determine what object is actually being estimated and whether the exhibits are comparable. Different exhibits need not estimate exactly the same object. When they differ, assess whether the difference has a clear purpose, is disclosed clearly, and matches the claim attached to that exhibit.

Consider:

- unit of observation / aggregation level;
- population / target population;
- treatment;
- comparison group;
- treatment timing / time horizon;
- outcome / outcome scale;
- functional form;
- conditioning set / fixed effects;
- weighting;
- sample restriction.

Look especially for:

- a robustness specification that changes the estimand while the text still interprets it as the same effect;
- a subsample analysis that changes the target population;
- standardized outcomes that change interpretation;
- coefficients from PPML / LPM / OLS or other different models being compared directly;
- subtle changes in treatment definition across sections.

End with an estimand crosswalk. For each main table / figure, list the estimand elements above, the corresponding claim, and classify it as **same / intentionally different / unintentionally changed**.

For each important difference, explain whether the regression, table / figure presentation, interpretation, or wording should change, or whether the boundary merely needs to be stated explicitly. Do not force all analyses to estimate the same object merely for surface-level consistency.
~~~

### Estimand Type & Compliance Audit {#prompt-estimand-type-compliance}

<p class="prompt-description">Identify the estimand the study actually recovers and align treatment, compliance, sample, and coefficient interpretation with it.</p>

**Recommended mode: Extra High; use Pro when noncompliance or IV is central to identification**

~~~text
Reassess which estimand this study actually identifies. Distinguish ITT, ATT / ATET, TOT / LATE, and any other relevant object, and check whether the treatment definition, comparison group, noncompliance / take-up, sample restriction, and coefficient interpretation are consistent with that estimand. Do not force a label merely for terminological completeness. If the manuscript currently describes one estimand as another, identify the smallest correction needed.
~~~

### Null Results {#prompt-null-results}

<p class="prompt-description">Calibrate the statistical language, precision, and economic meaning of null or imprecise results.</p>

**Recommended mode: Extra High; use Pro when a null finding directly affects the central claim**

~~~text
Conduct a dedicated review of how the manuscript handles null / imprecise estimates.

Do not assume that a null result is automatically a problem or unimportant. Its meaning depends on the estimand, point estimate, confidence interval, statistical precision, and range of economically meaningful effects.

Check whether:

- “no effect,” “no evidence,” “not statistically significant,” and “small and precisely estimated” are distinguished correctly;
- the confidence interval rules out economically meaningful effects;
- low power is miswritten as absence of an effect;
- an important null finding is weakened excessively in order to protect the paper;
- the manuscript becomes defensive by explaining many null outcomes individually;
- placement in the main text or appendix is determined by substantive importance rather than statistical significance.

Classify which null findings:

- are an important substantive result of the paper;
- are secondary outcomes;
- merit one sentence in the main text;
- belong in the appendix;
- do not merit discussion.

For each important null finding, provide the most accurate wording and state whether the current confidence interval supports evidence of absence or only absence of evidence.
~~~

### Robustness Architecture {#prompt-robustness-architecture}

<p class="prompt-description">Require each robustness exercise to answer a specific threat rather than accumulating specifications.</p>

**Recommended mode: Extra High**

~~~text
Do not ask merely whether the paper has “enough” robustness checks. Redesign the robustness architecture.

For every robustness exercise, answer:

**Which specific identification, measurement, inference, interpretation, external-validity, or referee concern does this exercise address?**

If no clear concern exists, say so directly.

Distinguish:

- alternative specification;
- sensitivity analysis;
- falsification / placebo;
- alternative sample;
- alternative measurement;
- inference robustness;
- specification robustness.

Check whether:

- multiple robustness exercises answer the same underlying concern;
- specifications are being dumped without a clear purpose;
- a robustness exercise changes the estimand while the main text still interprets it as the same effect;
- the robustness is more complex and harder to interpret than the main result;
- an important falsification is buried too deeply;
- uninformative robustness occupies main-text space;
- the truly important concern lacks targeted evidence while many low-value checks are present.

For each exercise, state the concern it addresses, its independent information value, its relationship to the main estimand, and whether it should be:

**required in the main text / retained in the appendix / deleted.**
~~~

## D. Literature {#deep-d-literature}

### Literature Positioning {#prompt-literature-positioning}

<p class="prompt-description">Verify the closest literature and build a defensible intellectual position for the paper.</p>

**Recommended mode: Pro**

~~~text
Do not treat the literature review as citation accumulation.

Reconstruct the paper’s intellectual positioning around the genuinely closest literature.

Actually search for and verify the literature. Do not invent papers, bibliographic details, findings, or publication status from memory. First identify 3–8 genuinely closest papers. If fewer than three papers are truly close, do not add distant work merely to reach a target count.

For each paper, answer:

- What is the full citation, version, and publication status?
- What research question does it study?
- What are the data / setting?
- What is the empirical design?
- What is the strongest finding?
- Where is the most substantive overlap with this paper?
- What genuinely new evidence, identification, measurement, interpretation, or information does this paper add?

Then assess whether the current Introduction:

- discusses the closest literature too little;
- discusses distant literature too much;
- relies on a fragile “first paper to...” novelty claim;
- constructs a strawman;
- treats a different dataset or setting as a substantive contribution by itself.

Most importantly, identify a framework in which the relationship to the closest papers is:

**extends / complements / reconciles / distinguishes / provides evidence on a previously unresolved margin**

rather than an artificial conflict. End with the strongest positioning logic and identify which novelty claims may remain, must be narrowed, or should be removed.
~~~

### Single-Paper Deep Review {#prompt-single-paper-review}

<p class="prompt-description">Read one paper deeply and determine exactly what it means for this project.</p>

**Recommended mode: Pro for a genuinely closest or threatening paper; Extra High for ordinary relevant papers**

~~~text
Read this paper carefully and determine what it actually means for my manuscript.

First confirm the version, date, and publication status of the file being read. Do not rely only on the abstract or a search snippet. If enough of the paper is unavailable, mark explicitly which judgments remain unverified. For important claims, identify the relevant section, page, table, or figure where possible.

Do not merely tell me that the paper “should be cited.”

Address:

### Citation

- Should it be cited?
- If so, should it appear in the Introduction, Institutional Background, Methods, Results, Discussion, or Appendix?
- What specific point or finding should the citation support?

### Contribution

- Does it weaken the novelty of this manuscript?
- Does the overlap lie in the research question, setting, data, design, outcome, or interpretation?
- Which elements overlap substantially, and which are genuinely different?
- Should the manuscript’s contribution be reformulated?

### Substance

- Does the paper raise a substantive issue this manuscript should address?
- Should it be positioned proactively in the Introduction?
- Should the Discussion respond to it?
- Is there material that should not be expanded because doing so would create unnecessary burden?

Do not recommend hiding or omitting a directly relevant paper merely because it weakens novelty. Distinguish the obligation to cite from the narrative decision about how much to discuss.

### Methodology

- Does the paper offer a useful design, test, measurement approach, or presentation practice?
- If its methods are older, which underlying ideas remain valuable?
- Which elements belong in the main text?
- Which are only worth an appendix robustness exercise?
- Which practices have been superseded by more reliable methods and should not be followed? Do not judge a method as outdated merely from publication year.

End with one overall classification:

**must be read closely and addressed / should be cited but not developed / ordinary citation is sufficient / weakly related to the manuscript.**
~~~

### Citation Audit {#prompt-citation-audit}

<p class="prompt-description">Check whether citations truly support the text and whether in-text citations and references are complete and consistent.</p>

**Recommended mode: Extra High**

~~~text
Conduct an independent citation audit of the entire manuscript. Do not discuss prose style.

Distinguish two tasks: internal consistency between citations and the reference list, and whether a cited source truly supports the statement attached to it. The second task must be based on reading the actual source. When a source cannot be obtained or has not been verified, mark that explicitly rather than inferring support from its title or reputation.

Check whether:

- substantive factual claims have citations;
- each citation actually supports the corresponding statement;
- a secondary source is used where the original source would be preferable;
- institutional facts have authoritative sources;
- one citation is being asked to support too many claims;
- citation clusters are present;
- the closest literature is omitted;
- old citations are retained mechanically after their relevance has declined; do not recommend deletion merely because a paper is old;
- the bibliography contains uncited entries, or in-text citations and references are inconsistent.

Pay particular attention to the Introduction and Discussion:

Is the manuscript heavily cited but intellectually weakly engaged with the literature?

Classify the findings as: **must fix / requires reading the original source before judgment / optional improvement.**
~~~

### Incremental Literature Discovery & Reading Triage {#prompt-incremental-literature-discovery}

<p class="prompt-description">Search beyond the current literature boundary and triage additional papers by reading value, download value, and novelty risk.</p>

**Recommended mode: Extra High; requires live literature search and verification; use Pro for final adjudication of closest-paper or novelty threats**

~~~text
Using the current paper, existing references, and research positioning, continue searching outward for literature that is genuinely worth **reading or downloading**.

Aim for roughly 20 papers. If fewer than 20 papers have high information value, do not include weakly related work merely to fill the list. Do not repeat papers I already understand well when they offer no additional information value.

Actively search for work that could affect:

- contribution / closest-literature positioning;
- identification, measurement, or empirical strategy;
- interpretation, mechanisms, and alternative explanations;
- external validity, boundary conditions, or the Discussion;
- research a referee would reasonably expect the authors to know.

Classify papers as **must read / recommended / optional** and rank them by priority.

For each paper, state concisely:

- citation and publication status;
- whether an OA / working-paper / repository version is legally available;
- why it is worth reading;
- what it could specifically change, strengthen, or challenge in this paper;
- **recommended action: read closely and download / download for reference / citation-level awareness is enough**.

Prioritize literature with genuine incremental information value rather than broad citation accumulation. Flag separately any paper that may materially threaten novelty or the current framing.
~~~

## E. Exhibits & Appendix {#deep-e-exhibits}

### Standalone Table / Figure Audit {#prompt-standalone-exhibit-audit}

<p class="prompt-description">Test whether a table or figure can be interpreted accurately without relying on the main text.</p>

**Recommended mode: High; use Extra High for a complex exhibit or one carrying a central conclusion**

~~~text
Assume that the reader sees only this table / figure and does not read the main text.

Assess whether it can be understood substantially on its own. Do not interpret “standalone” as requiring all methodology and background to be repeated in the notes. The objective is that the reader can correctly understand what is shown, the key comparison, the result, and the uncertainty. Distinguish between tables and figures, and evaluate only the items that apply.

Check whether:

- the title is accurate;
- a subtitle / panel title is necessary;
- the dependent variable is clear;
- the sample is clear;
- units are clear;
- the treatment variable and comparison group / reference category are clear;
- fixed effects / controls are described accurately;
- standard errors / clustering are clear;
- significance stars are defined;
- estimates, confidence intervals, axes, legends, and scales are easy to interpret correctly;
- a mean / standard deviation is needed;
- the observation count is needed;
- notes are too long;
- there are too many abbreviations;
- decimal precision is consistent;
- the visual hierarchy is effective.

Also determine:

**Which information belongs inside the exhibit, which belongs in the notes, which belongs in the main text, and which is unnecessary altogether?**

Where revision is needed, provide a revised title / panel titles / notes and the necessary layout changes. Do not rewrite elements that are already functioning merely to appear comprehensive.
~~~

<p class="prompt-related-quick"><strong>Related Quick Pass:</strong> <a href="#prompt-exhibit-ordering">Q6 Exhibit Order</a></p>

### Footnote Audit {#prompt-footnote-audit}

<p class="prompt-description">Determine whether each footnote should remain, move, or be deleted, and whether the surrounding main text remains accurate without it.</p>

**Recommended mode: High; use Extra High when footnotes are numerous or contain important identification or interpretation material**

~~~text
Review every footnote in the manuscript. Read each footnote together with the sentence to which it is attached; do not assess it in isolation. In particular, determine whether removing the footnote would leave the main text accurate, complete, and non-misleading.

Classify every footnote as belonging in:

- the main text;
- a footnote;
- the appendix;
- deletion.

Look especially for:

- a central identifying assumption buried in a footnote;
- important sample information buried in a footnote;
- a substantive result buried in a footnote;
- a qualification that materially changes a claim but is hidden in a footnote;
- a long defensive footnote;
- literature discussion unrelated to the central line;
- technical detail that belongs in the appendix;
- a footnote that exists only because the author was reluctant to delete the material.

The objective is not to reduce the number of footnotes by itself. It is to ensure that footnotes contain genuinely useful information that would interrupt the main text.

List only footnotes that require action. For each, identify its location, recommended destination, reason, and specific revision. Footnotes without problems may be confirmed collectively rather than repeated individually.
~~~

### Appendix as Evidence Architecture {#prompt-appendix-architecture}

<p class="prompt-description">Rebuild the appendix as a functional supporting-evidence architecture rather than a repository of overflow material.</p>

**Recommended mode: Extra High; use Pro when the appendix is long or carries central identification evidence**

~~~text
Do not treat the appendix as a dumping ground for material that does not fit in the main text.

Treat it as a supporting evidence architecture.

For every appendix section / table / figure, determine whether it serves:

- identification;
- robustness;
- measurement;
- institutional detail;
- supplementary results;
- derivation / technical material.

Also map every appendix item to the specific main-text claim, concern, or cross-reference that it supports.

Check whether:

- an orphan appendix item is never cited in the main text;
- appendix material is too important to the main identification and belongs in the main text;
- main-text material could safely move to the appendix;
- appendix order should follow the order in which questions arise in the main text;
- the section / subsection hierarchy is clear;
- evidence addressing the same concern is scattered across several locations;
- the main text points accurately to the appendix when the reader needs the evidence.

Redesign the appendix structure and provide a proposed outline, a new location for each existing item, and the main-text cross-references that must be updated. Do not reorder merely for formal neatness; every change should improve the correspondence between evidence and main-text claims.
~~~

## F. Cross-Manuscript Consistency {#deep-f-consistency}

### Full-Manuscript Consistency Audit {#prompt-manuscript-consistency}

<p class="prompt-description">Identify internal inconsistencies across the main text, exhibits, notes, and appendix.</p>

**Recommended mode: Extra High; use Pro when the manuscript and appendix are very long**

~~~text
Do not evaluate whether the paper is good. Focus exclusively on internal inconsistency.

Cross-check the Title, Abstract, main text, Conclusion / Discussion, tables, figures, notes, and appendix for consistency in:

- sample definition;
- sample size;
- dates;
- policy description;
- variable definitions;
- treatment definition;
- outcome units;
- coefficient signs;
- numerical magnitudes;
- decimal precision;
- table / figure numbering;
- section references;
- appendix references;
- terminology;
- abbreviations;
- mathematical notation;
- fixed effects;
- clustering;
- control variables;
- significance notation;
- language used to describe the main findings.

Look especially for problems of this form:

**Each statement is defensible in isolation, but the statements become contradictory when read together.**

Differences arising from different samples, estimands, or specifications are not automatically errors. Determine whether they are intentional, are explained clearly, and match the corresponding claims.

Report only genuine problems. Do not invent inconsistencies for completeness. For each issue, identify the conflicting locations, the recommended canonical value / definition / wording, and the ripple effects of the correction.
~~~

### Key Number Cross-Check {#prompt-key-number-cross-check}

<p class="prompt-description">Reconcile repeated key numbers across the manuscript and submission materials against the authoritative results.</p>

**Recommended mode: High; use Extra High when many materials are involved or before final submission**

~~~text
Cross-check every key number that appears repeatedly in the manuscript and submission materials, including Highlights. Ensure that the Title, Abstract, Introduction, Results, Conclusion, and all other locations describe the same finding using a consistent sample, estimand, unit, baseline, absolute / relative magnitude, and rounding. Different expressions are acceptable only when they remain mathematically consistent and lead readers to the same understanding of the magnitude. Use the authoritative results / outputs as the source of truth.
~~~

### Precision & Rounding Audit {#prompt-precision-rounding-audit}

<p class="prompt-description">Establish a stable precision convention across the manuscript and submission materials and identify apparent contradictions created by rounding.</p>

**Recommended mode: High**

~~~text
Review whether numerical precision and rounding are consistent and sensible throughout the paper. Estimates, standard errors, means, p-values, and percentages of the same type should follow a stable precision convention across the main text, tables / figures, appendix, and submission materials. Different numbers of decimal places may be justified by scale, magnitude, or identification needs, but the reason should be clear rather than arbitrary. Pay particular attention to cases in which the same result appears inconsistent across locations only because it was rounded differently.
~~~

### Numbering & Reference Order Audit {#prompt-numbering-reference-order-audit}

<p class="prompt-description">Check the numbering and citation order of sections, equations, exhibits, and appendices.</p>

**Recommended mode: High**

~~~text
Review the numbering and appearance order of every section, subsection, equation, table, figure, appendix, and corresponding in-text reference. In principle, numbering should increase naturally with the manuscript’s reading order. Avoid references before numbering, reversed order, skipped numbers, duplicate numbers, or inconsistent ordering between the main text and appendix. Retain exceptions only when required by journal rules or a clear narrative need.
~~~

### Terminology & Notation Audit {#prompt-terminology-notation}

<p class="prompt-description">Unify definitions and usage of terms, abbreviations, and mathematical notation.</p>

**Recommended mode: High; use Extra High for the final review of an important manuscript**

~~~text
Conduct a dedicated review of terminology, abbreviations, and mathematical notation throughout the manuscript.

Check whether:

- the same concept is given multiple names;
- different concepts are confused under the same abbreviation;
- there are too many abbreviations;
- every abbreviation is defined at first use;
- abbreviations are consistent between tables and the main text;
- names for treatment, post, and interaction terms are intuitive;
- mathematical symbols are undefined, defined repeatedly, or change meaning;
- notation such as β, δ, or γ is genuinely necessary;
- equation notation helps understanding rather than adding reading cost.

Do not replace standard field terminology, official institutional names, or concepts that genuinely need to remain distinct merely to create surface-level uniformity.

Principle:

**Do not force notation where it is unnecessary; when notation is necessary, it must remain stable throughout the paper.**

End with a canonical terminology and notation map listing the recommended term or symbol, precise definition, first-definition location, current variants, and every location in the main text, equations, tables, figures, notes, and appendix that requires synchronization.
~~~

<p class="prompt-related-quick"><strong>Related Quick Pass:</strong> <a href="#prompt-heading-audit">Q2 Headings</a> · <a href="#prompt-formatting-audit">Q3 Formatting</a></p>

### Caveats, Limitations & Defensive Writing Audit {#prompt-caveats-defensive-writing-audit}

<p class="prompt-description">Adjudicate whether caveats and limitations belong in the paper, how prominently they should appear, and where they should be placed.</p>

**Recommended mode: Extra High; use Pro for global judgment involving identification, the central claim, or disclosure boundaries**

~~~text
Reassess every caveat, limitation, qualification, and instance of defensive writing in the manuscript. Determine whether it genuinely belongs in the paper and where it should appear.

Adjudicate first by substantive importance rather than assuming that every technically true caveat must be stated:

- If it materially affects identification, the estimand, the central claim, or interpretation, it must be disclosed accurately even when it weakens the paper, and it must appear where readers can understand the conclusion properly. Detailed supporting evidence may go in the appendix.
- If it does not alter the core conclusion but is a concern an applied microeconomist / referee would naturally raise, address it in an appropriate sentence or short paragraph in the main text, with detailed diagnostics, tables, or discussion in the appendix / a footnote.
- If it does not weaken the core conclusion and usefully demonstrates rigor, defines scope, or helps economists understand the result, discuss it in the Discussion or another appropriate location at proportionate length.
- If it is technically true but does not materially alter any conclusion, is not something economists would reasonably care about, and mainly adds a defensive tone or weakens the narrative, consider deleting it. If it has documentation value, it may remain only in the appendix without an active main-text reference.

Also check placement. The Abstract and Introduction should generally retain only qualifications necessary to understand the study and claim boundary, not preemptively present a referee’s limitation section. The Results should interpret the evidence faithfully without adding defensive armor after every finding. Concerns that genuinely require response should normally be handled in the Discussion, a footnote, or the appendix. The Conclusion may define scope briefly but should not repeat a list of limitations.

The objective is not to conceal real problems. It is to make the prominence of each qualification proportional to its scientific importance: important problems cannot be hidden, secondary issues should not displace the main line, and low-information AI-style caution should be removed.
~~~

### Review Comment Adjudication {#prompt-review-comment-adjudication}

<p class="prompt-description">Identify the real concern behind external review comments and choose an effective response with minimal collateral damage.</p>

**Recommended mode: Extra High; use Pro when comments conflict or require whole-paper restructuring**

~~~text
Do not implement the comments below mechanically. First identify the genuine underlying concern behind each one, then choose the smallest and most effective response with the least adverse effect on the manuscript as a whole. If the existing manuscript already addresses the concern substantively, do not revise merely to appear responsive.

Below is GPT Pro’s review of the current manuscript:

[Paste comments]
~~~

### Revision Ripple-Effect Audit {#prompt-revision-ripple-effect}

<p class="prompt-description">Verify that requested revisions were completed and trace any new problems created by the changes.</p>

**Recommended mode: Extra High; use Pro before final submission of a major revision**

~~~text
This is a revised manuscript. Do not restart with a generic full review.

Provide the previous manuscript, current manuscript, prior editor / referee requests, and the response memo or change log. If relevant materials are missing, state clearly which requests cannot be verified rather than guessing that they were completed.

First verify each requested revision individually and determine whether it was completed substantively rather than addressed only through surface wording. For each request, identify the original requirement, its current location, and the evidence of completion.

Then focus on:

**Did solving the old problem create a new one?**

Examples include:

- the sample definition changed but table notes did not;
- the main conclusion changed but the Abstract / Discussion retained the old language;
- a table moved but in-text citation order is now wrong;
- a new robustness exercise was added but the analytic strategy does not explain it;
- a subsection was deleted but later text still cites it;
- terminology changed but was not synchronized throughout the paper;
- results changed but the numerical summary in the Introduction did not.

Classify issues as:

1. requested revision still incomplete;
2. completed without a problem;
3. new problem created by the revision;
4. impossible to verify because materials or evidence are missing.
~~~

### Revision Residue Audit {#prompt-revision-residue-audit}

<p class="prompt-description">Remove obsolete traces of prior discussion, correction, and rejected alternatives from the final artifact.</p>

**Recommended mode: High; use Extra High after extensive manuscript iteration**

~~~text
Check whether the current output retains traces of earlier discussion, correction, or superseded alternatives. The final artifact should contain only the current adjudicated conclusion and preferred solution. Rejected, replaced, or purely discussion-stage statements should not enter the finished product merely because they appeared in the conversation history, unless they have clear substantive value in their own right.
~~~

## G. Adversarial {#deep-g-adversarial}

### Five-Minute Editor Read {#prompt-editor-five-minute-read}

<p class="prompt-description">Simulate an editor’s rapid initial screen and identify the most likely desk-rejection risk.</p>

**Recommended mode: Pro**

~~~text
Simulate the editor of **[Journal Name]**.

You do not have time to read the entire manuscript carefully. Read it as in a realistic desk review:

1. Title;
2. Abstract;
3. Introduction;
4. main figures / tables;
5. Conclusion;
6. a quick look at the design if necessary.

Tell me:

- what you think this paper is;
- its strongest selling point;
- its most obvious weakness;
- whether the contribution is sufficiently clear;
- whether the empirical design creates immediate distrust;
- where the manuscript feels too long, diffuse, or complex;
- which issue is most likely to cause desk rejection.

End with only the revisions that most affect the probability of being sent for review. Do not mix in minor wording issues.
~~~

### Hostile Referee Simulation {#prompt-hostile-referee}

<p class="prompt-description">Simulate a demanding referee and identify the strongest defensible reasons for rejection.</p>

**Recommended mode: Pro**

~~~text
Assume that you are a professional and serious referee who has no obligation to help the authors.

Your objective is not to summarize the paper but to identify reasons for rejection.

Challenge the paper on:

- novelty;
- identification;
- measurement;
- sample selection;
- external validity;
- interpretation;
- statistical inference;
- literature positioning;
- robustness;
- mechanisms;
- presentation.

Do not manufacture a concern merely to be hostile.

Classify each concern as:

- Fatal;
- Major;
- Moderate;
- Minor.

Then distinguish whether:

- the manuscript already contains evidence that could answer the concern but presents it poorly;
- the concern can be addressed through a low-cost revision or appendix material;
- substantive new analysis is required;
- the concern is essentially not resolvable and the claim must be narrowed.

Finally tell me:

**If only three referee concerns could be eliminated in advance, which three should they be?**
~~~

### Friendly Senior Coauthor {#prompt-senior-coauthor}

<p class="prompt-description">Look for ways to raise the paper’s level without creating a large amount of new work.</p>

**Recommended mode: Pro**

~~~text
Do not simulate a referee. Simulate a very strong senior coauthor.

The objective is not to find faults, but to raise the paper by one level **while avoiding a large increase in new work**.

Look for:

- a sharper research question;
- better framing;
- a smarter way to organize the existing evidence;
- branches that can be removed;
- a stronger argument already latent in the current results;
- one or two high-return, low-cost additional analyses;
- better figure / table presentation;
- more accurate and valuable literature positioning.

Prioritize **high return / low marginal cost** changes rather than redesigning the entire paper.
~~~

### What Am I Not Seeing? {#prompt-unseen-risks}

<p class="prompt-description">Step outside fixed checklists and identify the most important issue the author is likely overlooking.</p>

**Recommended mode: Pro**

~~~text
Do not begin with any fixed checklist.

After reading the manuscript in full, answer one question:

**As the author, what am I most likely failing to see?**

It may involve:

- paper identity;
- contribution;
- identification;
- reader confusion;
- a hidden contradiction;
- the closest literature;
- interpretation;
- presentation;
- a referee concern;
- a strong result that is being underestimated;
- a weak result that is being overestimated;
- a part of the paper that is no longer worth further investment.

Do not repeat obvious, mechanical advice that would apply to any paper.

Look for issues that become visible only after genuinely understanding this manuscript.

Report only the 3–5 most important.
~~~

## H. Convergence {#deep-h-convergence}

### Compression Pass {#prompt-compression-pass}

<p class="prompt-description">Shorten the paper without losing substantive content.</p>

**Recommended mode: Extra High**

~~~text
Assume that the editor requires the manuscript to be shortened by roughly 15–20% without losing substantive content.

Do not delete words mechanically. Reassess the information structure of the paper.

Look for:

- arguments that are repeated;
- duplication between the Introduction and Discussion;
- Results text that repeats table contents;
- excessive institutional background;
- robustness occupying too much main-text space;
- literature discussion that does not serve the contribution;
- paragraphs that can be merged;
- material that can move to a footnote;
- material that can move to the appendix;
- material that can be deleted completely.

At the same time, protect:

- identification logic;
- the strongest findings;
- the contribution;
- necessary caveats.

The objective is:

**The paper should not contain less information after compression; it should have a higher signal-to-noise ratio.**
~~~

### Paragraph-Level Narrative Audit {#prompt-paragraph-narrative}

<p class="prompt-description">Diagnose the function, topic sentence, transitions, and deletion value of each paragraph.</p>

**Recommended mode: Extra High**

~~~text
Review the main text paragraph by paragraph, but do not focus primarily on grammar editing.

For each paragraph, determine:

- its single function;
- whether the first one or two sentences state that function immediately;
- whether it is performing more than one unrelated task;
- whether it follows naturally from the previous paragraph;
- whether it creates a logical progression to the next paragraph;
- whether any sentence can be removed without loss of information;
- whether the paragraph presents details before telling the reader why they matter.

Look especially for paragraphs that are:

**technically correct but narratively misplaced.**
~~~

### Prose Quality & Readability Audit {#prompt-prose-quality-readability-audit}

<p class="prompt-description">Assess whether the prose is natural, clear, and professional at the level of a mature applied economics manuscript.</p>

**Recommended mode: Extra High**

~~~text
Review prose quality and readability throughout the manuscript without reopening substantive content.

Assess whether the writing resembles a mature applied economics manuscript: clear, accurate, natural, and concise, so that the reader can follow it without repeated decoding.

Look especially for observable problems often left by repeated AI-assisted writing: repetitive sentence structures and transitions, excessive signposting, abstract or inflated wording, mechanically symmetrical lists, repeated explanations of points already clear, formulaic qualifications or contrasts, monotonous sentence rhythm, and expressions that are technically correct but not how an economist would naturally write.

Do not make the writing deliberately colloquial, artificially irregular, or replace normal field-specific language merely to make it seem “less AI-generated.” Revise only where clarity, precision, flow, or professional tone genuinely improves, while preserving the substantive meaning.
~~~

### Pre-Submission Robustness Adjudication {#prompt-pre-submission-robustness}

<p class="prompt-description">Before submission, distinguish required, optional, and no-longer-worthwhile robustness work.</p>

**Recommended mode: Pro**

~~~text
Treat this mature manuscript and appendix as close to submission and review them from the perspective of a senior referee / editor.

The objective is not to continue expanding the analysis. Determine **which robustness checks / diagnostics genuinely need to be added now, which would be valuable but are not necessary, and which should not be done even if feasible.**

Prioritize gaps that could affect identification, interpretation, credibility, or the referee decision, and pay particular attention to whether the existing robustness already addresses the concern adequately.

Provide a bounded adjudication:

- **Do now**
- **Valuable but optional**
- **Do not recommend**

Do not recommend new analysis merely because it remains possible, and do not needlessly weaken the paper by attempting to preempt every conceivable referee comment. The objective is to identify the small number of pre-submission robustness exercises with the highest marginal value.
~~~

### Manuscript Integration Audit {#prompt-integration-audit}

<p class="prompt-description">Test whether many local revisions have converged into one coherent and closed manuscript-level argument.</p>

**Recommended mode: Pro**

~~~text
This paper has undergone many rounds of local revision.

Do not review the Introduction, Data, Results, and Discussion separately. Treat the manuscript as one complete product.

Check whether the full paper forms a coherent chain:

**Question → Institutional Setting → Identification → Evidence → Interpretation → Contribution → Implication**

Look for any break in that chain:

- the Introduction asks a question that is not answered later;
- the design identifies an estimand that does not match the research question;
- the Results answer a question that differs from the Introduction;
- the Discussion develops implications beyond the Results;
- the contribution depends on a finding the paper never establishes;
- the appendix addresses a concern but the main text never tells the reader;
- the Title / Abstract promises something the manuscript does not deliver.

Do not end with dozens of disconnected revision suggestions.

Tell me:

1. Does the paper now stand as a coherent and defensible whole?
2. What are the three largest remaining weaknesses?
3. Where should the next revision round concentrate?
4. Which parts are already good enough and should not be disturbed further?
~~~

### Technical Artifact Audit {#prompt-technical-artifact-audit}

<p class="prompt-description">Review only technical and presentation defects in the LaTeX project, final PDF, and formal documentation.</p>

**Recommended mode: High; requires the complete LaTeX project, final PDF, and formal documentation**

~~~text
Conduct a purely technical artifact audit. Check whether the LaTeX project compiles fully and whether there are errors, warnings, broken references / citations, overfull / underfull boxes, float problems, or abnormal pagination. Inspect the final PDF directly for fragmented text, residual Markdown, placeholders, duplicated / truncated content, abnormal symbols, or other problems visible only after compilation. Also check whether the project’s formal `.md` files / documentation follow the established language and formatting rules. Correct only technical and presentation problems; do not change substantive content.
~~~

### Final Manuscript Audit {#prompt-final-manuscript-audit}

<p class="prompt-description">Conduct the final technical, compliance, and consistency review of the manuscript PDF that is about to be uploaded.</p>

**Recommended mode: Pro; must use the actual final PDF and should also include the target journal requirements where possible**

~~~text
Treat the actual final manuscript and appendix PDFs as the versions that will be submitted today and conduct a Final Manuscript Audit.

Do not reinvent the paper identity at this stage, and do not suggest new analysis merely because more could be done. Identify only problems that cannot safely enter the submission system, including:

- journal-specific format, length, and file requirements;
- whether the anonymous manuscript is genuinely anonymous;
- title, Abstract, keywords, JEL codes, and title-page information;
- section, equation, table, figure, footnote, and appendix numbering;
- in-text citations, cross-references, dangling references, and missing exhibits;
- citations, bibliography entries, publication details, and unmatched references;
- inconsistencies in sample sizes, dates, variable names, numerical magnitudes, signs, rounding, and statistical notation;
- table / figure titles, notes, units, abbreviations, stars, controls, fixed effects, and clustering information;
- PDF rendering, including overflow, truncation, blank pages, abnormal pagination, fonts, equations, exhibit clarity, and broken or nonfunctional links;
- PDF metadata, comments, draft labels, placeholders, or any other trace that should not enter the submission system.

Provide a bounded result:

1. **Must fix before upload**
2. **Must verify manually inside the submission system**
3. **Already safe; do not continue revising**

Report only genuine problems or items that truly cannot be verified. Do not mix general writing preferences into the final checklist.
~~~
