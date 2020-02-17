/**
 * Challenge: The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
 * If both are true, then return the "value" of that property.
 * If name does not correspond to any contacts then return "No such contact".
 * If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
 */

//Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    // if (contacts[i].firstName === name) {
    //   if (contacts[i].hasOwnProperty(prop)) {
    //     return contacts[i][prop];
    //   } else {
    //     return "No such property";
    //   }
    // }

    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

// Change these values to test your function
lookUpProfile('Akira', 'likes'); // ["Pizza", "Coding", "Brownie Points"]
