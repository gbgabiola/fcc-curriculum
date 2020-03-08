/**
 * Challenge: You are given two arrays and an index.
 *
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 *
 * Begin inserting elements at index n of the second array.
 *
 * Return the resulting array.
 * The input arrays should remain the same after the function runs.
 */

// Solution 1: Using `slice()` and `splice()` method (Optional: rest operator)
function frankenSplice(arr1, arr2, n) {
  // Step 1: Create a copy of arr2 to keep the orginal arr2 when slice method applied to the arr2 then assign to a new variable (arr2Copy)
  let arr2Copy = arr2.slice();

  // Step 2: Loop through the arr1, each item should be splice into a arr2Copy using the index (n), then increment the given index (n) after doing splice
  for (let i = 0; i < arr1.length; i++) {
    arr2Copy.splice(n, 0, arr1[i]);
    n++;
  }
  // Step 3: Return the arr2Copy
  return arr2Copy;
}

// Solution 2: Using `slice()` and `splice()` method and Spread operator
function frankenSplice(arr1, arr2, n) {
  // Step 1: Create a copy of arr2 to keep the orginal arr2 when slice method applied to the arr2 then assign to a new variable (arr2Copy), Note: no need to set parameters on slice
  let arr2Copy = arr2.slice(); // or using function rest parameter [...arr2]
  // Step 2: Each item should be splice into a arr2Copy using the index (n)
  arr2Copy.splice(n, 0, ...arr1);
  // Step 3: Return the arr2Copy
  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]
