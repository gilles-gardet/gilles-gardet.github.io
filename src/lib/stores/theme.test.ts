import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('$app/environment', () => ({ browser: true }));

function mockMatchMedia(prefersDark = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark && query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

beforeAll(() => {
  mockMatchMedia();
});

beforeEach(() => {
  vi.resetModules();
  mockMatchMedia();
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});

function subscribe(store: { subscribe: (fn: (v: boolean) => void) => () => void }): {
  value: () => boolean;
  unsubscribe: () => void;
} {
  let current = false;
  const unsubscribe = store.subscribe((v) => {
    current = v;
  });
  return { value: () => current, unsubscribe };
}

describe('theme store — initial value', () => {
  it('is false (light) when localStorage is empty and no dark preference', async () => {
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    expect(value()).toBe(false);
    unsubscribe();
  });

  it('is true (dark) when localStorage has theme=dark', async () => {
    localStorage.setItem('theme', 'dark');
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    expect(value()).toBe(true);
    unsubscribe();
  });

  it('is false (light) when localStorage has theme=light', async () => {
    localStorage.setItem('theme', 'light');
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    expect(value()).toBe(false);
    unsubscribe();
  });

  it('is true (dark) when no localStorage entry and prefers-color-scheme is dark', async () => {
    mockMatchMedia(true);
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    expect(value()).toBe(true);
    unsubscribe();
  });
});

describe('theme store — toggle', () => {
  it('switches from light to dark and persists to localStorage', async () => {
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    theme.toggle();
    expect(value()).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    unsubscribe();
  });

  it('switches from dark to light and persists to localStorage', async () => {
    localStorage.setItem('theme', 'dark');
    const { theme } = await import('./theme');
    const { value, unsubscribe } = subscribe(theme);
    theme.toggle();
    expect(value()).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    unsubscribe();
  });

  it('adds the "dark" class on <html> when toggling to dark', async () => {
    const { theme } = await import('./theme');
    theme.toggle();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes the "dark" class from <html> when toggling to light', async () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    const { theme } = await import('./theme');
    theme.toggle();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
