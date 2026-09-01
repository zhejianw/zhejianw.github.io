---
layout: single
title: "Prompt Library · Project Setup Layer"
permalink: /ai/prompts/en/setup/
lang: en
prompt_lang: en
prompt_layer: setup
translation_key: setup
translation_of: /ai/prompts/setup/
source_path: ai/prompts/setup/index.md
source_blob_sha: 79cecd81507547a7d86de11685d6870e9e9524a2
translation_status: synced
author_profile: false
prompt_library: true
prompt_collapse: true
analytics: false
noindex: true
sitemap: false
visibility: unlisted-public
status: current
last_updated: 2026-09-01
---

{% include prompt-language-switch.html %}
{% include prompt-layer-tabs.html %}

## Setup Prompt 0 · Idea Feasibility Gate {#idea-feasibility-gate}

<p class="prompt-description">Develop a preliminary research idea into a verifiable proposal and make a clear go / wait / stop decision.</p>

**Recommended mode: Pro**

~~~text
Below is only a preliminary research idea. Develop it into an applied micro research proposal that is detailed enough to determine whether the project is genuinely worth opening.

**Idea: <one-sentence research idea>**

Actually search for and verify the relevant policy, institutional setting, closest literature, and data sources. Do not fill gaps about facts, papers, or data availability from memory.

Focus on:

1. What is the strongest research question, and why does it matter economically?
2. How far has the closest literature already gone? What is the paper’s most plausible substantive contribution, and which important or classic literatures could it speak to?
3. What is the most credible identification strategy? What are the central identifying assumptions and main threats?
4. What would the ideal data look like for the strongest design, and what can realistically be obtained now? For each source, describe its origin, temporal and spatial granularity, linkability, public-access status, acquisition route, price, and application difficulty, and classify it as **required / important enhancement / nice-to-have**.
5. Given currently available data, what is the strongest executable version? If a key dataset does not exist, is there a credible lower-quality substitute, or should the project stop?
6. What substantively different findings could emerge, and how would each alter the contribution and publication ceiling?
7. Taking the idea, identification, data feasibility, and literature together, assess the **maximum plausible ceiling, realistic target journals, and optimal submission path**.

Do not force an optimistic conclusion merely to turn the idea into a paper. Clearly distinguish **verified facts, reasonable inferences, and what remains unknown**. End with a direct decision: **advance immediately / verify a key data condition before deciding / not currently worth pursuing**, and identify the small number of next actions with the greatest information value.
~~~

## Setup Prompt 1 · Research Proposal Capsule {#research-proposal-capsule}

<p class="prompt-description">Preserve an early-stage idea or paused project as a comparable, restartable proposal capsule for research-portfolio management.</p>

<p class="prompt-usage-note"><strong>When to use:</strong> Create it either from an active research session that is being parked or from a GPT Pro web analysis being converted into a project record. This step creates the proposal record; it does not presume that research should begin.</p>

**Recommended mode: Extra High; use Pro when adjudicating the publication ceiling or whether the project should continue**

~~~text
# [Project Title]

**Short name:**
**Status:** INBOX / SCREENING / READY / ACTIVE / PARKED / KILLED / SUBMITTED
**Last updated:** YYYY-MM-DD

---

## 0. One-sentence idea

> State in one sentence: what shock / variation affects what outcome, in which population / setting?

Example:

> Exploit the staggered introduction of X across Chinese counties to estimate its causal effect on Y using county-level administrative and satellite data.

---

## 1. Research Question

### Main question
What does this paper genuinely seek to answer?

### Secondary questions
- Mechanism 1:
- Mechanism 2:
- Heterogeneity:
- Additional outcome:

Do not list too many questions at the outset. In principle, there should be only one main question.

---

## 2. Why Economists Care

### Economic significance
Why is the question itself important?

### Broader economic theme
What larger economic issue does it address?

For example:
- information frictions
- human capital
- firm dynamics
- market integration
- regulation
- political economy
- household behavior
- technology adoption

### Policy relevance
If the result holds, what would it change about our understanding of a policy or institution?

---

## 3. Paper Identity

If the paper succeeds, how should others describe it in one sentence?

> “This is a paper about ______ using ______.”

**Primary field:**
**Secondary field:**

**Likely audience:**

---

## 4. Core Contribution

