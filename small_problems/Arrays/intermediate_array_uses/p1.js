const oddElementsOf = function(arr) {
  let odds = [];
  for (let idx = 1; idx < arr.length; idx+= 2) {
    odds.push(arr[idx]);
  }
  return odds;
}
let digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits));
