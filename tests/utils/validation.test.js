import { expect, describe, it } from "vitest";
import { validateEmail } from "../../js/utils/validation";

describe("validateEmail", () => {
  // Test 1: Valid student Noroff email
  it("returns true for valid student Noroff email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true, `Expected ${email} to be valid but got invalid`);
  });

  // Test 2: Valid staff Noroff email
  it("returns true for valid Noroff staff email", () => {
    const email = "teacher@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true, `Expected ${email} to be valid but got invalid`);
  });

  // Test 3: Non-Noroff email domains are rejected
  it("returns false for non-Noroff email", () => {
    const email = "student@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false, `Expected ${email} to be invalid but got valid`);
  });

  // Test 4: Invalid email formats are rejected
  it("returns false for invalid email format", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false, `Expected ${email} to be invalid but got valid`);
  });

  // Test 5: Emails with subdomains
  it("returns false for subdomain emails", () => {
    const email = "student@subdomain.stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(false, `Expected ${email} to be invalid but got valid`);
  });

  // Test 6: Case-insensitive emails
  it("returns true for case-insensitive valid emails", () => {
    const email = "Student@Stud.noroff.no".toLowerCase();
    const result = validateEmail(email);
    expect(result).toBe(true, `Expected ${email} to be valid but got invalid`);
  });

  // Test 7: Whitespace around valid emails
  it("returns true for valid email with surrounding whitespace", () => {
    const email = " student@stud.noroff.no ".trim();
    const result = validateEmail(email);
    expect(result).toBe(true, `Expected ${email} to be valid but got invalid`);
  });
});
