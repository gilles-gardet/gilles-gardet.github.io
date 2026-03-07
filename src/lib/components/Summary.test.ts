import { render } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import Summary from './Summary.svelte';
import { loadTranslations } from '$lib/i18n/translations';

const yearsOfExperience = new Date().getFullYear() - new Date(2013, 4).getFullYear();

beforeEach(async () => {
  await loadTranslations('fr', '/fr/');
});

describe('Summary', () => {
  it('renders the French panel title', () => {
    const { getByText } = render(Summary);
    expect(getByText('Profil et généralités')).toBeInTheDocument();
  });

  it('renders the English panel title', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(Summary);
    expect(getByText('Professional Profile')).toBeInTheDocument();
  });

  it('renders the years of experience interpolated in French', () => {
    const { container } = render(Summary);
    expect(container.querySelector('.summary')?.textContent).toContain(`${yearsOfExperience} ans`);
  });

  it('renders the years of experience interpolated in English', async () => {
    await loadTranslations('en', '/en/');
    const { container } = render(Summary);
    expect(container.querySelector('.summary')?.textContent).toContain(`${yearsOfExperience} years`);
  });
});
