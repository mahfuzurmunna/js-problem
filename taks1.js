// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

const reverseString = (string) => {
  let char = "";
  for (let i = string.length - 1; i >= 0; i--) {
    char = char + string[i];
  }
  return char;
};

const example = reverseString("Hello world");

console.log(example);
