const negative = function(num) {
  return Math.sign(num) === -1 ? num : -num;
  //return Math.abs(num) * -1;
//  switch(Math.sign(num)) {
//    case -1:
//      return num;
//    default:
//      return -num;
//  }
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
