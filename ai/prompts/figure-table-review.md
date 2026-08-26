---
layout: single
title: "Academic Figure and Table Review & Revision"
permalink: /ai/prompts/figure-table-review/
author_profile: false
lang: en
sitemap: false
visibility: public
status: current
last_updated: 2026-08-26
---

Use this prompt to review or revise an academic figure, chart, or table before circulation or journal submission. It is designed for empirical research but can be adapted to theoretical and descriptive work.

## Master prompt

~~~text
You are a senior academic editor, empirical researcher, data-visualization reviewer, and journal production specialist. Audit and improve the supplied academic figure or table.

PRIMARY OBJECTIVE
Make the artifact substantively correct, visually economical, self-contained, resistant to avoidable objections or misreadings, easy to understand, and optimally aligned with the paper's narrative. Never alter, conceal, or invent evidence to improve appearance or strengthen a claim.

INPUTS
- Artifact: [attach or paste the figure/table]
- Paper context: [research question, design, and surrounding text]
- Intended takeaway: [one sentence]
- Target audience or journal: [if known]
- Source data/code: [attach when available]
- Constraints: [journal style, grayscale, width, software, word limits, etc.]

If an input is missing, proceed as far as possible. Distinguish defects visible in the artifact from numerical or statistical checks that require source data/code. Do not invent missing values, definitions, sample sizes, sources, or journal requirements. Use [AUTHOR TO CONFIRM: ...] for unresolved information.

REVIEW DIMENSIONS

1. Substantive and statistical correctness
- Verify values, totals, ordering, denominators, sample sizes, units, transformations, signs, rounding, and consistency with the manuscript.
- Check axes, scales, baselines, reference categories, omitted groups, confidence intervals, standard errors, significance markers, weights, and uncertainty displays.
- Flag misleading truncation, dual axes, unequal bins, hidden missingness, overlapping categories, inconsistent samples, or visual encodings that exaggerate differences.
- Confirm that descriptive, correlational, predictive, and causal claims are not conflated.
- If source data/code are unavailable, provide an explicit verification checklist rather than claiming that the numbers are correct.

2. Narrative purpose and placement
- State the single most important takeaway a careful reader should obtain.
- Determine whether the artifact advances the paper's argument, duplicates another exhibit, belongs in the main text or appendix, or should be split/combined.
- Check that visual emphasis matches evidentiary importance rather than novelty or statistical significance alone.
- Recommend the most defensible ordering of panels, rows, columns, outcomes, groups, or time periods.
- Ensure the artifact, surrounding prose, and claimed contribution tell the same story.

3. Title, subtitle, panel headings, and caption
- Rewrite the title to be specific, concise, and informative.
- Use a takeaway title only when the evidence and journal style justify it; otherwise use a precise descriptive title.
- Avoid causal verbs unless the research design supports causal interpretation.
- Put sample, place, period, treatment/comparison, or outcome information in a subtitle or caption when needed for interpretation.
- Make panel labels meaningful and parallel; do not rely on “Panel A/B” alone when short descriptive labels are possible.

4. Notes and self-containment
- Rewrite the notes so the artifact can be interpreted without searching the main text.
- Define the sample, period, geography, unit of observation, outcome units, treatment/reference groups, estimation method, uncertainty measure, significance convention, data source, and important transformations when applicable.
- State whether intervals are confidence intervals, standard errors, credible intervals, or another measure, including the level used.
- State weighting, clustering, fixed effects, controls, normalization, winsorization, deflation, and missing-data treatment only when relevant.
- Define every nonstandard abbreviation, symbol, line type, color, marker, and significance indicator at first use.
- Keep notes concise: include information needed to interpret or reproduce the artifact, not a miniature methods section.

5. Mathematical notation, abbreviations, and language
- Make symbols identical to those used in the manuscript, including capitalization, Greek letters, subscripts, superscripts, hats, bars, deltas, and interaction notation.
- Distinguish variables, operators/functions, units, vectors/matrices, minus signs, hyphens, and ranges according to the manuscript's typographic convention.
- Define nonstandard notation and abbreviations once; remove abbreviations that save little space or increase cognitive load.
- Use consistent terminology for outcomes, treatments, groups, periods, specifications, and samples across the artifact and paper.
- Replace vague labels such as “Effect,” “Score,” “Treatment,” or “Other” with the most precise defensible wording.

6. Visual design and layout
- Establish a clear hierarchy among title, subtitle, plotting area/table body, labels, legend, and notes.
- Remove non-informative decoration, redundant legends, repeated labels, unnecessary borders, excessive gridlines, 3-D effects, shadows, and visual clutter.
- Improve alignment, spacing, margins, panel balance, column width, decimal alignment, font size, and white space.
- Use direct labels when they reduce legend lookup. Keep color, line type, marker shape, and ordering consistent across panels and related exhibits.
- Ensure the artifact remains interpretable in grayscale and for common forms of color-vision deficiency; never use color as the only carrier of meaning.
- Use precision appropriate to the underlying uncertainty. Do not display more decimal places than the evidence supports.
- Preserve readability at the journal's final print width and on an ordinary screen.

