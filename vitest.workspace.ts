import { defineProject, defineWorkspace } from "vitest/config";

process.env.TZ = "Asia/Jakarta";

export default defineWorkspace([
  createBrowserConfig("chromium"),
  createBrowserConfig("firefox"),
  createBrowserConfig("webkit"),
]);

function createBrowserConfig(name: string) {
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
          nonsense: true,
          context: {
            nonsense: true,
            timezoneId: "Asia/Jakarta",
          },
        },
      },
    },
  });
}
