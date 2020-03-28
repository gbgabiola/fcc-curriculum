/**
 * Challenge: Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push.
 * The function should return an array.
 */

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second); // [1, 2, 3, 4, 5]
