import { expect } from '@playwright/test';
import { step } from 'allure-js-commons';

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.userNameText = page.locator('#userName-value');
  }

  async goto() {
    await step('Переход на страницу логина', async () => {
      await this.page.goto('/login');
    });
  }

  async login(username, password) {
    await step(`Ввод логина: ${username} и пароля`, async () => {
      await this.userNameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    });
  }

  async expectLoggedIn(username) {
    await step(`Проверка входа под пользователем: ${username}`, async () => {
      await this.userNameText.waitFor();
      await expect(this.userNameText).toHaveText(username);
    });
  }
}
