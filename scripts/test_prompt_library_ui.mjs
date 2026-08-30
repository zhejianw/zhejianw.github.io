#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";


const baseUrl = process.env.PROMPT_LIBRARY_BASE_URL || "http://127.0.0.1:4173";
const screenshotDir = process.env.PROMPT_LIBRARY_SCREENSHOT_DIR || "tmp/prompt-library-ui";
const promptPages = [
  ["zh", "Setup", "/ai/prompts/setup/"],
  ["zh", "Notes", "/ai/prompts/notes/"],
  ["zh", "Routing", "/ai/prompts/routing/"],
  ["zh", "Brief", "/ai/prompts/brief/"],
  ["zh", "Manuscript", "/ai/prompts/"],
  ["zh", "Submission", "/ai/prompts/submission/"],
  ["en", "Setup", "/ai/prompts/en/setup/"],
  ["en", "Notes", "/ai/prompts/en/notes/"],
  ["en", "Routing", "/ai/prompts/en/routing/"],
  ["en", "Brief", "/ai/prompts/en/brief/"],
  ["en", "Manuscript", "/ai/prompts/en/"],
  ["en", "Submission", "/ai/prompts/en/submission/"],
];
let activeBrowser = null;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function openPromptPage(page, pathname) {
  const errors = [];
  const onConsole = (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  };
  const onPageError = (error) => errors.push(`page: ${error.message}`);
  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  const response = await page.goto(`${baseUrl}${pathname}`, { waitUntil: "load" });
  assert(response && response.ok(), `${pathname} returned ${response ? response.status() : "no response"}`);
  await page.waitForSelector(".prompt-card");
  await page.evaluate(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  });
  await page.waitForFunction(() => window.scrollY === 0);
  await page.waitForTimeout(50);
  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  assert(errors.length === 0, `${pathname} emitted browser errors: ${errors.join(" | ")}`);
}

