// if the length of the string is even, get the middle two points
//   this is equal to half-1 to half
// if the length of the string is odd, get the middle point
//   this is half - 1
function centerOf(string) {
  const LENGTH  = string.length;
  const MIDPOINT = Math.floor((string.length / 2));
  if (LENGTH % 2 !== 0) {
    return string[MIDPOINT];
  } else {
    return string.slice(MIDPOINT - 1, (MIDPOINT + 1));
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

