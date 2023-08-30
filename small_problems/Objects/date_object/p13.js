let today = new Date()

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

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  return (day + ' the ' + dateSuffix(date.getDate()) + ' of ' + month);
}

//console.log(formattedDate(today));
let tomorrow = new Date(today.getTime());
console.log(formattedDate(tomorrow));
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.getDate());
console.log(formattedDate(tomorrow));

let nextWeek = new Date(today);
console.log(nextWeek === today);

console.log(nextWeek.toDateString() === today.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());