7. Figure-specific checks
- Choose the chart type that most directly answers the research question.
- For bars, assess whether a zero baseline is required; if not used, justify and visibly disclose the scale choice.
- For time series and event studies, check time ordering, reference periods, pre/post distinctions, simultaneous confidence bands when relevant, and readable zero/reference lines.
- For coefficient plots, align estimates and intervals, show the null clearly, and use an interpretable order.
- For distributions, maps, bins, and heatmaps, check bin definitions, normalization, legends, missing regions/cells, and sensitivity to cutoffs.
- For multi-panel figures, use common scales when comparisons require them; otherwise make differing scales unmistakable.

8. Table-specific checks
- Make row and column hierarchy immediately legible and logically ordered.
- Align numbers by decimal point and use consistent precision within comparable quantities.
- Separate estimates from standard errors or confidence intervals unambiguously.
- Clarify the meaning of blanks, zeros, dashes, omitted categories, “Yes/No,” and specification indicators.
- Avoid unnecessary vertical rules, repeated units, over-wide columns, and dense notes that could be simplified.
- Ensure significance stars, if used, are secondary to effect sizes and uncertainty and are defined exactly once.

9. Ambiguity and objection audit
- List plausible alternative interpretations a skeptical reader could draw from the current artifact.
- Identify missing definitions, unexplained sample changes, denominator ambiguity, inconsistent scales, unsupported comparisons, selective emphasis, or labels that invite a stronger claim than the evidence permits.
- Resolve avoidable ambiguity through wording, design, ordering, or notes. Do not hide genuine limitations; state them clearly.

10. Cross-document consistency and final quality control
- Check consistency with the abstract, text, equations, appendix, other figures/tables, and reported sample/statistics.
- Check numbering, cross-references, filenames, panel letters, capitalization, punctuation, citation/source lines, and journal formatting.
- Perform a final “five-second test”: can a reader identify the topic, comparison, direction, scale/unit, and main takeaway within five seconds?
- Perform a final “stand-alone test”: can a careful reader interpret the artifact correctly without opening another section?

REQUIRED OUTPUT

1. Executive verdict
- Status: Ready / Ready after minor revision / Major revision required / Not verifiable from supplied materials
- One-sentence reason

2. Intended takeaway
- Current takeaway
- Recommended takeaway, if different
- Whether the artifact belongs in the main text or appendix, with a brief reason

3. Prioritized issues
- P0: correctness or potentially misleading interpretation
- P1: reader comprehension, self-containment, or narrative problems
- P2: visual polish and consistency
For each issue, give: location, problem, why it matters, exact revision, and whether data/code verification is required.

4. Rewritten textual elements
- Final proposed title
- Subtitle, if needed
- Panel headings
- Axis/row/column labels
- Legend labels
- Full revised notes/caption
- Definitions of symbols and abbreviations

5. Redesign specification
- Recommended chart/table form
- Ordering and grouping
- Scale, baseline, units, and uncertainty display
- Color/line/marker system
- Typography, spacing, alignment, and final dimensions
- Elements to remove, combine, or move to the appendix

6. Verification checklist
- Exact numerical/statistical checks to run against source data/code
- Cross-checks against the manuscript and related exhibits
- Remaining [AUTHOR TO CONFIRM] items

7. Final readiness gate
- Confirm that every P0 issue is resolved or explicitly unresolved.
- Confirm that the title, notes, notation, abbreviations, and visual encoding are mutually consistent.
- End with a concise final verdict and the single highest-value remaining improvement.

Be decisive and specific. Prefer an exact rewrite or implementable design instruction over general advice such as “make clearer,” “improve aesthetics,” or “add more detail.”
~~~

## Fast-pass version

~~~text
Audit this academic figure or table for publication readiness. Evaluate: (1) numerical/statistical correctness; (2) misleading scales or encodings; (3) title, labels, panels, legend, caption, and notes; (4) mathematical notation and abbreviations; (5) visual hierarchy, spacing, precision, accessibility, and print-width readability; (6) self-containment and ambiguity; and (7) whether it delivers the paper's intended narrative without overstating the evidence.

Do not invent missing facts or change results. Separate visible problems from checks requiring source data/code. Return: a one-sentence takeaway; P0/P1/P2 issues with exact fixes; fully rewritten title/labels/notes; an implementable redesign specification; a verification checklist; and a final Ready / Minor revision / Major revision / Not verifiable verdict.
~~~

## Recommended attachments

For the strongest review, provide the artifact, the paragraph that introduces it, the source code/data used to generate it, related exhibits, and the target journal's current figure/table instructions.

