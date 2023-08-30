function firstNOf(arr, count) {
//  let outputArr = [];
//  for (let idx = 0; idx < count; idx += 1) {
//    outputArr.push(arr[idx]);
//  }
//
  return arr.slice(0, count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));
