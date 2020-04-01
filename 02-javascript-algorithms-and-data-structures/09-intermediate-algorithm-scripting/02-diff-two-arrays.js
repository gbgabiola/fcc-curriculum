/**
 * Challenge: Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 */

// Solution 1: Using filter(), includes() and concat() methods
function diffArray(arr1, arr2) {
  // const first = arr1.filter(num => !arr2.includes(num))
  // const second = arr2.filter(num => !arr1.includes(num))
  // return first.concat(second);

  // Usin spread operator
  return [
    ...arr1.filter(num => !arr2.includes(num)),
    ...arr2.filter(num => !arr1.includes(num))
  ]
}

// Solution 2: Using forEach(), indexOf() and push() methods
function diffArray(arr1, arr2) {
  const newArr = [];

  arr1.forEach(num => {
    if (arr2.indexOf(num) < 0) newArr.push(num);
  });

  arr2.forEach(num => {
    if (arr1.indexOf(num) < 0) newArr.push(num);
  });

  return newArr;
}

// Solution 3: Using concat(), filter()and includes() methods
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// Solution 4: Using concat(), filter(), and includes() methods
function diffArray(arr1, arr2) {
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
}

// Solution 5: Using filter(), indexOf() methods and spread operator
function diffArray(arr1, arr2) {
  function diff(a, b) {
    return a.filter(num => b.indexOf(num) === -1);
  }

  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
