function testElse(val) {
  var result = '';

  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }

  return result;
}

// Change this value to test
testElse(4);
