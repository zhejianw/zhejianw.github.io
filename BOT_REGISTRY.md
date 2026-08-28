# Bot registry

This registry mirrors the named user-agent controls in `/robots.txt`. It records evidence and review state; `/robots.txt` remains the operative notice. Add or rename a token only when the operator documents it in a first-party source. Third-party bot lists are not sufficient evidence.

Last full review: 2026-08-28

Next scheduled review: 2027-02-28

| User-agent token | Operator | Purpose | Site rule | Official source | Last verified |
|---|---|---|---|---|---|
| `GPTBot` | OpenAI | Potential model training | `Disallow: /` | [OpenAI](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) | 2026-08-28 |
| `ClaudeBot` | Anthropic | Potential model training | `Disallow: /` | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | 2026-08-28 |
| `Google-Extended` | Google | Gemini training and grounding control token; not a separate HTTP crawler | `Disallow: /` | [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) | 2026-08-28 |
| `Applebot-Extended` | Apple | Foundation-model training control token; not a separate webpage crawler | `Disallow: /` | [Apple](https://support.apple.com/en-us/119829) | 2026-08-28 |
| `CCBot` | Common Crawl | Large-scale open web corpus collection | `Disallow: /` | [Common Crawl](https://commoncrawl.org/ccbot) | 2026-08-28 |
| `Amazonbot` | Amazon | Product and service improvement; may be used for AI training | `Disallow: /` | [Amazon](https://developer.amazon.com/en/amazonbot) | 2026-08-28 |
| `MistralAI-Training` | Mistral AI | Generative-AI training datasets | `Disallow: /` | [Mistral AI](https://docs.mistral.ai/robots) | 2026-08-28 |
| `meta-externalagent` | Meta | Foundation-model training and product indexing | `Disallow: /` | [Meta](https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/) | 2026-08-28 |
| `OAI-SearchBot` | OpenAI | ChatGPT search discovery, summaries, and snippets | `Disallow: /` | [OpenAI](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) | 2026-08-28 |
| `Claude-SearchBot` | Anthropic | Automated search indexing and search-result quality | `Disallow: /` | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | 2026-08-28 |
| `PerplexityBot` | Perplexity | Search-result discovery and linking; not foundation-model training | `Disallow: /` | [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) | 2026-08-28 |
| `Amzn-SearchBot` | Amazon | Amazon search experiences; not generative-AI model training | `Disallow: /` | [Amazon](https://developer.amazon.com/en/amazonbot) | 2026-08-28 |
| `MistralAI-Index` | Mistral AI | Mistral search index; not generative-AI model training | `Disallow: /` | [Mistral AI](https://docs.mistral.ai/robots) | 2026-08-28 |
| `DuckAssistBot` | DuckDuckGo | Real-time retrieval for AI-assisted search answers; not model training | `Disallow: /` | [DuckDuckGo](https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot) | 2026-08-28 |
| `meta-webindexer` | Meta | Meta AI search indexing and result quality | `Disallow: /` | [Meta](https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/) | 2026-08-28 |
| `GoogleOther` | Google | Generic non-search crawling, including one-off internal research and development | `Disallow: /` | [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) | 2026-08-28 |
| `GoogleOther-Image` | Google | Image-focused variant of GoogleOther | `Disallow: /` | [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) | 2026-08-28 |
| `GoogleOther-Video` | Google | Video-focused variant of GoogleOther | `Disallow: /` | [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) | 2026-08-28 |
| `Claude-User` | Anthropic | Human-directed retrieval initiated by a Claude user | `Allow: /` | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | 2026-08-28 |

## Fallback rule

`User-agent: *` with `Allow: /` preserves conventional search crawling and permits other unspecified agents. The wildcard is a matching rule, not a bot entry. See [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html).

## Maintenance

- Perform a first-party source review every six months, in February and August.
- Review immediately whenever `/robots.txt` changes or an operator announces a crawler or purpose change.
- Keep the set of named tokens in this registry identical to the set in `/robots.txt`; update both in the same change.
- Do not run daily network discovery and do not add tokens from aggregators, blog posts, or copied blocklists.
- If an official source disappears or becomes ambiguous, mark the entry `needs review`; do not silently rename or remove the deployed token.
- Record a new `Last verified` date only after checking the linked first-party documentation.
