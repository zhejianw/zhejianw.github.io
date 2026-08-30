---
layout: single
title: "Prompt Library · Notes / Evidence Layer"
permalink: /ai/prompts/en/notes/
lang: en
prompt_lang: en
prompt_layer: notes
translation_key: notes
translation_of: /ai/prompts/notes/
source_path: ai/prompts/notes/index.md
source_blob_sha: 62a61dd928bc43b33d60b9638dbdf94c2793869f
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

## Notes Prompt 0A · Initial Empirical Design Map {#initial-empirical-design-map}

<p class="prompt-description">Before large-scale exploration, build a local map of the data, specification space, identification possibilities, and implementation decisions.</p>

**Recommended mode: Extra High; submit the Questions for GPT Pro separately for Pro adjudication**

~~~text
Before beginning large-scale Notes / Evidence exploration, use the current data, code, and documentation to build an empirical design map. Inspect the local files directly; do not summarize from memory, and do not run a large number of regressions merely to make the exploration appear complete.

Clarify the following:

1. **Data / variables**
   - What data sources are currently available, and where are they located?
   - What are the important variables, and which database does each come from?
   - What is the finest unit of observation, what aggregation levels are possible, what is the time range, and what are the main identifiers and linkage relationships?
   - Which variables have coverage, missingness, timing, or sample limitations?
2. **Specification space**
   - What is the smallest and most transparent regression / descriptive relationship?
   - What broad choices of fixed effects, controls, weights, and inference are defensible?
   - Which controls are relatively clean, and which may be endogenous / bad controls but could still be informative for a specific question?
   - What concern might each important fixed effect / control address, and what problem might it itself create, including changes in identifying variation or the estimand, or sample changes caused by missingness?
3. **Identification**
   - Given the current institutional setting and data, what are the most natural candidate identification strategies / estimands?
   - Which results can at most be descriptive, and which might support a causal interpretation under additional assumptions?
   - Which questions now require methodological judgment rather than further inspection of local files?
4. **Implementation decisions**
   - Which coding, merge, timing, sample, variable-construction, or aggregation decisions in the current code / data construction could materially affect the specification, estimand, or interpretation?
   - Identify the relevant code and file locations, and mark choices that remain unresolved.

End with a separate **Questions for GPT Pro** section. Include only the small number of questions that genuinely require high-level economic judgment and whose answers may change subsequent Notes exploration. Supply enough local facts with each question that GPT Pro can adjudicate it without access to the current Claude conversation. Do not include routine coding or debugging questions.

The purpose is not to form a paper story prematurely. It is to know, before large-scale exploration begins, **what is actually available, how large the defensible empirical space is, which decisions are engineering choices, and which decisions require substantive economic adjudication.**
~~~

## Notes Prompt 0B · Empirical Design Map Update {#update-empirical-design-map}

<p class="prompt-description">Refresh the design map from the current data, code, documentation, and outputs, retaining only judgments that remain valid.</p>

**Recommended mode: Extra High; use Pro when identification or the estimand must be reconsidered materially**

~~~text
Update the existing `empirical_design_map.md`. First re-inspect the current data, code, documentation, and main outputs. Do not assume that the old map remains correct.

Focus on whether:

- the data sources, variables, granularity, time coverage, identifiers, linkage, or missingness have changed;
- the defensible specification space has changed because of new data construction, samples, fixed effects, controls, weights, inference, or coding decisions;
- the old map’s judgments about identifying variation, candidate estimands, causal / descriptive interpretation, or implementation constraints remain valid, or instead need to be revised, downgraded, or removed;
- new coding / merge / timing / aggregation decisions have emerged that materially affect the specification, estimand, or interpretation;
- earlier `Questions for GPT Pro` have been resolved, have become obsolete, or should be replaced by new questions worth escalating.

Update only what has genuinely changed. Do not let the file grow indefinitely into a changelog. Preserve the most accurate current design map and, where necessary, briefly explain why an important judgment changed.

The objective is for the map always to reflect accurately: **what is currently available, what the defensible empirical space is, which facts are settled, and which economic judgments still require adjudication.**
~~~

## Notes Prompt 0C · Implement GPT Pro Review {#implement-gpt-pro-review}

<p class="prompt-description">Check Pro’s review against local facts, carry out high-value diagnostics, and update the authoritative evidence.</p>

**Recommended mode: Extra High; use a sustained agent mode when the task requires many files, code changes, or diagnostics**

~~~text
Below is GPT Pro’s methodological / substantive review based on the current materials. Treat it as high-level analysis and a set of judgments to be verified—not as a mechanical implementation list.

First use the current data, code, outputs, and `empirical_design_map.md` to determine whether the facts on which each comment depends are correct. Then choose the most appropriate response. Distinguish among:

