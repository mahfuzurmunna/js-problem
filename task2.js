// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const postiveNumberSum = (numbers) => {
  let sum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= 0) {
      sum = sum + numbers[i];
    }
  }
  return sum;
};

const array = [-40, 20, 40, -2, 4, -69];

const result = postiveNumberSum(array);

console.log(result);
