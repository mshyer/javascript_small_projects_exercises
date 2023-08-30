let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(upperKeys);
console.log(Object.keys(obj));
