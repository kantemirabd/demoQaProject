import { expect, test } from '@playwright/test';

export class BooksPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#searchBox');
    this.presentBookTitles = page.locator('.action-buttons .mr-2');
    this.rowsDropdown = page.locator('select[aria-label="rows per page"]');
  }

  async goto() {
    await test.step('Открываем страницу /books', async () => {
      await this.page.goto('/books');
    });
  }

  async searchBook(title) {
    await test.step(`Ищем книгу по названию: "${title}"`, async () => {
      await this.searchBox.fill(title);
    });
  }

  async expectOnlyOneBookWithTitle(title) {
    await test.step(`Проверяем, что отображается только одна книга с названием: "${title}"`, async () => {
      await expect(this.presentBookTitles).toHaveCount(1, { timeout: 10000 });
      await expect(this.page.locator(`a:has-text("${title}")`)).toContainText(title);
    });
  }

  async changeRowsPerPage(count) {
    await test.step(`Изменяем количество строк на странице на: ${count}`, async () => {
      await this.rowsDropdown.selectOption(String(count));
    });
  }

  async expectBookCount(expectedCount) {
    await test.step(`Ожидаем, что количество отображаемых книг: ${expectedCount}`, async () => {
      await expect(this.presentBookTitles).toHaveCount(expectedCount);
    });
  }

  async clickBookByTitle(title) {
    await test.step(`Кликаем по книге с названием: "${title}"`, async () => {
      await this.page.locator(`a:has-text("${title}")`).click();
    });
  }
}
