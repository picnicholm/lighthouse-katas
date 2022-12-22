// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = (arr) => {
  if (arr.length < 2) return "Input array must contain at least 2 values";
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
};

// console.log(sumLargestNumbers([2]));
console.log(sumLargestNumbers([10]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
