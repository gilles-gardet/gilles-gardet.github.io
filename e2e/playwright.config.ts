import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  timeout: 120 * 1_000,
  expect: {
    timeout: 5_000,
    toMatchSnapshot: { maxDiffPixels: 100 },
  },
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['html', { outputFolder: 'report' }], ['github']] : 'list',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  webServer: {
    command: 'pnpm exec nx serve cv',
    port: 4_200,
    cwd: workspaceRoot,
  },
});