### Contribution 1 — Question
Which question has the existing literature not yet answered clearly?

### Contribution 2 — Identification
What is valuable about our causal variation?

### Contribution 3 — Data
Do we use new data, granularity, time coverage, or linkage methods?

### Contribution 4 — Finding / mechanism
If the expected result holds, what would it change about existing understanding?

### Closest existing paper
- Paper:
- What it does:
- What we do differently:

If the contribution is not yet clear, write directly:

> **CURRENT CONCERN: contribution not yet established.**

---

# 5. Institutional Setting / Treatment

## Treatment / shock

**Treatment:**
**Unit:** individual / firm / county / prefecture / country / etc.
**Timing:**
**Geographic scope:**

### Institutional mechanism
How does the policy / shock actually occur?

### Treatment assignment
Who receives treatment, and why?

### Important dates
| Date | Event | Relevance |
|---|---|---|
| | | |

### Potential contamination
- anticipation:
- retroactivity:
- concurrent policies:
- spillovers:
- treatment misclassification:

---

# 6. Identification

## Baseline design

**Design:**
DID / event study / RDD / IV / shift-share / synthetic control / natural experiment / etc.

### Treatment group

### Comparison group

### Estimand

### Core identifying assumption

State it in one explicit sentence:

> Identification requires that ______.

### Why might the assumption hold?

### Why might it fail?

---

## 6.1 Threats to identification

Rank by severity:

**Threat 1**
   - Why it matters:
   - Possible test:
   - Possible solution:
**Threat 2**
   - ...
**Threat 3**
   - ...
---

## 6.2 Falsification / diagnostics

Which genuinely informative tests are planned?

- pre-trends
- placebo treatment
- placebo outcome
- balance
- manipulation test
- alternative timing
- unaffected population
- negative controls
- spillover tests

List only tests capable of changing our belief about identification.

---

# 7. Data Architecture

## 7.1 Unit of observation

For example:

> county × year, 2010–2025

or:

> firm × month

---

## 7.2 Must-have datasets

### Dataset A — [name]

**Purpose:**
Which core variable does it provide?

**Variables needed:**
- treatment
- outcome
- controls
- identifiers

**Unit:**
**Coverage:**
**Time period:**
**Access route:** API / download / scraping / application / paid / private
**Cost:**
**Current status:**

Choose one:

- NOT CHECKED
- EXISTS, ACCESS UNVERIFIED
- ACCESS VERIFIED
- PARTIALLY ACQUIRED
- FULLY ACQUIRED
- CLEANED
- MERGED
- ANALYSIS READY

**Current holdings:**
- Which files are already available?
- Where are they stored?
- What do they cover?
- What is missing?

**Main risks:**
- missing years
- inconsistent identifiers
- no treatment timing
- aggregation too coarse
- access instability
- etc.

---

### Dataset B — [name]

Same fields as above.

---

## 7.3 Nice-to-have datasets

### Dataset C
**Potential value:**
**Current status:**
**Necessary?** NO

---

# 8. Data Acquisition Status

This is a particularly important section for portfolio management.

| Component | Needed for | Status | Current coverage | Missing | Next action |
|---|---|---|---|---|---|
| Treatment data | Identification | VERIFIED | 2015–2024 | 2014 | Locate archive |
| Outcome data | Main result | ACQUIRED | Full | None | Clean IDs |
| Controls | Baseline | PARTIAL | 80% counties | Tibet etc. | Merge |
| Mechanism data | Mechanism | NOT CHECKED | — | All | Low priority |

---

## 8.1 Existing assets

Materials already held and directly reusable:

- existing raw data:
- cleaned panel:
- crosswalk:
- API scripts:
- scraper:
- shapefiles:
- policy dates:
- previous code:
- related literature library:

This section matters because it determines the project’s true marginal cost.

---

## 8.2 Missing critical components

### Critical missing item 1
What happens to the project if it cannot be obtained?

### Critical missing item 2

---

# 9. Sample

### Target sample

### Approximate N

### Treatment count

### Pre-period length

### Post-period length

### Geographic coverage

### Known sample-selection issues

If this is not yet known:

> **N currently UNKNOWN. Must be established before promotion to ACTIVE.**

---

# 10. Outcomes

## Primary outcome

### Definition
### Source
### Frequency
### Measurement concerns

