var count = 0;

function cc(card) {
  // Using if statement
  if (card >= 2 && card <= 6) count++;
  if (card === 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') count--;


  // Using switch case statement
  /* switch(card) {
    case 2: case 3: case 4: case 5: case 6:
      count++;
      break;
    case 10: case 'J': case 'Q': case 'K': case 'A':
      count--;
      break;
  } */


  // Using RegEx
  /* var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;} */

  return count > 0 ? count + ' Bet' : count + ' Hold';
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
