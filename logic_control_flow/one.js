//if
/*
const score = 200;
if (score > 100) {
    const power = 'fly';
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`);

//shorthand if
const balance = 1000;
//if (balance > 500) console.log('test');


if (balance < 500) {
    console.log("less than ");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
    */

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromMail = true;


if (isUserLoggedIn && debitCard && 2 == 2) {
    console.log("allowe to buy products");
}

if (loggedInFromGoogle || loggedInFromMail) {
    console.log("allow to login");
}
