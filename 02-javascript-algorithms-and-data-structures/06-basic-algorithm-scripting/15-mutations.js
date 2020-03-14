/**
 * Challenge: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 *
 * For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 *
 * The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
 *
 * Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
 */

// Solution 1: Using indexOf() method
// Procedural
function mutation(arr) {
  // Step 1: Convert the strings into lowercase
  const word1 = arr[0].toLowerCase();
  const word2 = arr[1].toLowerCase();

  // Step 2: Loop through chars and if any of them is not found, return false, otherwise false
  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) < 0) return false;
  }
  return true;
}

// Solution 2: Using split(), every(), and indexOf() methods
// Declarative
function mutation(arr) {
  return (
    // Step 1: Grab the second string and make it lowercase and turn it into an array using split
    arr[1]
      .toLowerCase()
      .split('')
      // Step 2: Use every method to check each letter and compare using indexOf
      // Step 3: If current char is not found it will return -1, compare it -1 so it will return false
      .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1)
  );
}

mutation(['hello', 'hey']); // false
