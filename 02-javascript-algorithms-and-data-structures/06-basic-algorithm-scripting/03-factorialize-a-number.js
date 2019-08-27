/*
  Challenge: Return the factorial of the provided integer.
  If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
  Factorials are often represented with the shorthand notation n!
  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
  Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
  // let count = 1;
  // let i = 1;
  // while (i <= num) {
  //   count *= i;
  //   i++;
  // }
  // return count;

  if (num === 0) return 1;
  return num * factorialize(num - 1)
}

factorialize(5); // 120