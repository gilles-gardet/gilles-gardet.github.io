import { render } from '@testing-library/svelte';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Skills from './Skills.svelte';
import { loadTranslations } from '$lib/i18n/translations';

const mockSkills = [
  { name: 'Java', rate: 90 },
  { name: 'TypeScript', rate: 80 },
  { name: 'Angular', rate: 85 },
];

// Captures the callback passed to new IntersectionObserver(callback) during each test
let capturedObserverCallback: IntersectionObserverCallback | null = null;

class CapturingIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor(callback: IntersectionObserverCallback) {
    capturedObserverCallback = callback;
  }
}

beforeEach(async () => {
  capturedObserverCallback = null;
  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    value: CapturingIntersectionObserver,
  });
  await loadTranslations('fr', '/fr/');
});

function triggerObserver(isIntersecting: boolean): void {
  const panel = document.getElementById('skills')!;
  capturedObserverCallback?.(
    [{ isIntersecting, target: panel } as unknown as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

function getFills(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('#skills .progress-bar__value'));
}

describe('Skills — rendering', () => {
  it('renders the French panel title', () => {
    const { getByText } = render(Skills, { props: { skills: mockSkills } });
    expect(getByText('Langages et outils')).toBeInTheDocument();
  });

  it('renders the English panel title', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(Skills, { props: { skills: mockSkills } });
    expect(getByText('Technical Skills')).toBeInTheDocument();
  });

  it('renders each skill name', () => {
    const { getByText } = render(Skills, { props: { skills: mockSkills } });
    expect(getByText('Java')).toBeInTheDocument();
    expect(getByText('TypeScript')).toBeInTheDocument();
    expect(getByText('Angular')).toBeInTheDocument();
  });

  it('renders a progress bar for each skill', () => {
    const { getAllByRole } = render(Skills, { props: { skills: mockSkills } });
    expect(getAllByRole('progressbar')).toHaveLength(mockSkills.length);
  });

  it('passes the correct rate to each progress bar via data-target', () => {
    const { getAllByRole } = render(Skills, { props: { skills: mockSkills } });
    const bars = getAllByRole('progressbar');
    expect(bars[0]).toHaveAttribute('data-target', '90');
    expect(bars[1]).toHaveAttribute('data-target', '80');
    expect(bars[2]).toHaveAttribute('data-target', '85');
  });

  it('renders each progress bar with the skill name as aria-label', () => {
    const { getAllByRole } = render(Skills, { props: { skills: mockSkills } });
    const bars = getAllByRole('progressbar');
    expect(bars[0]).toHaveAttribute('aria-label', 'Java');
    expect(bars[1]).toHaveAttribute('aria-label', 'TypeScript');
    expect(bars[2]).toHaveAttribute('aria-label', 'Angular');
  });
});

describe('Skills — onMount animation logic', () => {
  it('skips animation setup when skills list is empty (early return)', () => {
    render(Skills, { props: { skills: [] } });
    expect(capturedObserverCallback).toBeNull();
  });

  it('animates fills to their target widths when the panel enters the viewport', () => {
    render(Skills, { props: { skills: mockSkills } });
    triggerObserver(true);
    const fills = getFills();
    expect(fills[0].style.width).toBe('90%');
    expect(fills[1].style.width).toBe('80%');
    expect(fills[2].style.width).toBe('85%');
  });

  it('resets fills to 0% when the panel leaves the viewport', () => {
    render(Skills, { props: { skills: mockSkills } });
    triggerObserver(true);
    triggerObserver(false);
    for (const fill of getFills()) {
      expect(fill.style.width).toBe('0%');
    }
  });

  it('animates immediately when the panel is already visible on mount', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 200,
      left: 0,
      right: 0,
      width: 200,
      height: 100,
      x: 0,
      y: 100,
      toJSON: () => ({}),
    } as DOMRect);

    render(Skills, { props: { skills: mockSkills } });
    const fills = getFills();
    expect(fills[0].style.width).toBe('90%');
    expect(fills[1].style.width).toBe('80%');
    expect(fills[2].style.width).toBe('85%');
  });
});
