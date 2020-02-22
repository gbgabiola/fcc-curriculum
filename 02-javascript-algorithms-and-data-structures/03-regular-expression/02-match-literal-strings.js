/**
 * Challenge: Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
 */

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding); // true
