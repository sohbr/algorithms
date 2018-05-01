// There are an infinite number of train stops starting from station number 0.
//
// There are an infinite number of trains. The nth train stops at all of the k * 2^(n - 1) stops where k is between 0 and infinity.
//
// When n = 1, the first train stops at stops 0, 1, 2, 3, 4, 5, 6, etc.
//
// When n = 2, the second train stops at stops 0, 2, 4, 6, 8, etc.
//
// When n = 3, the third train stops at stops 0, 4, 8, 12, etc.
//
// Given a start station number and end station number, return the minimum number of stops between them. You can use any of the trains to get from one stop to another stop.
//
// For example, the minimum number of stops between start = 1 and end = 4 is 3 because we can get from 1 to 2 to 4.

function minStops(start, end) {
  let numStops = 1;
  let position = start;

  //change position to an even number
  if (position % 2 === 1) {
    position++;
    numStops++;
  }

  //jump the furthest possible from current position without going over
  let jump;
  while (position < end) {
    jump = maxJumpFromCurrent(position);
    position += jump;
    numStops++;
  }

  if (position === end) return numStops;
  position -= jump;
  numStops--;
  jump /= 2;

  //continue to jump at half the distance until end is reached
  while (position !== end) {
    let temp = position + jump;
    while (temp > end) {
      jump /= 2;
      temp = position + jump;
    }
    position = temp;
    numStops++;
  }

  return numStops;
}

function maxJumpFromCurrent(position) {
  let n = 1
  while (position % (2**n) === 0) {
    n++;
  }
  return 2**n;
}

console.log(minStops(3,23) === 7);
console.log(minStops(1,4) === 3);
console.log(minStops(3,7) === 4);
console.log(minStops(3,8) === 3);
