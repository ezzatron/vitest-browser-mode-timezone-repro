import { expect, test } from "vitest";

test("timezone offset should match UTC", async () => {
  expect(new Date().getTimezoneOffset()).toBe(0);
});
