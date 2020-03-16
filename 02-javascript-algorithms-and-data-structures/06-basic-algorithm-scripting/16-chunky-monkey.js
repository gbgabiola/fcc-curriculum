/**
 * Challenge: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

// Solution 1: Using while loop, push() and splice() methods
function chunkArrayInGroups(arr, size) {
  // Step 1: Create a new empty array
  const newArr = [];

  // Step 2: Use while until the array is greater than 0, here we can remove the (arr.length > 0)
  while (arr.length) {
    // Step 3: Each iteration it deletes size number of elements from the front of arr and push them as an arr at the end of newArr
    newArr.push(arr.splice(0, size));
  }
  // Step 4: Return the value of newArr
  return newArr;
}

// Solution 2: Using for loop, push() and slice() methods
function chunkArrayInGroups(arr, size) {
  // Step 1: Create a new empty array
  const newArr = [];

  // Step 2: Use loop, increments each time by size and stops when reach length of arr
  for (let i = 0; i < arr.length; i += size) {
    // Step 3: Create each chunk using slice and push this value to newArr
    newArr.push(arr.slice(i, i + size));
  }
  // Step 4: Return the value of newArr
  return newArr;
}

// Solution 3: Using while loop, push() and slice() methods
function chunkArrayInGroups(arr, size) {
  // Step 1: Create a new empty array and variable i set to 0 for the while loop
  const newArr = [];
  let i = 0;

  // Step 2: Use loop to until i greater than the length
  while (i < arr.length) {
    // Step 3: Push the sliced items to the newArr then add the size on i (i += size)
    newArr.push(arr.slice(i, (i += size)));
  }
  // Step 4: Return the value of newArr
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
