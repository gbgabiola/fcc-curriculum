// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // adding == true is optional
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  return "Not Found";

  // Using ternary operator
  // return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found"
}

checkObj("gift");