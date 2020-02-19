/**
 * Challenge: Replace the two assignments with an equivalent destructuring assignment.
 * It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
 */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(yesterday); // ReferenceError: yesterday is not defined
console.log(today); // 77
console.log(tomorrow); // 80
