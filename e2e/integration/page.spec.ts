import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gilles-gardet.github.io/');
});

test.describe('Check UI elements', () => {
  test('Title should be Gilles Gardet', async ({ page }) => {
    await expect(page).toHaveURL('https://gilles-gardet.github.io/');
    await expect(page).toHaveTitle('Gilles Gardet');
    await expect(page.locator('text=Profil et généralités')).toBeVisible();
  });
});
