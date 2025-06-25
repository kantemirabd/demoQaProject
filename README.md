# Playwright UI Tests for DemoQA

Этот проект содержит автотесты для сайта [demoqa.com](https://demoqa.com), написанные с использованием Playwright и подхода Page Object Model.

## Цели проекта
- Проверка функциональности авторизации и поиска книг
- Демонстрация использования Playwright с POM
- Интеграция с Allure для генерации отчётов

## Стек технологий
- **Node.js** (v18+)
- **Playwright** (@playwright/test)
- **Allure** (allure-playwright)
- **JavaScript** (ESModules)

## Установка
1. Клонировать репозиторий:
```bash
git clone <repository-url>
cd demoqa-playwright
Установить зависимости:

bash
npm install
Запуск тестов
Основные команды
bash
# Запуск всех тестов
npm test

# Запуск тестов с определённым тегом
npx playwright test --grep "@logintests"
npx playwright test --grep "@booktests"
Работа с отчётами
bash
# Генерация Allure-отчёта
npm run allure:generate

# Просмотр отчёта
npm run allure:open
Структура проекта
text
project-root/
├── pages/             # Page Object модели
│   ├── BooksPage.js
│   └── LoginPage.js
├── tests/             # Тесты
│   ├── books.spec.js
│   └── login.spec.js
├── utils/             # Вспомогательные функции
│   └── testUtils.js
├── allure-results/    # Результаты тестов для Allure
├── allure-report/     # Сгенерированный отчёт
├── playwright.config.js
└── package.json
Автор
Jonny Jones
QA Engineer
Специализация: UI/API тестирование
Инструменты: Playwright, Pytest