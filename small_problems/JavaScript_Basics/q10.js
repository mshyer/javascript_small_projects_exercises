DIGITS_STRINGS = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9'];

function integerToString(num) {
    let result = '';
    do {
        let dig = num % 10;
        let digStr = DIGITS_STRINGS[dig];
        result += digStr;
        num = Math.floor(num / 10);
    } while (num > 0);
    return (result.split('').reverse().join(''));
}

//console.log(integerToString(456));

function signedIntegerToString(num) {
    let sign = Math.sign(num);
    if (sign === -1) {
        sign = '-';
    } else if (sign === 1) {
        sign = '+'
    } else {
        sign = ''
    }
    return `${sign}${integerToString(Math.abs(num))}`;
}


console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(-0));
