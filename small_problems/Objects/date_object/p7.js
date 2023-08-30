let today = new Date()
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's day is ${daysOfWeek[today.getDay()]}.`);


//add calendar date
//let message = `Today's date is ${today.toLocaleDateString('en-US', {weekday: 'long', day: 'numeric'})}.`;
let message = `Today's date is ${today.toLocaleDateString('en-US',
{weekday: 'long'})} the ${today.getDate()}th.`
console.log(message);


function dateSuffix(day) {
  if (day > 10 && day < 20) {
    return `${day}th`;
  } else if (day % 10 === 1) {
    return `${day}st`;
  } else if (day % 10 === 2) {
    return `${day}nd`;
  } else if (day % 10 === 3) {
    return `${day}rd`;
  } else {
    return `${day}th`;
  }
}
today = new Date('September 21, 2022');
message = `Today's date is ${today.toLocaleDateString('en-US',
{weekday: 'long'})} the ${dateSuffix(today.getDate())}.`;
console.log(message);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let someDay = new Date('January 14, 1687');
message = `Today's date is ${someDay.toLocaleDateString('en-US',
{weekday: 'long'})} the ${dateSuffix(today.getDate())} of \
${months[someDay.getMonth()]}.`;
console.log(message);
