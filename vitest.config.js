import { webdriverio } from "@vitest/browser-webdriverio";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: webdriverio(),
      instances: [{ browser: "firefox" }],
    },
  },
});
