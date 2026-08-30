---
layout: single
title: "Prompt Library · Notes → Brief Routing"
excerpt: "An iterative workflow for deciding when literature should reopen the evidence layer and when the Brief is ready to lock."
permalink: /ai/prompts/en/routing/
lang: en
prompt_lang: en
prompt_layer: routing
translation_key: routing
translation_of: /ai/prompts/routing/
source_path: ai/prompts/routing/index.md
source_blob_sha: d3410b57ebfe379adb9921b47ce3c9bb7840d21a
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

<p class="prompt-usage-note"><strong>This is not a linear handoff.</strong> Literature changes the set of questions; Pro adjudicates which questions justify reopening the evidence layer; Claude Code returns to the local data / code / notes to resolve them; the Brief is locked only when paper-level uncertainty is sufficiently low.</p>

<nav class="prompt-workflow" aria-label="Notes to Brief routing workflow">
  <strong>Workflow</strong>
  <a href="/ai/prompts/en/notes/">Open Notes</a><span class="workflow-arrow">→</span>
  <a href="#routing-literature-triage">Literature</a><span class="workflow-arrow">→</span>
  <a href="#routing-evidence-brief-router">Router</a><span class="workflow-arrow">↺</span>
  <a href="#routing-existing-data-targeted-notes">Targeted Evidence</a><span class="workflow-arrow">→</span>
  <a href="#routing-candidate-brief">Candidate Brief</a><span class="workflow-arrow">→</span>
  <a href="#routing-candidate-brief-reverse-audit">Reverse Audit</a><span class="workflow-arrow">↺</span>
  <a href="#routing-final-brief-lock">Final Brief</a>
</nav>

<section class="routing-map" aria-labelledby="routing-map-title">
  <div class="routing-map__header">
    <h2 id="routing-map-title">Evidence routing map</h2>
    <p>Reopen the project only for questions that can change paper-level judgment.</p>
  </div>
  <ol class="routing-map__rail">
    <li>
      <a href="#routing-literature-triage"><span>Literature</span><strong>Triage → Read → Synthesize</strong></a>
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

<p class="prompt-description">Allocate the reading budget before close reading, retaining only papers that could change the final Brief.</p>

**Recommended mode: CC Fable High**

~~~text
The project is now in a stage where Notes / Evidence are already extensive and the work is preparing to converge toward a Brief.

First scan the project’s current literature corpus. Do not immediately produce a full summary of every paper. Build a reading queue based on each paper’s potential to change the final research brief:

- paper-defining / closest;
- potentially binding for identification, measurement, or methodology;
- relevant to interpretation / mechanism / external validity;
- contextual;
- low-information / no current reason for further investment.

The criterion is not journal rank or superficial keyword overlap. It is whether the paper could change the paper identity, identification, claim boundary, contribution, interpretation, or next evidence demand.

Verify version and publication status, and identify which papers require close reading of the main text and appendix, which need only focused reading, and which currently do not justify further effort.

Write the result into a literature reading map. Do not give every paper equal attention merely for completeness, and do not form the final paper story at this stage.
~~~

## Routing Prompt 1 · Close Reading {#routing-close-reading}

<p class="prompt-description">Closely read the genuinely important papers and preserve their binding implications in project artifacts.</p>

**Recommended mode: CC Opus Max; genuinely binding papers may receive a second pass with Fable High / Max**

~~~text
Use the current literature reading map to process the genuinely important papers one by one.

Read the main text and necessary appendix rather than relying only on the abstract, an existing citation note, or a search summary. Create a separate literature memo for each important paper, accurately recording:

its research question, setting / data, empirical design, strongest finding, and the genuine overlap and difference between that paper and this project.

The central question is not merely “What does this paper say?” It is:

What does this paper imply for our identification, measurement, estimand, interpretation, contribution, framing, or evidence demand? Does it occupy intellectual territory we had intended to claim? Does it create a novelty / credibility threat? Does it reveal an important question that the current evidence has not resolved?

Different papers need not receive equal space. For low-information papers, preserve only enough information to prevent unnecessary rereading later.

After each paper, write the judgment into the project’s literature notes and update the cross-paper literature matrix. Do not depend on the current session context as long-term memory, and do not prematurely combine all papers into a manuscript story.
~~~

## Routing Prompt 2 · Literature Synthesis → Brief Input Pack {#routing-brief-input-pack}

<p class="prompt-description">Compress the evidence, design, and closest literature into an input pack for Pro adjudication.</p>

**Recommended mode: CC Fable High / Max**

~~~text
Using the complete Notes / Evidence, empirical design map, and closely read literature corpus, create `brief_input_pack.md` for GPT Pro’s next paper-level adjudication.

Do not write the final research brief on Pro’s behalf, and do not mechanically summarize every literature memo. Compress only information that could genuinely change the paper identity:

- the most credible current evidence and the strongest counterevidence;
- what the current identification / estimand truly supports;
- the 3–8 genuinely closest papers and the intellectual territory each already occupies;
- which literature materially constrains, challenges, or changes our contribution;
- which methodology / measurement literature is binding for the current design;
- the competing paper framings that still remain reasonable;
- which facts are settled and which remain genuinely uncertain;
- which new evidence demands have been generated by the literature;
- the small number of paper-level questions that most need GPT Pro adjudication.

Where possible, link important judgments to exact local evidence, outputs, literature memos, or original-paper paths.

The objective is information compression, not another enormous literature review.
~~~

## Routing Prompt 3 · Evidence / Brief Router {#routing-evidence-brief-router}

<p class="prompt-description">The central adjudicator: decide what is already sufficient, what justifies reopening evidence, and what should instead be narrowed or stopped.</p>

**Recommended mode: GPT Pro; preferably in a fresh session**

~~~text
Using the complete current evidence summary, empirical design map, and literature synthesis, determine the project’s highest-value next step.

Do not force a final story merely to move toward the manuscript. Focus on whether the literature and current evidence have generated new evidence demands that genuinely deserve resolution.

For each unresolved issue that could affect paper-level judgment, classify it as one of the following:

- existing evidence is sufficient and the issue can be adjudicated directly in the Brief;
- only a recheck of existing data / code is needed;
- new substantive evidence should be generated from the existing data;
- new but realistically obtainable data are needed;
- resolving the issue would require costly or highly uncertain new data / design;
- the issue cannot realistically be resolved through reasonable additional evidence and should instead be handled by narrowing the claim, changing the framing, or accepting a limitation;
- the issue is serious enough that the current version of the paper should be materially downgraded or stopped.

Do not automatically create new work merely because the literature raises a logically possible concern.

Recommend reopening the Data / Notes layer only when different plausible outcomes of the new evidence would materially change the paper identity, identification, central claim, contribution, interpretation, or the decision to continue the paper.

End with an explicit routing decision:

which issues are already sufficiently resolved;
which should return to existing data;
which justify new data;
which should be handled in the Brief / Discussion;
which could change the entire project;
and what conditions must be met before the project proceeds to a Candidate Brief.
~~~

<aside class="routing-input-note" aria-label="Router input pack">
  <strong>Recommended Stage 3 inputs</strong>
  <span><code>brief_input_pack.md</code></span>
  <span>current evidence release / Notes synthesis</span>
  <span><code>empirical_design_map.md</code></span>
  <span>the full text of only the small number of most important papers</span>
  <span>an old Brief may be supplied for reference, but its framing must not be inherited</span>
</aside>

## Routing Prompt 4A · Existing Data → Targeted Notes {#routing-existing-data-targeted-notes}

<p class="prompt-description">Use existing data only to resolve the small number of uncertainties that could change the Brief; do not reopen the entire specification space.</p>

**Recommended mode: Fable High; use Opus High / Max when the task is highly mechanical**

~~~text
Below are the small number of evidence questions that the Brief Router judged worth resolving with existing data.

Return temporarily to the Notes / Evidence layer only for these questions. Do not reopen the entire specification space, and do not add unrelated robustness checks along the way.

For each question, first state:

why it could change paper-level judgment;
whether the existing data can genuinely distinguish the competing explanations;
which analysis / diagnostic has the greatest information value;
how different possible results would change the identification, claim, framing, or contribution.

Then complete the smallest analysis that is sufficiently discriminating. Record positive, null, contradictory, and failed evidence accurately in the relevant Notes / outputs.

If the new evidence changes the design understanding, update the empirical design map accordingly.
~~~

## Routing Prompt 4B · New Data → Feasibility {#routing-new-data-feasibility}

<p class="prompt-description">Before acquiring new data, assess value of information and practical feasibility.</p>

**Recommended mode: Fable High**

~~~text
Brief development has exposed a key evidence gap that may require new data.

Do not begin large-scale data collection immediately.

Investigate:

what the ideal data would be;
what sources may realistically exist;
the granularity, time coverage, identifiers, linkability, measurement quality, and acquisition difficulty;
the cost of public download, API access, web collection, application, purchase, or manual construction;
what lower-quality substitutes exist;
how much each level of data quality could resolve the identification / interpretation problem.

Most importantly, determine:

Would different plausible findings from these data genuinely change the paper identity, identification, central claim, contribution, or the decision to continue the paper?

If not, do not acquire the data.

If the expected information value is high enough and the data are realistically obtainable, propose the smallest necessary acquisition plan. If the acquisition cost clearly exceeds the research value, explain how the paper should be adjusted without the data.
~~~

## Routing Prompt 4C · New Data → Acquisition / Integration {#routing-new-data-acquisition}

<p class="prompt-description">Acquire and integrate only the data in the adjudicated minimum plan, then return to Notes to answer the original question.</p>

**Recommended mode: Opus Max**

~~~text
Following the adjudicated data-acquisition plan, obtain and organize the minimum data needed to resolve the current evidence gap.

Prioritize auditable provenance, coverage, identifiers, timing, and linkage. Do not expand the database by collecting unrelated material.

Preserve the original inputs and acquisition record, establish the necessary cleaning / linkage code, and validate the quality of the match to the current unit of analysis.

After completion, do not immediately revise the manuscript framing. Return to the Notes / Evidence layer, use the new data to answer the research question for which they were acquired, and record whether the evidence actually changed the earlier judgment.
~~~

## Routing Prompt 5 · Evidence Return → Pro {#routing-evidence-return}

<p class="prompt-description">Compress the targeted evidence work into material that can be returned to the Router for re-adjudication.</p>

**Recommended mode: Fable High**

~~~text
Using this round of targeted evidence work, create `return_to_brief_adjudication.md` for GPT Pro to re-adjudicate.

Do not copy the entire analysis process. Concisely state:

- what Pro asked the project to resolve in the previous round;
- what evidence was actually checked or added;
- what results emerged;
- which earlier concerns were resolved, strengthened, revised, or could not be resolved;
- what the new evidence actually implies for identification, the claim boundary, paper framing, or contribution;
- which remaining questions could still change the Brief.

Provide exact paths to the key data / code / outputs / Notes.

Also give me a plain-language summary in my preferred interaction language. Do not overload it with code names, regression numbers, or methodology jargon. Explain the project as if speaking to a collaborator who understands applied micro but has not read this round’s code:

What is now the most credible story?
Why do we believe it?
What did this round actually change?
What genuine problem remains?
~~~

<p class="prompt-usage-note"><strong>After Stage 5:</strong> return the resulting <code>return_to_brief_adjudication.md</code> to the Stage 3 Router. Do not proceed directly to writing the Brief.</p>

## Routing Prompt 6 · Candidate Brief {#routing-candidate-brief}

<p class="prompt-description">Once paper-level evidence is sufficient, compare competing identities and design the strongest defensible paper.</p>

**Recommended mode: GPT Pro; dedicate a full pass to this task**

~~~text
Evidence routing is now sufficiently complete for the project to enter the Brief layer.

Using the current evidence, literature, and latest adjudication, reconsider what paper is most worth forming from the existing materials. Do not inherit the author’s previous framing, and do not give an analysis greater narrative weight merely because substantial work was invested in it.

Allow multiple competing paper identities to exist initially, compare them, and then select the strongest defensible version.

Create a candidate research brief that clearly specifies:

- the paper identity in one sentence;
- the central research question and why it matters economically;
- identification / estimand, key assumptions, and claim boundary;
- central claim, supporting claims, and claims that must explicitly not be made;
- the essential evidence spine;
- which evidence belongs in the main text, which belongs in the appendix, and which should be omitted;
- the 3–8 closest papers and the genuine intellectual margin this paper adds;
- the most natural economic interpretation / mechanism and the important alternative interpretations;
- the most appropriate manuscript narrative architecture;
- the function of each major section;
- what each main table / figure should teach the reader;
- which supporting / diagnostic evidence belongs in the appendix;
- which issues the Discussion genuinely needs to address;
- remaining uncertainty that should be acknowledged but is no longer sufficient to prevent writing.

The objective is not to include as much existing analysis as possible. It is to design the strongest, clearest, and most defensible manuscript supported by the existing evidence.

If this process reveals a previously overlooked evidence gap that would genuinely change paper-level judgment, do not force completion of the Brief. Identify the gap explicitly and route the project back to the evidence layer.
~~~

## Routing Prompt 7 · Reverse Audit of Candidate Brief {#routing-candidate-brief-reverse-audit}

<p class="prompt-description">Check Pro’s compressed world against the full local evidence and literature for omissions, misreadings, and overclaims.</p>

**Recommended mode: Fable High / Max**

~~~text
Below is the candidate research brief proposed by GPT Pro using the current evidence and literature.

Do not accept it mechanically, and do not search for support merely because it was proposed by a high-level model.

Use the complete local Notes, data, code, outputs, empirical design map, literature memos, and necessary original papers to conduct an independent factual and literature-based reverse audit of the Brief.

Determine:

- whether the central claims are genuinely supported by the current evidence;
- whether the identification / estimand is described correctly;
- whether the Brief omits positive, null, contradictory, or failed evidence that would change the framing;
- whether the closest literature has been understood accurately;
- whether the contribution is genuinely unoccupied by existing work;
- whether the proposed evidence spine and exhibits are supported by current artifacts;
- whether the Brief contains an attractive interpretation that the data cannot actually support;
- whether it incorrectly describes a suggestive mechanism as a tested mechanism;
- whether any material uncertainty remains that would justify reopening Data / Notes.

Do not use the audit as a reason to reopen unlimited exploration.

Create `return_to_pro_brief_audit.md` that clearly states:

which parts are confirmed;
which should be revised;
which require re-adjudication;
which unresolved issues would prevent the Brief from being locked.

Also give me a plain-language summary in my preferred interaction language explaining what the final paper is likely to be and what genuine disagreement remains.
~~~

<p class="prompt-usage-note"><strong>Reverse-audit routing:</strong> if different answers would change the core paper, return to the Stage 3 Router; otherwise proceed to Final Brief Lock.</p>

## Routing Prompt 8 · Final Brief Lock {#routing-final-brief-lock}

<p class="prompt-description">Resolve conflicts between the Candidate Brief and the local reverse audit, then lock the authoritative research brief.</p>

**Recommended mode: GPT Pro**

~~~text
This is Claude Code’s reverse audit of the candidate Brief using the complete local evidence, code, outputs, and literature corpus.

Re-adjudicate the Brief. Do not preserve the previous judgment merely because you proposed it.

Resolve the genuine remaining conflicts, remove framing or claims that are not adequately supported, and produce the final authoritative research brief.

The final Brief should lock:

paper identity;
research question;
identification / estimand / claim boundary;
claim hierarchy;
evidence spine;
closest literature and contribution;
economic interpretation;
manuscript narrative architecture;
section-level structure;
main tables / figures;
appendix boundary;
Discussion responsibilities;
claims that must explicitly not be made;
remaining uncertainty that is no longer worth allowing to delay the manuscript.

If different plausible answers to any remaining issue would still materially change the items above, do not pretend that the Brief is complete. Route the project back to evidence explicitly.

Otherwise, stop adding low-value analysis and lock the Brief.
~~~

## Routing Prompt 9 · Materialize Final Brief {#routing-materialize-final-brief}

<p class="prompt-description">Write the final adjudication into the single current Brief and synchronize the project stage and cross-session state.</p>

**Recommended mode: Opus High**

~~~text
Below is the authoritative research brief finally adjudicated by GPT Pro.

Organize and write it into the single current authoritative Brief in `08_brief/`. Preserve its substantive judgments. Do not reopen the already adjudicated paper identity, claim hierarchy, or evidence architecture.

Add only the local paths necessary for later manuscript work to find the important evidence, tables / figures, literature memos, and outputs. Do not expand the Brief into research notes.

If the project is formally moving from Notes / Evidence into manuscript preparation, update the current stage and authoritative Brief path in `PROJECT.md`, and refresh `HANDOFF.md` so that a new Claude session can begin from this Brief.

When finished, report the exact path to the authoritative Brief.
~~~

<section class="routing-stop-rule" aria-labelledby="routing-stop-rule-title">
  <h2 id="routing-stop-rule-title">Stopping rule across Stages 3–7</h2>
  <blockquote>Would different plausible answers to this new question change the paper identity, identification, central claim, contribution, interpretation, or the decision to continue the paper?</blockquote>
  <div class="routing-stop-rule__cases">
    <p><strong>Worth reopening Notes</strong><br>A → strong causal paper<br>B → descriptive paper<br>C → project dies</p>
    <p><strong>Do not delay the Brief</strong><br>A → one more appendix table<br>B → one fewer appendix table</p>
  </div>
</section>

## Model allocation

<div class="routing-model-table" markdown="1">

| Stage | Default model |
| --- | --- |
| Literature triage | Fable High |
| Literature close reading | Opus Max |
| Binding papers second pass | Fable High / Max |
| Literature synthesis / input pack | Fable High / Max |
| Evidence routing | **GPT Pro** |
| Existing-data targeted evidence | Fable High / Opus Max |
| New-data feasibility | Fable High |
| Data acquisition | Opus Max |
| Evidence-return synthesis | Fable High |
| Candidate Brief | **GPT Pro** |
| Candidate Brief reverse audit | Fable High / Max |
| Final Brief | **GPT Pro** |
| Brief materialization / state update | Opus High |

</div>

<p class="prompt-usage-note"><strong>Core division of labor:</strong> Claude Code is responsible for reading the empirical world accurately; Pro is responsible for scarce economic adjudication. Any judgment may be overturned by new evidence, but only high-information-value questions justify reopening the project.</p>

<nav class="prompt-workflow" aria-label="Continue after Brief lock">
  <strong>Next</strong>
  <a href="/ai/prompts/en/brief/">Continue to Brief Layer</a><span class="workflow-arrow">→</span>
  <a href="/ai/prompts/en/">Manuscript Layer</a>
</nav>
