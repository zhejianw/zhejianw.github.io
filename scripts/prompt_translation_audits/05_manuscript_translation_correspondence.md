# Manuscript Layer — Translation Correspondence and Semantic Audit

- Chinese source: `ai/prompts/index.md`
- Chinese blob SHA: `760240e266a49475d2bbc3af065fc183c8e22743`
- English candidate: `01_english_sources/manuscript/index.md`
- Chinese route: `/ai/prompts/`
- English route: `/ai/prompts/en/`
- Status: reviewed functional counterpart

## 1. Page architecture

The English page preserves:

- Quick Passes vs Deep Audits;
- the substantive-revision and pre-submission paths;
- sections A–H in the same order;
- all existing prompt anchors;
- every recommended-mode label;
- the distinction between substantive adjudication, prose review, and production QA;
- the instruction that a review perspective is not a checklist.

## 2. General and Quick Passes

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-meta-review-principles` | Optional general instruction that prioritizes material problems | Must not become a mandatory preamble; “not a checklist” remains explicit. |
| `prompt-table-figure-general-audit` | Open-ended audit of a single exhibit for correctness and presentation | “无异议” is rendered as lack of ambiguity, not as an impossible guarantee against criticism. |
| `prompt-interpretable-magnitudes` | Prefer economically interpretable scales without changing the estimand | Does not force all coefficients into percentages or all tables onto one scale. |
| `prompt-heading-audit` | Review all manuscript and appendix headings | Preserves both technical correctness and narrative function. |
| `prompt-formatting-audit` | Check overuse of bold / italics / paragraph-opening emphasis | Remains a light formatting pass. |
| `prompt-introduction-audit` | Review Introduction structure, hook, findings summary, contribution, and implication | “提高格调” becomes elevating intellectual significance within the evidence boundary, not marketing language. |
| `prompt-discussion-audit` | Keep the Discussion from becoming a dumping ground while addressing expected concerns | “不能成为自害” is translated as avoiding needless self-undermining; material limitations must still be addressed. |
| `prompt-exhibit-ordering` | Reorder exhibits and reassign main-text / appendix / footnote placement | Does not mandate movement for its own sake. |

## 3. A. Whole-Paper Identity

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-paper-identity` | Determine what paper the manuscript actually is | Requires one-sentence question, design, finding, and contribution, followed by one memorable central message. |
| `prompt-claim-hierarchy` | Rank central, supporting, secondary, suggestive, robustness, and contextual claims | Statistical significance must not determine narrative rank; claims may be moved or removed. |

## 4. B. Section Audits

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-abstract-audit` | Test whether an editor reading only the Abstract understands the paper accurately | Retains focus on information architecture rather than copyediting. |
| `prompt-background-institutional-context` | Provide the minimum institutional information needed for question and identification | Distinguishes statutory rules, formal policy, implementation, and enforcement. |
| `prompt-data-measures` | Audit sample, timing, measures, and presentation | Preserves the final referee-attack question. |
| `prompt-identification-strategy` | Identify what variation recovers what estimand and whether design elements align | Keeps causal-language and unresolved-threat boundaries. |
| `prompt-identification-assumptions-evidence` | Map assumptions to expected tests, diagnostics, or supporting evidence | Remains deliberately short and open. |
| `prompt-empirical-specification-audit` | Check whether notation, fixed effects, controls, and coefficient interpretation make the specification readable and defensible | Must explain whether FE / controls identify, address concerns, improve precision, or merely follow convention. |
| `prompt-results-narrative` | Rebuild Results around substantive questions and reader belief updating | Does not turn into table-by-table reporting. |
| `prompt-heterogeneity-mechanisms` | Separate heterogeneity, mechanisms, descriptive correlation, and exploratory subgroups | “One significant, one insignificant” cannot establish a group difference. |
| `prompt-economic-mechanism-interpretation-audit` | Infer a plausible latent economic mechanism from the joint evidence without calling consistency proof | Must distinguish observed links, untestable steps, and alternative mechanisms. |
| `prompt-conclusion-audit` | Close the paper without repeating the Introduction or becoming a second Discussion | May conclude that a separate Conclusion is unnecessary. |

## 5. C. Evidence & Inference

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-estimand-audit` | Build an exhibit-level estimand crosswalk | Differences may be intentional; do not force false uniformity. |
| `prompt-estimand-type-compliance` | Distinguish ITT, ATT / ATET, TOT / LATE, and other relevant objects | Do not apply labels merely for terminological completeness. |
| `prompt-null-results` | Distinguish evidence of absence from absence of evidence | Null placement is determined by substantive importance, not significance. |
| `prompt-robustness-architecture` | Make each robustness exercise answer a clear concern | The final classification remains main-text required / appendix / delete. |

