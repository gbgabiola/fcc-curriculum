const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";

  const squaredIntegers = arr.filter((num) => Number.isInteger(num)).filter(num => num > 0).map(num => num * num);
  return squaredIntegers;

  // Alternative 2: using parseInt and Math.pow
  // const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));

  // Alternative 3
  const squaredIntegers = arr.filter((num) => num > 0 && (num % 2 === 0 || num % 2 === 1)).map(num => num * num);
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// Modified the array by removing -2 will pass the challenge
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// const squaredIntegers = arr.filter(num => (num ^ 0)=== num).map(num => num * num);

// Alternative again
// const squaredIntegers = arr.filter(num => (~~num) === num).map(num => num * num);