let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 4, 23);      // months start from 0 when written in numbers
let myCreatedDate1 = new Date(2023, 12, 23);    // o/p --> Tue Jan 23 2024  // format: yyyy, mm, dd
let myCreatedDate2= new Date(2023, 13, 23);     // o/p --> Fri Feb 23 2024
// console.log(myCreatedDate.toDateString());

let myDateOne = new Date("12,05,2012") // months start from 1 when written in strings  
// console.log(myDateOne.toDateString());

let myDateTwo = new Date("2023-01-14") 
// console.log(myDateTwo.toDateString());
// Format of writing date in String: "mm,dd,yyyy" or "yyyy-mm-dd"

let myDateThree = new Date(2022, 12, 5, 5, 30) // we can add time if we need it
// console.log(myDateThree.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);          // gives o/p in milliseconds

// console.log(myDateOne.getTime());
// console.log(myDateOne.getMonth() + 1);
// console.log(Math.floor(Date.now()/1000)); // converting time from milliseconds to seconds


console.log(`The date is ${myCreatedDate.getDate()}`);

myCreatedDate.toLocaleString('default', {
    weekday: "long",
    
})