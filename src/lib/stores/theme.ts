import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const saved = browser ? localStorage.getItem('theme') : null;
  const prefersDark = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved === 'dark' || (!saved && prefersDark);
  const { subscribe, update } = writable<boolean>(initial);
  return {
    subscribe,
    /** Toggle between dark and light, persist to localStorage and update the DOM class. */
    toggle(): void {
      update((isDark) => {
        const next = !isDark;
        if (browser) {
          localStorage.setItem('theme', next ? 'dark' : 'light');
          document.documentElement.classList.toggle('dark', next);
        }
        return next;
      });
    },
  };
}

export const theme = createThemeStore();
