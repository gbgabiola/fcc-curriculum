/*
  Challenge: Return the length of the longest word in the provided sentence.
  Your response should be a number.
*/

function findLongestWordLength(str) {
  // Solution 1: Using split & for loop
  let words = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;


  // Solution 2: Using split, reduce & Math.max
  // return str.split(' ').reduce(function(x, y) {
  //   return Math.max(x, y.length);
  // }, 0);


  // Solution 3: Using split, reduce & ternary
  // str = str.split(' ').reduce((x, y) => {
  //   return (x.length > y.length) ? x : y;
  // });
  // return str.length;


  // Solution 4: Using split & sort
  // str = str.split(' ').sort((x, y) => {
  //   return y.length - x.length;
  // })[0];
  // return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6