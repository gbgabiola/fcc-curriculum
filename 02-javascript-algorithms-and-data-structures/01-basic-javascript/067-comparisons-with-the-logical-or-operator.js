function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return 'Outside';
  }
  return 'Inside';
}

// Change this value to test
testLogicalOr(15);
