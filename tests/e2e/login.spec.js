import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login/");
    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    const logoutButton = page.locator("#logoutButton");
    await expect(logoutButton).toBeVisible({ timeout: 15000 });
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/");
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
