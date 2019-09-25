/**
 * Challenge: Convert HTML Entities
 *
 * Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.
 **/

function convertHTML(str) {
  /**
   * Using for loop, switch, split & join
   **/
  let temp = str.split(''); // split by char
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '&':
        temp[i] = '&amp;';
        break;
      case '<':
        temp[i] = '&lt;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }
  return temp.join('');

  /**
   * Intermediate: Using replace & RegExp
   **/
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  /**
   * Advanced: Using Object, split, join, map & arrow
   **/
  // Use Object Lookup to declare HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.split('').map(entity => htmlEntities[entity] || entity).join(''); // Use map to return a filtered str with all entities changed automatically

  /**
   * Advanced: Using for...in, replace & RegExp
   **/
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  for (let key in htmlEntities) {
    str = str.replace(RegExp(key, 'g'),htmlEntities[key])
  }
  return str;
}

convertHTML('Dolce & Gabbana'); // 'Dolce &amp; Gabbana'