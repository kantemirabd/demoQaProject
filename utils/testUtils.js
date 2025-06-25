import { request, expect } from '@playwright/test';
import { step } from 'allure-js-commons';


const baseURL = 'https://demoqa.com';

export async function createUserViaApi() {
  const userName = 'adminchik_' + Math.floor(Math.random() * 10000);
  const password = 'Admin123!';
  const apiContext = await request.newContext();

  const userData = { userName, password };

  const createUser = await apiContext.post(`${baseURL}/Account/v1/User`, {
    data: userData
  });

  expect(createUser.status()).toBe(201);

  return userData;
}