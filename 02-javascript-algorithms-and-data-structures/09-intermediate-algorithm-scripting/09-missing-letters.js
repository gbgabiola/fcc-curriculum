/**
 * Challenge: Missing letters]
 * 
 * Find the missing letter in the passed letter range and return it.
 * 
 * If all letters are present in the range, return undefined.
 **/

function fearNotLetter(str) {
  /**
   * Using charCodeAt & String.fromCharCode
   **/
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i); // code of current character
    // if code of current character is not equal to first character + no of iteration hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {
      // if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined

  /**
   * Intermediate: Using split, map, charCodeAt, String.fromCharCode, arrow & ternary
   **/
  let compare = str.charCodeAt(0), missing;
  str.split('').map((letter, index) => {
    return (str.charCodeAt(index) === compare) ? ++compare : missing = String.fromCharCode(compare);
  });
  return missing;

  /**
   * Advanced Simplified: Using charCodeAt & String.fromCharCode
   **/
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }

  /**
   * More Readable Code
   **/
  for (let i = 0; i < str.length; i++) {
    const currChar = str.charCodeAt(i);
    const nextChar = str.charCodeAt(i+1);
    if (nextChar - currChar > 1) { 
      return String.fromCharCode(currChar+1);
    } 
  }


  /**
   * Advanced: Using match, join, charCodeAt, String.fromCharCode, ternary & RegExp
   **/
  let allChars = '';
  const notChars = new RegExp('[^'+str+']', 'g');

  for (let i = 0; allChars[allChars.length-1] !== str[str.length-1]; i++) {
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  }
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

fearNotLetter('abce'); // 'd'
