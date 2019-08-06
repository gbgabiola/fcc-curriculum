var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
function golfScore(par, strokes) {
  if (strokes === 1) {
    // return 'Hole-in-one!';
    return names[0];
  } else if (strokes <= par - 2) {
    // return 'Eagle';
    return names[1];
  } else if (strokes === par - 1) {
    // return 'Birdie';
    return names[2];
  } else if (strokes === par) {
    // return 'Par';
    return names[3];
  } else if (strokes === par + 1) {
    // return 'Bogey';
    return names[4];
  } else if (strokes === par + 2) {
    // return 'Double Bogey';
    return names[5];
  } else {
    // return 'Go Home!';
    return names[6];
  }
}

golfScore(5, 4);