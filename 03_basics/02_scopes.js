if(true) {
    let a = 20
    const b = 10
    // var c = 50
}

// console.log(a);
// console.log(b);
// console.log(c);  // this is why we should not use 'var' to declare variables ... because they can be access ouside the block scope


function one() {
    const username = "Sam"
    
    function two() {
        const age = 20
        console.log(username);
    }
    // console.log(age);
    
    two()
}

// one()


if(true) {
    const name1 = "Arya"

    if (name1 == "Arya") {
        const email = "arya@google.com"
        console.log(name1);
    }
    // console.log(email);
}
// console.log(name1);


// ------------------- Interesting -------------------


console.log(addOne(5));

function addOne(num1) {
    return num1 + 1
}



// console.log(addTwo(5));

const addTwo = function(num1) {
    return num1 + 2
}

// console.log(addTwo(5));