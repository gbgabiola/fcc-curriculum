/**
 * Challenge: Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 */

// Using slice() method
function truncateString(str, num) {
  // Step 1: Check if str.length is less than or equal to num, if true return str (don't truncate)
  if (str.length <= num) {
    return str
  }

  // Step 2: Return str truncated with '...' concatenated to the end of str
  return str.slice(0, num) + '...'
}

// Using slice method and ternary

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str; // Using slice & ternary

  // return str.length > num ? str.substr(0, num) + '...' : str; // Using substr or substring & ternary
}
