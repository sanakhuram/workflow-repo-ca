import { test, expect } from "@playwright/test";

test.describe("login", () => {
  const testEmail = process.env.TEST_EMAIL;
  const testPassword = process.env.TEST_PASSWORD;
  const baseURL = "http://localhost:5173";

  test("user can login", async ({ page }) => {
    console.log("Testing login with:", testEmail, testPassword); // Debugging

    // Go to login page
    await page.goto(`${baseURL}/auth/login`);

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(testEmail);
    await page.locator('input[name="password"]').fill(testPassword);

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see logout button - means we're logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    console.log("Testing login with wrong credentials"); // Debugging

    // Navigate to login page
    await page.goto(`${baseURL}/auth/login`);

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(testEmail);
    await page.locator('input[name="password"]').fill("wrongpassword");

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check for error in message container
    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toContainText("Invalid email or password");
  });
});
