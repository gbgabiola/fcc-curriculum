/**
 * Challenge: Binary Agents
 *
 * Return an English translated sentence of the passed binary string.
 *
 * The binary string will be space separated.
 **/

/**
 * Using for, split, push, fromCharCode, parseInt & join
 **/
function binaryAgent(str) {
  const biString = str.split(' ');
  const uniString = [];

  /* using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char */
  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join(''); // join the string
}

/**
 * Intermediate: Using for, split, Math.pow & fromCharCode
 **/
function binaryAgent(str) {
  str = str.split(' '); // Separate the binary code by space.
  let power;
  let decValue = 0;
  let sentence = '';

  // Check each binary number from the array.
  for (let i = 0; i < str.length; i++) {
    // Check each bit from binary number
    for (let j = 0; j < str[i].length; j++) {
      // This only takes into consideration the active ones.
      if (str[i][j] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[i].length - j - 1);
        decValue += power;
        // Record the decimal value by adding the number to the previous one.
      }
    }
    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);
    // Reset decimal value for next binary number.
    decValue = 0;
  }
  return sentence;
}

/**
 * Advanced: Using fromCharCode, split, map, parseInt & arrow
 **/
function binaryAgent(str) {
  // return String.fromCharCode(...str.split(' ').map(function(char) {
  //   return parseInt(char, 2);
  // }));
  return String.fromCharCode(...str.split(' ').map(char => parseInt(char, 2)));
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'); // "Aren't bonfires fun!?"
