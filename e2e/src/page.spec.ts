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
    await expect(page.locator('#summary .panel__header__title:has-text("Professional Profile")')).toBeVisible();
  });

  test('Should match the snapshot of the panel "profil et généralités"', async ({ page }) => {
    const panel: Locator = page.locator('#summary');
    expect(await panel.screenshot()).toMatchSnapshot('summary.png');
  });

  test('Should have a panel "langages et outils"', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
  });

  test('Should have a panel "expérience"', async ({ page }) => {
    await expect(page.locator('#experience .panel__header__title:has-text("Professional Experience")')).toBeVisible();
  });

  test('Should have a panel "loisirs"', async ({ page }) => {
    await expect(page.locator('#hobbies .panel__header__title:has-text("Interests")')).toBeVisible();
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
    await expect(aside).toContainText('Lead Developer, naturally curious and passionate about the profession.');
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
      `I have 13 years of experience as a software developer specializing in information systems.`,
    );
    await expect(content).toContainText(
      `Primarily focused on backend technologies (Java, Spring...), gained through diverse projects across multiple business domains including aerospace, human resources, and community platforms.`,
    );
    await expect(content).toContainText(
      `I maintain a full-stack profile through numerous frontend projects developed in parallel with my backend expertise.`,
    );
    await expect(content).toContainText(
      `I am experienced in Agile methodologies and enjoy collaborative project management approaches (Scrum, Kanban...).`,
    );
  });

  test('should have important keyword in bold', async ({ page }) => {
    const bolds: Locator = page.locator('cv-summary .panel__content b');
    const texts: string[] = await bolds.allTextContents();
    expect(texts).toHaveLength(4);
    expect(texts).toContain('13 years');
    expect(texts).toContain('backend');
    expect(texts).toContain('full-stack');
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
