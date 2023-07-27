// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInt = (s) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentNumeralValue = romanNumerals[s[i]];
    const nextNumeralValue = romanNumerals[s[i + 1]] || 0;

    if (currentNumeralValue < nextNumeralValue) {
      result -= currentNumeralValue;
    } else {
      result += currentNumeralValue;
    }
  }

  return result;
};

console.log(romanToInt("IX"));
