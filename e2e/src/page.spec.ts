import { Browser, chromium, expect, Locator, test } from '@playwright/test';

test.beforeAll(async () => {
  const browser: Browser = await chromium.launch();
  await browser.newContext({ locale: 'fr-FR' });
});

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
  const spinner: Locator = page.locator('cv-spinner');
  await spinner.waitFor({ state: 'detached' });
});

test.describe('General page structure', () => {
  test('Title should be Gilles Gardet', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:4200');
    await expect(page).toHaveTitle('Gilles Gardet - CV');
  });

  test('should have a sidebar', async ({ page }) => {
    const aside: Locator = page.locator('aside');
    await expect(aside).toBeVisible();
  });

  test('Should have a panel "profil et généralités"', async ({ page }) => {
    await expect(page.locator('#summary .panel__header__title:has-text("Profile and generalities")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "profil et généralités"', async ({ page }) => {
    const panel: Locator = page.locator('#summary');
    expect(await panel.screenshot()).toMatchSnapshot('summary.png');
  });

  test('Should have a panel "langages et outils"', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
  });

  test('Should have a panel "expérience"', async ({ page }) => {
    await expect(page.locator('#experience .panel__header__title:has-text("Experience")')).toBeVisible();
  });

  test('Should have a panel "loisirs"', async ({ page }) => {
    await expect(page.locator('#hobbies .panel__header__title:has-text("Hobbies")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "loisirs"', async ({ page }) => {
    const panel: Locator = page.locator('#hobbies');
    expect(await panel.screenshot()).toMatchSnapshot('hobbies.png');
  });
});

test.describe('General card structure', () => {
  test('should have a name and a short description with an avatar', async ({ page }) => {
    const aside: Locator = page.locator('aside');
    await expect(aside).toBeVisible();
    await expect(aside).toContainText('Gilles Gardet');
    await expect(aside).toContainText('Lead developer, curious by nature and passionate about his profession.');
    const avatar: Locator = aside.locator('cv-avatar');
    await expect(avatar).toBeVisible();
  });

  test('should have a contact button', async ({ page }) => {
    const button: Locator = page.locator('aside cv-email');
    await expect(button).toContainText('gilles.gardet@gmail.com');
  });

  test('should have a menu button', async ({ page }) => {
    const button: Locator = page.locator('aside button');
    expect(button).toBeTruthy();
  });

  test('Should match the snapshot of the sidebar', async ({ page }) => {
    const sidebar: Locator = page.locator('aside cv-general');
    expect(await sidebar.screenshot()).toMatchSnapshot('sidebar.png');
  });
});

test.describe('Summary panel structure', () => {
  test('should have a description', async ({ page }) => {
    const content: Locator = page.locator('cv-summary .panel__content');
    await expect(content).toBeVisible();
    await expect(content).toContainText(
      `I have 12 years of experience as a designer developer in information systems.`,
    );
    await expect(content).toContainText(
      `Mainly specialized in backend technologies (Java, Spring...), which I was able to experience on different missions themselves touching on several fields of activity (space, human resources, communities...).`,
    );
    await expect(content).toContainText(
      `Nevertheless, I have a fullstack profile thanks to the many frontend projects that I have been able to carry out in parallel.`,
    );
    await expect(content).toContainText(
      `I am used to working with the Agile methods that I like when it comes to managing a project (Scrum, Kanban..).`,
    );
  });

  test('should have important keyword in bold', async ({ page }) => {
    const bolds: Locator = page.locator('cv-summary .panel__content b');
    const texts: string[] = await bolds.allTextContents();
    expect(texts).toHaveLength(4);
    expect(texts).toContain('12 years');
    expect(texts).toContain('backend');
    expect(texts).toContain('fullstack');
    expect(texts).toContain('Agile');
  });
});

test.describe('Skills panel structure', () => {
  test('should have a description', async ({ page }) => {
    await page.waitForSelector('cv-skills');
    const skills: Locator = page.locator('cv-skills .panel__content .skills__languages');
    const texts: string[] = await skills.allTextContents();
    expect(texts).toHaveLength(17);
    expect(await skills.locator('span').count()).toBe(17);
    expect(await skills.locator('cv-progress-bar').count()).toBe(17);
  });
});
