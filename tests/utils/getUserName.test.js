import { expect, describe, it, beforeEach } from "vitest";

const temporaryStore = {};
global.sessionStorage = {
  getItem: (key) => temporaryStore[key] || null,
  setItem: (key, value) => {
    temporaryStore[key] = value;
  },
  clear: () => {
    for (let key in temporaryStore) delete temporaryStore[key];
  },
};

const fetchUsername = () => {
  const userData = JSON.parse(sessionStorage.getItem("profile"));
  return userData ? userData.username : null;
};

describe("fetchUsername", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("retrieves the username from the profile object in session storage", () => {
    sessionStorage.setItem("profile", JSON.stringify({ username: "Alex" }));

    expect(fetchUsername()).toBe("Alex");
  });

  it("returns null when no profile exists in session storage", () => {
    expect(fetchUsername()).toBeNull();
  });
});
