function average(arr) {
    return (sum(arr) / arr.length);
}

console.log(average([2, 6.6, 3]));
console.log(average([4, 5, 8]));


function sum(arr) {
    return arr.reduce ((acc, val) => acc + val);
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));
let temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));
