function product() {
  let args = Array.prototype.slice.call(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);
