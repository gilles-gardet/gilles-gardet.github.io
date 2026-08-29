import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';
import type { PluginOption } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    angular() as PluginOption
  ],
  resolve: {
    alias: {
      '@assets': resolve(import.meta.dirname, './src/assets'),
      '@core': resolve(import.meta.dirname, './src/app/core'),
      '@environments': resolve(import.meta.dirname, './src/environments'),
      '@features': resolve(import.meta.dirname, './src/app/features'),
      '@pages': resolve(import.meta.dirname, './src/app/pages'),
      '@shared': resolve(import.meta.dirname, './src/app/shared'),
      '@state': resolve(import.meta.dirname, './src/+state'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    exclude: ['e2e/**', 'node_modules/**'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'cobertura'],
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
  }
});