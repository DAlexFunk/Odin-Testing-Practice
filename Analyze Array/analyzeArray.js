function analyzeArray(array) {
  if (!Array.isArray(array) || arguments.length !== 1) throw new Error("analyzeArray must accept an array");
  if (array.length < 1) return { average: 0, min: 0, max: 0, length: 0 };

  let average = 0;
  let min = array[0];
  let max = array[0];
  let length = array.length;

  array.forEach((num) => {
    average += num;
    if (num < min) min = num;
    else if (num > max) max = num;
  });
  average /= length;
  average = parseFloat(average.toFixed(2));

  return { average, min, max, length };
}

module.exports = analyzeArray;
