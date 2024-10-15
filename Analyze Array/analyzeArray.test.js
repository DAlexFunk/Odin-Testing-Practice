const analyzeArray = require("./analyzeArray");

test("Returns the correct values for whole numbers", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27])).toEqual({
    average: 14,
    min: 1,
    max: 27,
    length: 14,
  });
});

test("Returns the correct values for a non-integer average", () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });

  expect(analyzeArray([5, 6, 9, 8, 7, 4, 11, 5, 9])).toEqual({
    average: 7.11,
    min: 4,
    max: 11,
    length: 9,
  });

  expect(analyzeArray([20, 100, 500, 1, 6000])).toEqual({
    average: 1324.2,
    min: 1,
    max: 6000,
    length: 5,
  });
});

test("Returns the correct value for negative array values", () => {
  expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 5,
  });

  expect(analyzeArray([-1, 2, -3, 4, -5])).toEqual({
    average: -0.6,
    min: -5,
    max: 4,
    length: 5,
  });

  expect(analyzeArray([-100, 100, -1000, 1000])).toEqual({
    average: 0,
    min: -1000,
    max: 1000,
    length: 4,
  });
});

test("Returns the correct values for arrays of length 1", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });

  expect(analyzeArray([50])).toEqual({
    average: 50,
    min: 50,
    max: 50,
    length: 1,
  });

  expect(analyzeArray([10000])).toEqual({
    average: 10000,
    min: 10000,
    max: 10000,
    length: 1,
  });
});

test("Returns the correct values for arrays of length 0", () => {
  expect(analyzeArray([])).toEqual({ average: 0, min: 0, max: 0, length: 0 });
});

test("Only accepts arrays", () => {
  expect(() => analyzeArray(1, 2, 3, 4, 5, 6)).toThrow();
  expect(() => analyzeArray([1, 2], 3, 4, 5, 6)).toThrow();
  expect(() => analyzeArray({ one: 1, two: 2, three: 3 })).toThrow();
  expect(() => analyzeArray("[1, 2, 3, 4, 5]")).toThrow();
});
