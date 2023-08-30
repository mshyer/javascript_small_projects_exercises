function multisum(num) {
  let sum = 0;
  for (let idx = 1; idx <= num; idx += 1) {
    if (idx % 3 === 0 || idx % 5 === 0) {
      sum += idx;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
