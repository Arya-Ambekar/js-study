// for of loop

const arr = [1,2,3,4,5]

for (const item of arr) {
    //console.log(item);
}

// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`each letter of greeting is ${greet}`);
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`each letter of greeting is ${greet}`);
// }


// Map

const map1 = new Map();
map1.set("IN", "India")
map1.set("USA", "United States of America")
map1.set("FR", "France")

for (const key of map1) {
    // console.log(key);
}

for (const [key, value] of map1) {
    console.log(`${key} :- ${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
