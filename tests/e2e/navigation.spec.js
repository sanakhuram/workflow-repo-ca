test.describe("Venue navigation", () => {
  test("Navigate to venue details from home page", async ({ page }) => {
    const baseURL = "http://localhost:5173";

    await page.goto(baseURL);
    await page.waitForSelector(".venue-list", { timeout: 10000 });

    const firstVenue = page.locator(".venue-item").first();
    await firstVenue.click();

    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
