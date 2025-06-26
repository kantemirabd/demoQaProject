import { expect, test } from '@playwright/test';

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
    this.errorMsg = page.locator('.mb-1');
  }

  async goto() {
    await test.step('Открываем страницу логина', async () => {
      await this.page.goto('/login');
    });
  }

  async login(username, password) {
    await test.step(`Выполняем вход: username="${username}"`, async () => {
      await this.userNameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    });
  }

  async expectLoggedIn(username) {
    await test.step(`Проверяем, что пользователь "${username}" успешно вошел`, async () => {
      await this.userNameText.waitFor();
      await expect(this.userNameText).toHaveText(username);
    });
  }

  async expectErrorMsg() {
    await test.step('Проверяем, что отображается сообщение об ошибке входа', async () => {
      await expect(this.errorMsg).toBeVisible();
    });
  }
}
