let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
    return (arr.filter(element => Number.isInteger(element)));
}

console.log(findIntegers(things));
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
result = arr.map(function(str) {
    return str.length
}).filter(num => ((num % 2) !== 0));
console.log(result);
