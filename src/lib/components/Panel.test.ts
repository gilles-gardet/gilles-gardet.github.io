import { render } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';
import Panel from './Panel.svelte';

const children = createRawSnippet(() => ({
  render: () => `<span>Test content</span>`,
}));

describe('Panel', () => {
  it('renders the header text', () => {
    const { getByText } = render(Panel, { props: { header: 'My Panel', children } });
    expect(getByText('My Panel')).toBeInTheDocument();
  });

  it('renders with the provided id', () => {
    const { container } = render(Panel, { props: { id: 'test-panel', header: 'Test', children } });
    expect(container.querySelector('#test-panel')).toBeInTheDocument();
  });

  it('renders children content', () => {
    const { getByText } = render(Panel, { props: { header: 'Test', children } });
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('renders without an id when not provided', () => {
    const { container } = render(Panel, { props: { header: 'Test', children } });
    expect(container.querySelector('.panel')).not.toHaveAttribute('id');
  });
});
