import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ProgressBar from './ProgressBar.svelte';

describe('ProgressBar', () => {
  it('renders an element with role="progressbar"', () => {
    const { getByRole } = render(ProgressBar, { props: { value: 75, name: 'Java' } });
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets aria-label to the skill name', () => {
    const { getByRole } = render(ProgressBar, { props: { value: 75, name: 'Java' } });
    expect(getByRole('progressbar')).toHaveAttribute('aria-label', 'Java');
  });

  it('sets data-target to the provided value', () => {
    const { getByRole } = render(ProgressBar, { props: { value: 75, name: 'Java' } });
    expect(getByRole('progressbar')).toHaveAttribute('data-target', '75');
  });

  it('renders with aria-valuenow=0, aria-valuemin=0, aria-valuemax=100', () => {
    const { getByRole } = render(ProgressBar, { props: { value: 75, name: 'Java' } });
    const bar = getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '0');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders the fill element initially at 0%', () => {
    const { container } = render(ProgressBar, { props: { value: 75, name: 'Java' } });
    const fill = container.querySelector('.progress-bar__value') as HTMLElement;
    expect(fill.style.width).toBe('0%');
  });
});
