/**
 * Challenge: Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
 */

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6
