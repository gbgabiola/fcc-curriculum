/*
  Challenge: Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".
*/

let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);