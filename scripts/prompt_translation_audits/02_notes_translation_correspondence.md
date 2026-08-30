# Notes / Evidence Layer — Translation Correspondence and Semantic Audit

- Chinese source: `ai/prompts/notes/index.md`
- Chinese blob SHA: `62a61dd928bc43b33d60b9638dbdf94c2793869f`
- English candidate: `01_english_sources/notes/index.md`
- Chinese route: `/ai/prompts/notes/`
- English route: `/ai/prompts/en/notes/`
- Status: reviewed functional counterpart

## Prompt correspondence

| Anchor | Function preserved in English | Non-negotiable semantic content |
| --- | --- | --- |
| `initial-empirical-design-map` | Build a factual map of data, variables, specification space, identification candidates, and implementation decisions before large exploration | Local-file inspection precedes judgment; do not run regressions for cosmetic completeness; isolate questions that genuinely require Pro-level economics judgment. |
| `update-empirical-design-map` | Reconcile the old map with current files and detect design drift | Do not append a changelog indefinitely; outdated judgments must be revised, downgraded, or removed. |
| `implement-gpt-pro-review` | Verify Pro comments against local facts, execute only high-value checks, and create a technical return plus a plain-language summary | Pro comments are analytical inputs, not patches; local evidence can overturn Pro; no unlimited specification expansion. |
| `gpt-pro-re-adjudication` | Ask Pro to reconsider prior concerns using newly verified evidence | Pro must not defend its previous position merely because it raised it. |
| `case-specific-notes-exploration` | Preserve the current CGSS example as a project-specific exploration prompt | The example is not generalized silently; null, unstable, failed, and closed routes remain preserved and linked to code / logs. |
| `notes-control` | Constrain work to Notes / Evidence and define preservation discipline | No manuscript brief or manuscript; no significance selection; all informative evidence may remain. |
| `research-space-expansion` | Horizontal expansion of substantive research branches | Expand the research space, not the story. |
| `empirical-space-expansion` | Horizontal expansion of defensible measurement, sample, specification, and inference choices | Every specification family must answer a stated substantive / measurement / identification / inference question. |
| `deep-investigation` | Vertical investigation of the branch most likely to change the research judgment | Continue until the branch can be classified as established, limited, uncertain, or closed; do not stop at a pretty result. |
| `adversarial-audit` | Try to overturn the most consequential finding through plausible failure modes | Attack real failure modes rather than significance through specification search. |
| `evidence-conditioned-discovery` | Generate new branches from anomalies, contradictions, and dead ends | Only substantive or diagnostic extensions qualify. |
| `branch-adjudication` | Converge by summarizing status, best evidence, best counterevidence, unresolved question, and next action | Close low-value branches without entering the Brief. |
| `contradiction-resolution` | Explain conflicting evidence and seek discriminating evidence | The objective is not to defend one result. |
| `notes-cycle` | Preserve the H1 → H2 → V1 → V2 → H3 → C1 cycle and X1 insertion | Modules remain separate; the stop rule is judgment saturation, not specification saturation. |

## Delicate translation choices

### “快速建立”

Translated as “build” rather than “quickly produce.” The source asks for efficiency but also direct local verification. The English version does not imply that speed outranks accuracy.

### “Questions for GPT Pro”

Retained exactly as an artifact section. The prompt continues to exclude coding and debugging questions and requires enough facts for a fresh Pro session.

### `给我的中文综述`

Localized to “Plain-language summary for me.” The substantive function is to translate technical evidence into collaborator-level understanding. The formal technical return remains English. The implementation guide may optionally render this as “in the user’s preferred interaction language.”

### “不是为了改变显著性而搜索 specification”

Rendered as “not search across specifications merely to change significance.” This keeps the anti-p-hacking and anti-specification-search meaning explicit.

### “停止标准不是 specification 饱和”

The final English stopping rule is kept as a block quote and remains based on whether further exploration can materially change the research judgment.

## Structural checks

- [ ] Four pre-workflow prompts remain before the case-specific example.
- [ ] The specific CGSS example remains specific.
- [ ] H1, H2, V1, V2, H3, C1, X1, and Cycle appear in the same order.
- [ ] Every module remains a separate fenced prompt.
- [ ] `Literature-Informed Routing` links to `/ai/prompts/en/routing/`.
- [ ] No prompt has been converted into a mandatory stage gate.
