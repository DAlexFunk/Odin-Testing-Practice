function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("capitalize must accept a string");
  } else if (!string) {
    return "";
  }

  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
