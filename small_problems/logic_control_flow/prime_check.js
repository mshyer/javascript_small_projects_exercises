const isPrime = function checkPrime(num) {
  max_mult = Math.floor(Math.sqrt(num));
  if (num === 0 || num === 1) {
    return false
  }
  for (let i = 2; i <= max_mult; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//console.log(isPrime(13));


console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));
