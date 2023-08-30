// Input: numbering point number 0-360
// Return: string with degrees ˚ minutes' seconds"
// 1. Isolate the decimal from the number
//    the number remainder the number to integer should yield the decimal isolated.
//    -60 * the decimal equals the minutes
//    Isolate the decimal again
//    -60 * the decimal here equals the seconds
// 2. return the degrees, minutes, seconds,  combined into a string plus the symbol
const DEGREE_TO_MINUTES = 60;
const MINUTE_TO_SECONDS = 60;
const DEGREE = '\xB0';
function padZeroes(num) {
  if (num < 10) {
    return '0' + String(num);
  } else {
    return num;
  }
}

function parseDegree(number) {
  //-420.33
  // turns into 360 - (-420.33 % 360) == 299.67
  // so we need to return 360 minus the number remainder 360 if negative
  // if positive, return 0 + num % 360
  switch (Math.sign(number)) {
    case 1:
      return 0 + number % 360;
    case 0:
      return number;
    case -1:
      return 360 + (number % 360);
  }
}
    

function dms(number) {
  number = parseDegree(number);
  let decimalPart = (number % parseInt(number) || 0);
  let minutes = decimalPart * DEGREE_TO_MINUTES;
  let minutesDecimalPart = (minutes % parseInt(minutes) || 0);
  let seconds = minutesDecimalPart * MINUTE_TO_SECONDS;
  
  degrees = parseInt(number);
  minutes = padZeroes(parseInt(minutes));
  seconds = padZeroes(parseInt(seconds));

  return `${degrees}${DEGREE}${minutes}'${seconds}"`;
}

//
//console.log(dms(30));           // 30°00'00"
//console.log(dms(76.73));        // 76°43'48"
//console.log(dms(254.6));        // 254°35'59"
//console.log(dms(93.034773));    // 93°02'05"
//console.log(dms(0));            // 0°00'00"
//console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"
