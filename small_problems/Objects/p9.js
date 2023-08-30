const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
function addZero(num) {
  return String(num).length < 2 ? ('0' + num) : num;
}

const timeOfDay = function(minutes) {
  let date = new Date('1/1/2000 00:00');

  let time = date.getTime();
  let millisecondDelta = (minutes * MILLISECONDS_PER_MINUTE)
  date.setTime(time + millisecondDelta);
  let hours = addZero(date.getHours());
  let mins = addZero(date.getMinutes());
  return `${hours}:${mins}`;
}


console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
