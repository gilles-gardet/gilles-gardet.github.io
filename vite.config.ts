/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [
    angular() as PluginOption,
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets'),
      '@core': resolve(__dirname, './src/app/core'),
      '@environments': resolve(__dirname, './src/environments'),
      '@features': resolve(__dirname, './src/app/features'),
      '@pages': resolve(__dirname, './src/app/pages'),
      '@shared': resolve(__dirname, './src/app/shared'),
      '@state': resolve(__dirname, './src/+state'),
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