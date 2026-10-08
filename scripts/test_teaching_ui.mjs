#!/usr/bin/env node
import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.TEACHING_BASE_URL || "http://127.0.0.1:4173";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}),
});
try {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  await context.route("https://zhejianwang.com/**", async route => {
    const url = new URL(route.request().url());
    const response = await context.request.fetch(`${base}${url.pathname}${url.search}`);
    await route.fulfill({ response });
  });
  const page = await context.newPage();
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/teaching/", "/classic/teaching/"]) {
      const label = `${width}px ${route}`;
      const response = await page.goto(`${base}${route}`, { waitUntil: "load" });
      assert.equal(response.status(), 200, label);
      const body = await page.locator("body").innerText();
      assert(!/<\/?(?:section|div|p|ul|li)\b/i.test(body), `${label}: raw HTML must not be visible`);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${label}: horizontal overflow`);
      if (route === "/teaching/") {
        const cards = page.locator(".taste-card-grid > section.taste-content-card");
        assert.equal(await cards.count(), 4, `${label}: four sibling teaching cards`);
        assert.equal(await page.locator(".taste-content-card .taste-content-card").count(), 0, `${label}: cards must not nest`);
        assert.equal(await cards.locator("li").count(), 9, `${label}: all nine courses remain inside their cards`);
        assert.equal(await cards.getByRole("heading", { name: "Supporting students", exact: true }).count(), 0, `${label}: support section belongs outside the cards`);
      }
    }
  }
  console.log("PASS: Teaching cards, course containment and visible HTML at desktop/mobile widths");
} finally {
  await browser.close();
}
