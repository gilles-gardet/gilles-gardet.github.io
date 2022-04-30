import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});

test.describe('Check UI elements', () => {
  test('Title should be Gilles Gardet', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:4200');
    await expect(page).toHaveTitle('Gilles Gardet');
    await expect(page.locator('text=Profil et généralités')).toBeVisible();
  });
});
