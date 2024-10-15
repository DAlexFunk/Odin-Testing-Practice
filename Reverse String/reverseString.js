function reverseString(string) {
  if (typeof string !== "string")
    throw new Error("reverseString must accept a string");

  return string.split("").reverse().join("");
}

module.exports = reverseString;
