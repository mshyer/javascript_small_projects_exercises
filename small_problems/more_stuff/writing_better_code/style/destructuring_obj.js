let someObj = {
  foo: 'foo',
  bar: 'bar',
  qux: 'qux',
};

let { foo, bar, qux } = someObj;

({ foo, bar, qux } = someObj);

console.log(foo);
console.log(bar);
console.log(qux);
