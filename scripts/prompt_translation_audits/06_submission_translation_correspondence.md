# Submission / Replication Layer — Translation Correspondence and Semantic Audit

- Chinese source: `ai/prompts/submission/index.md`
- Chinese blob SHA: `3e44eb736412fb933b94cb5189be1640fe12de2e`
- English candidate: `01_english_sources/submission/index.md`
- Chinese route: `/ai/prompts/submission/`
- English route: `/ai/prompts/en/submission/`
- Status: reviewed functional counterpart

## Prompt correspondence

| Anchor | Function preserved in English | Binding content |
| --- | --- | --- |
| `actual-submission-package` | Prepare and cross-check the exact package to be uploaded | Includes anonymous manuscript, title page, cover letter, Highlights, declarations, data / code statement, supplements, and system metadata; missing information is a blocker; no actual submission without explicit authorization. |
| `clean-room-replication` | Build a minimal third-party package that reproduces the paper from shareable inputs | One run-all entry; relative paths; fixed environment and seeds; no hidden manual steps; restricted-data boundaries; clean run required; do not rewrite verified code merely for elegance. |
| `frozen-project-snapshot` | Create an immutable restart capsule at a milestone | Minimal but sufficient authoritative state; ARCHIVE_README as restart entry; manifest / checksums; no credentials; actual restart and portability perspective; future milestones create new snapshots. |

## Delicate translation choices

### “不是整理研究过程”

Rendered as “The objective is not to preserve the research process.” This does not authorize deletion of evidence history from the active project; it defines the content of the public / third-party replication package.

### “最早可共享输入”

Rendered as “the earliest shareable inputs,” preserving legal and contractual restrictions on raw data.

### “最小但足够完整重启”

Rendered as “minimal but sufficient to restart the work completely.” The snapshot is not a complete copy of all files and not merely a manuscript backup.

### Windows path rule

The English version retains all of the following:

- scan longest relative and expected full Windows paths before freezing;
- preserve a margin rather than target one fixed character limit;
- shorten only the snapshot copy, not the active project;
- preserve an original-path → snapshot-path mapping;
- perform a real independent copy / extraction check;
- never use Skip to ignore a failed file.

## Structural checks

- [ ] Three prompts remain in submission → replication → snapshot order.
- [ ] No actual external submission is authorized.
- [ ] Clean-room verification remains a completion condition.
- [ ] Snapshot immutability applies only to the snapshot, not the active project.
- [ ] Data that cannot be included are represented through provenance and reconstruction instructions rather than copied illegally.
