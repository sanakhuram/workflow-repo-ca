import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface";

describe("isActivePath - Dynamic Tests", () => {
  const testCases = [
    { href: "/login", path: "/login", expected: true },
    { href: "/", path: "/", expected: true },
    { href: "/", path: "/index.html", expected: true },
    { href: "/", path: "/login", expected: false },
    { href: "/login", path: "/register", expected: false },
  ];

  testCases.forEach(({ href, path, expected }) => {
    it(`returns ${expected} for href "${href}" and path "${path}"`, () => {
      expect(isActivePath(href, path)).toBe(expected);
    });
  });
});
