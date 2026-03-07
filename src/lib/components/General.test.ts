import { fireEvent, render } from '@testing-library/svelte';
import { get } from 'svelte/store';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import General from './General.svelte';
import { theme } from '$lib/stores/theme';
import { loadTranslations } from '$lib/i18n/translations';

vi.mock('$app/environment', () => ({ browser: true }));

beforeEach(async () => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  // Reset theme to light mode between tests
  if (get(theme)) theme.toggle();
  await loadTranslations('fr', '/fr/');
});

describe('General — static rendering', () => {
  it('renders the name "Gilles Gardet"', () => {
    const { getByText } = render(General);
    expect(getByText('Gilles Gardet')).toBeInTheDocument();
  });

  it('renders the presentation text', () => {
    const { getByText } = render(General);
    expect(getByText(/Lead developer/)).toBeInTheDocument();
  });

  it('renders the email chip with correct href', () => {
    const { getByRole } = render(General);
    expect(getByRole('link', { name: 'Send email' })).toHaveAttribute('href', 'mailto:gilles.gardet@gmail.com');
  });

  it('renders the avatar image', () => {
    const { getByRole } = render(General);
    expect(getByRole('img', { name: 'Gilles Gardet' })).toBeInTheDocument();
  });
});

describe('General — menu', () => {
  it('renders the menu trigger button with aria-expanded=false initially', () => {
    const { getByRole } = render(General);
    expect(getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the menu when the trigger button is clicked', async () => {
    const { getByRole } = render(General);
    await fireEvent.click(getByRole('button', { name: 'Menu' }));
    expect(getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the menu when Escape is pressed while it is open', async () => {
    const { getByRole } = render(General);
    await fireEvent.click(getByRole('button', { name: 'Menu' }));
    await fireEvent.keyDown(document, { key: 'Escape' });
    expect(getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu when clicking outside it', async () => {
    const { getByRole } = render(General);
    await fireEvent.click(getByRole('button', { name: 'Menu' }));
    await fireEvent.click(document.body);
    expect(getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('General — theme toggle label', () => {
  it('shows the dark mode label when in light mode (French)', async () => {
    const { getByText } = render(General);
    expect(getByText('Mode sombre')).toBeInTheDocument();
  });

  it('shows the dark mode label when in light mode (English)', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(General);
    expect(getByText('Dark mode')).toBeInTheDocument();
  });

  it('shows the light mode label when in dark mode (French)', () => {
    theme.toggle(); // switch to dark
    const { getByText } = render(General);
    expect(getByText('Mode clair')).toBeInTheDocument();
  });

  it('shows the light mode label when in dark mode (English)', async () => {
    await loadTranslations('en', '/en/');
    theme.toggle(); // switch to dark
    const { getByText } = render(General);
    expect(getByText('Light mode')).toBeInTheDocument();
  });
});

describe('General — language switch', () => {
  it('renders the language switch link pointing to /en/ when locale is fr', () => {
    const { getByText } = render(General);
    expect(getByText('English').closest('a')).toHaveAttribute('href', '/en/');
  });

  it('renders the language switch link pointing to /fr/ when locale is en', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(General);
    expect(getByText('Français').closest('a')).toHaveAttribute('href', '/fr/');
  });
});

describe('General — download', () => {
  it('triggers a file download when the download button is clicked', async () => {
    const anchorClickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const { getByTitle } = render(General);
    await fireEvent.click(getByTitle('Télécharger le CV au format PDF'));
    expect(anchorClickSpy).toHaveBeenCalledOnce();
    anchorClickSpy.mockRestore();
  });

  it('creates a download anchor with the correct href and filename', async () => {
    // Spies must be set up AFTER render — otherwise they intercept the component mount itself
    const { getByTitle } = render(General);

    let capturedAnchor: HTMLAnchorElement | null = null;
    const appendSpy = vi.spyOn(document.body, 'appendChild').mockImplementation((node) => {
      capturedAnchor = node as HTMLAnchorElement;
      return node;
    });
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    vi.spyOn(document.body, 'removeChild').mockImplementation((node) => node);

    await fireEvent.click(getByTitle('Télécharger le CV au format PDF'));

    expect(capturedAnchor).not.toBeNull();
    expect(capturedAnchor!.href).toContain('/assets/pdf/CV_GARDET_Gilles.pdf');
    expect(capturedAnchor!.download).toBe('gardet_gilles.pdf');

    appendSpy.mockRestore();
    vi.restoreAllMocks();
  });
});
