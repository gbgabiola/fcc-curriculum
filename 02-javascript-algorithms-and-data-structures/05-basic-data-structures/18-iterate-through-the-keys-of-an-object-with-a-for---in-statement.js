/*
  Challenge: We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.
*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let result = 0;
  for (let user in obj) {
    // console.log(user);
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users));