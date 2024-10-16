import { defineProject, defineWorkspace } from "vitest/config";

process.env.TZ = "UTC";

export default defineWorkspace([
  createBrowserConfig("chromium"),
  createBrowserConfig("firefox"),
  createBrowserConfig("webkit"),
]);

function createBrowserConfig(name) {
  return defineProject({
    test: {
      name,
      globals: true,
      browser: {
        name,
        enabled: true,
        provider: "playwright",
        headless: true,
        providerOptions: {
          timezoneId: "UTC",
        },
      },
    },
  });
}
