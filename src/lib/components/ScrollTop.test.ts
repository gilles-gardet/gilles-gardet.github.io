import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ScrollTop from './ScrollTop.svelte';

describe('ScrollTop', () => {
  it('renders a button with aria-label "Retour en haut"', () => {
    const { getByRole } = render(ScrollTop);
    expect(getByRole('button', { name: 'Retour en haut' })).toBeInTheDocument();
  });

  it('is not visible initially (no is-visible class)', () => {
    const { getByRole } = render(ScrollTop);
    expect(getByRole('button')).not.toHaveClass('is-visible');
  });

  it('becomes visible when scroll exceeds 300px', async () => {
    const { getByRole } = render(ScrollTop);
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
    await fireEvent(window, new Event('scroll'));
    expect(getByRole('button')).toHaveClass('is-visible');
  });

  it('hides again when scroll goes back below 300px', async () => {
    const { getByRole } = render(ScrollTop);
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
    await fireEvent(window, new Event('scroll'));
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    await fireEvent(window, new Event('scroll'));
    expect(getByRole('button')).not.toHaveClass('is-visible');
  });

  it('calls window.scrollTo({ top: 0, behavior: "smooth" }) when clicked', async () => {
    const { getByRole } = render(ScrollTop);
    await fireEvent.click(getByRole('button'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
