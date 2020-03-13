/**
 * Challenge: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

// Solution 1: Using for loop and sort() method
function getIndexToIns(arr, num) {
  // Step 1: Sort the array from lowest to higher, from left to right
  arr.sort((a, b) => a - b);

  // Step 2: Use loop to compare each item in the array
  for (let i = 0; i < arr.length; i++) {
    // Step 3: If item is greater than the current number, return the index
    if (arr[i] >= num) return i;
  }
  // Step 4: Return the array length
  return arr.length;
}

// Solution 2: Using while loop and sort() method
function getIndexToIns(arr, num) {
  // Step 1: Sort the array from lowest to higher, from left to right
  arr.sort((a, b) => a - b);

  // Step 2: Use loop to iterate throught array and check if num is bigger
  let i = 0;
  while (num > arr[i]) {
    // Step 3: Increment the i
    i++;
  }
  // Step 4: Return the last element
  return i;
}

// Solution 3: Using for loop with counter
function getIndexToIns(arr, num) {
  // Step 1: Create a count
  let count = 0;

  // Step 2: Use loop to compare each item in the array
  for (let i = 0; i < arr.length; i++) {
    // Step 3: If item is greater than the current number, increment the count
    if (num > arr[i]) count++;
  }
  // Step 4: Return the count (numbers of arrays smaller than num)
  return count;
}

// Step 4: Using push(), sort(), indexOf() methods
function getIndexToIns(arr, num) {
  // Step 1: Push the num to the array which adds it to the end of the array
  arr.push(num);
  // Step 2: Sort the
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);

  // return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50); // 1
