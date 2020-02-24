/**
 * Challenge: Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
 */

let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum); //true
