const Calculator = {
  add: function (a, b) {
    if (a === undefined || b === undefined)
      throw new Error("Add requires 2 inputs");
    else if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Add requires numeric inputs");

    return Math.round((a + b) * 100) / 100;
  },

  subtract: function (a, b) {
    if (a === undefined || b === undefined)
      throw new Error("Subtract requires 2 inputs");
    else if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Subtract requires numeric inputs");

    return Math.round((a - b) * 100) / 100;
  },

  mult: function (a, b) {
    if (a === undefined || b === undefined)
      throw new Error("Mult requires 2 inputs");
    else if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Mult requires numeric inputs");

    return a * b;
  },

  divide: function (a, b) {
    if (a === undefined || b === undefined)
      throw new Error("Divide requires 2 inputs");
    else if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Divide requires numeric inputs");
    else if (b === 0) throw new Error("Cannot divide by 0");

    return a / b;
  },
};

module.exports = Calculator;
