import { test, expect } from '@playwright/test';

test('homepage displays welcome message', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('liljoshy');
  await expect(page.locator('h1')).toHaveText('Welcome to liljoshy!');
});

test('homepage has pink background', async ({ page }) => {
  await page.goto('/');

  const backgroundColor = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor;
  });

  expect(backgroundColor).toBe('rgb(255, 192, 203)');
});
