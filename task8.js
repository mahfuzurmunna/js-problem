// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[1];
};

const numbers = [10, 5, 3, 8, 7];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest);
