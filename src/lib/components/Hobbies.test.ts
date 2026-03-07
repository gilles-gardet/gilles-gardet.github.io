import { render } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import Hobbies from './Hobbies.svelte';
import { loadTranslations } from '$lib/i18n/translations';

beforeEach(async () => {
  await loadTranslations('fr', '/fr/');
});

describe('Hobbies', () => {
  it('renders the French panel title', () => {
    const { getByText } = render(Hobbies);
    expect(getByText('Loisirs')).toBeInTheDocument();
  });

  it('renders the English panel title', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(Hobbies);
    expect(getByText('Interests')).toBeInTheDocument();
  });

  it('renders all 5 hobby tags in French', () => {
    const { getByText } = render(Hobbies);
    expect(getByText(/Basketball en compétition/)).toBeInTheDocument();
    expect(getByText(/Course à pied/)).toBeInTheDocument();
    expect(getByText(/Développement relatif/)).toBeInTheDocument();
    expect(getByText(/homelab/i)).toBeInTheDocument();
    expect(getByText(/Cinéma fantastique/)).toBeInTheDocument();
  });

  it('renders all 5 hobby tags in English', async () => {
    await loadTranslations('en', '/en/');
    const { getByText } = render(Hobbies);
    expect(getByText(/Competitive basketball/)).toBeInTheDocument();
    expect(getByText(/Distance running/)).toBeInTheDocument();
    expect(getByText(/Software development/)).toBeInTheDocument();
    expect(getByText(/homelab/i)).toBeInTheDocument();
    expect(getByText(/Classic horror cinema/)).toBeInTheDocument();
  });
});
