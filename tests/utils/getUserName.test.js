import { expect, describe, it, beforeEach } from "vitest";
import { saveToken, getToken } from "../../js/utils/storage";

const storageMock = {};
global.localStorage = {
  getItem: (key) => storageMock[key] || null,
  setItem: (key, value) => {
    storageMock[key] = value;
  },
  clear: () => {
    Object.keys(storageMock).forEach((key) => delete storageMock[key]);
  },
};

const fetchUsername = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData?.name || null;
};

describe("LocalStorage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveToken", () => {
    it("saves the token to storage", () => {
      const testToken = "test-token";
      saveToken(testToken);
      expect(localStorage.getItem("token")).toBe(JSON.stringify(testToken));
    });
  });

  describe("getToken", () => {
    it("retrieves the token from storage", () => {
      localStorage.setItem("token", JSON.stringify("test-token"));
      const retrievedToken = getToken();
      expect(retrievedToken).toBe("test-token");
    });

    it("returns null when no token exists", () => {
      const token = getToken();
      expect(token).toBeNull();
    });
  });

  describe("fetchUsername", () => {
    it("returns the username when a user object is stored", () => {
      localStorage.setItem("user", JSON.stringify({ name: "John" }));
      expect(fetchUsername()).toBe("John");
    });

    it("returns null when no user data exists in storage", () => {
      expect(fetchUsername()).toBeNull();
    });
  });
});
