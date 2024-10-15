const caesarCipher = require("./caesarCipher");

test("Correctly shifts letters less than or equal to 26", () => {
  expect(caesarCipher("aragorn", 3)).toBe("dudjruq");
  expect(caesarCipher("samwise", 10)).toBe("ckwgsco");
  expect(caesarCipher("frodo", 26)).toBe("frodo");
});

test("Correctly shifts leters greater than 26", () => {
  expect(caesarCipher("merry", 30)).toBe("qivvc");
  expect(caesarCipher("balrog", 1000)).toBe("nmxdas");
  expect(caesarCipher("boromir", 27)).toBe("cpspnjs");
});

test("Preserves capitalization", () => {
  expect(caesarCipher("Gandalf", 4)).toBe("Kerhepj");
  expect(caesarCipher("ElRoNd", 15)).toBe("TaGdCs");
  expect(caesarCipher("pIPPIN", 26)).toBe("pIPPIN");
});

test("Preserves punctuation", () => {
  expect(caesarCipher("My, Precious!", 1)).toBe("Nz, Qsfdjpvt!");
  expect(caesarCipher("You. Shall not. Pass!", 5)).toBe("Dtz. Xmfqq sty. Ufxx!");
  expect(caesarCipher("Boil-em, Mash-em, stick-em in a stew.", 17)).toBe("Sfzc-vd, Drjy-vd, jkztb-vd ze r jkvn.");
});

test("Correctly handles an empty string", () => {
  expect(caesarCipher("", 10)).toBe("");
});

test("Must accept a string in the first position", () => {
  expect(() => caesarCipher(10, 5)).toThrow("The input must be a string");
  expect(() => caesarCipher({word: "Tolkien"}, 5)).toThrow("The input must be a string");
  expect(() => caesarCipher(["Tolkien"], 5)).toThrow("The input must be a string");
}) 

test("Must accept a positive whole number in the second position", () => {
  expect(() => caesarCipher("Tolkien", -10)).toThrow("The shift number must be positive and whole");
  expect(() => caesarCipher("Tolkien", 0)).toThrow("The shift number must be positive and whole");
  expect(() => caesarCipher("Tolkien", 0.5)).toThrow("The shift number must be positive and whole");
  expect(() => caesarCipher("Tolkien", "eight")).toThrow("The shift number must be positive and whole");
});

test("Must include both a string and a number", () => {
  expect(() => caesarCipher("Faramir")).toThrow("Missing either string or shift number");
  expect(() => caesarCipher(18)).toThrow("Missing either string or shift number");
  expect(() => caesarCipher()).toThrow("Missing either string or shift number");
});
