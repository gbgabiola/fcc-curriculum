/**
 * Challenge: Change the regex userCheck to fit the constraints listed above.
 */

let username = 'JackOfAllTrades';
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // or /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i
let result = userCheck.test(username); // true
