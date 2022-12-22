// For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = (values, condition) => {
  let sum = 0;
  for (let val of values) {
    if (val % 2 === 0 && condition === "even") {
      sum += val;
    } else if (val % 2 === 1 && condition === "odd") {
      sum += val;
    }
  }
  return sum;
};

const conditionalSum = (values, condition) =>
  values
    .filter((val) => val % 2 === 0 && condition === "even")
    .reduce((a, b) => a + b, 0);

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
