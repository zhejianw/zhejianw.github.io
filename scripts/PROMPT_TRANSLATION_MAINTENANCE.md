# Bilingual Prompt Library Maintenance

## 1. Memory model

- **Chinese pages** are the ordinary semantic authoring source because prompt development occurs primarily in Chinese.
- **English pages** are reviewed functional counterparts.
- Shared templates, CSS, JavaScript, routes, accessibility, and privacy controls are language-neutral infrastructure.
- Automated parity checks protect structure and staleness; they do not prove semantic equivalence.

## 2. Source pairs

Use `scripts/prompt_translation_manifest.json` as the mechanical registry. Each English page also records:

```yaml
translation_of:
source_path:
source_blob_sha:
translation_status:
```

Allowed status values:

- `synced`
- `needs-review`

A page is not `synced` merely because it builds or because an automated translation was produced.

## 3. Chinese-first semantic update

When a Chinese prompt changes substantively:

1. edit the Chinese source;
2. identify exactly which prompt blocks, descriptions, mode notes, workflow text, or cross-links changed;
3. immediately mark the paired English page `translation_status: needs-review`;
4. translate the semantic diff rather than regenerating the entire page blindly;
5. compare the pair using the layer correspondence file;
6. preserve the same anchors, order, model discretion, prohibitions, output contract, and artifact semantics;
7. run the parity checker;
8. run the site build and browser smoke tests;
9. update `source_blob_sha` to the current Chinese git blob;
10. set `translation_status: synced` only after semantic review;
11. update `last_updated` in both pages when the visible semantic content changed.

## 4. English-first substantive suggestion

Do not silently improve only the English page.

1. formulate the underlying proposed semantic change;
2. decide whether it should alter the canonical prompt;
3. after approval, express it in the Chinese source;
4. update the English counterpart;
5. complete the normal parity and semantic review.

This prevents the two languages from becoming different prompt libraries.

## 5. Pure infrastructure change

For CSS, JavaScript, routing, accessibility, copy controls, search, or privacy changes that do not alter prompt meaning:

- change shared infrastructure once;
- test both languages;
- do not rewrite prompt bodies;
- do not change translation status solely because of a shared technical change.

## 6. Translation review standard

Review function, not sentence resemblance. Ask:

- Is the object of work identical?
- Is the cognitive posture identical?
- Is the scope equally broad or narrow?
- Are hard constraints still hard and suggestions still suggestions?
- Does the model retain the same autonomy?
- Are all meaningful prohibitions preserved?
- Are the same outputs and artifacts required?
- Are Notes / Brief / Manuscript roles unchanged?
- Are routing and stop rules unchanged?
- Would a high-level AI behave differently for a substantive reason introduced by the translation?

## 7. Delicate recurring language

Use the approved interpretations in `scripts/prompt_translation_audits/00_master_translation_principles.md` and the layer-specific correspondence file in the same directory.

Especially:

- 自害 is publication self-undermining, never personal self-harm;
- 叠甲 is excessive defensive qualification;
- 立住 is manuscript-level coherence and defensibility;
- 落盘 is materialization in an authoritative artifact;
- 中文综述 becomes a plain-language summary in the user’s preferred interaction language, while formal project artifacts remain English.

## 8. Structural invariant

Never change these independently across languages:

- prompt order;
- anchor IDs;
- fenced prompt-block count;
- workflow sequence;
- internal cross-links;
- model labels;
- required filenames and project paths;
- output classifications;
- stop conditions.

If the canonical Chinese structure legitimately changes, update both and then update the manifest counts.

## 9. Review cadence

- Run the parity checker on every pull request and push affecting either Prompt tree or shared Prompt infrastructure.
- Perform a semantic review whenever a Chinese source blob changes.
- Review the entire bilingual library at a low frequency only; ordinary maintenance should be diff-based.
- Use the Manuscript layer in sections during a full review because it contains 51 prompt blocks.

## 10. Failure handling

If the checker reports a stale SHA:

- do not auto-update the SHA;
- inspect the Chinese diff;
- mark English `needs-review` until reviewed.

If the checker reports anchor or prompt-block drift:

- determine whether the Chinese structure changed legitimately;
- update English and the manifest if yes;
- otherwise repair the unintended drift.

If the pages build but a semantic mismatch is found:

- treat semantic review as authoritative;
- mark the translation `needs-review`;
- correct it before claiming bilingual synchronization.

## 11. Publication boundary

Both language trees remain public by exact URL and visible in the public repository. Do not store confidential prompts or private research materials in either language. Keep both trees noindex, out of sitemap and public navigation, analytics-disabled, and absent from crawler-facing prompt-body indexes.
