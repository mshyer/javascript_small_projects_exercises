function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let result = foo(1, 2, 3);
let bar = result.bar;
let baz = result.baz;
let qux = result.qux;

console.log(...[bar, baz, qux]);
