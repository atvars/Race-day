// App that categorise drivers on age and enter time
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 90;

// setting race nr for 18+ years old and entered race early
if (age >= 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
}
// if age is over 79
if (age > 79) {
  console.log('Sorry you cant be in a race');
}
// 18+ years old and entered race early
else if (age >= 18 && registeredEarly === true) {
  console.log(
    `Your race will star at 9:30am and your race number is ${raceNumber}`
  );
}
// 18+ years old and entered race late
else if (age >= 18 && registeredEarly === false) {
  console.log(
    `Your race will star at 11am and your race number is ${raceNumber}`
  );
}
// for under 18 years old
else if (age < 18) {
  console.log('Your race will start at 12:30pm');
}
// if not entered
else {
  console.log('Please see the registration desk');
}
