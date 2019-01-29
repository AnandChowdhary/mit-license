import { getLicense } from "./license";

test("license to be a string", () => {
  expect(typeof getLicense()).toBe("string");
});

test("license to be based on MIT", () => {
  expect(getLicense()).toMatch(
    new RegExp(
      /IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM/
    )
  );
});
