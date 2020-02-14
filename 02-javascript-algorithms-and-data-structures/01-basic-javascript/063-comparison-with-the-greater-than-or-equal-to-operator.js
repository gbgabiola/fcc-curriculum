function testGreaterOrEqual(val) {
  if (val >= 20) {
    return '20 or Over';
  }

  if (val >= 10) {
    return '10 or Over';
  }

  return 'Less than 10';
}

// Change this value to test
testGreaterOrEqual(10);
