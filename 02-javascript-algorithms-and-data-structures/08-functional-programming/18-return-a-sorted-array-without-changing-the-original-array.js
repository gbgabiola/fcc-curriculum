/**
 * Challenge: Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
 * The function should return a new array, and not mutate the globalArray variable.
 */

// Using concat() or slice()
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // return [].concat(arr).sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
  // return [].concat(arr).sort((a, b) => a - b);
  return arr.concat().sort();
}

nonMutatingSort(globalArray); // [2, 3, 5, 6, 9]
