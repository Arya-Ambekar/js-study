    //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
//console.log(typeof score);

const scoreValue = 100.3
//console.log(typeof scoreValue);

const isLoggedIn = false
//console.log(typeof isLoggedIn);

const outsideTemp = null              
// console.log(typeof outsideTemp);      // o/p --> object

let userEmail;
// console.log(typeof userEmail);           // o/p --> undefined

const id = Symbol('123')
// console.log(typeof id); 

const anotherId = Symbol('123')
// console.log(typeof anotherId); 

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber); 


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// ---------------------------------Memory Type---------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myCountryName = "India"

let anotherName = myCountryName
anotherName = "Bharat"

console.log(anotherName)
console.log(myCountryName)


let userOne = {
    email: "user1@gm.com",
    phone: 4578525645
}

let userTwo = userOne

console.log(userOne)
console.log(userTwo)


userTwo.email = "abcd@hcdotcom"

console.log(userOne)
console.log(userTwo)

