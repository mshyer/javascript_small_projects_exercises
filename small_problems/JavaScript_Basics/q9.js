/* initialize an empty string
 * set i to num
 * while i > 0
 * get remainder 10 to get each digit
 * store the digit as a string... 
 *   do this by looking up the index in constant minus one
 * divide i by 10, parsed int
 * */
const DIGITS_STRINGS = [
    [0, '0'],
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6'],
    [7, '7'],
    [8, '8'],
    [9, '9']
]


function integerToString(num) {
    let result = '';
    do {
        let dig = num % 10;
        let digStr = DIGITS_STRINGS[dig][1];
        result += digStr;
        num = Number.parseInt(num / 10);
    } while (num > 0);
    return (result.split('').reverse().join(''));
}

console.log(integerToString(4321));
console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
