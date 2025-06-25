# Playwright UI Tests for DemoQA

Этот мой проект содержит автотесты для сайта [demoqa.com](https://demoqa.com), написанные с использованием Playwright и подхода Page Object Model.

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
```
2. Установить зависимости:

```bash
npm install
```

## Запуск тестов
Основные команды
```
# Запуск всех тестов
npm test
```

## Запуск тестов с определённым тегом
```
npx playwright test --grep "@logintests"
npx playwright test --grep "@booktests"
```

Работа с отчётами
bash
```
# Генерация Allure-отчёта
npm run allure:generate
```
```
# Просмотр отчёта
npm run allure:open
```

Автор:
Кантемир Абдираимов
AQA Engineer