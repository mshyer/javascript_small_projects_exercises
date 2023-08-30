let str = "4321";

/* the function will set a variable to the string length
 * it will then strip the leftmost digit
 * multiply the leftmost digit by the 10^(length - 1)
 * add this value to an aggregator
 * subtract one from the tens
 * repeat */
function stringToInteger(nStr) {
    let scale = nStr.length
    result = nStr.split('').reduce( function(agg, dig) {
        scale -= 1;
        return(agg + ((10**scale) * dig));
    }, 0)
    return result;
}
console.log(stringToInteger(str));
console.log(stringToInteger('1234556'));