- judgments already supported by local evidence and suitable for direct adoption;
- questions that require an additional diagnostic / regression / data check before they can be resolved;
- comments based on incorrect or outdated facts and therefore needing correction;
- reasonable suggestions that are not worth implementing or that would change the estimand / research question;
- issues that still require a second adjudication from GPT Pro.

Complete the genuinely valuable checks, analyses, and necessary revisions. Update Notes, `empirical_design_map.md`, and other authoritative artifacts as appropriate. Do not expand the specification space without a clear boundary merely to respond to Pro.

Finish with two outputs:

1. **Return to GPT Pro**: precise econometrics / methodology terminology is appropriate here. Concisely state which comments were confirmed, modified, or rejected; what new work was completed; what new evidence emerged; and which issues still require Pro judgment. Write this into a separate Markdown file and provide the exact path.
2. **Plain-language summary for me**: translate the technical results into language that a researcher can understand quickly. Prioritize:
   - What is now the project’s most credible story?
   - Why do we believe it?
   - Which pieces of evidence are most important?
   - Which earlier concerns have been resolved, and which have not?
   - How did this round change our overall assessment of the project?
   - What is the highest-value next step?

Do not overload the summary with abbreviations, methodology jargon, file names, variable names, regression numbers, or engineering detail. Necessary technical terms may remain, but explain what they mean in this project the first time they appear. Do not merely tell me which analyses were run; tell me what those analyses now justify believing.

If this round materially changes the previous understanding of the design, update `empirical_design_map.md`. Do not turn the file into a complete changelog.
~~~

## Notes Prompt 0D · GPT Pro Re-adjudication {#gpt-pro-re-adjudication}

<p class="prompt-description">Re-adjudicate whether the identification, specification, and interpretation are defensible in light of the newly verified evidence.</p>

**Recommended mode: Pro**

~~~text
This is Claude Code’s report after rechecking the local data, code, and evidence in response to your previous review.

Re-adjudicate which original concerns have been adequately resolved, which remain valid, and which should be revised in light of the new evidence. Assess whether the current identification, specification, and interpretation are now sufficiently defensible, and whether any small number of genuinely important issues still deserve attention before the project moves to the next stage.

Do not defend a concern merely because you raised it in the previous round. Use the new evidence as the basis for judgment. Also do not add low-value robustness work merely for completeness.
~~~

## Notes Prompt 1 · Single-Prompt Exploration {#case-specific-notes-exploration}

<p class="prompt-description">Expand a reusable evidence layer around a specific research question.</p>

**Recommended mode: Pro; a tightly bounded single task may use Extra High**

~~~text
Using the automated research workflow already present in the project directory, conduct a full exploration of: “Have happiness and depression / low mood diverged among Chinese adults? Evidence from seven repeated cross-sections of CGSS, 2012–2023.”

The objective is to expand a high-quality, reusable notes / evidence layer rather than to form a story quickly. Systematically explore estimands and specification families that have substantive meaning and are defensible, including reasonable dependent-variable definitions / codings, controls, fixed effects, clustering / inference, functional forms, weights, sample restrictions, and distributional, heterogeneity, and decomposition analyses. Proactively identify worthwhile directions that I have not specified. Do not mechanically run a Cartesian product of specifications, and do not select results based on significance.

Match every informative exploration—including null, unstable, failed, and closed routes—to code and logs, write it into Notes, and preserve the rationale for the judgment. Only evidence that remains stable, meaningful, and defensible after adequate exploration should enter the manuscript brief, and the manuscript brief should then guide the manuscript.
~~~

## Notes Prompt 2 · Modular Evidence Workflow {#modular-evidence-workflow}

<p class="prompt-description">Advance evidence discovery, stress testing, contradiction resolution, and convergence through separate modules.</p>

<p class="prompt-usage-note"><strong>How to use:</strong> Feed these modules to the AI separately rather than combining them into one large prompt.</p>

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

### 0. Control {#notes-control}

<p class="prompt-description">Define the objective, preservation scope, and basic discipline of the evidence layer.</p>

**Recommended mode: High**

~~~text
## 0. Control

Work only in the notes / evidence layer. Do not move into the manuscript brief or manuscript.

The objective is to build the most complete, reliable, and reusable evidence base possible. Preserve all informative positive, null, unstable, failed, contradictory, and dead-end results, and match them to code, logs, and outputs. Do not select by significance, and do not mechanically enumerate meaningless specifications.
~~~

---

### H1. Horizontal: Research-Space Expansion {#research-space-expansion}

<p class="prompt-description">Identify substantively valuable new research branches.</p>

**Recommended mode: Extra High**

~~~text
## H1. Horizontal: Research-Space Expansion

