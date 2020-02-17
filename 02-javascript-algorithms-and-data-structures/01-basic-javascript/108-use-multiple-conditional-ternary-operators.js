/**
 * Challenge: Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
 * The function should return "positive", "negative" or "zero".
 */

function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10); // positive
