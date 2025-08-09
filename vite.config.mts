/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [angular(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['src/**/*.spec.ts'],
      exclude: ['e2e/**', 'node_modules/**'],
      reporters: ['default'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.ts'],
        exclude: [
          'src/**/*.spec.ts',
          'src/**/*.d.ts',
          'src/test-setup.ts',
          'src/main.ts',
          'src/routes.ts',
          'src/**/testing/**',
          'src/**/vitest/**',
          'node_modules/**',
          'dist/**',
          'docs/**',
          'e2e/**',
          '**/*.config.*',
          '**/environment*'
        ]
      }
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
