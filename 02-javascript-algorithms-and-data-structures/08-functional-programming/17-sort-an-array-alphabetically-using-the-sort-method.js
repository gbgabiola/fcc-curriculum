/**
 * Challenge: Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
 */

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']); // ['a', 'a', 'c', 'd', 'g', 'z']
