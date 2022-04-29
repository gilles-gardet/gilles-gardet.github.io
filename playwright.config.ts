import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 120 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
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
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
  outputDir: 'results/',
  webServer: {
    command: 'npx ng serve',
    port: 4200,
  },
};
export default config;