Explore horizontally around the current research question.

Actively identify new estimands, outcomes, heterogeneity, distributional patterns, decompositions, diagnostics, alternative explanations, and other previously unconsidered research branches that deserve to enter Notes.

The objective is to expand the valuable research space, not to form a story.
~~~

---

### H2. Horizontal: Empirical-Space Expansion {#empirical-space-expansion}

<p class="prompt-description">Expand defensible empirical choices around clearly defined questions.</p>

**Recommended mode: Extra High**

~~~text
## H2. Horizontal: Empirical-Space Expansion

For the branches currently worth studying, explore additional measurement, sample, specification, and inference choices that have substantive meaning and are defensible, including reasonable outcome coding, controls, fixed effects, functional forms, weights, clustering / inference, and sample definitions.

Each specification family must correspond to a clear substantive, measurement, identification, or inference question. Do not run it without a clear purpose.

Do not select by significance, and do not mechanically enumerate combinations.
~~~

---

### V1. Vertical: Deep Investigation {#deep-investigation}

<p class="prompt-description">Investigate a key branch deeply enough to adjudicate its evidence status.</p>

**Recommended mode: Extra High; use Pro for a decisive branch**

~~~text
## V1. Vertical: Deep Investigation

Choose the branch that is currently most worth investigating deeply and most likely to change the research judgment, and pursue it fully.

Go far enough to determine whether it is established, holds only within clear limits, remains uncertain, or should be closed.

Preserve the evidence, code, logs, outputs, and reasoning in full. Do not stop early merely because an attractive result appears.
~~~

---

### V2. Vertical: Adversarial Audit {#adversarial-audit}

<p class="prompt-description">Stress-test the core finding against plausible ways it could fail.</p>

**Recommended mode: Extra High; use Pro for the final stress test of a central conclusion**

~~~text
## V2. Vertical: Adversarial Audit

For the finding or claim that most affects the current research conclusion, actively try to overturn it. This includes important positive, null, and heterogeneous findings.

Prioritize plausible failure modes involving measurement, sample composition, survey design, coding, timing, alternative explanations, and identification / inference.

The attack should target a real failure mode, not search across specifications merely to change significance.
~~~

---

### H3. Horizontal Again: Evidence-Conditioned Discovery {#evidence-conditioned-discovery}

<p class="prompt-description">Use existing anomalies and contradictions to discover new research directions.</p>

**Recommended mode: Extra High**

~~~text
## H3. Horizontal Again: Evidence-Conditioned Discovery

Re-read the current Notes, results, anomalies, contradictions, and dead ends.

Ask: What new questions or branches, not previously anticipated, have become worth exploring because of the evidence already found?

Expand only directions with substantive or diagnostic value.
~~~

---

### C1. Convergence: Branch Adjudication {#branch-adjudication}

<p class="prompt-description">Synthesize the evidence, adjudicate branches, and allocate the next round of effort.</p>

**Recommended mode: Pro**

~~~text
## C1. Convergence: Branch Adjudication

Organize and adjudicate the current research state.

For each branch, retain a concise record of:

**status → strongest evidence → strongest counterevidence → unresolved question → next best action**

Merge duplicative explorations, close low-value routes, update dead-end and decision records, and decide where the next round of effort should go.

Do not move into the manuscript brief.
~~~

---

### X1. As Needed: Contradiction Resolution {#contradiction-resolution}

<p class="prompt-description">Explain conflicting evidence and design evidence capable of distinguishing competing accounts.</p>

**Recommended mode: Pro**

~~~text
## X1. As Needed: Contradiction Resolution

Use this module when important pieces of evidence conflict.

Identify the evidence in the current Notes that cannot be accommodated by the same simple explanation.

Determine whether the contradiction comes from measurement, sample, estimand, timing, specification, heterogeneity, noise, or instead means that the prior explanation must change.

Prioritize new evidence that can distinguish competing explanations rather than defending one result.
~~~

---

### Cycle {#notes-cycle}

<p class="prompt-description">Specify the exploration cycle, when to insert contradiction resolution, and when to stop.</p>

**Recommended mode: workflow instruction; feed separately rather than together with another module**

~~~text
## Cycle

**H1 → H2 → V1 → V2 → H3 → C1 → loop**

Insert **X1** whenever an important contradiction appears.

Not every branch must complete every module in every cycle.

The stopping rule is not specification saturation. It is:

> Across all high-value research branches, further exploration is unlikely to materially change our judgment about the research question.
~~~

<nav class="prompt-workflow" aria-label="Continue from Notes">
  <strong>Next</strong>
  <a href="/ai/prompts/en/routing/">Literature-Informed Routing</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/en/brief/">Brief Layer</a>
</nav>
