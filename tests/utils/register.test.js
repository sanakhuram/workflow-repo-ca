import { expect, describe, it, beforeEach, vi, afterEach } from "vitest";
import { register } from "../../js/api/auth/register";

describe("register", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the user data when registration succeeds", async () => {
    const successResponse = {
      id: 1,
      name: "John Smith",
      email: "john@stud.noroff.no",
    };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(successResponse),
    });

    const result = await register({
      name: "John Smith",
      email: "john@stud.noroff.no",
      password: "password123",
    });

    expect(result).toEqual(successResponse);
  });

  it("throws an error when registration fails", async () => {
    const errorMessage = "Email already exists";

    fetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: errorMessage }),
    });

    await expect(
      register({
        name: "John Smith",
        email: "john@stud.noroff.no",
        password: "password123",
      }),
    ).rejects.toThrow("Sorry, sign up failed.");
  });
});
