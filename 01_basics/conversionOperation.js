let score = null;
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score2 = undefined;
console.log(typeof score2);
console.log(typeof(score2));
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

/*
"33" => 33
"33abs" => Nan (not a number)
true => 1
false => 0
*/
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn2 = "lucky";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

let isLoggedIn3 = "";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)

let someNumber = 1227;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber)