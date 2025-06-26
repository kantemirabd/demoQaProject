import { request, expect, test } from '@playwright/test';

const baseURL = 'https://demoqa.com';

export async function createUserViaApi() {
  const userName = 'adminchik_' + Math.floor(Math.random() * 10000);
  const password = 'Admin123!';
  const userData = { userName, password };

  return await test.step('Создание пользователя через API', async () => {
    const apiContext = await test.step('Создаем API контекст', async () => {
      return await request.newContext();
    });

    const createUser = await test.step(`Отправляем POST-запрос на создание пользователя "${userName}"`, async () => {
      return await apiContext.post(`${baseURL}/Account/v1/User`, {
        data: userData
      });
    });

    await test.step('Проверяем, что пользователь успешно создан (статус 201)', async () => {
      expect(createUser.status()).toBe(201);
    });

    return userData;
  });
}
