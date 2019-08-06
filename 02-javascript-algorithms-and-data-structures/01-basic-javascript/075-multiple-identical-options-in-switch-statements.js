function sequentialSizes(val) {
  var answer = '';
  // Only change code below this line
  switch(val) {
    // case 1:
    // case 2:
    // case 3:
    case 1: case 2: case 3:
      answer = 'Low';
      break;
    // case 4:
    // case 5:
    // case 6:
    case 4: case 5: case 6:
      answer = 'Mid';
      break;
    // case 7:
    // case 8:
    // case 9:
    case 7: case 8: case 9:
      answer = 'High';
  }  
  return answer;  
}

sequentialSizes(1);











switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}

sequentialSizes(1); // "Low"
