// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const frequentNumbers = (numbers) => {
  let mostFrequentNumber = numbers[0];
  let highestFrequency = 1;
  const frequencyMap = {};

  for (const num of numbers) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > highestFrequency) {
      highestFrequency = frequencyMap[num];
      mostFrequentNumber = num;
    }
  }

  return mostFrequentNumber;
};

const array = [3, 5, 2, 5, 3, 3, 1, 4];
const result = frequentNumbers(array);
console.log("Most frequent number:", result);
