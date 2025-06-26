import { test } from '@playwright/test';
import { createUserViaApi } from '../utils/testUtils.js';
import { LoginPage } from '../pages/LoginPage.js';
import { BooksPage } from '../pages/BooksPage.js';
import { expect } from '@playwright/test';

test.describe('Books tests', () => {
  test.describe.configure({ tag: '@booktests' });

  test('[@booktests] Поиск книги по названию, валидация пагинации', async ({ page }) => {
    const user = await createUserViaApi();
    // Логин
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.userName, user.password);
    await loginPage.expectLoggedIn(user.userName);

    // Проверить поиск
    const booksPage = new BooksPage(page);
    await booksPage.goto();
    await booksPage.searchBook('Speaking JavaScript');
    await booksPage.expectOnlyOneBookWithTitle('Speaking JavaScript');

    // Проверить пагинацию
    await booksPage.clearSearch()
    await booksPage.changeRowsPerPage(5);
    await booksPage.expectBookCount(5);
  });

  test('[@booktests] Переход на страницу книги', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    // Перейти на страницу конкретной книги
    await booksPage.clickBookByTitle('Speaking JavaScript');
    await expect(page).toHaveURL(/.*book=9781449365035/);
  });
});
