//function numberRange(num) {
//    if ((Array.from(new Array(51), (x, i) => i).includes(num))) {
//        console.log("between 0 and 50");
//    } else if ((Array.from(new Array(50), (x, i) => i + 51).includes(num))) {
//        console.log("between 51 and 100");
//    }
//      else if (num > 100) {
//          console.log("Greater than 100");
//    }
//      else if (num < 0) {
//          console.log("Less than 0");
//    }
//}
//
//numberRange(25);
//numberRange(60);
//numberRange(-1);
//numberRange(50);

function numberRange(number) {
    if (number < 0) {
        console.log(`${number} is less than 0`);
    } else if (number <= 50) {
        console.log(`${number} is between 0 and 50`);
    } else if (number <= 100) {
        console.log(`${number} is between 51 and 100`);
    } else {
        console.log(`${number} is greater than 100`);
    }
}
numberRange(25);
numberRange(60);
numberRange(-1);
numberRange(50);


