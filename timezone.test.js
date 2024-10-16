import { expect, test } from "vitest";

test("timezone should be Asia/Jakarta", async () => {
  expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe("Asia/Jakarta");
});

test("timezone offset should match UTC", async () => {
  expect(new Date().getTimezoneOffset()).toBe(-420);
});
