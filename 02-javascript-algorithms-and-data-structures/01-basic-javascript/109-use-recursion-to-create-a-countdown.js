/**
 * Challenge: Use Recursion to Create a Countdown
 *
 * The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
 * If the function is called with a number less than 1, the function should return an empty array.
 * For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
 * Your function must use recursion by calling itself and must not use loops of any kind.
 */

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    // arr.splice(0, 0, n);
    return arr;

    // return n < 1 ? [] : [n, ...countdown(n - 1)];
    // return n < 1 ? [] : [n].concat(countdown(n - 1));
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
