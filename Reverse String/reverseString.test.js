const reverseString = require("./reverseString");

test("Correctly reverses a string", () => {
  expect(reverseString("yoda")).toBe("adoy");
  expect(reverseString("Anakin Skywalker")).toBe("reklawykS nikanA");
  expect(reverseString("Qui-Gon Jinn")).toBe("nniJ noG-iuQ");
  expect(reverseString("1234561-=+/>")).toBe(">/+=-1654321");
});

test("Correctly returns an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Throws an error if a string is not given", () => {
  expect(() => reverseString()).toThrow();
  expect(() => reverseString(12345654321)).toThrow();
  expect(() => reverseString(["Y", "o", "d", "a"])).toThrow();
  expect(() => reverseString({ word: "Mace Windu" })).toThrow();
  expect(() => reverseString(null)).toThrow();
});
