/**
 * Challenge: Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
 * If no element passes the test, return undefined.
 */

// Solution 1: Using for loop
function findElement(arr, func) {
  let num;

  for(let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) return num;
  }
}

// Solution 2: Using find() method
function findElement(arr, func) {
  // find() will stop the loop once the value is found
  return arr.find(func);
}

// Solution 3: Using filter() method
function findElement(arr, func) {
  // Gets the first elem from arr returned by filter() (targetting index[0])
  let [a] = arr.filter(num => func(num));
  return a;
}

// Solution 4: Using map() and indexOf() method
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
