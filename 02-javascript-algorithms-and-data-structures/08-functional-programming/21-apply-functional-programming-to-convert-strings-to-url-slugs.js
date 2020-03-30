/**
 * Challenge: Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
 * You can use any of the methods covered in this section, and don't use replace.
 * Here are the requirements:
 *
 * The input is a string with spaces and title - cased words
 *
 * The output is a string with the spaces between words replaced by a hyphen(-)
 *
 * The output should be all lower - cased letters
 *
 * The output should not have any spaces
 */

// The global variable
const globalTitle = 'Winter Is Coming';

function urlSlug(title) {
  // Using split(), join(), toLowerCase(), filter() & arrow function
  return title
    .split(/\W/)
    .filter(item => item !== '')
    .join('-')
    .toLowerCase();

  // Using split(), join(), toLowerCase() & trim()
  // return title
  //   .trim()
  //   .split(/\s+/)
  //   .join('-')
  //   .toLowerCase();
}

urlSlug(globalTitle); // winter-is-coming
