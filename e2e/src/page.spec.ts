import { expect, test, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/fr/');
});

test.describe('General page structure', () => {
  test('should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Gilles Gardet – CV');
  });

  test('should have a sidebar', async ({ page }) => {
    const aside: Locator = page.locator('aside');
    await expect(aside).toBeVisible();
  });

  test('should have the summary panel', async ({ page }) => {
    await expect(page.locator('#summary .panel__header__title')).toContainText('Profil et généralités');
  });

  test('should have the skills panel', async ({ page }) => {
    await expect(page.locator('#skills')).toBeVisible();
  });

  test('should have the experience panel', async ({ page }) => {
    await expect(page.locator('#experience .panel__header__title')).toContainText('Expérience');
  });

  test('should have the hobbies panel', async ({ page }) => {
    await expect(page.locator('#hobbies .panel__header__title')).toContainText('Loisirs');
  });
});

test.describe('General page structure — English', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
  });

  test('should show the summary panel title in English', async ({ page }) => {
    await expect(page.locator('#summary .panel__header__title')).toContainText('Professional Profile');
  });

  test('should show the experience panel title in English', async ({ page }) => {
    await expect(page.locator('#experience .panel__header__title')).toContainText('Professional Experience');
  });

  test('should show the hobbies panel title in English', async ({ page }) => {
    await expect(page.locator('#hobbies .panel__header__title')).toContainText('Interests');
  });

  test('should show the skills panel title in English', async ({ page }) => {
    await expect(page.locator('#skills .panel__header__title')).toContainText('Technical Skills');
  });
});

test.describe('Sidebar structure', () => {
  test('should display the full name', async ({ page }) => {
    const aside: Locator = page.locator('aside');
    await expect(aside).toContainText('Gilles Gardet');
  });

  test('should display the presentation sentence', async ({ page }) => {
    const aside: Locator = page.locator('aside');
    await expect(aside).toContainText('Lead developer, curieux par nature et passionné par son métier.');
  });

  test('should display the avatar image', async ({ page }) => {
    const avatar: Locator = page.locator('aside img[alt="Gilles Gardet"]');
    await expect(avatar).toBeVisible();
  });

  test('should display the email chip', async ({ page }) => {
    const email: Locator = page.locator('aside a[href="mailto:gilles.gardet@gmail.com"]');
    await expect(email).toContainText('gilles.gardet@gmail.com');
  });

  test('should display the menu trigger button', async ({ page }) => {
    const button: Locator = page.locator('aside button[aria-label="Menu"]');
    await expect(button).toBeVisible();
  });

  test('should match the sidebar snapshot', async ({ page }) => {
    const sidebar: Locator = page.locator('aside');
    expect(await sidebar.screenshot()).toMatchSnapshot('sidebar.png');
  });
});

