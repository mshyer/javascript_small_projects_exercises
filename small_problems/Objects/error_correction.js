function foo(bar) {
  console.log(bar, bar, bar);
}
bar = foo;
foo("hello"); // prints "hello hello hello"
bar("hi");    // prints "bar bar bar"
