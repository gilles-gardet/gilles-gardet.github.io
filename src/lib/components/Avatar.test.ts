import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Avatar from './Avatar.svelte';

describe('Avatar', () => {
  it('renders an img with the provided src', () => {
    const { getByRole } = render(Avatar, { props: { src: '/test.jpg' } });
    expect(getByRole('img')).toHaveAttribute('src', '/test.jpg');
  });

  it('renders the provided alt text', () => {
    const { getByRole } = render(Avatar, { props: { src: '/test.jpg', alt: 'Custom alt' } });
    expect(getByRole('img')).toHaveAttribute('alt', 'Custom alt');
  });

  it('uses "Profile picture" as default alt text', () => {
    const { getByRole } = render(Avatar, { props: { src: '/test.jpg' } });
    expect(getByRole('img')).toHaveAttribute('alt', 'Profile picture');
  });
});
