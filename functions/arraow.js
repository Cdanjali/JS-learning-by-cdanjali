const user = {
    username: "LUCKY VERMA",
    price: 999,
    age: 21,

    welcomeMessage: function () {
        console.log(`welcome ${this.username} to our website `);
        //console.log(this);
    }
}
//user.welcomeMessage();
//user.username = "SAHIL DANDERWAL"
//user.welcomeMessage();
//console.log(this);
/*

function chai() {
    let username = "lucky"

    console.log(this.username);
}
chai();

*/

const chai = () => {
    let username = "lucky"

    console.log(this.username);
}
chai();
// explicit arrow function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 3));

//implicit arrow function 
const add2 = (num1, num2, num3) => num1 + num2 + num3;

console.log(add2(5, 25, 25));
