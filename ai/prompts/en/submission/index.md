---
layout: single
title: "Prompt Library · Submission / Replication Layer"
permalink: /ai/prompts/en/submission/
lang: en
prompt_lang: en
prompt_layer: submission
translation_key: submission
translation_of: /ai/prompts/submission/
source_path: ai/prompts/submission/index.md
source_blob_sha: 3e44eb736412fb933b94cb5189be1640fe12de2e
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

This page covers the actual submission package, the final replication package, and frozen snapshots at important project milestones. The three tasks are ordered as they arise in practice.

<nav class="prompt-section-toc" aria-label="Submission prompt sections">
  <strong>Jump to</strong>
  <a href="#actual-submission-package">Submission Package</a><span class="toc-separator">·</span>
  <a href="#clean-room-replication">Replication</a><span class="toc-separator">·</span>
  <a href="#frozen-project-snapshot">Snapshot</a>
</nav>

## Actual Submission Package {#actual-submission-package}

<p class="prompt-description">Assemble and cross-check the exact files and system metadata that will be uploaded today.</p>

**Recommended mode: Pro; if journal requirements have not yet been verified, verify them online first**

~~~text
Using the journal requirements and final manuscript, prepare and review the actual submission package: anonymous manuscript, title page, cover letter, Highlights where required, declarations, data / code statement, supplementary files, and submission-system metadata. Confirm that the materials are mutually consistent and comply with the journal requirements.

Do not guess missing information. List it explicitly as a blocker. Do not make the actual submission unless I authorize that action separately and explicitly.
~~~

## Clean-Room Replication Package {#clean-room-replication}

<p class="prompt-description">Build a third-party replication package that matches the final paper exactly.</p>

**Recommended mode: Pro**

~~~text
Using the finalized manuscript, appendix, final data, and existing research code, build a **clean-room replication package** that matches the current paper exactly.

The objective is not to preserve the research process. It is to allow a third party unfamiliar with the project to follow a README in a clean environment and, from the raw inputs that can legally be provided or the earliest shareable inputs, use one clear master / run-all entry point to reproduce the analysis data, main tables / figures, and core results.

Use relative paths, fix the necessary software and dependency versions and random seeds, and do not rely on caches, the author’s machine environment, hidden files, or undocumented manual steps. For restricted data, explain clearly how the data are obtained and what cannot be redistributed.

Keep only the minimum code and files needed to reproduce the paper. Remove exploration, dead ends, debugging material, personal paths, credentials, TODOs, AI / conversation traces, and irrelevant comments. Do not sacrifice readability or rewrite a verified core implementation merely to make the package appear minimal.

Make every important table / figure / sample / estimate in the manuscript easy to map to the code that generates it, and avoid hand-entered numbers where possible. Provide a concise README explaining the environment, data, directory structure, execution steps, expected outputs, and limitations.

When complete, place the package in an independent clean directory and run it in full from the beginning. Verify the key outputs, sample sizes, and core estimates. The package is complete only when the clean run succeeds and matches the current final paper.
~~~

## Frozen Project Snapshot {#frozen-project-snapshot}

<p class="prompt-description">Freeze a minimal but sufficient milestone snapshot from which the project can be restarted fully.</p>

**Recommended mode: Pro**

~~~text
At the end of the current important milestone, create an **independent, frozen project snapshot that is minimal but sufficient to restart the work completely**. Place it in `99_archive/` and name it clearly using the date, project stage, and journal. The snapshot itself is frozen; the active project may continue to change.

First organize the entire project and retain only the authoritative materials genuinely needed to resume the research later. Do not mechanically copy scratch files, caches, temporary outputs, or duplicates. At minimum, the snapshot should preserve:

- the manuscript / appendix / submission package actually submitted at this milestone;
- the current Brief, journal requirements, HANDOFF, and key project rules at the time;
- Notes / evidence releases sufficient to understand established, uncertain, contradicted, and dead-end evidence;
- the data, code, logs, outputs, and replication package corresponding to the core results;
- bibliography / literature materials that are hard to reacquire or central to project judgment;
- software environment, dependencies, random seeds, and information on external data sources.

When data are too large, restricted, or cannot legally be included, do not copy them. Preserve exact provenance, file identifiers / checksums, acquisition instructions, and reconstruction documentation instead.

Create a concise `ARCHIVE_README.md` as the single restart entry point. It should explain:

- freeze date, project stage, target journal, and project status at the time;
- which files were actually submitted;
- authoritative manuscript, Brief, evidence, data, code, and replication entry points;
- the central research question, most credible findings at the time, and important boundaries;
- major closed or failed routes and why they were closed;
- unresolved questions, possible future branches, and the most sensible next step;
- the reconstruction path from raw data → final data → results → manuscript;
- what a user restarting the project after several months should read first, run first, and do next.

Generate a manifest recording key files and checksums, and verify internal paths and references. Where feasible, verify in an independent environment that the core code / replication entry point still runs. The snapshot must not contain personal credentials, API keys, irrelevant machine-specific paths, AI conversation traces, or unnecessary temporary material.

Before freezing, scan the longest relative paths and expected full Windows paths in the snapshot. If they approach a system or tool limit, address them in advance and retain a clear margin rather than merely falling below a fixed character threshold.

Check snapshot portability, especially Windows path length. Avoid unnecessary directory depth, repeated nesting, and overly long folder or file names. Ensure that the snapshot can be placed inside an ordinary backup directory, copied to another Windows machine, or extracted from an archive without path failures. If existing project paths are too long, shorten or flatten only what is necessary inside the snapshot, and preserve an original-path → snapshot-path mapping in the manifest / `ARCHIVE_README.md`. Do not alter the active project or break the replication package’s internal references merely to shorten the snapshot.

Finally, copy the completed snapshot into an independent directory and verify that no path-too-long error, missing file, or copy failure occurs. A failed file must never be silently ignored with Skip.

Audit the completed snapshot from the perspective of a new session taking over several months later with no access to the present conversation. Using only the snapshot, can it determine **what the project is, how far it progressed, why it took its current form, which routes should not be repeated, how the results can be reproduced, and where work should resume**? The snapshot is complete only when all of these questions can be answered.

Do not modify the frozen snapshot after completion. Create a new snapshot at the next major milestone.
~~~
