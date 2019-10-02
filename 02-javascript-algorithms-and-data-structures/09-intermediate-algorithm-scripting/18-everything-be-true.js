/**
 * Challenge: Everything Be True
 *
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 *
 * In other words, you are given an array collection of objects.
 * The predicate pre will be an object property and you need to return true if its value is truthy.
 * Otherwise, return false.
 *
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
 *
 * Remember, you can access object properties through either dot notation or [] notation.
 **/

/**
 * Using for...in, hasOwnProperty & Boolean
 **/
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let item in collection) {
    // If it is has property and value is truthy
    if (collection[item].hasOwnProperty(pre) && Boolean(collection[item][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

/**
 * Intermediate: Using every, hasOwnProperty, Boolean & arrow
 **/
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });

  // return collection.every(element => element.hasOwnProperty(pre) && Boolean(element[pre])); // one line solution
}

/**
 * Advanced: Using every & arrow
 **/
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }, { user: 'Laa-Laa', sex: 'female' }, { user: 'Po', sex: 'female' }], 'sex'); // true