---

## Secondary outcomes

1.
2.
3.

---

## Mechanism outcomes

1.
2.

Do not accumulate dozens of outcomes at the proposal stage.

---

# 11. Baseline Empirical Specification

Write only enough to explain the design. Do not complete the entire robustness suite in advance.

For example:

\[
Y_{it} = \alpha_i + \lambda_t + \beta Treatment_{it} + \epsilon_{it}
\]

Alternatively, state the event-study / RDD / IV structure.

### Fixed effects

### Standard errors / clustering

### Weighting

### Main estimator

### Important estimator issues
For example:
- staggered adoption
- heterogeneous treatment effects
- few clusters
- spatial correlation
- generated treatment measure

---

# 12. Literature Map

Do not build an exhaustive bibliography. Focus only on the literature that determines whether space for the project exists.

## Closest papers

### Paper 1
**Question:**
**Design:**
**Data:**
**Main result:**
**Overlap with us:**
**Remaining space:**

### Paper 2
...

---

## Literature verdict

Choose one:

- CLEAR SPACE
- PROBABLY SPACE
- CROWDED BUT DIFFERENTIABLE
- HIGH DUPLICATION RISK
- ESSENTIALLY DONE

### Main literature risk

---

# 13. Cheapest Decisive Tests

This section has very high priority.

List, in order, the cheapest tests most likely to change the project’s fate.

## Gate 1 — [question]

**Question:**
For example:
> Does project-level treatment timing actually exist?

**Cost:** 1–2 hours / 1 day / etc.
**Success condition:**
**Failure condition:**
**If failed:** KILL / PARK / redesign

---

## Gate 2 — [question]

Same fields as above.

---

## Gate 3 — [question]

Same fields as above.

---

# 14. Kill Criteria

State in advance the conditions under which the project should stop.

The project should be KILLED if:

__________________
__________________
__________________
__________________
For example:

- treatment timing cannot be recovered;
- effective treated sample < 30;
- nearest literature already uses same shock + same outcome;
- pre-treatment outcome trends are structurally incompatible with design;
- key dataset only exists at an unusably aggregated level.

---

# 15. What Would Make This an A / B / C Paper?

## A-version
Under the best-case scenario, what would the paper need?

- stronger identification?
- unique data?
- major mechanism?
- broad economic implication?

## B-version
What is more realistically achievable?

## C-version
If the core contribution is weaker but the result remains publishable, what is the minimum viable version?

### Is the C-version still worth doing?
YES / NO / UNCLEAR

This is useful for the stopping rule.

---

# 16. Expected Journal / Field Position

Do not pretend to false precision.

### Optimistic ceiling

### Realistic target range

### Floor

### Relevant fields
- Development
- Labor
- Health
- IO
- Public
- Urban
- Political economy
- etc.

---

# 17. Expected Cost and Cycle

## Human attention

LOW / MEDIUM / HIGH

## AI / coding workload

LOW / MEDIUM / HIGH

## Data acquisition

LOW / MEDIUM / HIGH

## Institutional research

LOW / MEDIUM / HIGH

## Coordination cost

SOLO / LOW / MEDIUM / HIGH

## Time to decisive evidence

For example:
> 2–5 days

## Time to first credible empirical result

For example:
> 2–4 weeks

## Time to submission if successful

For example:
> 2–4 months

---

# 18. Authorship / Collaboration

## Current owner / lead

## Potential coauthors

### What unique complementarity would each person provide?

Do not presume collaboration merely because you know someone.

### Is another human coauthor actually necessary?
YES / NO / UNKNOWN

### Governance risks
- first-author requirements
- deadline mismatch
- journal preference mismatch
- slow feedback
- institutional constraints
- data ownership
- etc.

---

# 19. Portfolio Fit

### Why now?

Why is the project worth doing **now** rather than six months from now?

### What does it add to the current portfolio?

- publication probability
- research identity
- new field
- new dataset
- methodological capital
- collaboration
- high-upside lottery ticket

### Opportunity cost

If this project starts now, what cannot be done instead?

---

# 20. Current Evidence

## What we currently know

1.
2.
3.

## What we currently do NOT know

1.
2.
3.

Distinguish strictly among FACT / INFERENCE / SPECULATION.

---

# 21. Current Verdict

