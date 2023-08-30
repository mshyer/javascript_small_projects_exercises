let isXor = function(a, b) {
//  if ((a && b) || (!a && !b)) {
//    return false;
//  }
//  return true;
  return (!!a !== !!b);
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false
 

console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