## 6. D. Literature

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-literature-positioning` | Identify 3–8 genuinely closest papers and construct a defensible relationship | Do not pad the list, construct strawmen, or use setting differences as the contribution. |
| `prompt-single-paper-review` | Determine what one paper actually means for citation, contribution, substance, and method | Citation obligation is distinct from how much narrative space the paper receives. |
| `prompt-citation-audit` | Check both citation-reference consistency and source support | Source support requires reading the source; unverified sources must remain marked. |
| `prompt-incremental-literature-discovery` | Find roughly 20 additional high-value papers and triage reading / download decisions | Twenty is a search target, not a quota; novelty threats must be flagged separately. |

## 7. E. Exhibits & Appendix

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-standalone-exhibit-audit` | Test whether one exhibit can be interpreted without main-text rescue | “Standalone” does not mean putting the whole method in notes. |
| `prompt-footnote-audit` | Classify footnotes as main text / footnote / appendix / delete | Review the footnote together with its host sentence. |
| `prompt-appendix-architecture` | Rebuild the appendix around specific supporting functions and main-text claims | Reordering must improve evidence–claim correspondence, not only neatness. |

## 8. F. Cross-Manuscript Consistency

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-manuscript-consistency` | Find contradictions across Title, sections, exhibits, notes, and appendix | Different estimands or samples are not automatically errors. |
| `prompt-key-number-cross-check` | Reconcile repeated findings across manuscript and submission materials | Different numerical expressions must imply the same magnitude. |
| `prompt-precision-rounding-audit` | Establish a stable but non-mechanical precision policy | Different decimal places remain acceptable when scale or interpretation requires them. |
| `prompt-numbering-reference-order-audit` | Check increasing numbering and reference order | Exceptions remain possible for journal rules or real narrative need. |
| `prompt-terminology-notation` | Build a canonical terminology and notation map | Do not replace standard field terms or official institutional names for cosmetic uniformity. |
| `prompt-caveats-defensive-writing-audit` | Match caveat prominence and placement to scientific importance | Material problems cannot be hidden; low-information AI-style caution may be deleted. |
| `prompt-review-comment-adjudication` | Identify the underlying concern behind external comments and choose the lowest-cost coherent response | External feedback is not a patch list. |
| `prompt-revision-ripple-effect` | Verify requested changes and detect new inconsistencies caused by revision | Requires prior and current manuscripts plus review materials; missing evidence must remain unverifiable. |
| `prompt-revision-residue-audit` | Remove obsolete traces of prior discussion and rejected alternatives | Preserve an old alternative only when it has independent substantive value. |

## 9. G. Adversarial

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-editor-five-minute-read` | Simulate a realistic desk screen | Only the changes most affecting review probability should be returned. |
| `prompt-hostile-referee` | Find defensible rejection reasons and classify severity / resolvability | Hostility does not authorize fabricated concerns. |
| `prompt-senior-coauthor` | Seek one-level improvement with low marginal work | Prioritize high-return / low-cost changes, not a new paper. |
| `prompt-unseen-risks` | Identify 3–5 non-generic issues visible only after understanding the manuscript | Must not fall back to a standard checklist. |

## 10. H. Convergence

| Anchor | English function | Important semantic constraint |
| --- | --- | --- |
| `prompt-compression-pass` | Raise signal-to-noise while reducing roughly 15–20% under the stated hypothetical | Protect identification, strongest findings, contribution, and necessary caveats. |
| `prompt-paragraph-narrative` | Review paragraph function, placement, transitions, and deletability | Focus on narrative architecture rather than grammar. |
| `prompt-prose-quality-readability-audit` | Remove observable AI-assisted prose pathologies while preserving mature economics prose | Do not make prose artificially colloquial or irregular to appear human. |
| `prompt-pre-submission-robustness` | Adjudicate do now / optional / do not recommend | “More is possible” is not a reason to add analysis. |
| `prompt-integration-audit` | Test the full Question → Setting → Identification → Evidence → Interpretation → Contribution → Implication chain | “立住” is rendered as standing as a coherent and defensible whole. |
| `prompt-technical-artifact-audit` | Review LaTeX, PDF, and Markdown / documentation artifacts only | Must not change substantive content. |
| `prompt-final-manuscript-audit` | Review the actual final PDF for submission safety | No new paper identity or analysis; output remains must fix / manual system check / safe. |

## 11. Delicate translation choices

### “AI味”

The English prompt never asks vaguely to “sound less AI-generated.” It retains the source’s observable prose pathologies: repeated syntax, over-signposting, inflated abstraction, mechanical symmetry, formulaic qualification, and monotonous rhythm.

### “自害” and “叠甲”

Translated contextually as needless self-undermining, defensive writing, or defensive armor. These terms concern publication prose, not personal self-harm.

### “文章已经立住”

Translated as “Does the paper now stand as a coherent and defensible whole?” This preserves the manuscript-level judgment rather than reducing the phrase to “Is it complete?”

### “无异议”

Translated as lack of ambiguity and defensible presentation. The English version does not promise that an exhibit will be immune from scholarly disagreement.

### “格调”

Translated as intellectual significance within the evidence boundary, avoiding aesthetic or marketing connotations.

## 12. Structural review checklist

- [ ] All 51 fenced prompt blocks are present.
- [ ] All source anchors are preserved in order.
- [ ] Quick Passes remain before the Deep Audits.
- [ ] Sections A–H remain in source order.
- [ ] Cross-links to Q2 / Q3 / Q4 / Q5 / Q6 remain valid.
- [ ] No production-QA prompt was converted into a substantive review prompt.
- [ ] No adversarial prompt was softened into general coaching.
- [ ] No open prompt was expanded into a mandatory checklist beyond the source.
