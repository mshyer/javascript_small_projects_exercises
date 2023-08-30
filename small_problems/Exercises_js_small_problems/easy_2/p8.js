// Data structure: conditional logic

function mean(...grades) {
  return (grades.reduce((sum, num) => sum + num) / grades.length);
}

const getGrade = function(...scores) {
  let avg = mean(...scores);
  if (avg < 60) {
    return 'F';
  } else if (avg < 70) {
    return 'D';
  } else if (avg < 80) {
    return 'C';
  } else if (avg < 90) {
    return 'B';
  } else if (avg <= 100) {
    return 'A';
  }

  return 'Woops';
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
