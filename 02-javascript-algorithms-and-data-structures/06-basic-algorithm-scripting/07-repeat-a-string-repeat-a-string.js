/**
 * Challenge: Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 */


// Solution 1: Using while loop
function repeatStringNumTimes(str, num) {
  // Step 1: Create an empty str to store the repeated str
  let repeatedStr = '';

  // Step 2: Set while as long as num is greater than 0
  while (num > 0) {
    repeatedStr += str;
    num--; // decrement num
  }
  // Step 3: Return the repeatedStr
  return repeatedStr;
}

// Solution 2: Using for loop
function repeatStringNumTimes(str, num) {
  // Step 1: Create an empty str to store the repeated str
  let repeatedStr = '';

  // Step 2: Use for loop as long as i less than or equal to num, then add str
  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }
  // Step 3: Return the repeatedStr
  return repeatedStr;
}

// Solution 3: Using Recursion
function repeatStringNumTimes(str, num) {
  // Step 1: Check if num is greater than 0
  // Step 2: If true, use recursion
  // Step 3: Else (means num <= 0), then return empty string
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes('abc', 3); // abcabcabc
