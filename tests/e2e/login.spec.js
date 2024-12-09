import { test, expect } from "@playwright/test";
require("dotenv").config();

test.describe("Login Page", () => {
  const testEmail = process.env.TEST_USER_EMAIL;
  const testPassword = process.env.TEST_USER_PASSWORD;
  const baseURL = "http://localhost:5173";

  test.beforeAll(() => {
    if (!testEmail || !testPassword) {
      throw new Error(
        "Environment variables TEST_USER_EMAIL and TEST_USER_PASSWORD must be set",
      );
    }
  });

  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto(`${baseURL}/login/`);
    await page.fill('input[name="email"]', testEmail);
    await page.fill('input[name="password"]', testPassword);

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Wait for the logout button to appear
    const logoutButton = page.locator("#logoutButton");
    await expect(logoutButton).toBeVisible({ timeout: 15000 });

    // Debugging: Check if the username is stored
    console.log(await page.evaluate(() => localStorage.getItem("user")));
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto(`${baseURL}/login/`);
    await page.fill('input[name="email"]', "invalid@user.com");
    await page.fill('input[name="password"]', "wrongpassword");

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
      { timeout: 15000 },
    );
  });
});
