/**
 * Challenge: DNA Pairing
 *
 * The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as a 2d array.
 *
 * Base pairs (http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG.
 * Match the missing element to the provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for the input GCG, return [['G', 'C'], ['C','G'],['G', 'C']]
 *
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 **/

function pairElement(str) {

  const paired = []; // Return each strand as an array of two elements, the original and the pair.

  // Function to check with strand to pair.
  const search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };
  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}

pairElement('GCG'); // [['G', 'C'], ['C', 'G'], ['G', 'C']]

// Intermediate: Using Property accessors, split, map, and arrow functions
function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }

  const arr = str.split(''); // split string into array of characters
  return arr.map(item => [item, pairs[item]]); //map character to array of character and matching pair
}

// Solution 3
function pairElement(str) {
  let dna = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') { dna[i] = ['A', 'T']; }
    if (str[i] === 'T') { dna[i] = ['T', 'A']; }
    if (str[i] === 'G') { dna[i] = ['G', 'C']; }
    if (str[i] === 'C') { dna[i] = ['C', 'G']; }
  }
  return dna;
}

// Solution 4
function pairElement(str) {
  const emptyArray = [];
  const a = ['A', 'T'];
  const c = ['C', 'G'];
  const g = ['G', 'C'];
  const t = ['T', 'A'];
  const splitArray = str.split('');

  for (let i = 0; i < splitArray.length; i++) {
    if(splitArray[i] == 'A' ) {
      emptyArray.push(a)
    }
    else if (splitArray[i] == 'C') {
      emptyArray.push(c)

    }
    else if (splitArray[i] == 'G') {
      emptyArray.push(g)
    }
    else if (splitArray[i] == 'T') {
      emptyArray.push(t)
    }
  }
  return emptyArray
}