**Status:**
READY / SCREENING / PARKED / KILLED / ACTIVE

**Priority:**
A / B / C

**Confidence:**
HIGH / MEDIUM / LOW

### Bottom line

Answer in 3–6 sentences:

- why the project is or is not worth doing;
- its largest upside;
- its largest risk;
- whether it should currently occupy an Active slot.

---

# 22. Next Action

Write only **one** next step.

> NEXT ACTION: __________________

Prefer an action capable of changing the decision, rather than:
“Continue researching.”

---

# 23. Decision Log

### YYYY-MM-DD
**New evidence:**
**Belief update:**
**Decision:**
**Reason:**

---

# 24. Sources / Provenance

## Proposal origins
- GPT conversation:
- Claude memo:
- personal idea:
- collaborator discussion:

## Key sources
- paper / DOI
- government document
- dataset documentation
- API
- website

## Local files
- path/to/file
- path/to/data
~~~

## Setup Prompt 2 · Workspace Bootstrap {#project-workspace-bootstrap}

<p class="prompt-description">Create the standard directory structure, Claude operating rules, and cross-session project-state entry points.</p>

**Recommended mode: High; use Extra High when an existing directory is complex**

~~~text
You are now in the root directory of a new research project. First establish and initialize the project workspace. Do not begin substantive research yet.

## Fixed directory structure

Create the following directories. This is the project’s authoritative directory structure:

```text
01_inbox/

02_data_raw/
  01_original/
  02_external/
  03_documentation/

03_code/
  01_setup/
  02_cleaning/
  03_analysis/
  04_validation/
  05_exhibits/
  99_legacy/

04_data_final/
  01_analysis/
  02_auxiliary/
  03_dictionary/

05_outputs/
  01_logs/
  02_tables/
  03_figures/
  04_diagnostics/
  99_scratch/

06_literature/
  01_papers/
  02_bibliography/
  03_notes/
  04_search_records/

07_notes/
  01_evidence/
  02_branches/
  03_audits/
  04_dead_ends/
  05_releases/

08_brief/
  99_backups/

09_manuscript/
  01_current/
  99_backups/

10_submission/
  01_journal_requirements/
  02_current_package/
  03_correspondence/
  04_reviews_rr/
  99_previous_submissions/

99_archive/
  01_retired/
  02_snapshots/
```

## Directory and artifact rules

- Do not casually add, rename, or reorganize top-level directories. Temporary materials belong in the existing scratch / archive locations.
- `01_inbox/` is the entry point for new materials. Maintain `INBOX_LOG.md` to record the source and destination of important incoming files.
- Preserve original inputs in `02_data_raw/`. In principle, the analysis data in `04_data_final/` should be reproducible through code in `03_code/`.
- Important evidence should be traceable to the corresponding data, code, log, and output.
- `07_notes/` is an append-only evidence history. Informative positive, null, unstable, contradictory, failed, and dead-end evidence may all be retained.
- `08_brief/` is a living layer in which the evidence is adjudicated into the final paper identity, claim hierarchy, and evidence architecture. Maintain one authoritative current brief.
- `09_manuscript/01_current/` contains the single authoritative manuscript. Use LaTeX and maintain a successfully compiled current PDF. Older versions belong in backups.
- Keep submission and R&R materials together in `10_submission/`.

## Create a root-level `CLAUDE.md`

`CLAUDE.md` is only for Claude Code and must remain short. Record the following durable working principles:

- Communicate with me primarily in Chinese. Formal research artifacts should be in English unless the original language must be preserved.
- Stata is the primary empirical environment; the manuscript is written in LaTeX.
- At the beginning of each new substantive work session, first read the root-level `PROJECT.md` and `HANDOFF.md`, identify the current research stage, and then read only the small number of authoritative artifacts to which they point. Do not indiscriminately load the whole project.
- The current filesystem, data, code, logs, and outputs take precedence over old conversations, old summaries, or superseded versions.
- The project’s overall workflow is **Data / Analysis → Notes / Evidence → Brief → Manuscript → Submission / Replication**. These are working layers, not irreversible gates; new evidence may require returning to an earlier layer.
- During Data / Analysis, focus on understanding the data, construction, and empirical possibilities. Do not lock in a paper story prematurely.
- During Notes / Evidence, explore broadly and preserve informative positive, null, unstable, contradictory, and failed evidence. Do not selectively preserve results in anticipation of a future manuscript framing.
- The Brief layer is where the strongest defensible paper identity, central claims, and evidence architecture are adjudicated from the evidence.
- During the Manuscript layer, treat the authoritative Brief as the paper-level guide and the current evidence as the factual boundary. Maintain one current manuscript.
- During Submission / Replication, use the current final manuscript and journal requirements as the governing references.
- Information that will matter to future sessions should be written into the appropriate project artifact rather than left only in conversation context or model memory.
- Comments from an external AI, a referee, or the user are inputs, not a mechanical execution list. First identify the underlying concern, then choose the most effective response that remains coherent with the paper as a whole.
- After substantive manuscript revisions, keep the LaTeX project compilable and check the affected material for ripple effects.

