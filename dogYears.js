//Dog years calculator study project

//This is my age
const myAge = 24;

//This represents a dog's life first two years.
let earlyYears = 2;
earlyYears *= 10.5;

//Since we accounted for the first two years, i'll took 2 from myAge, and then knowing that every year it's like 4 years for i dog, i do the math
let laterYears = myAge - 2;
laterYears *= 4;

//And now we sum up:
let myAgeInDogYears = earlyYears + laterYears;

const myName = 'ISAAC'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
