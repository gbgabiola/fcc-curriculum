/*
  Challenge: Repeat a given string str (first argument) for num times (second argument).
  Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // return (num > 0) ? str.repeat(num) : ''; // Using built-in repeat & ternary
  let result = '';

  for (let i = 1; i <= num; i++) {
    result += str;
  }

  // Solution 2: Using while
  // while (num > 0) {
  //   result += str;
  //   num--;
  // }

  return result;

  // Solution 3: Using conditional, recursion & ternary
  // return (num < 0) ? '' : (num === 1) ? str : str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3); // "abcabcabc"