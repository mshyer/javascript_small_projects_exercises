const gcd = function(n1, n2) {
  if (n2 > n1) {
    [n1, n2] = [n2, n1];
  }
  let remainder = n1 % n2;
  if (remainder === 0) {
    return n2;
  } 
  return (gcd(n2, remainder));
}
//
//console.log(gcd(28, 12));
//console.log(gcd(12, 4));
//console.log(gcd(15, 10));
//console.log(gcd(9, 2));
//
//console.log(gcd(10, 15));

const gcdMany = function(arr) {
  return(arr.reduce(function(a, n) {
    return(gcd(a, n));
  }));
}

console.log(gcdMany([25, 125, 1000]));
