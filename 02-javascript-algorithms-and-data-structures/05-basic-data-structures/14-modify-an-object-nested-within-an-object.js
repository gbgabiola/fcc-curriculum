/*
  Challenge: Here we've defined an object, userActivity, which includes another object nested within it.
  You can modify properties on this nested object in the same way you modified properties in the last challenge.
  Set the value of the online key to 45.
*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45; // Dot Notation

// userActivity['data']['online'] = 45; // Bracket Notation

console.log(userActivity);