import { expect } from '@playwright/test';
import { step } from 'allure-js-commons';

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
    await step('Переход на страницу книг', async () => {
      await this.page.goto('/books');
    });
  }

  async searchBook(title) {
    await step(`Поиск книги с названием: ${title}`, async () => {
      await this.searchBox.fill(title);
    });
  }

  async expectOnlyOneBookWithTitle(title) {
    await step(`Ожидание одной книги с названием: ${title}`, async () => {
      await expect(this.presentBookTitles).toHaveCount(1, { timeout: 10000 });
      await expect(this.page.locator(`a:has-text("${title}")`)).toContainText(title);
    });
  }

  async changeRowsPerPage(count) {
    await step(`Выбор количества строк на странице: ${count}`, async () => {
      await this.rowsDropdown.selectOption(String(count));
    });
  }

  async expectBookCount(expectedCount) {
    await step(`Проверка, что отображено ${expectedCount} книг`, async () => {
      await expect(this.presentBookTitles).toHaveCount(expectedCount);
    });
  }
  
  async clickBookByTitle(title) {
    await step(`Клик по книге с заголовком: ${title}`, async () => {
      await this.page.locator(`a:has-text("${title}")`).click();
    });
  }
}
