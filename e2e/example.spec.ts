import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gilles-gardet.github.io/');
});

test('basic test', async ({ page }) => {
  const title = page.locator('head > title');
  await expect(title).toHaveText('Gilles Gardet');
});
