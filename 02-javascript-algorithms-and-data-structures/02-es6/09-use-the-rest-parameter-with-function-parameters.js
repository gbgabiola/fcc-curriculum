/**
 * Challenge: Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
 */

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3)); // 6
