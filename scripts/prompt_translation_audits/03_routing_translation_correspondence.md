# Notes → Brief Routing — Translation Correspondence and Semantic Audit

- Chinese source: `ai/prompts/routing/index.md`
- Chinese blob SHA: `d3410b57ebfe379adb9921b47ce3c9bb7840d21a`
- English candidate: `01_english_sources/routing/index.md`
- Chinese route: `/ai/prompts/routing/`
- English route: `/ai/prompts/en/routing/`
- Status: reviewed functional counterpart

## Page-level correspondence

The page-level statement that this is **not a linear handoff** is preserved. Literature changes the question set; Pro adjudicates whether the new question justifies reopening evidence; the local agent checks the full empirical world; the Brief is locked only after paper-level uncertainty is sufficiently low.

The visual routing map retains the same six stations and five branch outcomes. The stop-rule examples remain deliberately asymmetric:

- strong causal paper / descriptive paper / project dies → reopen Notes;
- one more or one fewer appendix table → do not delay the Brief.

## Prompt correspondence

| Anchor | Function preserved in English | Binding content |
| --- | --- | --- |
| `routing-literature-triage` | Allocate reading effort by expected effect on the Brief | Do not rank by journal prestige or keyword similarity; identify reading depth and stop low-value reading. |
| `routing-close-reading` | Read binding papers fully and produce durable memos | Actual main text / appendix reading; record implications for identification, measurement, estimand, interpretation, contribution, framing, and evidence demand. |
| `routing-brief-input-pack` | Compress the local empirical and literature world for Pro | Do not write the Brief; retain only paper-defining information and exact local paths. |
| `routing-evidence-brief-router` | Classify every material uncertainty into enough / recheck / existing-data evidence / new data / costly design / untestable / downgrade-stop | New evidence is justified only when different plausible outcomes change paper-level judgment. |
| `routing-existing-data-targeted-notes` | Return narrowly to existing data | Do not reopen the full specification space; define ex ante what each possible result would imply. |
| `routing-new-data-feasibility` | Assess new-data value of information before acquisition | No collection merely because data may be useful; compare ideal data, realistic sources, substitutes, cost, and decision impact. |
| `routing-new-data-acquisition` | Execute only the adjudicated minimum acquisition plan | Preserve provenance and linkage; after acquisition, return to Notes rather than revising the manuscript story directly. |
| `routing-evidence-return` | Produce a concise evidence-return memo and collaborator-level summary | Return to Stage 3 Router; do not write the Brief directly. |
| `routing-candidate-brief` | Compare competing identities and design the strongest defensible candidate paper | Must identify claims that cannot be made; may route back if a material evidence gap appears. |
| `routing-candidate-brief-reverse-audit` | Audit Pro’s compressed Brief against the full local world | Do not seek support for Pro; check null, contradictory, failed evidence, literature territory, and untestable mechanisms. |
| `routing-final-brief-lock` | Re-adjudicate conflicts and lock the authoritative Brief | Pro must not defend its earlier Brief; reopen evidence only for a truly material unresolved issue. |
| `routing-materialize-final-brief` | Write one authoritative Brief and synchronize PROJECT / HANDOFF | Do not reopen substantive judgments; add only necessary local paths. |

## Delicate translation choices

### “文献负责改变问题集合”

Rendered as “Literature changes the set of questions,” not “literature review informs the paper.” The source gives literature an active role in generating evidence demand.

### “现实世界读取准确”

Rendered as “read the empirical world accurately.” This includes data, code, outputs, Notes, institutional facts, and literature rather than only file reading.

### “低 information value 的问题没有资格重开项目”

Preserved through the Router criterion and stop rule, not recast as a bureaucratic approval gate.

### `给我一份中文综述`

Localized to a plain-language summary in the user’s preferred interaction language. The research artifact returned to Pro remains formal English.

### Model allocation

All current model labels remain unchanged. Translation does not replace Fable / Opus with Codex or alter the user’s current allocation, even if future model availability changes.

## Structural checks

- [ ] Routing map stations and branch outcomes match the Chinese page.
- [ ] Twelve prompt anchors match exactly.
- [ ] Stage 5 returns to Stage 3 rather than moving directly to Brief.
- [ ] Reverse audit retains its return path to the Router.
- [ ] The stopping-rule examples are preserved.
- [ ] The model-allocation table has the same stages and labels.
- [ ] English workflow links resolve to the English Notes, Brief, and Manuscript routes.
