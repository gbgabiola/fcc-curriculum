/**
 * Challenge: Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 *
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

// Solution 1: Using for loop, Math.max() and Math.min() methods
function sumAll(arr) {
  let sum = 0;

  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Solution 2: Using for loop, spread operator, Math.max() and Math.min() methods
function sumAll(arr) {
  let sum = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

// Solution 3: Using Arithmetic Progression summing formula and sort() method
function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const firstNum = arr[0];
  const lastNum = arr[1];

  // Using Arithmetic Progression summing formula
  return ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2;
}

sumAll([1, 4]); // 10
