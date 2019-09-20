/**
 * Challenge: Pig Latin
 *
 * Translate the provided string to pig latin. http://en.wikipedia.org/wiki/Pig_Latin
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.
 **/

function translatePigLatin(str) {
  /**
   * Using indexOf, substr, match & RegExp
   **/
  let pigLatin = '';
  const regex = /[aeiou]/gi;

  // Check if first char is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
    // Check if string contains only consonants
  } else if (str.match(regex) === null) {
    pigLatin = str + 'ay';
  } else {
    // Find how many consonants before the first vowel
    const vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char, then add the consonants that were previously omitted and add the ending
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}

translatePigLatin('consonant'); // "onsonantcay"
