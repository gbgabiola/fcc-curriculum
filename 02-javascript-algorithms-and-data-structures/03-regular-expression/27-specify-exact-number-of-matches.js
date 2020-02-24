/**
 * Challenge: Change the regex timRegex to match the word "Timber" only when it has four letter m's.
 */

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/; // /tim{4}ber/i
let result = timRegex.test(timStr); // true
