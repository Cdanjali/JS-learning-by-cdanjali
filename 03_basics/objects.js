//singleton 
//Object.create

//object literals 

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Lucky Verma",
    age: 27,
    [mySym]: "myKey1",
    location: "indore",
    email: "anjaliverma8924@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser)


JsUser.greeting = function () {
    console.log(`Helloo Js User , ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)