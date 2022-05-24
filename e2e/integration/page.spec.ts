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

  test('Should match the snapshot of the panel "profil et généralités"', async ({ page }) => {
    const panel = page.locator('p-panel[header="Profil et généralités"]');
    expect(await panel.screenshot()).toMatchSnapshot('summary.png');
  });

  test('Should have a panel "langages et outils"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Langages et outils")')).toBeVisible();
  });

  test('Should have a panel "expérience"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Expérience")')).toBeVisible();
  });

  test('Should have a panel "loisirs"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Loisirs")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "loisirs"', async ({ page }) => {
    const panel = page.locator('p-panel[header="Loisirs"]');
    expect(await page.locator('p-panel[header="Loisirs"]').screenshot()).toMatchSnapshot('hobbies.png');
  });
});

test.describe('Sidebar structure', () => {
  test('should have a name and a short description with an avatar', async ({ page }) => {
    const aside = page.locator('aside');
    await expect(aside).toBeVisible();
    await expect(aside).toContainText('Gilles Gardet');
    await expect(aside).toContainText('Développeur fullstack, curieux par nature et passionné par son métier.');
    const avatar = aside.locator('p-avatar');
    await expect(avatar).toBeVisible();
  });

  test('should have a contact button', async ({ page }) => {
    const button = page.locator('aside p-chip');
    await expect(button).toContainText('gilles.gardet@gmail.com');

  });

  test('should have a download cv button', async ({ page }) => {
    const button = page.locator('aside button');
    await expect(button).toHaveAttribute('icon', 'pi pi-cloud-download');
    await button.hover();
    const tooltip = page.locator('.p-tooltip-text');
    await expect(tooltip).toHaveText('Télécharger mon CV au format PDF');
  });

  test('Should match the snapshot of the sidebar', async ({ page }) => {
    const sidebar = page.locator('aside portfolio-contact');
    expect(await sidebar.screenshot()).toMatchSnapshot('sidebar.png');
  });
});
