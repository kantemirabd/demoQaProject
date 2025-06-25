import { test, expect } from '@playwright/test';
import { createUserViaApi } from '../utils/testUtils.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Login tests', () => {
  test.describe.configure({ tag: '@logintests' });

  test('[@logintests] Логин с созданным через API пользователем', async ({ page }) => {
    // создать пользователя через API
    const user = await createUserViaApi();

    // войти под созданным пользователем через UI
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.userName, user.password);
    await loginPage.expectLoggedIn(user.userName);
  });

  test('[@logintests] Невалидный логин: неправильный пароль', async ({ page }) => {
    // создать пользователя через API
    const user = await createUserViaApi();

    // войти под созданным пользователем через UI
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.userName, 'WrongPassword123!');
    await loginPage.expectErrorMsg()
  });
});