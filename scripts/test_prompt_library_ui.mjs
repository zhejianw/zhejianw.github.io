#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";


const baseUrl = process.env.PROMPT_LIBRARY_BASE_URL || "http://127.0.0.1:4173";
const screenshotDir = process.env.PROMPT_LIBRARY_SCREENSHOT_DIR || "tmp/prompt-library-ui";
const layers = [
  ["Setup", "/ai/prompts/setup/"],
  ["Notes", "/ai/prompts/notes/"],
  ["Brief", "/ai/prompts/brief/"],
  ["Manuscript", "/ai/prompts/"],
  ["Submission", "/ai/prompts/submission/"],
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
    counts[record.layer] = (counts[record.layer] || 0) + 1;
    assert(!Object.prototype.hasOwnProperty.call(record, "code"), "Cross-layer index must not contain prompt bodies");
    return counts;
  }, {});

  const browser = await chromium.launch({ headless: true });
  activeBrowser = browser;
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
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

  for (const [layer, pathname] of layers) {
    await openPromptPage(page, pathname);
    const cardCount = await page.locator(".prompt-card").count();
    assert(cardCount === expectedCounts[layer], `${layer}: expected ${expectedCounts[layer]} cards, found ${cardCount}`);
    assert(await page.locator(".prompt-layer-nav a, .prompt-layer-nav .is-current").count() === 5, `${layer}: layer nav must contain five layers`);
    assert(await page.locator(".prompt-layer-find").count() === 1, `${layer}: sticky Find trigger missing`);
    assert(await page.locator(".prompt-card .prompt-copy-button").count() === cardCount, `${layer}: each card needs one Copy Prompt button`);
    assert(await page.locator(".prompt-card .prompt-link-button").count() === cardCount, `${layer}: each card needs one Copy Link button`);
    assert(await page.locator(".prompt-card .prompt-anchor-link").count() === cardCount, `${layer}: each card needs one anchor`);
    assert(await page.locator('meta[name="robots"][content*="noindex"]').count() === 1, `${layer}: noindex metadata missing`);
    assert(await page.locator('meta[name="referrer"][content="no-referrer"]').count() === 1, `${layer}: no-referrer metadata missing`);
    assert(await page.locator('link[rel="manifest"][href*="prompt-library.webmanifest"]').count() === 1, `${layer}: prompt manifest missing`);
    assert(await page.locator('link[href*="api.fontshare.com"]').count() === 0, `${layer}: Prompt Library must not contact Fontshare`);
    assert(await page.locator('script[src*="googletagmanager"]').count() === 0, `${layer}: analytics must be disabled`);

    const ids = await page.locator(".prompt-card").evaluateAll((cards) => cards.map((card) => card.dataset.promptId));
    assert(new Set(ids).size === ids.length, `${layer}: prompt anchor ids are not unique`);
    const emptyBodies = await page.locator(".prompt-card").evaluateAll((cards) => cards.filter((card) => !card.querySelector("pre")?.textContent.trim()).length);
    assert(emptyBodies === 0, `${layer}: found an empty copyable prompt`);
    const promptTypography = await page.locator(".prompt-card pre code").first().evaluate((node) => {
      const style = getComputedStyle(node);
      return { family: style.fontFamily.toLowerCase(), size: parseFloat(style.fontSize), lineHeight: parseFloat(style.lineHeight) };
    });
    assert(!/mono|consolas|courier/.test(promptTypography.family), `${layer}: prompt body still uses monospace typography`);
    assert(promptTypography.size >= 14, `${layer}: prompt body is too small (${promptTypography.size}px)`);
    assert(promptTypography.lineHeight / promptTypography.size >= 1.6, `${layer}: prompt body line-height is too tight`);
    const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((anchors) => anchors
      .map((anchor) => anchor.getAttribute("href").slice(1))
      .filter((id) => id && !document.getElementById(decodeURIComponent(id))));
    assert(brokenAnchors.length === 0, `${layer}: broken internal anchors: ${brokenAnchors.join(", ")}`);
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
  await page.locator(".prompt-command-result__title", { hasText: "Setup Prompt 1 · Workspace Bootstrap" }).waitFor();

  await page.locator(".prompt-command-close").click();
  await page.locator(".prompt-command-dialog").waitFor({ state: "hidden" });
  await page.goto(`${baseUrl}/ai/prompts/#prompt-conclusion-audit`, { waitUntil: "load" });
  const deepLinkCard = page.locator('[data-prompt-id="prompt-conclusion-audit"]');
  await deepLinkCard.waitFor();
  assert(await deepLinkCard.locator("[data-prompt-body]").isVisible(), "Deep link did not reveal the prompt body");
  await deepLinkCard.locator(".prompt-link-button").click();
  assert((await deepLinkCard.locator(".prompt-copy-status").textContent()).includes("link copied"), "Copy Link did not report success");
  assert((await page.evaluate(() => navigator.clipboard.readText())).endsWith("#prompt-conclusion-audit"), "Copy Link copied the wrong URL");

  for (const viewport of [
    { width: 390, height: 844, name: "mobile" },
    { width: 768, height: 1024, name: "tablet" },
    { width: 1440, height: 1000, name: "desktop" },
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await openPromptPage(page, "/ai/prompts/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert(overflow <= 1, `${viewport.name}: horizontal page overflow is ${overflow}px`);
    await page.screenshot({
      path: path.join(screenshotDir, `prompt-library-${viewport.name}.png`),
      fullPage: true,
    });
  }

  await browser.close();
  activeBrowser = null;
  console.log(`Prompt Library UI regression passed (${promptIndex.length} prompts, 3 viewports).`);
}

main().catch(async (error) => {
  if (activeBrowser) {
    await activeBrowser.close().catch(() => undefined);
    activeBrowser = null;
  }
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
