function stringObjFrom(first, second, third, fourth, last) {
  return {
    first,
    last,
    middle: [second, third, fourth].sort(),
  };
}

console.log(stringObjFrom('a', 'blind', 'sat', 'cat', 'fat'));


let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];

console.log(stringObjFrom(...arr));
