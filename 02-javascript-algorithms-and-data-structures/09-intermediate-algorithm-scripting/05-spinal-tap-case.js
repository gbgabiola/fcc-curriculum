/**
 * Challenge: Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 **/

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  /**
   * Using replace, toLowerCase & RegExp
   **/
  // Create a variable for the white space and underscores.
  const regex = /\s+|_+/g;
  // Replace space & underscore with dash
  return str.replace(regex, '-').toLowerCase();

  /**
   * Intermediate: Using toLowerCase, split, join & RegExp
   **/
  // Split on space & underscore and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join('-');


  /**
   * Advanced: Using split, join, toLowerCase & RegExp
   **/
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap'); // 'this-is-spinal-tap'
