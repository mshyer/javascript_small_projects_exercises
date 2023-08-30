let arr = [1, 2, 3, 4, 5, 6];
let result = arr.reduce(function(accumulator, element) {
    return accumulator * element;
}, 1);

console.log(result);
result = arr.reduce((accumulator, element) => accumulator * element, 1);
console.log(result);

let letters = ['h', 'e', 'l', 'l', 'o'];
result = letters.reduce((accumulator, element) => { 
    return accumulator + element.toUpperCase()
}, '');
console.log(result);
