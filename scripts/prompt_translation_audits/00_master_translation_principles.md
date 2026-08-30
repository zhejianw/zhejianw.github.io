# Master Translation Principles — Complete Bilingual Prompt Library

## 1. Purpose

This package supplies a reviewed English counterpart for every current Prompt Library layer:

1. Project Setup
2. Notes / Evidence
3. Notes → Brief Routing
4. Brief
5. Manuscript
6. Submission / Replication

The English pages are **functional counterparts**, not free rewrites and not a simplified public-facing summary. They must cause a high-level AI to confront substantially the same decision problem, retain the same discretion, observe the same prohibitions, and produce the same class of output as the Chinese source.

## 2. Governing equivalence standard

A translation is acceptable only when all of the following are preserved:

- **Object of work** — the same artifact, layer, evidence base, manuscript component, or workflow stage.
- **Cognitive posture** — exploration, adjudication, adversarial testing, implementation, compression, final QA, and so on must remain distinct.
- **Scope** — the English prompt must not quietly broaden or narrow the task.
- **Authority** — a suggestion must not become a command, and a hard constraint must not become optional.
- **Model discretion** — the English prompt must preserve the user’s preference for sparse local constraints and high model autonomy.
- **Negative constraints** — every important “do not” remains operative.
- **Sequencing and routing** — layers, return loops, stop rules, and artifact handoffs remain the same.
- **Evidence discipline** — null, unstable, contradictory, failed, and dead-end evidence retain their status and preservation rules.
- **Output contract** — required files, summaries, classifications, paths, or decisions remain required.
- **Artifact semantics** — Notes remain append-oriented; Brief and Manuscript remain living authoritative artifacts; the manuscript remains a single current LaTeX project.
- **Recommended mode** — model labels and escalation guidance remain unchanged except for grammatical localization.
- **Anchors and order** — prompt order, section order, and anchor IDs remain identical across languages.

## 3. What the translation must not do

The English counterpart must not:

- shorten a prompt merely because the English looks long;
- make a prompt more checklist-like than the source;
- add generic AI safety, hedging, or professional boilerplate;
- “improve” a methodological judgment that the Chinese source intentionally leaves open;
- add new output fields, gates, approval steps, or mandatory analyses;
- replace mixed economics terminology with less precise everyday language;
- convert a bounded suggestion into a universal rule;
- remove deliberate asymmetry between layers;
- hide a project-specific prompt by converting it into a generic prompt without authorization;
- silently update one language while leaving the other semantically different.

## 4. Translation style

The preferred English register is:

- natural senior-applied-micro language;
- direct and operational;
- academically precise without sounding like legal terms of service;
- concise where the Chinese is concise;
- detailed where the Chinese is intentionally detailed;
- comfortable retaining standard terms such as estimand, identifying variation, fixed effects, bad controls, evidence spine, claim boundary, paper identity, and desk rejection.

Sentence-level elegance is secondary to preserving the decision problem and the user’s intended degree of model autonomy.

## 5. Language-localization rules

### 5.1 User-facing summaries

Several Chinese prompts require a `中文综述`. In the English counterpart, this is translated as a **plain-language summary in the user’s preferred interaction language**. This is a localization of the communication channel, not a change in the substantive output. The technical memo remains in formal research English.

### 5.2 Formal artifacts

The established project convention remains:

- interaction may use the user’s preferred language;
- formal research artifacts are English unless source-language material must be preserved.

The English pages therefore never imply that project Notes, Briefs, manuscripts, tables, code comments, or documentation should be translated into Chinese.

### 5.3 Model and product names

Keep current model labels exactly as operational labels:

- Pro
- High
- Extra High
- Fable High / Max
- Opus High / Max
- Claude Code

Do not substitute an allegedly equivalent model or rewrite model allocation during translation.

## 6. Delicate Chinese concepts and approved English renderings

