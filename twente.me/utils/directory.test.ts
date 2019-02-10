import { ensureDirectoryExistence } from "./directory";

test("ensureDirectoryExistence to be a function", () => {
  expect(typeof ensureDirectoryExistence).toBe("function");
});

test("ensureDirectoryExistence should return nothing", () => {
  expect(typeof ensureDirectoryExistence(".")).toBe("undefined");
});
