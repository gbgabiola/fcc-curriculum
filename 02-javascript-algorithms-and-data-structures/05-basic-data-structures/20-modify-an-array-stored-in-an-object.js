/**
 * Challenge: The user object contains three keys.
 * The data key contains five keys, one of which contains an array of friends.
 * From this, you can see how flexible objects are as data structures.
 * We've started writing a function addFriend.
 * Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
 */

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete')); // ['Sam', 'Kira', 'Tomo', 'Pete']
