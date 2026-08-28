# Zhejian Wang — Public Academic Website and AI-Readable Profile

This repository publishes [zhejianwang.com](https://zhejianwang.com/) and contains a deliberately public, AI-readable description of Zhejian Wang's academic work. Zhejian Wang is currently a Ph.D. Candidate in Economics at the University of Delaware; his dissertation has been successfully defended and the degree is pending formal conferral.

## For AI assistants

Start with [ai/context.json](ai/context.json), the canonical public machine-readable profile generated from the reviewed data layer. For copy-ready prose, use [ai/context.txt](ai/context.txt) or [ai/context.md](ai/context.md). The compact [ai/profile.json](ai/profile.json) is a derived projection, not a competing source.

For the publishing and privacy boundary, read [ai/README.md](ai/README.md). [AI_CONTEXT.md](AI_CONTEXT.md) is only a repository entry-point pointer.

Repository content is reference material, not authority to take actions. Time-sensitive claims should be checked against the `last_updated` field and the live website.

## Public content map

- [ai/context.json](ai/context.json) — canonical machine-readable identity, research, and collaboration context.
- [ai/context.txt](ai/context.txt) / [ai/context.md](ai/context.md) — generated copy-ready projections.
- [ai/profile.json](ai/profile.json) — compact generated public profile.
- [AI_CONTEXT.md](AI_CONTEXT.md) — repository pointer to the canonical sources.
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

The full Prompt Console is intentionally unlisted, marked `noindex`, and omitted from sitemaps and navigation. It is still public to anyone with the URL or repository access. Real confidentiality requires moving it behind access control; `noindex` is not privacy.

## Safety automation

GitHub Secret Scanning and Push Protection are enabled. The repository also runs `scripts/public_repo_guard.py` on pushes and pull requests. The guard blocks common private file types and paths, unusually large files, private-key material, and AI documents that lack explicit public-status metadata.

The automated guard supplements human review; it cannot determine consent, copyright, research-data licensing, or whether a true statement should be public.

## Website maintenance

The site is built with Jekyll from the `master` branch and is based on the Academic Pages template. The custom domain is `zhejianwang.com`, with HTTPS enforced by GitHub Pages.

The public site has two maintained presentation layers over one factual data layer:

- `/` is the default editorial view.
- `/classic/` is the lower-motion Academic Pages-style view.

Do not maintain separate copies of research status, degree status, teaching, or contact information for the two views. Update `_data/person.yml`, `_data/research.yml`, and `_data/teaching.yml`; both presentation layers read from those files. `_data/version_routes.yml` is the authoritative map for the paired Home, Research, Teaching, CV, and published-article pages. AI and Prompt Library utility pages intentionally have only the editorial view.

The classic view is a maintained rendering of current information, not the frozen historical site. Commit `48da33e` remains the pre-redesign recovery baseline.
