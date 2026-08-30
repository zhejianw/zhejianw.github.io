# Brief Layer English Translation — Correspondence and Semantic Audit

## 1. Source baseline

This translation was prepared against the current Chinese Brief Layer source:

- Live page: `https://zhejianwang.com/ai/prompts/brief/`
- Repository source: `ai/prompts/brief/index.md`
- Source `last_updated`: `2026-08-30`
- Source Git blob SHA: `45f156db1b8c0265293f6448e80292cff7d3ff81`
- English candidate: `01_brief_layer_en_source.md`

The English candidate is a **functional translation**, not a rewrite. It preserves the original prompts’ reasoning posture, priorities, scope boundaries, output requirements, and degree of model autonomy.

## 2. Non-negotiable correspondence rules

The bilingual pair should remain equivalent in the following respects:

1. The pages contain the same six operational prompt blocks, in the same order.
2. The anchor IDs are identical across languages:
   - `paper-ceiling`
   - `journal-mapping`
   - `journal-requirements`
   - `literature-map`
   - `journal-brief`
   - `build-manuscript`
3. Recommended model modes remain unchanged.
4. Every negative instruction remains present. Examples:
   - do not inherit an existing framing;
   - do not lower standards for a lower-tier target;
   - do not fabricate contributions or expand claims;
   - do not begin writing during Brief adjudication;
   - do not force a journal fit;
   - do not erase evidence history;
   - do not create competing current manuscripts.
5. Every required output remains present and in the same logical order.
6. The English version must not add new methodological checklists, robustness demands, or workflow gates.
7. The English version must not soften the original allocation of authority:
   - evidence constrains facts;
   - the Brief determines paper identity;
   - the model retains discretion over implementation and narrative organization.
8. Formatting distinctions—headings, bold emphasis, lists, fenced prompt blocks, arrows, and transition labels—must remain parallel.

## 3. Page-level correspondence map

| Chinese source component | English component | Anchor / invariant |
|---|---|---|
| `Prompt 库 · Brief Layer` | `Prompt Library · Brief Layer` | Page title |
| Evidence → Routing / Brief Lock → Ceiling → Journal → Requirements → Literature → Locked Brief → Manuscript | Same workflow | Order unchanged |
| Brief Prompt 1 · Paper Ceiling | Same | `paper-ceiling` |
| Brief Prompt 2 · Journal Mapping | Same | `journal-mapping` |
| Brief Prompt 3 · Journal Requirements | Same | `journal-requirements` |
| Brief Prompt 4 · Literature Map | Same | `literature-map` |
| Brief Prompt 5 · Lock Manuscript Brief | Same | `journal-brief` |
| Transition to Manuscript | Same | Presentation only |
| Build Manuscript | Same | `build-manuscript` |

## 4. Core terminology decisions

These translations should remain stable across the entire English Prompt Library.

| Source term / mixed-language expression | English rendering | Reason |
|---|---|---|
| `notes / evidence base` | `notes / evidence base` | This is an artifact-layer name, not merely informal notes. |
| `paper identity` | `paper identity` | Deliberate project-level concept; do not replace with “topic” or “theme.” |
| `strongest defensible version` | `strongest defensible version` | Preserves the balance between ambition and evidentiary restraint. |
| `publication ceiling` | `publication ceiling` | A deliberate upper-bound concept, distinct from acceptance probability. |
| `maximum plausible publication ceiling` | Same | Preserves both ambition and uncertainty. |
| `claim boundary` | `claim boundary` | More precise than “limitations”; refers to what the evidence permits the paper to claim. |
| `paper backbone` | `backbone of the paper` | Used for the evidence that carries the main argument. |
| `evidence spine` | `evidence spine` | Retained as the compact summary term in the final Brief. Do not silently merge it with “backbone.” |
| `empirical leverage` | `empirical leverage` | Standard applied-micro language and intentionally broader than a named design. |
| `journal audience` | `journal audience` | Preserves the reader-market dimension. |
| `field-fit friction` | `field-fit friction` | Retains the original concern that fit may depend on author profile or empirical style. |
| `R&R 摩擦` | `R&R burden` | Natural English that captures revision cost and friction without sounding mechanical. |
| `OA 状态` | `access status` with OA categories | Avoids treating OA as the only legitimate access route. |
| `必须参考 / 建议参考 / 可以参考` | `Essential / Recommended / Optional` | Does not imply that every item must necessarily be cited. |
| `literature blind spot` | Same | Standard and precise. |
| `diagnostic evidence` | Same | Distinct from robustness evidence. |
| `journal-specific manuscript brief` | Same | A formal artifact, not a casual summary. |
| `living document` | Same | Preserves the version-management philosophy. |
| `authoritative current version` | Same | Identifies the single source of current truth. |
| `style reference` | Same | The JDE `.tex` is a formatting and engineering reference, not a substantive template. |
| `exhibits` | `exhibits` | Covers both figures and tables where the original does so. |
| `外推 / conceptual reach` | `external relevance / conceptual reach` | Preserves the original two-dimensional assessment. |
| `不硬凑` | `do not force a fit` | Functional equivalent; avoids colloquial or awkward literal translation. |
| `删改重构` | `cut, revise, or restructure` | Retains the permission to delete as well as revise. |
| `无异议` | Not present on this page | Do not import terminology from other layers. |

## 5. Prompt-by-prompt semantic audit

### Prompt 1 — Paper Ceiling

The English translation preserves all four substantive moves:

1. **Reset prior framing.**
   The model must not inherit an existing manuscript story merely because the author has already considered it.

