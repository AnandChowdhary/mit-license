import { getTemplate } from "./template";

test("template to be a string", () => {
  expect(typeof getTemplate()).toBe("string");
});

test("template to be in UTF 8", () => {
  expect(getTemplate()).toMatch(new RegExp(/<meta charset="utf-8">/));
});

test("template to have mustache variables", () => {
  expect(getTemplate()).toMatch(new RegExp(/{{name}}/));
});
