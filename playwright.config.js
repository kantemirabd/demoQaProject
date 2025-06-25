import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,
  reporter: [
  ['list'],
  ['allure-playwright'],
  ],
  use: {
    headless: false,
    baseURL: 'https://demoqa.com',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 300,
    },
  },
});
