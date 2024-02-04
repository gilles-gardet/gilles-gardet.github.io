import { test, expect, chromium } from '@playwright/test';

test.beforeAll(async () => {
  const browser = await chromium.launch();
  await browser.newContext({ locale: 'fr-FR' });
});

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.waitForSelector('p-progressSpinner', { state: 'detached' });
});

test.describe('General page structure', () => {
  test('Title should be Gilles Gardet', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:4200');
    await expect(page).toHaveTitle('Gilles Gardet');
  });

  test('should have a sidebar', async ({ page }) => {
    const aside = page.locator('aside');
    await expect(aside).toBeVisible();
  });

  test('Should have a panel "profil et généralités"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Profile and generalities")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "profil et généralités"', async ({ page }) => {
    const panel = page.locator('p-panel#summary');
    expect(await panel.screenshot()).toMatchSnapshot('summary.png');
  });

  test('Should have a panel "langages et outils"', async ({ page }) => {
    await expect(page.locator('p-panel#skills')).toBeVisible();
  });

  test('Should have a panel "expérience"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Experience")')).toBeVisible();
  });

  test('Should have a panel "loisirs"', async ({ page }) => {
    await expect(page.locator('.p-panel-title:has-text("Hobbies")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "loisirs"', async ({ page }) => {
    const panel = page.locator('p-panel#hobbies');
    expect(await panel.screenshot()).toMatchSnapshot('hobbies.png');
  });
});

test.describe('General card structure', () => {
  test('should have a name and a short description with an avatar', async ({ page }) => {
    const aside = page.locator('aside');
    await expect(aside).toBeVisible();
    await expect(aside).toContainText('Gilles Gardet');
    await expect(aside).toContainText('Fullstack developer, curious by nature and passionate about his profession.');
    const avatar = aside.locator('p-avatar');
    await expect(avatar).toBeVisible();
  });

  test('should have a contact button', async ({ page }) => {
    const button = page.locator('aside p-chip');
    await expect(button).toContainText('gilles.gardet@gmail.com');
  });

  test('should have a download cv button', async ({ page }) => {
    const button = page.locator('aside button');
    await expect(button).toHaveAttribute('icon', 'pi pi-bars');
    await button.hover();
    const tooltip = page.locator('.p-tooltip-text');
    await expect(tooltip).toHaveText('Show menu');
  });

  test('Should match the snapshot of the sidebar', async ({ page }) => {
    const sidebar = page.locator('aside cv-general');
    expect(await sidebar.screenshot()).toMatchSnapshot('sidebar.png');
  });
});

test.describe('Summary panel structure', () => {
  test('should have a description', async ({ page }) => {
    const content = page.locator('cv-summary .p-panel-content');
    await expect(content).toBeVisible();
    await expect(content).toContainText(`I have 11 years of experience as a designer developer in information systems.`);
    await expect(content).toContainText(
      `Mainly specialized in backend technologies (Java, Spring...), which I was able to experience on different missions themselves touching on several fields of activity (space, human resources, communities...).`
    );
    await expect(content).toContainText(
      `Nevertheless, I have a fullstack profile thanks to the many frontend projects that I have been able to carry out in parallel.`
    );
    await expect(content).toContainText(
      `I am used to working with the Agile methods that I like when it comes to managing a project (Scrum, Kanban..).`
    );
  });

  test('should have important keyword in bold', async ({ page }) => {
    const bolds = page.locator('cv-summary .p-panel-content b');
    const texts = await bolds.allTextContents();
    await expect(texts).toHaveLength(4);
    expect(texts).toContain('11 years');
    expect(texts).toContain('backend');
    expect(texts).toContain('fullstack');
    expect(texts).toContain('Agile');
  });
});

test.describe('Skills panel structure', () => {
  test('should have a description', async ({ page }) => {
    await page.waitForSelector('cv-skills');
    const skills = page.locator('cv-skills .p-panel-content .skills__languages');
    const texts = await skills.allTextContents();
    await expect(texts).toHaveLength(17);
    expect(await skills.locator('span').count()).toBe(17);
    expect(await skills.locator('.p-progressbar').count()).toBe(17);
  });
});
