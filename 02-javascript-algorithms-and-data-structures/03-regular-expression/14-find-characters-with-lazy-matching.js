/**
 * Challenge: Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
 * Remember the wildcard . in a regular expression matches any character.
 */

let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*?>/;
let result = text.match(myRegex); // ['<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined]
