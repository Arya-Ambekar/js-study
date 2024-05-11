function myName() {
    console.log('A');
    console.log('r');
    console.log('y');
    console.log('a');
}

// myName()

// function addTwoNum(num1, num2) {
//     console.log("addition:", num1 + num2);
// }

// addTwoNum(6,5)

function addTwoNum(num1, num2) {
    // const result = num1 + num2
    // return result
    return num1 + num2
}

// addTwoNum(6,4)
// console.log("addition:", addTwoNum(4,2));

const result = addTwoNum(3,2)
// console.log("addition:", result);


// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please enter the username");
//         return              // code lines in functions after 'return' statement will never execute
//     }   
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Arya"));
// console.log(loginUserMessage());

function loginUserMessage(username = "John") {
    return `${username} just logged in`
}

// console.log(loginUserMessage());


// ---------------------------------- Rest Operator ----------------------------------

// function calculateCartPrice(price1) {
//     return price1
// }

// console.log(calculateCartPrice(250));


// function calculateCartPrice(price1) {
//     return price1
// }

// console.log(calculateCartPrice(250, 300, 400, 540));


// function calculateCartPrice(...price1) {  //rest operator
//     return price1
// }

// console.log(calculateCartPrice(250, 300, 400, 540));


function calculateCartPrice(val1, val2, ...price1) {
    return price1
}

console.log(calculateCartPrice(250, 300, 400, 540));

// ----------------------------------- Passing objects in function -----------------------------------

const user = {
    username : "Arya",
    price : 750
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username : "Sam",
    price : 800
})             // this is function call ....... we can pass object in function call


// ----------------------------------- Passing array in function -----------------------------------

const newArray = [10,20,30,40,50]

function returnThirdValue(anyArray) {
    return anyArray[2]
}

console.log(returnThirdValue(newArray))