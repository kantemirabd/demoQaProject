// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'https://example.com', // заменим позже на твой URL
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
