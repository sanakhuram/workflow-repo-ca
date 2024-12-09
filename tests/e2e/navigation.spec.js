import { test, expect } from "@playwright/test";

test.describe("Navigation logic", () => {
  const baseURL = "http://localhost:5173";

  test("Navigates to the home page, clicks the first venue, and verifies venue details page", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto(baseURL);

    // Wait for the venue list to load
    await page.waitForSelector("#venue-container");

    // Click the first venue in the list
    await page.click("#venue-container > a:first-child");

    // Verify the heading contains "Venue details"
    const heading = page.locator("h1");
    await expect(heading).toHaveText(/Venue details/i, { timeout: 5000 });
  });
});
