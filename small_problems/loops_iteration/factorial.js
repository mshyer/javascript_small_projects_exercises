function factorio(num) {
    if (num <= 0) {
        return null
    }
    factor = num;
    for (i = (num - 1); i > 0; --i) {
        factor *= i
    }
    return factor
}

console.log(factorio(6));
console.log(factorio(1));     // => 1
console.log(factorio(2));     // => 2
console.log(factorio(3));     // => 6
console.log(factorio(4));     // => 24
console.log(factorio(5));     // => 120
console.log(factorio(6));     // => 720
console.log(factorio(7));     // => 5040
console.log(factorio(8));     // => 40320

function recursiveFactorial(num) {
    if (num === 1) {
        return 1;
    }
    return (num * recursiveFactorial(num - 1));
}

console.log(recursiveFactorial(6));
console.log(recursiveFactorial(1));     // => 1
console.log(recursiveFactorial(2));     // => 2
console.log(recursiveFactorial(3));     // => 6
console.log(recursiveFactorial(4));     // => 24
console.log(recursiveFactorial(5));     // => 120
console.log(recursiveFactorial(6));     // => 720
console.log(recursiveFactorial(7));     // => 5040
console.log(recursiveFactorial(8));     // => 40320

