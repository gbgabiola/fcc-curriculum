function testLessThan(val) {
  if (val < 25) {
    return 'Under 25';
  }

  if (val < 55) {
    return 'Under 55';
  }

  return '55 or Over';
}

// Change this value to test
testLessThan(10);
