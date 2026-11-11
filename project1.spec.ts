import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Ads ko block karo
  await page.route('*/', (route) => {
    const url = route.request().url();
    if (url.includes('google') || url.includes('doubleclick') || url.includes('aswift')) {
      return route.abort();
    }
    return route.continue();
  });

  await page.goto('https://automationexercise.com/', { waitUntil: 'domcontentloaded' });
  
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  
  // Search
  await page.locator('.shop-menu a[href="/products"]').click();
  await page.locator('#search_product').fill('Tshirt');
  await page.locator('#submit_search').click();
  
  await expect(page.locator('.features_items')).toBeVisible();
});