test.describe('Menu interactions', () => {
  test('menu should be hidden by default', async ({ page }) => {
    const menu: Locator = page.locator('#cv-menu');
    await expect(menu).not.toHaveClass(/is-visible/);
  });

  test('clicking the menu button should open the menu', async ({ page }) => {
    await page.locator('button[aria-label="Menu"]').click();
    const menu: Locator = page.locator('#cv-menu');
    await expect(menu).toHaveClass(/is-visible/);
  });

  test('pressing Escape should close the open menu', async ({ page }) => {
    await page.locator('button[aria-label="Menu"]').click();
    await page.keyboard.press('Escape');
    const menu: Locator = page.locator('#cv-menu');
    await expect(menu).not.toHaveClass(/is-visible/);
  });

  test('clicking outside should close the open menu', async ({ page }) => {
    await page.locator('button[aria-label="Menu"]').click();
    await page.locator('main').click({ position: { x: 10, y: 10 } });
    const menu: Locator = page.locator('#cv-menu');
    await expect(menu).not.toHaveClass(/is-visible/);
  });

  test('language switch link should point to /en/ when on /fr/', async ({ page }) => {
    await page.locator('button[aria-label="Menu"]').click();
    const langLink: Locator = page.locator('#cv-menu a[role="menuitem"]');
    await expect(langLink).toHaveAttribute('href', '/en/');
    await expect(langLink).toContainText('English');
  });

  test('language switch link should point to /fr/ when on /en/', async ({ page }) => {
    await page.goto('/en/');
    await page.locator('button[aria-label="Menu"]').click();
    const langLink: Locator = page.locator('#cv-menu a[role="menuitem"]');
    await expect(langLink).toHaveAttribute('href', '/fr/');
    await expect(langLink).toContainText('Français');
  });

  test('clicking the language link should navigate to the other locale', async ({ page }) => {
    await page.locator('button[aria-label="Menu"]').click();
    await page.locator('#cv-menu a[role="menuitem"]').click();
    await expect(page).toHaveURL(/\/en\//);
  });
});

test.describe('Summary panel', () => {
  test('should display the years of experience as a number in bold', async ({ page }) => {
    const yearsOfExperience = new Date().getFullYear() - new Date(2013, 4).getFullYear();
    const bolds: Locator = page.locator('#summary .panel__content b');
    const texts: string[] = await bolds.allTextContents();
    expect(texts).toContain(`${yearsOfExperience} ans`);
  });

  test('should have exactly 4 bold keywords in French', async ({ page }) => {
    const bolds: Locator = page.locator('#summary .panel__content b');
    await expect(bolds).toHaveCount(4);
  });

  test('should display the full summary content in English', async ({ page }) => {
    await page.goto('/en/');
    const content: Locator = page.locator('#summary .panel__content');
    const yearsOfExperience = new Date().getFullYear() - new Date(2013, 4).getFullYear();
    await expect(content).toContainText(`${yearsOfExperience} years`);
    await expect(content).toContainText('backend');
    await expect(content).toContainText('full-stack');
    await expect(content).toContainText('Agile');
  });

  test('should match the summary panel snapshot', async ({ page }) => {
    const panel: Locator = page.locator('#summary');
    expect(await panel.screenshot()).toMatchSnapshot('summary.png');
  });
});

test.describe('Skills panel', () => {
  test('should render all 17 skills', async ({ page }) => {
    const skills: Locator = page.locator('#skills .skills__languages');
    await expect(skills).toHaveCount(17);
  });

  test('each skill should have a label and a progress bar', async ({ page }) => {
    const skills: Locator = page.locator('#skills .skills__languages');
    const count = await skills.count();
    for (let i = 0; i < count; i++) {
      const skill = skills.nth(i);
      await expect(skill.locator('span')).toBeVisible();
      await expect(skill.locator('[role="progressbar"]')).toBeVisible();
    }
  });

  test('progress bars should animate when the panel is scrolled into view', async ({ page }) => {
    await page.evaluate(() => document.getElementById('skills')?.scrollIntoView());
    await page.waitForTimeout(300);
    const fill: Locator = page.locator('#skills .progress-bar__value').first();
    const width = await fill.evaluate((el) => (el as HTMLElement).style.width);
    expect(width).not.toBe('0%');
    expect(width).not.toBe('');
  });
});

test.describe('Missions panel', () => {
  test('should render 10 mission cards in the timeline', async ({ page }) => {
    const events: Locator = page.locator('.timeline__event');
    await expect(events).toHaveCount(10);
  });

  test('each mission should have a "En savoir plus" slide button', async ({ page }) => {
    const buttons: Locator = page.locator('button[data-mission]');
    await expect(buttons).toHaveCount(10);
  });

  test('clicking a slide button should open the corresponding dialog', async ({ page }) => {
    await page.locator('button[data-mission]').first().click();
    const dialog: Locator = page.locator('#dialog-0');
    await expect(dialog).toHaveClass(/is-open/);
  });

  test('the dialog close button should close the dialog', async ({ page }) => {
    await page.locator('button[data-mission]').first().click();
    await page.locator('#dialog-0 .cv-dialog-close').click();
    const dialog: Locator = page.locator('#dialog-0');
    await expect(dialog).not.toHaveClass(/is-open/);
  });

  test('pressing Escape should close an open dialog', async ({ page }) => {
    await page.locator('button[data-mission]').first().click();
    await page.keyboard.press('Escape');
    const dialog: Locator = page.locator('#dialog-0');
    await expect(dialog).not.toHaveClass(/is-open/);
  });
});

test.describe('Hobbies panel', () => {
  test('should render all 5 hobby tags in French', async ({ page }) => {
    const tags: Locator = page.locator('#hobbies .hobby__tag');
    await expect(tags).toHaveCount(5);
  });

  test('should render all 5 hobby tags in English', async ({ page }) => {
    await page.goto('/en/');
    const tags: Locator = page.locator('#hobbies .hobby__tag');
    await expect(tags).toHaveCount(5);
  });

  test('should match the hobbies panel snapshot', async ({ page }) => {
    const panel: Locator = page.locator('#hobbies');
    expect(await panel.screenshot()).toMatchSnapshot('hobbies.png');
  });
});

test.describe('Language routing', () => {
  test('navigating to / should redirect to a language-prefixed route', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/(fr|en)\//);
  });

  test('/fr/ should display French content', async ({ page }) => {
    await expect(page.locator('#summary .panel__header__title')).toContainText('Profil et généralités');
  });

  test('/en/ should display English content', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('#summary .panel__header__title')).toContainText('Professional Profile');
  });
});
