function caesarCipher(string, shift) {
  if (string === undefined || shift === undefined) {
    throw new Error("Missing either string or shift number");
  } else if (typeof string !== "string") {
    throw new Error("The input must be a string");
  } else if (typeof shift !== "number" || shift < 1 || !Number.isInteger(shift)) {
    throw new Error("The shift number must be positive and whole");
  }

  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (97 <= charCode && charCode <= 122) {
      charCode = ((charCode - 97 + shift) % 26) + 97;
    } else if (65 <= charCode && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    newString += String.fromCharCode(charCode);
  }

  return newString;
}

module.exports = caesarCipher;
