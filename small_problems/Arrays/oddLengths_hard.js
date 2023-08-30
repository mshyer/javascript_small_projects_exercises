let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengthsReduction(arr) {
    return(arr.reduce(function(accumulator, string) {
        if (string.length % 2 !== 0) {
            accumulator.push(string.length)
            return accumulator; 
        } 
        return accumulator; 
    }, [])
  )};
   
    



console.log(oddLengthsReduction(arr));
