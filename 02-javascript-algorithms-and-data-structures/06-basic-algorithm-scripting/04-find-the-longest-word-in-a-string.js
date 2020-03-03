/**
 * Challenge: Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 */

function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Initiate a variable to hold the length of the longest word
  let longestWord = 0;
  // Step 3: Create for loop
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWord) {
      longestWord = splitStr[i].length; // longestWord takes this new value
    }
  }
  // Step 4: Return the longestWord
  return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6


// Using sort() method
function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Sort the elements in the array
  const longestWord = splitStr.sort((a, b) => b.length - a.length);

  // Step 3: Return the length of the first element of the array
  return longestWord[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6


// Using reduce() method
function findLongestWordLength(str) {
  // Step 1: Split str into an array of strings
  const splitStr = str.split(' ');

  // Step 2: Use reduce method
  const longestWord = splitStr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');

  // Step 3: Return the length of the longestWord
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
