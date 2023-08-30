function isInteger(num) {
   result = Number.isInteger(num);
   switch (result) {
       case true:
         console.log("even");
         break;
       case false:
         console.log("odd");
         break;
       default:
         console.log("uh oh something went wrong");
         break;
   }
}

//isInteger(3);
//isInteger('haha');

function evenOrOdd(num) {
    if (!(Number.isInteger(num))) {
        return console.log("error: input must be integer");
    }
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd('woopsie');
evenOrOdd(4.44);