2. **Reconstruct the strongest paper from the evidence.**
   The task remains evidence-to-paper reasoning, not manuscript evaluation.

3. **Separate ceiling from acceptance probability and current writing quality.**
   The translation explicitly states both distinctions.

4. **Identify the binding constraint on the next tier.**
   The eight required outputs and four possible classes of bottleneck are preserved.

Translation risks explicitly avoided:

- “Ceiling” was not replaced with “ranking.”
- “General interest” was not translated as mere popularity.
- “Empirical fact” was not reduced to statistical significance.
- “A different framing with a higher ceiling” remains a genuinely different paper candidate, not cosmetic repositioning.
- The final counterfactual retains the standard of a very strong applied microeconomist developing the evidence as well as reasonably possible.

### Prompt 2 — Journal Mapping

The translation preserves:

- the requirement to search and verify current information;
- fit based on the journal’s actual publication record;
- volume, acceptance / desk-rejection information, fees, OA route, Impact Factor, SSCI, professional standing, review burden, and field-fit friction;
- the risk–return objective;
- the three-journal sequence and explicit transition logic after rejection;
- the distinction between journal prestige and ultimate publication value.

The source currently allows a “reasoned estimate” when reliable acceptance information is unavailable. The English version preserves this wording rather than silently changing the underlying prompt.

### Prompt 3 — Journal Requirements

The translation preserves:

- official requirements as the source;
- exhaustive extraction of submission-relevant constraints;
- the three-way classification `mandatory / recommended / unclear`;
- the boundary that general academic conventions must not be misrepresented as journal rules;
- the prohibition on modifying the manuscript during this step.

“Classification codes” remains broad enough to include JEL or journal-specific systems.

### Prompt 4 — Literature Map

The translation preserves:

- actual search and bibliographic verification;
- prioritization rather than citation accumulation;
- three importance tiers;
- version and publication status;
- legal access / OA status;
- overlap, difference, placement, and learning value;
- explicit novelty, framing, methodology, interpretation, and referee-expectation threats;
- the final close-reading shortlist and blind-spot assessment.

“Essential” means essential to understand and position the paper; it does not automatically mean every item must appear in the bibliography.

### Prompt 5 — Lock Manuscript Brief

The translation preserves:

- journal-calibrated re-adjudication;
- the prohibition on beginning manuscript writing;
- evidence selection and claim hierarchy;
- treatment of heterogeneity, mechanisms, nulls, and secondary outcomes;
- the rule that journal fit can shape scope and narrative but cannot lower scientific standards;
- the compact output chain;
- the instruction to reject a poor journal fit rather than force one.

The term `evidence spine` is retained because it functions as a compact manuscript-design artifact, not merely a list of results.

### Build Manuscript

The translation preserves the manuscript-layer operating model:

- one authoritative living manuscript;
- backups without competing current versions;
- append-only evidence history;
- a functioning LaTeX project and compiled PDF;
- Brief as paper-identity authority and evidence as factual authority;
- JDE `.tex` as a style and engineering reference;
- conventional economics sections as defaults rather than rigid requirements;
- figures and tables as part of the evidence architecture;
- appendix allocation;
- high standards regardless of journal tier;
- autonomous implementation within the locked intellectual structure;
- whole-manuscript coherence before local perfection.

The English version does not introduce a new architecture stage or require an outline before drafting.

## 6. Functional-equivalence tests

Before publication, a reviewer should be able to answer “yes” to each question:

### Scope and authority

- Does each English prompt ask the model to solve the same research decision as the Chinese prompt?
- Does the English model have the same degree of discretion?
- Are the same facts or artifacts treated as authoritative?
- Are the same actions explicitly prohibited?

### Priority and sequencing

- Are priority words such as “first,” “focus,” “finally,” “only,” and “do not” preserved?
- Does the English output sequence match the Chinese output sequence?
- Are page workflow and prompt order unchanged?

### Epistemic strength

- Has “consistent with” ever been strengthened into “demonstrates” or “establishes”? It should not be.
- Has a plausible ceiling been converted into a forecast? It should not be.
- Has a journal fit assessment been converted into a mechanical ranking? It should not be.
- Has the permission to exercise judgment been converted into a checklist? It should not be.

### Artifact behavior

- Are the same anchor IDs present and in the same order?
- Are there exactly six `~~~text` prompt blocks?
- Does each `Copy Prompt` action copy only the English prompt body?
- Do mode badges render for `Recommended mode:` lines?
- Does the language switch preserve a matching anchor when one exists?
- Does the English page contain no unintended Chinese UI residue?

## 7. English-style standards

The English page should sound like an experienced applied microeconomist giving instructions to a capable research model:

- direct but not telegraphic;
- technically precise without unnecessary jargon;
- natural academic English rather than literal translation;
- no marketing language;
- no generic AI boilerplate;
- no extra hedging;
- no “helpful” additions not present in the Chinese source.

Sentence-level elegance is secondary to preserving the exact decision problem and model autonomy.

## 8. Change-control rule

The Chinese page remains the default authoring source because the user develops and revises prompts primarily in Chinese.

- A Chinese-first semantic change must be translated and reviewed before the bilingual pair is marked `synced`.
- An English-first improvement proposed by a reader must first be expressed as a semantic change to the Chinese source; both pages are then updated together.
- Purely typographic, accessibility, or bilingual-infrastructure changes may be applied to both versions without changing prompt semantics.
- Never “improve” one language silently while leaving the other semantically different.

The `source_blob_sha` in the English front matter should equal `git hash-object ai/prompts/brief/index.md` whenever `translation_status: synced`.
