const capitalize = require("./capitalize");

test("Correctly capitalizes a string", () => {
  expect(capitalize("darrow")).toBe("Darrow");
  expect(capitalize("sevro barca")).toBe("Sevro barca");
  expect(capitalize(" virginia augustus")).toBe(" virginia augustus");
  expect(capitalize("123456")).toBe("123456");
});

test("Returns an identical string if already capitalized", () => {
  expect(capitalize("Atlas")).toBe("Atlas");
  expect(capitalize("Lysander au lune")).toBe("Lysander au lune");
});

test("Returns an empty string given an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Throws error if a string is not given", () => {
  expect(() => capitalize()).toThrow();
  expect(() => capitalize(123456)).toThrow();
  expect(() => capitalize(["d", "a", "r", "r", "o", "w"])).toThrow();
  expect(() => capitalize({ word: "darrow" })).toThrow();
  expect(() => capitalize(null)).toThrow();
});