Do not put current results, the current paper story, session history, a literature summary, or extensive project detail into `CLAUDE.md`. Do not use `@PROJECT.md` or `@HANDOFF.md` to auto-import those files into `CLAUDE.md`; read them deliberately at the start of the work session instead.

## Create a root-level `PROJECT.md`

Use it as the project’s durable map, not as a research brief. Initialize:

- project name;
- one or two sentences describing the broad research scope;
- current research stage;
- authoritative entry points for data / code / outputs / notes / brief / manuscript / submission, clearly marking anything not yet established;
- primary data sources and the raw → final → results reconstruction entry point, to be updated once established;
- key software / environment information;
- the roles of Notes / Brief / Manuscript and their authoritative-version rules;
- my personal website: <https://zhejianwang.com/>, which should be consulted first for stable author, affiliation, and contact information;
- any other genuinely durable, cross-session, project-specific information.

Before a Brief has been established, do not hard-code a provisional central claim, mechanism, contribution, or publication framing into `PROJECT.md`. Once the Brief exists, `PROJECT.md` should link to the authoritative Brief rather than duplicate its contents.

## Create a root-level `HANDOFF.md`

Use it as the current working-state snapshot. Initialize:

- current stage and immediate goal;
- current authoritative files / code / outputs;
- substantive work already completed;
- current important decisions;
- unresolved issues / blockers;
- the small number of most sensible next actions;
- the continuation point for any unfinished run or environment issue.

`HANDOFF.md` records the present state, not the full history. Research evidence belongs in Notes, durable project rules in `PROJECT.md`, and Claude working rules in `CLAUDE.md`.

First inspect the current directory so that existing valid files are not overwritten. After creating the missing structure and state files, stop. Do not begin substantive research.
~~~

## Setup Prompt 3 · Environment Bootstrap {#environment-bootstrap}

<p class="prompt-description">Verify the empirical and writing environments and preserve the durable configuration.</p>

**Recommended mode: High; use Extra High when environment invocation is failing**

~~~text
Initialize and record the project’s basic working environment and durable conventions:

- **Stata** is the project’s primary empirical environment. Confirm that Stata can be invoked reliably from the current working directory. If it cannot, diagnose and resolve the executable, PATH, license, or required-package problem, and verify that a `.do` file can actually run.
- Confirm that the **LaTeX** toolchain is available and actually compile a minimal `.tex` file into a PDF. Subsequent manuscripts must maintain compilable LaTeX source and a current PDF.
- Record durable environment information and necessary dependencies concisely in `PROJECT.md`. Do not build a complex management system for this purpose.
- Communicate with me primarily in Chinese, retaining English technical terms where useful. Formal project artifacts should be in English unless source-language material must be preserved.
- Any state or decision that will matter to later sessions should be written into the appropriate existing project file rather than left only in the conversation.

After verifying and recording the environment, stop. Do not begin substantive research.
~~~

## Setup Prompt 4 · Existing Project Stage Triage {#existing-project-stage-triage}

<p class="prompt-description">Take over an existing empirical project, infer its current research stage from authoritative local artifacts, and identify the highest-value next steps.</p>

**Recommended mode: Extra High**

~~~text
You are taking over an empirical research project. First understand the current project files, existing data / code / outputs, Notes, Brief, Manuscript, and project state, and then determine which research stage the project is actually in. Thereafter, proceed broadly according to the framework below.

## Overall framework

Data / Analysis → Notes / Evidence → Brief → Manuscript

