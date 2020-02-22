/**
 * Challenge: Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.
 *
 * Note: You can have multiple flags on your regex like /search/gi
 */

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); // ["Twinkle", "twinkle"]
