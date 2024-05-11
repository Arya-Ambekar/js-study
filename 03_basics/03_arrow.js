const user = {
    username : "Arya",
    age : 20,
    welcomeMessage : function() {
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this)

// function newUser() {
//     const username = "John"
//     console.log(`New user is ${username}`);
//     console.log(`New user is ${this.username}`);
// }

// newUser()

// const newUser = function() {
//     const username = "John"
//     console.log(`New user is ${this.username}`);
// }

// newUser()


// const newUser = () => {
//     const username = "John"
//     console.log(`New user is ${this.username}`);
// }

// newUser()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()