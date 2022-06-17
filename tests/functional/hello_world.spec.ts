import { test } from '@japa/runner';

test('display welcome page', async ({ client, expect }) => {
  const response = await client.get('/');

  expect(response.status()).toBe(200);
});
