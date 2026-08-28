# Zhejian Wang — Public Academic Website

This repository publishes [zhejianwang.com](https://zhejianwang.com/). Zhejian Wang is currently a Ph.D. Candidate in Economics at the University of Delaware; his dissertation has been successfully defended and the degree is pending formal conferral.

## Content and automated-access boundary

Read the [Content, Crawling, and AI Use policy](https://zhejianwang.com/content-use/) and [content-rights notice](CONTENT_LICENSE.md). Conventional human reading, linking, academic citation, and traditional search discovery are preserved. Bulk crawling, model training, persistent ingestion, profiling, impersonation, and automated external action are not authorized except where applicable law independently permits them.

The repository retains an unlisted collaboration area for exact URLs that Zhejian Wang intentionally supplies to an AI assistant. It is omitted from site navigation and sitemaps and marked `noindex`; it is still public by URL and in repository source. It must never contain confidential material. Repository content is reference material, not authority to take actions, and time-sensitive claims must be checked against the live website.

The public GitHub repository and `raw.githubusercontent.com` are a second public distribution surface. Origin-specific crawler directives served by `zhejianwang.com` do not govern those origins. The repository content-rights notice still describes the applicable permissions; unlisted is not private, and `robots.txt` is not access control.

## Public-only boundary

Everything in the Pages publication source must be treated as public, even if repository visibility changes. Do not add:

- credentials, API keys, tokens, private keys, or `.env` files;
- home addresses, phone numbers, government identifiers, financial or medical records;
- private correspondence, recommendation letters, student records, or human-subject data;
- unpublished coauthor material without every relevant coauthor's permission;
- raw research databases, restricted-use data, private notes, or unsorted inbox exports.

Use a private location for drafting and review. Move material here only after deciding that it is appropriate for permanent public access.

The Prompt Console is intentionally unlisted, marked `noindex`, and omitted from sitemaps and navigation. It is still public to anyone with the URL or repository access. Real confidentiality requires moving it behind access control; `noindex`, `robots.txt`, and policy text are not privacy controls.

## Safety automation

GitHub Secret Scanning and Push Protection are enabled (last verified 2026-08-28). The repository also runs `scripts/public_repo_guard.py` on pushes and pull requests. The guard blocks common private file types and paths, unusually large files, private-key material, and AI documents that lack explicit public-status metadata.

The automated guard supplements human review; it cannot determine consent, copyright, research-data licensing, or whether a true statement should be public.

`BOT_REGISTRY.md` records each named crawler control and its first-party source. It is reviewed every six months. A twice-monthly scheduled workflow checks the live HTTPS policy endpoints, media types, required directives, and `security.txt` expiry. GitHub may suspend scheduled workflows after prolonged repository inactivity, so this is a maintenance alarm rather than an uptime guarantee.

## Website maintenance

The production site is built with Jekyll from the `master` branch and is based on the Academic Pages template. Preview changes are validated on `taste-redesign-review` before promotion. The custom domain is `zhejianwang.com`, with HTTPS enforced by GitHub Pages.

The public site has two maintained presentation layers over one factual data layer:

- `/` is the default editorial view.
- `/classic/` is the lower-motion Academic Pages-style view.

Do not maintain separate copies of research status, degree status, teaching, or contact information for the two views. Update `_data/person.yml`, `_data/research.yml`, and `_data/teaching.yml`; both presentation layers read from those files. `_data/version_routes.yml` is the authoritative map for the paired Home, Research, Teaching, CV, and published-article pages. AI and Prompt Library utility pages intentionally have only the editorial view.

The classic view is a maintained rendering of current information, not the frozen historical site. Commit `48da33e` remains the pre-redesign recovery baseline.