async function main() {
  await fs.mkdir(screenshotDir, { recursive: true });
  const indexResponse = await fetch(`${baseUrl}/assets/data/prompt-index.json`);
  assert(indexResponse.ok, "Metadata-only prompt index is not reachable");
  const promptIndex = await indexResponse.json();
  const expectedCounts = promptIndex.reduce((counts, record) => {
    assert(record.lang === "zh" || record.lang === "en", "Cross-layer index record has an invalid language");
    const key = `${record.lang}:${record.layer}`;
    counts[key] = (counts[key] || 0) + 1;
    assert(!Object.prototype.hasOwnProperty.call(record, "code"), "Cross-layer index must not contain prompt bodies");
    return counts;
  }, {});
  assert(promptIndex.filter((record) => record.lang === "zh").length === 91, "Chinese metadata index must contain 91 prompts");
  assert(promptIndex.filter((record) => record.lang === "en").length === 91, "English metadata index must contain 91 prompts");

  const browser = await chromium.launch({ headless: true });
  activeBrowser = browser;
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  // Jekyll emits canonical absolute asset URLs. Route those requests back to
  // the just-built local artifact so the test never exercises the live site.
  await context.route("https://zhejianwang.com/**", async (route) => {
    const original = new URL(route.request().url());
    const localResponse = await context.request.fetch(`${baseUrl}${original.pathname}${original.search}`);
    await route.fulfill({ response: localResponse });
  });
  await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin: baseUrl });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  page.setDefaultNavigationTimeout(15000);

  for (const [lang, layer, pathname] of promptPages) {
    await openPromptPage(page, pathname);
    const cardCount = await page.locator(".prompt-card").count();
    const pageLabel = `${lang}:${layer}`;
    assert(cardCount === expectedCounts[pageLabel], `${pageLabel}: expected ${expectedCounts[pageLabel]} cards, found ${cardCount}`);
    assert(await page.locator(".prompt-layer-nav a, .prompt-layer-nav .is-current").count() === 6, `${pageLabel}: layer nav must contain six layers`);
    assert(await page.locator(".prompt-language-switch a, .prompt-language-switch .is-current").count() === 2, `${pageLabel}: bilingual switch must contain two languages`);
    assert(await page.locator(".prompt-language-switch .is-current").count() === 1, `${pageLabel}: language switch needs one current language`);
    assert((await page.locator(".prompt-language-switch .is-current").textContent()).trim() === (lang === "en" ? "English" : "中文"), `${pageLabel}: wrong current language`);
    assert(await page.locator('link[rel="alternate"][hreflang="zh-CN"]').count() === 1, `${pageLabel}: Chinese alternate link missing`);
    assert(await page.locator('link[rel="alternate"][hreflang="en"]').count() === 1, `${pageLabel}: English alternate link missing`);
    assert(await page.locator('link[rel="alternate"][hreflang="x-default"]').count() === 1, `${pageLabel}: x-default alternate link missing`);
    assert((await page.locator("html").getAttribute("lang")).toLowerCase().startsWith(lang), `${pageLabel}: html lang is incorrect`);
    const layerTargets = await page.locator(".prompt-layer-nav a").evaluateAll((links) => links.map((link) => new URL(link.href).pathname));
    assert(layerTargets.every((target) => lang === "en" ? target.startsWith("/ai/prompts/en") : !target.startsWith("/ai/prompts/en")), `${pageLabel}: layer tab crosses language trees`);
    assert(await page.locator(".prompt-layer-find").count() === 1, `${pageLabel}: sticky Find trigger missing`);
    assert(await page.locator(".prompt-card .prompt-copy-button").count() === cardCount, `${pageLabel}: each card needs one Copy Prompt button`);
    assert(await page.locator(".prompt-card .prompt-link-button").count() === cardCount, `${pageLabel}: each card needs one Copy Link button`);
    assert(await page.locator(".prompt-card .prompt-anchor-link").count() === cardCount, `${pageLabel}: each card needs one anchor`);
    assert(await page.locator('meta[name="robots"][content*="noindex"]').count() === 1, `${pageLabel}: noindex metadata missing`);
    assert(await page.locator('meta[name="referrer"][content="no-referrer"]').count() === 1, `${pageLabel}: no-referrer metadata missing`);
    assert(await page.locator('link[rel="manifest"][href*="prompt-library.webmanifest"]').count() === 1, `${pageLabel}: prompt manifest missing`);
    assert(await page.locator('link[href*="api.fontshare.com"]').count() === 0, `${pageLabel}: Prompt Library must not contact Fontshare`);
    assert(await page.locator('script[src*="googletagmanager"]').count() === 0, `${pageLabel}: analytics must be disabled`);

    const ids = await page.locator(".prompt-card").evaluateAll((cards) => cards.map((card) => card.dataset.promptId));
    assert(new Set(ids).size === ids.length, `${pageLabel}: prompt anchor ids are not unique`);
    const emptyBodies = await page.locator(".prompt-card").evaluateAll((cards) => cards.filter((card) => !card.querySelector("pre")?.textContent.trim()).length);
    assert(emptyBodies === 0, `${pageLabel}: found an empty copyable prompt`);
    const duplicateModeBadges = await page.locator(".prompt-card").evaluateAll((cards) => cards.filter((card) => {
      const labels = [...card.querySelectorAll(".prompt-mode-badge")].map((badge) => badge.textContent.trim());
      return new Set(labels).size !== labels.length;
    }).length);
    assert(duplicateModeBadges === 0, `${pageLabel}: found duplicate mode badges within a prompt card`);
    const promptTypography = await page.locator(".prompt-card pre code").first().evaluate((node) => {
      const style = getComputedStyle(node);
      return { family: style.fontFamily.toLowerCase(), size: parseFloat(style.fontSize), lineHeight: parseFloat(style.lineHeight) };
    });
    assert(!/mono|consolas|courier/.test(promptTypography.family), `${pageLabel}: prompt body still uses monospace typography`);
    assert(promptTypography.size >= 14, `${pageLabel}: prompt body is too small (${promptTypography.size}px)`);
    assert(promptTypography.lineHeight / promptTypography.size >= 1.6, `${pageLabel}: prompt body line-height is too tight`);
    const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((anchors) => anchors
      .map((anchor) => anchor.getAttribute("href").slice(1))
      .filter((id) => id && !document.getElementById(decodeURIComponent(id))));
    assert(brokenAnchors.length === 0, `${pageLabel}: broken internal anchors: ${brokenAnchors.join(", ")}`);
  }

  await openPromptPage(page, "/ai/prompts/");
  await page.evaluate(() => localStorage.setItem("zhejian-prompt-recently-copied", JSON.stringify(["prompt-conclusion-audit"])));
  await page.reload({ waitUntil: "load" });
  await page.waitForSelector(".prompt-layer-find");
  await page.locator(".prompt-layer-find").click();
  assert((await page.locator(".prompt-command-result__title").first().textContent()).includes("Conclusion"), "Recent copy was not promoted to the top");

  const search = page.locator(".prompt-command-input");
  await search.fill("mediator / correlate");
  assert(await page.locator(".prompt-command-result__title", { hasText: "Heterogeneity" }).count() > 0, "Prompt-body search did not find a body-only phrase");
  const thisLayerScope = page.locator(".prompt-command-scope", { hasText: "This layer" });
  const allLayersScope = page.locator(".prompt-command-scope", { hasText: "All layers" });
  await allLayersScope.click();
  await search.fill("Workspace Bootstrap");
  await page.locator(".prompt-command-result__title", { hasText: "Setup Prompt 1 · Workspace Bootstrap" }).waitFor();
  await thisLayerScope.click();
  await search.fill("mediator / correlate");
  await page.locator(".prompt-command-result__title", { hasText: "Heterogeneity" }).waitFor();
  await allLayersScope.click();
  await search.fill("Workspace Bootstrap");
  const chineseSetupResult = page.locator(".prompt-command-result__title", { hasText: "Setup Prompt 1 · Workspace Bootstrap" }).first();
  await chineseSetupResult.waitFor();
  await chineseSetupResult.click();
  await page.waitForURL(/\/ai\/prompts\/setup\/#project-workspace-bootstrap$/);

  await openPromptPage(page, "/ai/prompts/#prompt-conclusion-audit");
  const deepLinkCard = page.locator('[data-prompt-id="prompt-conclusion-audit"]');
  await deepLinkCard.waitFor();
  assert(await deepLinkCard.locator("[data-prompt-body]").isVisible(), "Deep link did not reveal the prompt body");
  await deepLinkCard.locator(".prompt-link-button").click();
  await deepLinkCard.locator(".prompt-copy-status").waitFor({ state: "visible" });
  assert((await deepLinkCard.locator(".prompt-copy-status").textContent()).includes("link copied"), "Copy Link did not report success");
  assert((await page.evaluate(() => navigator.clipboard.readText())).endsWith("#prompt-conclusion-audit"), "Copy Link copied the wrong URL");

  await openPromptPage(page, "/ai/prompts/en/");
  assert(await page.locator(".prompt-mode-badge", { hasText: "Use with task" }).count() > 0, "English Use with task badge was not detected");
  assert(await page.locator(".prompt-mode-badge", { hasText: "Web required" }).count() > 0, "English Web required badge was not detected");
  await page.locator(".prompt-layer-find").click();
  const englishSearch = page.locator(".prompt-command-input");
  await page.locator(".prompt-command-scope", { hasText: "All layers" }).click();
  await englishSearch.fill("Workspace Bootstrap");
  const englishSetupResult = page.locator(".prompt-command-result__title", { hasText: "Setup Prompt 1 · Workspace Bootstrap" }).first();
  await englishSetupResult.waitFor();
  const englishSetupDescription = await englishSetupResult.locator("..").locator(".prompt-command-result__description").textContent();
  assert(!/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/.test(englishSetupDescription || ""), "English cross-layer search exposed a Chinese description");
  await englishSetupResult.click();
  await page.waitForURL(/\/ai\/prompts\/en\/setup\/#project-workspace-bootstrap$/);

  await openPromptPage(page, "/ai/prompts/en/notes/#notes-cycle");
  assert(await page.locator('[data-prompt-id="notes-cycle"] .prompt-mode-badge', { hasText: "Sequence" }).count() > 0, "English Sequence badge was not detected");
  await openPromptPage(page, "/ai/prompts/en/routing/");
  assert(await page.locator(".prompt-mode-badge", { hasText: "Fable High/Max" }).count() > 0, "Spaced Fable High / Max mode was not normalized");
  assert(await page.locator(".prompt-mode-badge", { hasText: "Opus High/Max" }).count() > 0, "Spaced Opus High / Max mode was not normalized");

  await openPromptPage(page, "/ai/prompts/en/#prompt-results-narrative");
  await page.locator('.prompt-language-switch a[hreflang="zh-CN"]').click();
  await page.waitForURL(/\/ai\/prompts\/#prompt-results-narrative$/);
  assert(await page.locator('[data-prompt-id="prompt-results-narrative"] [data-prompt-body]').isVisible(), "English-to-Chinese switch did not retain and reveal the prompt anchor");
  await page.locator('.prompt-language-switch a[hreflang="en"]').click();
  await page.waitForURL(/\/ai\/prompts\/en\/#prompt-results-narrative$/);
  assert(await page.locator('[data-prompt-id="prompt-results-narrative"] [data-prompt-body]').isVisible(), "Chinese-to-English switch did not retain and reveal the prompt anchor");

  const viewports = [
    { width: 390, height: 844, name: "mobile" },
    { width: 768, height: 1024, name: "tablet" },
    { width: 1440, height: 1000, name: "desktop" },
  ];
  const visualRoutes = [
    { lang: "zh", name: "manuscript", pathname: "/ai/prompts/" },
    { lang: "en", name: "manuscript", pathname: "/ai/prompts/en/" },
    { lang: "zh", name: "routing", pathname: "/ai/prompts/routing/" },
    { lang: "en", name: "routing", pathname: "/ai/prompts/en/routing/" },
  ];

  for (const viewport of viewports) {
    for (const visualRoute of visualRoutes) {
      const visualPage = await context.newPage();
      visualPage.setDefaultTimeout(10000);
      visualPage.setDefaultNavigationTimeout(15000);
      await visualPage.setViewportSize({ width: viewport.width, height: viewport.height });
      try {
        await openPromptPage(visualPage, visualRoute.pathname);
        const overflow = await visualPage.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (overflow > 1) {
          const offenders = await visualPage.locator("body *").evaluateAll((nodes) => nodes
            .map((node) => {
              const rect = node.getBoundingClientRect();
              return {
                tag: node.tagName.toLowerCase(),
                className: typeof node.className === "string" ? node.className : "",
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              };
            })
            .filter((item) => item.right > document.documentElement.clientWidth + 1 || item.left < -1)
            .slice(0, 8));
          throw new Error(`${visualRoute.lang}:${visualRoute.name}:${viewport.name}: horizontal page overflow is ${overflow}px; offenders: ${JSON.stringify(offenders)}`);
        }
        await visualPage.locator(".taste-page-hero").screenshot({
          path: path.join(screenshotDir, `prompt-library-${visualRoute.lang}-${visualRoute.name}-${viewport.name}-hero.png`),
        });
        await visualPage.locator(".prompt-card").first().screenshot({
          path: path.join(screenshotDir, `prompt-library-${visualRoute.lang}-${visualRoute.name}-${viewport.name}-first-card.png`),
        });
      } finally {
        await visualPage.close();
      }
    }
  }

  for (const deepLink of [
    { lang: "zh", pathname: "/ai/prompts/#prompt-results-narrative" },
    { lang: "en", pathname: "/ai/prompts/en/#prompt-results-narrative" },
  ]) {
    const visualPage = await context.newPage();
    visualPage.setDefaultTimeout(10000);
    await visualPage.setViewportSize({ width: 1440, height: 1000 });
    try {
      const response = await visualPage.goto(`${baseUrl}${deepLink.pathname}`, { waitUntil: "load" });
      assert(response && response.ok(), `${deepLink.lang}: deep link returned ${response ? response.status() : "no response"}`);
      const target = visualPage.locator('[data-prompt-id="prompt-results-narrative"]');
      await target.waitFor();
      assert(await target.locator("[data-prompt-body]").isVisible(), `${deepLink.lang}: direct deep link did not reveal its prompt body`);
      await visualPage.waitForTimeout(100);
      const deepLinkPosition = await visualPage.evaluate(() => {
        const heading = document.getElementById("prompt-results-narrative");
        const masthead = document.querySelector(".masthead");
        const layerNav = document.querySelector(".prompt-layer-nav");
        return {
          headingTop: heading ? heading.getBoundingClientRect().top : -1,
          coveringBottom: Math.max(
            masthead ? masthead.getBoundingClientRect().bottom : 0,
            layerNav ? layerNav.getBoundingClientRect().bottom : 0,
          ),
        };
      });
      assert(deepLinkPosition.headingTop >= deepLinkPosition.coveringBottom - 1, `${deepLink.lang}: sticky navigation obscures the deep-linked heading (${JSON.stringify(deepLinkPosition)})`);
      await visualPage.screenshot({ path: path.join(screenshotDir, `prompt-library-${deepLink.lang}-deep-link.png`) });
    } finally {
      await visualPage.close();
    }
  }

  await browser.close();
  activeBrowser = null;
  console.log(`Prompt Library UI regression passed (${promptIndex.length} prompts, 12 pages, 3 viewports).`);
}

main().catch(async (error) => {
  if (activeBrowser) {
    await activeBrowser.close().catch(() => undefined);
    activeBrowser = null;
  }
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
