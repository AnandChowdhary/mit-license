import { ensureDirectoryExistence } from "./directory";

test("ensureDirectoryExistence to be a function", () => {
  expect(typeof ensureDirectoryExistence).toBe("function");
});

test("ensureDirectoryExistence should return bool", () => {
  expect(typeof ensureDirectoryExistence(".")).toBe("boolean");
});

test("ensureDirectoryExistence should always be true", () => {
  expect(ensureDirectoryExistence(".")).toBeTruthy();
});