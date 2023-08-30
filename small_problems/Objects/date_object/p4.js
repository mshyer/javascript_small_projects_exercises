let today = new Date()
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's day is ${daysOfWeek[today.getDay()]}.`);


//add calendar date
//let message = `Today's date is ${today.toLocaleDateString('en-US', {weekday: 'long', day: 'numeric'})}.`;
let message = `Today's date is ${today.toLocaleDateString('en-US',
{weekday: 'long'})} the ${today.getDate()}th.`
console.log(message);
