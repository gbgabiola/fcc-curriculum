/**
 * Challenge: Remove all falsy values from an array.
 *
 * Falsy values in JavaScript are false, null, 0, '', undefined, and NaN.
 *
 * Hint: Try converting each value to a Boolean.
 */

// Solution 1: Using`for` loop
function bouncer(arr) {
  // Step 1: Create an empty array
  let newArr = [];

  // Step 2: Use for loop iterate over the given array
  for (let i = 0; i < arr.length; i++) // or (let item of arr)
  // Step 3: Check if current element truthy or falsy, if element is truthy push it to the new array
  if (arr[i]) newArr.push(arr[i]) // or (item) newArr.push(item)
  // Step 4: Return the new array
  return newArr;
}

// Solution 2: Using`filter()` method
function bouncer(arr) {
  // filter method expects a function that returns a Boolean value which takes a single argument and returns true/false
  return arr.filter(Boolean);

  // return arr.filter(arr => Boolean(arr));
  // return arr.filter(item => item);
}

bouncer([7, 'ate', '', false, 9]); // [7, 'ate', 9]