This is not an irreversible linear pipeline. If later work reveals a genuinely important new problem, the project may return to an earlier stage; however, reopening an earlier layer is worthwhile only when the new problem could materially change the identification, paper identity, central claim, contribution, interpretation, or whether the project is worth continuing at all.

### 1. Data / Analysis

This layer connects the real world to analyzable data:

- acquire, understand, clean, and link data;
- establish variable provenance, units, time coverage, measurement, missingness, and key coding decisions;
- build a reliable and reproducible analysis pipeline;
- understand the genuinely usable variation, measurement quality, and statistical precision.

Do not reverse-engineer a research story merely because a particular outcome or attractive result is already available. If later literature, identification, or measurement issues justify it, return to this layer to acquire new data.

### 2. Notes / Evidence

This layer explores and preserves scientific evidence rather than rushing to produce a paper.

Notes / Evidence should generally function as append-oriented scientific memory:

- positive, null, unstable, contradictory, failed, and dead-end evidence may all be retained;
- if an earlier result is later overturned, downgraded, or shown to be unreliable, do not delete it merely to keep the story clean; record the new evidence, the reason for rejection, and the current judgment;
- evidence should be traceable, as far as possible, to the corresponding data, code, log, and output;
- explore broadly the outcomes, estimands, heterogeneity, measurement choices, specifications, alternative explanations, and diagnostics that have substantive meaning, but do not enumerate mechanically and do not select results by significance.

The story is allowed to be messy at this layer. Do not let subsequent exploration serve only a favored framing merely because one has already emerged.

When interpreting results, work hypothesis-first whenever possible: use theory, the institutional setting, and the literature to determine what should have happened, and then assess whether the evidence supports it, rather than inventing a story after observing a significant result or a precise zero.

### 3. Brief

Once Notes / Evidence are sufficiently rich, the objective changes.

The question is no longer "What else can be discovered?" but instead:

**What is the most valuable paper that the existing evidence can support?**

The Brief adjudicates:

- the strongest defensible research question;
- the identification / estimand and claim boundary;
- the paper identity;
- the central claim and supporting claims;
- the evidence spine;
- the closest literature and the genuine literature gap;
- the economic interpretation;
- which evidence belongs in the main text, appendix, or outside this paper;
- the journal audience / publication target;
- how the manuscript should be organized.

Notes are the evidence history; the Brief is not a historical record.

In principle, maintain only one authoritative current Brief. When the judgment changes, update and restructure the Brief directly rather than appending indefinitely or maintaining several competing current versions.

Literature is especially important at this stage, but its role is not limited to helping write a literature review. It may:

- change the contribution / framing;
- reveal an identification or measurement problem;
- require a return to Notes for targeted evidence;
- even show that returning to Data for new information is worthwhile.

If a concern raised by the literature would not alter the paper-level judgment under any plausible result, do not reopen a large body of analysis merely for completeness.

### 4. Manuscript

The Manuscript expands the Brief; it is not the place to rediscover the paper identity.

Treat the authoritative Brief and current evidence as the factual boundary, and maintain one authoritative current manuscript.

The Manuscript stage mainly consists of repeated review and refinement from distinct perspectives:

- paper identity / claim hierarchy;
- identification / specification / inference;
- Results narrative;
- literature positioning;
- mechanisms / interpretation;
- tables / figures / appendix;
- numerical / terminology / cross-manuscript consistency;
- prose / readability;
- senior-coauthor perspective;
- hostile-referee perspective;
- final integration / production checks.

Do not assume that an analysis belongs in the manuscript merely because it has already been completed.

If manuscript review reveals a presentation or wording problem, resolve it within the Manuscript.

If it reveals a paper-identity or evidence-architecture problem, return to the Brief.

If it reveals a new substantive uncertainty, return to Notes.

If the existing data cannot answer a key question that would change the paper, return to Data when appropriate.

## Working principles

- The current filesystem, data, code, and outputs take precedence over old conversations and old summaries.
- Do not mechanically implement comments from GPT Pro, a referee, or me. First identify the underlying concern, then decide how to address it in light of local facts.
- Do not add low-marginal-value analysis merely for completeness.
- The value of information from new work is an important criterion: if different plausible results would not change the paper-level judgment, do not let that work prevent convergence.
- Write information that will matter to future sessions into the appropriate project artifact rather than relying on conversation memory.
- When communicating with me, prefer clear Chinese explanations of what we currently believe, why, and why the next step is worthwhile. Do not substitute large numbers of code names, regression identifiers, or methodology jargon for research judgment. Formal research artifacts should be in English.

