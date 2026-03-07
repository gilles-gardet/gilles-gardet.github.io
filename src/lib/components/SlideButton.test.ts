import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SlideButton from './SlideButton.svelte';

describe('SlideButton', () => {
  it('renders a button with the provided label as accessible name', () => {
    const { getByRole } = render(SlideButton, { props: { label: 'En savoir plus', missionIndex: 0 } });
    expect(getByRole('button', { name: 'En savoir plus' })).toBeInTheDocument();
  });

  it('renders the label text visibly inside the button', () => {
    const { getByText } = render(SlideButton, { props: { label: 'View details', missionIndex: 0 } });
    expect(getByText('View details')).toBeInTheDocument();
  });

  it('sets data-mission to the provided mission index', () => {
    const { getByRole } = render(SlideButton, { props: { label: 'En savoir plus', missionIndex: 3 } });
    expect(getByRole('button', { name: 'En savoir plus' })).toHaveAttribute('data-mission', '3');
  });
});
