import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test('POST - Create a post', async ({ request }) => {
  const response = await request.post(`${baseURL}/posts`, {
    data: {
      title: 'Playwright API Testing',
      body: 'Learning API Automation',
      userId: 1
    }
  });

  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(201);
  expect(body.title).toBe('Playwright API Testing');
});
