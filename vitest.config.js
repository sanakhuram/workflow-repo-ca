import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enable global `vi`, `describe`, `it`, etc.
  },
});
