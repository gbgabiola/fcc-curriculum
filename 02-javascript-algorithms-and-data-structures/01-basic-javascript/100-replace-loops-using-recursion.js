/** Challenge: Replace Loops using Recursion
 *
 * Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.
 */

function sum(arr, n) {
  // if (n <= 0) {
  //   return arr[0];
  // } else {
  //   return sum(arr, n - 1) + arr[n];
  // }

  // Using ternary operator
  return n <= 0 ? arr[0] : sum(arr, n - 1) + arr[n];
}
