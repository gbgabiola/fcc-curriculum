/**
 * Challenge: Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 **/

function diffArray(arr1, arr2) {
  /**
   * Basic Solution (Imperative Solution): Using for loop, indexOf & push
   **/
  const newArr = [];
  function onlyInFirst(first, second) {
    // Loop through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;

  /**
   * Intermediate Solution (Declarative): Using concat, filter, includes & arrow
   **/
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));

  /**
   * Advanced Solution (Declarative): Using concat, filter, includes, & arrow
   **/
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));

  /**
   * Advanced Solution (Declarative): Using filter, indexOf, arrow & spread operator
   **/
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
