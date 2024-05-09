/*
We can declare Objects by two types : 1. declared using constructor (Singleton)
                                      2. declared using literals (Object literals)
*/

// Singleton:
// Object.create


// Object literals:

const JsUser = {
    name : "Arya",
    "full name" : "Arya Ambekar",
    age : 19,
    mySym : "myKey1",
    email : "arya@google.com",
    isLoggedIn : false,
    lasLoginDays : ["Monday", "Thursday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym); // Type = string

// JsUser.age = 20
// Object.freeze(JsUser)
// console.log(JsUser.age);
// JsUser.isLoggedIn = true
// console.log(JsUser.isLoggedIn);


const mySym1 = Symbol("key1")

const JsUserTwo = {
    name : "Jassie",
    "full name" : "Jassie Oak",
    age : 29,
    [mySym1] : "myKey2",
    email : "jassie@microsoft.com",
}

// console.log(JsUserTwo[mySym1]);
// console.log(JsUserTwo);

JsUserTwo.greeting = function() {
    console.log("Hello JS user !!");
}

// console.log(JsUserTwo.greeting);
// console.log(JsUserTwo.greeting());

JsUserTwo.greetingTwo = function() {
    console.log(`Hello JS user ${this["full name"]}`);
}

console.log(JsUserTwo.greetingTwo);
console.log(JsUserTwo.greetingTwo());

JsUserTwo.greetingThree = function() {
    console.log(`Hello JS user ${JsUser["full name"]}`);
}

console.log(JsUserTwo.greetingThree());


// JsUserTwo.greetingFour = function() {
//     console.log(`Hello JS user ${JsUser[this["full name"]]}`);
// }

// console.log(JsUserTwo.greetingFour()); // o/p --> undefined

console.log(JsUserTwo);