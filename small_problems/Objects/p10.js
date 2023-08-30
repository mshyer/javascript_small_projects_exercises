const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeString) {
  // create a new date object representing midnight on standard day
  // get the time in milliseconds for midnight
  // create a new date object representing after midnight on standard day
  // subtract the time after midnight from midnight time to get the millisecond delta
  // convert milliseconds to minutes and return
  let midnight = new Date('1/1/2000, 00:00');
  let midnightTime = midnight.getTime();

  let afterMidnight = new Date(`1/1/2000, ${timeString}`);
  let afterMidnightTime = afterMidnight.getTime();
  let millisecondDelta = afterMidnightTime - midnightTime;

  return (Math.floor(millisecondDelta / MILLISECONDS_PER_MINUTE));
}

function beforeMidnight(timeString) {
  //if (timeString == '00:00') {
  //  return 0;
  //}
  //let midnightNextDay = new Date('1/2/2000, 00:00');
  //let midnightNextDayTime = midnightNextDay.getTime();
  //
  //let afterMidnight = new Date(`1/1/2000, ${timeString}`);
  //let afterMidnightTime = afterMidnight.getTime();
  //let millisecondDelta = midnightNextDayTime - afterMidnightTime;

  //return (Math.floor(millisecondDelta / MILLISECONDS_PER_MIN));
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
