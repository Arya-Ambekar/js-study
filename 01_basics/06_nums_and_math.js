const num = 500
// console.log(num);                     // o/p --> 500

const numOne = new Number(5000)
// console.log(numOne);                  // o/p --> [Number : 5000]

// console.log(typeof(numOne.toString()));
// console.table([numOne.toString(), typeof(numOne.toString())])

// console.log(num.toFixed(2))

const numTwo = 14.23684

// console.log(numTwo.toPrecision(1));    // o/p --> 1e+1             

// console.log(numTwo.toPrecision(10));   // o/p --> 14.23684000

// console.log(typeof(numTwo.toPrecision(10)));

/* 

exponential to decimal:

1.2e+3 = 1200 
1.2e-3 = 0.0012

*/

const numThree = 5200000
// console.log(numThree.toLocaleString('en-IN'));

// -------------------------------------- Maths --------------------------------------

// console.log(Math);
// console.log(Math.abs(-45));
// console.log(Math.sqrt(66));
// console.log(Math.ceil(452.45865));
// console.log(Math.floor(452.45865));
// console.log(Math.round(4586.53265264));
// console.log(Math.max(4,8,6,2,5));
// console.log(Math.min(4,8,6,2,5));
// console.log(Math.fround(452.45865));

// console.log(Math.random());
// console.log(Math.random().toString);


const randomNum = Math.random()
// console.log(randomNum);

// console.log(randomNum*10);
// console.log(randomNum*10+1);
// console.log((randomNum*10)+1);
// console.log(Math.floor((randomNum*10)+1));


const min_num = 5
const max_num = 10

console.log(Math.floor((Math.random() * (max_num - min_num + 1)) + min_num));

const min_numTwo = 10
const max_numTwo = 20

console.log(Math.floor(Math.random() * (max_numTwo - min_numTwo + 1)) + min_numTwo);