| Chinese idea | Preferred rendering | Translation note |
| --- | --- | --- |
| 自害 / 过度自害 | needlessly weaken / needlessly undermine the paper | Not “self-harm”; this is publication-strategy language. |
| 叠甲 | defensive writing / defensive armor / excessive qualification | Use the contextual wording, not internet slang. |
| 立住 | stand as a coherent and defensible whole | Captures manuscript-level closure rather than mere grammatical correctness. |
| 黑话 | jargon / code-centric technical language | Use only where the source is about communication style. |
| 最强可辩护版本 | strongest defensible version | Preserve the tension between ambition and evidence discipline. |
| 合理发表上限 | maximum plausible publication ceiling | A ceiling, not an acceptance forecast. |
| 主线 | central line / main narrative | Avoid reducing it to “topic.” |
| 证据脊柱 | evidence spine | Retain as a deliberate architecture metaphor. |
| claim boundary | claim boundary | Keep the established mixed-language term. |
| paper identity | paper identity | Keep the established term. |
| 落盘 | write into / materialize in an authoritative project artifact | Use the engineering sense, not literal “save to disk” in every context. |
| 不能硬凑 | do not force a fit | Preserve the anti-overfitting meaning. |
| 不要机械执行 | do not implement mechanically | Preserve the implementation veto. |
| 不要为了完整 | do not do X merely for completeness | A recurring anti-checklist constraint. |
| 明确裁决 | explicit adjudication / direct decision | Stronger than “comment on.” |
| 读者习俗 | disciplinary conventions / what economists normally expect | Context-sensitive. |

## 7. Layer-specific invariants

### Setup

- Infrastructure constraints may be detailed because they govern artifacts, not scientific conclusions.
- `CLAUDE.md`, `PROJECT.md`, and `HANDOFF.md` must remain distinct forms of memory.
- The workflow is directional but not an irreversible gate system.

### Notes / Evidence

- Exploration precedes story formation.
- Significance never determines preservation.
- Horizontal, vertical, adversarial, contradiction-resolution, and convergence modules remain distinct.
- The design map reports the local empirical world and escalates only genuine economic judgments.

### Routing

- Literature can reopen the evidence or data layer.
- Reopening requires paper-level value of information.
- Pro adjudicates scarce economic judgments; the local agent verifies the full empirical world.
- The Candidate Brief must receive a reverse audit before final lock.

### Brief

- Publication ceiling is distinct from acceptance probability.
- Journal fit affects framing and evidence selection, not scientific standards.
- The Brief selects and excludes evidence before manuscript production begins.

### Manuscript

- Quick Passes remain light and open.
- Deep Audits retain their distinct cognitive postures.
- The manuscript is reviewed as an economics paper rather than generic prose.
- Production QA and substantive adjudication remain separate.

### Submission / Replication

- No actual submission without explicit authorization.
- Replication is clean-room reproduction, not preservation of exploratory history.
- A frozen snapshot is a restart capsule and must be portable, complete, minimal, and immutable after creation.

## 8. Structural parity requirements

For each layer pair:

- same prompt anchors in the same order;
- same number of fenced prompt blocks;
- same top-level workflow sequence;
- same internal cross-references;
- same recommended-mode classification;
- same inclusion / exclusion boundaries;
- same stop conditions;
- same required artifact names and paths;
- no unintended CJK text in the English page, except an explicitly reviewed source-language example;
- no broken planned English routes at publication time.

## 9. Canonical maintenance direction

The normal authoring direction is **Chinese-first** because prompt development occurs primarily in Chinese.

1. Make the substantive change in the Chinese source.
2. Mark the English counterpart stale.
3. Translate the semantic change.
4. Compare the two versions for functional equivalence.
5. Update `source_blob_sha` and mark `translation_status: synced` only after review.

An English-first suggestion should first be expressed as a proposed semantic change to the Chinese source. Once accepted, update both languages together.

Purely typographic, accessibility, route, or bilingual-infrastructure changes may be applied to both pages directly when prompt semantics remain unchanged.

## 10. Final review questions

Before an English page is accepted, a reviewer should be able to answer yes to all of the following:

1. Would a capable model face the same substantive task in both languages?
2. Are the same actions prohibited or discouraged?
3. Does the model retain the same degree of discretion?
4. Are the same outputs and artifacts required?
5. Does the same evidence / manuscript / submission boundary apply?
6. Are the same escalation and stopping rules preserved?
7. Would using the English prompt alter the research workflow only because of language, not because of a hidden redesign?
