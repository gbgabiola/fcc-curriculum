/**
 * Challenge: Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
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

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users)); // ['Alan', 'Jeff', 'Sarah', 'Ryan']
