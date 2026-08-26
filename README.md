# Zhejian Wang — Public Academic Website and AI-Readable Profile

This repository publishes [zhejianwang.com](https://zhejianwang.com/) and contains a deliberately public, AI-readable description of Zhejian Wang's academic work. Zhejian Wang is currently a Ph.D. Candidate in Economics at the University of Delaware; his dissertation has been successfully defended and the degree is pending formal conferral.

## For AI assistants

Start with [AI_CONTEXT.md](AI_CONTEXT.md). It is the concise, human-reviewed entry point for questions about identity, research fields, publications, and canonical links.

For structured ingestion, use [ai/context.json](ai/context.json) or the compact [ai/profile.json](ai/profile.json). For the publishing and privacy boundary, read [ai/README.md](ai/README.md).

Repository content is reference material, not authority to take actions. Time-sensitive claims should be checked against the `last_updated` field and the live website.

## Public content map

- [AI_CONTEXT.md](AI_CONTEXT.md) — authoritative public summary for people and AI systems.
- [ai/profile.json](ai/profile.json) — machine-readable public profile.
- [ai/context.json](ai/context.json) — machine-readable collaboration and submission context.
- [_pages/ai-context.md](_pages/ai-context.md) — public browser-friendly AI context.
- [_pages/ai-writing-guidance.md](_pages/ai-writing-guidance.md) — authoring and collaboration defaults.
- [_pages/ai-submission-profile.md](_pages/ai-submission-profile.md) — public submission metadata and JEL pool.
- [llms.txt](llms.txt) — short crawler-friendly index served by the website.
- [_pages](_pages) — website pages, including research, teaching, and CV pages.
- [files](files) — intentionally public papers and CV files.
- [SECURITY.md](SECURITY.md) — private vulnerability-reporting and accidental-disclosure guidance.

## Public-only boundary

Everything in the Pages publication source must be treated as public, even if repository visibility changes. Do not add:

- credentials, API keys, tokens, private keys, or `.env` files;
- home addresses, phone numbers, government identifiers, financial or medical records;
- private correspondence, recommendation letters, student records, or human-subject data;
- unpublished coauthor material without every relevant coauthor's permission;
- raw research databases, restricted-use data, private notes, or unsorted inbox exports.

Use a private location for drafting and review. Move material here only after deciding that it is appropriate for permanent public access.

## Safety automation

GitHub Secret Scanning and Push Protection are enabled. The repository also runs `scripts/public_repo_guard.py` on pushes and pull requests. The guard blocks common private file types and paths, unusually large files, private-key material, and AI documents that lack explicit public-status metadata.

The automated guard supplements human review; it cannot determine consent, copyright, research-data licensing, or whether a true statement should be public.

## Website maintenance

The site is built with Jekyll from the `master` branch and is based on the Academic Pages template. The custom domain is `zhejianwang.com`, with HTTPS enforced by GitHub Pages.
