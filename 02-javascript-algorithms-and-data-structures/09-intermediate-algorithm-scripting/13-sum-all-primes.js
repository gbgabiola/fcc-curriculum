/**
 * Challenge: Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as a number greater than one and having only two divisors, one and itself.
 * For example, 2 is a prime number because it's only divisible by one and two.
 *
 * The provided number may not be a prime.
 **/

/**
 * Using for loop and push
 **/
function sumPrimes(num) {
  let res = 0;

  // Get the primes up to max in an array
  function getPrimes(max) {
    const sieve = [];
    const primes = [];
    for (let i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (let j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  // Add the primes
  const primes = getPrimes(num);
  for (let k = 0; k < primes.length; k++) {
    res += primes[k];
  }
  return res;
}

/**
 * Intermediate: Using for loop and function recursion
 **/
function sumPrimes(num) {
  // Check if num presented is prime
  function isPrime(number) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        // Return true if it is divisible by any num that is not itself.
        return false;
      }
    }
    // If it passes the condition it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls
  if (num === 1) {
    return 0;
  }
  // Check if num is not prime
  if (isPrime(num) === false) {
    // For non primes check the next num down from your maximum num, do not add anything to your answer
    return sumPrimes(num - 1);
  }
  // Check if num is prime
  if (isPrime(num) === true) {
    // for primes add that num to the next num in the sequence through a recursive call to our sumPrimes function
    return num + sumPrimes(num - 1);
  }
}

/**
 * Advanced: Using while loop, Array.from, slice, filter, Math.sqrt & arrow
 **/
function sumPrimes(num) {
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);

  let onlyPrimes = arr.filter(n => {
    let i = n - 1;
    while (i > 1 && i >= Math.sqrt(n)) {
      if (n % i === 0) return false;
      i--;
    }
    return true;
  });
  return onlyPrimes.reduce((a, b) => a + b);
}

sumPrimes(10); // 17
