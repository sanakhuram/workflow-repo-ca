import { test, expect } from '@playwright/test';

test.describe('Navigation logic', () => {
  const baseURL = 'http://localhost:5173';

  test('Navigates to the home page, clicks the first venue, and verifies venue details page', async ({
    page,
  }) => {
    await page.goto(baseURL);

    await page.waitForSelector('#venue-container');

    await page.click('#venue-container > a:first-child');

    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Venue details/i, { timeout: 5000 });
  });
});
