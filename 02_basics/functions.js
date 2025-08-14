function setMyName() {
    console.log("l");
    console.log("u");
    console.log("c");
    console.log("k");
    console.log("y");
}
//setMyName()
/*
function addTwoNum(num1, num2) {
    console.log(num1 + num2);

}
*/
function addTwoNum(num1, num2) {
    //  let result = num1 + num2;
    // return result;

    return num1 + num2;

}
const result = addTwoNum(9, 9)
console.log("result : " + result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please Enter a Username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