At the start of work, determine the project's actual current stage, identify the authoritative artifacts, and select the small number of next actions that best fit this framework. Do not advance stages mechanically merely to comply with the framework; let the current evidence and research value govern the decision.
~~~

## Setup Prompt 5 · Durable Project Map Refresh {#project-map-refresh}

<p class="prompt-description">Keep `PROJECT.md` concise, accurate, and useful across sessions.</p>

**Recommended mode: High; use Extra High when the project structure or durable state has changed substantially**

~~~text
Initialize or update the root-level `PROJECT.md` so that it accurately serves as the durable map of this research project.

First infer the actual current state from the project files. Do not carry forward information that has become outdated. Record only information that will remain useful across multiple future sessions:

- project name and broad research scope;
- current research stage;
- authoritative entry points for data, code, outputs, notes, brief, manuscript, journal requirements, and replication; do not invent entries that do not yet exist;
- primary data sources, key identifiers / linkages, and the raw → final → results reconstruction entry point;
- stable software environment and necessary dependencies;
- the roles of Notes / Brief / Manuscript and their current-version rules;
- any other genuinely stable, project-specific information that cannot be inferred easily from the current artifacts and will continue to matter.

Keep it concise and centered on paths and facts.

Do not turn `PROJECT.md` into a HANDOFF, research notes, a changelog, or a manuscript brief. Current estimates, significance, temporary branches, and what happened in the latest session do not belong here.

During Notes / Evidence, retain only the broad research scope and do not lock in a paper identity prematurely. Once the Brief exists, the paper identity, central claims, contribution, and evidence architecture are governed by the authoritative Brief; `PROJECT.md` should record its exact path rather than duplicate it.

If the existing `PROJECT.md` is already substantially correct, update only what has genuinely changed.
~~~

## Setup Prompt 6 · Session Handoff Refresh {#session-handoff-refresh}

<p class="prompt-description">Complete context-dependent closing work before compression or a major stopping point, then leave a concise handoff for the next Claude session.</p>

**Recommended mode: High; use Extra High when project state is complex or paths are dispersed**

~~~text
Initialize or update the root-level `HANDOFF.md` for the next Claude session, which will not have access to the present conversation context.

Before writing the HANDOFF, first ask whether there is a small amount of high-value work that should be completed while the current session context is still intact—especially work that would be difficult to reconstruct reliably after compression or that would otherwise leave the project in an unnecessarily half-finished state. If such work exists and can be completed now, complete it first and then write the HANDOFF. Do not use this as a reason to open a new large research branch, run low-value analysis, or expand without a clear boundary.

Then read the current `PROJECT.md` and the artifacts directly relevant to this round of work, and update the current working state. Retain only information that genuinely matters for continuation:

- current research stage and immediate goal;
- exact paths to authoritative files / code / outputs;
- what materially changed in this round;
- important decisions already made and, where needed, a one-sentence rationale;
- unresolved questions, uncertainty, or blockers;
- the 1–3 most sensible next actions;
- the exact continuation point for any unfinished run, compilation, data processing, or environment problem.

Keep the file readable in roughly one or two minutes. Rewrite the current state rather than appending an unlimited history.

Do not copy research notes, a full changelog, every operational detail, durable project rules, or old session history into the HANDOFF. Those belong in Notes, logs / archive, `PROJECT.md`, or git history, respectively.

If this round produced a genuine project-level change—such as a change in research stage, an authoritative path, a data / reconstruction entry point, or another durable state—update the corresponding information in `PROJECT.md` as well. Do not duplicate the same content in both files merely for synchronization.

The objective is that a new Claude session, after automatically receiving `CLAUDE.md`, can recover the work accurately by reading only `PROJECT.md`, `HANDOFF.md`, and the small number of current artifacts to which they point.

When finished, report the exact path to `HANDOFF.md` separately in the final response, preferably as an absolute path, so that I can copy it directly into the new session. Do not paste the HANDOFF body into the conversation again.
~~~
