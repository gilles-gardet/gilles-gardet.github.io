import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  timeout: 120 * 1000,
  expect: {
    timeout: 5000,
    toMatchSnapshot: { maxDiffPixels: 100 },
  },
  forbidOnly: !!process.env?.['CI'],
  retries: process.env?.['CI'] ? 1 : 0,
  workers: process.env?.['CI'] ? 1 : undefined,
  reporter: process.env?.['CI'] ? [['html', { outputFolder: 'report' }], ['github']] : 'list',
  use: {
    baseURL: 'http://localhost:4200',
    actionTimeout: 10000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'ng serve --host=0.0.0.0 --port=4200',
    port: 4200,
    reuseExistingServer: !process.env?.['CI'],
    timeout: 120000,
  },
});
