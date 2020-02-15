// Setup
var myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  return 'Not Found';

  // Using ternary operator
  // return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : 'Not Found';
}

// Test your code by modifying these values
checkObj('gift');
