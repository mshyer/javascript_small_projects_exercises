function runningTotal(numArr) {
  let runningTotals = [];
  let sum = 0;

  //for (let idx = 0; idx < numArr.length; idx += 1) {
  //  sum += numArr[idx];
  //  runningTotals.push(sum);
  //}
  runningTotals = numArr.map(function(element) {
    sum += element;
    return sum;
  });

  return runningTotals;
}



console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
