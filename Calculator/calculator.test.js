const Calculator = require("./calculator");

test("The add function correctly adds two numbers", () => {
  expect(Calculator.add(2, 3)).toBe(5);
  expect(Calculator.add(100, 1000)).toBe(1100);
  expect(Calculator.add(10, 0)).toBe(10);
  expect(Calculator.add(0.5, 0.5)).toBe(1);
  expect(Calculator.add(0.1, 0.2)).toBe(0.3);
});

test("The subrtact function correctly subtracts two numbers", () => {
  expect(Calculator.subtract(3, 2)).toBe(1);
  expect(Calculator.subtract(1000, 100)).toBe(900);
  expect(Calculator.subtract(67, 98)).toBe(-31);
  expect(Calculator.subtract(50, 0)).toBe(50);
  expect(Calculator.subtract(0, 50)).toBe(-50);
  expect(Calculator.subtract(1, 0.5)).toBe(0.5);
  expect(Calculator.subtract(0.3, 0.2)).toBe(0.1);
});

test("The mult function correctly multiplies two numbers", () => {
  expect(Calculator.mult(2, 3)).toBe(6);
  expect(Calculator.mult(3, 2)).toBe(6);
  expect(Calculator.mult(100, 70)).toBe(7000);
  expect(Calculator.mult(0, 67)).toBe(0);
  expect(Calculator.mult(-1, 10)).toBe(-10);
  expect(Calculator.mult(-2, -20)).toBe(40);
  expect(Calculator.mult(4, 0.25)).toBe(1);
  expect(Calculator.mult(1, 0.5)).toBe(0.5);
});

test("The divide function correctly divides two numbers", () => {
  expect(Calculator.divide(6, 3)).toBe(2);
  expect(Calculator.divide(1000, 10)).toBe(100);
  expect(Calculator.divide(87, 10)).toBe(8.7);
  expect(Calculator.divide(0.1, 0.1)).toBe(1);
  expect(Calculator.divide(0, 1)).toBe(0);
  expect(() => Calculator.divide(1, 0)).toThrow("Cannot divide by 0");
  expect(Calculator.divide(2, 14)).toBe(1 / 7);
});

test("Each function requires 2 inputs", () => {
  expect(() => Calculator.add(1)).toThrow("Add requires 2 inputs");
  expect(() => Calculator.subtract(1)).toThrow("Subtract requires 2 inputs");
  expect(() => Calculator.mult(1)).toThrow("Mult requires 2 inputs");
  expect(() => Calculator.divide(1)).toThrow("Divide requires 2 inputs");
  expect(() => Calculator.add()).toThrow("Add requires 2 inputs");
  expect(() => Calculator.subtract()).toThrow("Subtract requires 2 inputs");
  expect(() => Calculator.mult()).toThrow("Mult requires 2 inputs");
  expect(() => Calculator.divide()).toThrow("Divide requires 2 inputs");
});

test("Each function requires number inputs", () => {
  expect(() => Calculator.add("1", "2")).toThrow("Add requires numeric inputs");
  expect(() => Calculator.add(1, "2")).toThrow("Add requires numeric inputs");
  expect(() => Calculator.add("1", 2)).toThrow("Add requires numeric inputs");
  expect(() => Calculator.subtract("1", "2")).toThrow("Subtract requires numeric inputs");
  expect(() => Calculator.subtract(1, "2")).toThrow("Subtract requires numeric inputs");
  expect(() => Calculator.subtract("1", 2)).toThrow("Subtract requires numeric inputs");
  expect(() => Calculator.mult("1", "2")).toThrow("Mult requires numeric inputs");
  expect(() => Calculator.mult(1, "2")).toThrow("Mult requires numeric inputs");
  expect(() => Calculator.mult("1", 2)).toThrow("Mult requires numeric inputs");
  expect(() => Calculator.divide("1", "2")).toThrow("Divide requires numeric inputs");
  expect(() => Calculator.divide(1, "2")).toThrow("Divide requires numeric inputs");
  expect(() => Calculator.divide("1", 2)).toThrow("Divide requires numeric inputs");
});
