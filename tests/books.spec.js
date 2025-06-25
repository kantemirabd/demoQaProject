import { test } from '@playwright/test';
import { createUserViaApi } from '../utils/testUtils.js';
import { LoginPage } from '../pages/LoginPage.js';
import { BooksPage } from '../pages/BooksPage.js';

test.describe('Books tests', () => {
  test.describe.configure({ tag: '@booktests' });

  test('[@booktests] Поиск книги по названию', async ({ page }) => {
    const user = await createUserViaApi();

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.userName, user.password);
    await loginPage.expectLoggedIn(user.userName);

    const booksPage = new BooksPage(page);
    await booksPage.goto();
    await booksPage.searchBook('Speaking JavaScript');
    await booksPage.expectOnlyOneBookWithTitle('Speaking JavaScript');
  });

  test('[@booktests] Проверка пагинации на 5 строк', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();
    await booksPage.changeRowsPerPage(5);
    await booksPage.expectBookCount(5);
  });
});
