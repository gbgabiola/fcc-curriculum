/*
  Challenge: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  
  For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  
  The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
  
  Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  // Procedural
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) // or < 0
      return false;
  }
  return true;


  // Solution 2: Declarative
  // return arr[1].toLowerCase()
  //   .split('')
  //   .every((letter) => arr[0].toLowerCase()
  //   .indexOf(letter) != -1);
}

console.log(mutation(["hello", "hey"])); // false