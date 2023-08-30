let array = [3, 5, 7];
let result = array.reduce(function(accumulator, num) {
    return (accumulator += (num * num))
})

console.log(result);
