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

function checkGoldbach (expectedSum) {
  if (expectedSum < 4 || isPrime(expectedSum)) {
    console.log(null);
  }
  let half = Math.floor(expectedSum / 2);
  for (let i = 1; i <= half; i++) {
    let contender = expectedSum - i;
    if (isPrime(contender) && isPrime(i)) {
      console.log(String([i, contender]));    
    }
  }
}

checkGoldbach(3);

checkGoldbach(100);

