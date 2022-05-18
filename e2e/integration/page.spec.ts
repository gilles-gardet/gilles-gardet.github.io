import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});

test.describe('Page structure', () => {
  test('Title should be Gilles Gardet', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:4200');
    await expect(page).toHaveTitle('Gilles Gardet');
  });

  test('Should have a panel "profil et généralités"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Profil et généralités")')).toBeVisible();
  });

  test('Should have a panel "langages et outils"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Langages et outils")')).toBeVisible();
  });

  test('Should have a panel "expérience"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Expérience")')).toBeVisible();
  });
});
