/**
 * Challenge: Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 *
 * The lowest number will not always come first.
 **/

function sumAll(arr) {
  /**
   * Using for loop, max & min
   **/
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let temp = 0;

  for (let i = min; i <= max; i++) {
    temp += i;
  }
  return temp;

  /**
   * Intermediate Solution: Using Arithmetic Progression summing formula, sort & arrow
   **/

  const sortedArr = arr.sort((a, b) => a - b);
  const firstNum = arr[0];
  const lastNum = arr[1];

  // Using Arithmetic Progression summing formula
  const sum = ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2;

  /**
   * Advanced Solution: Using max, min and Spread Operator
   **/
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]); // 10
