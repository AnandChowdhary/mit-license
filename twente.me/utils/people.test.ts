import { getPeople } from "./people";

test("people to be an array", () => {
  expect(typeof getPeople()).toBe("object");
});

test("people to be at least 1", () => {
  expect(getPeople().length).toBeGreaterThanOrEqual(1);
});

test("people should include sample", () => {
  expect(getPeople().includes("sample.yml")).toBeTruthy();
});
