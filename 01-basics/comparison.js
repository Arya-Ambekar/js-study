// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);         // ---
console.log(null == 0);        //    |
console.log(null >= 0);        //    |
                               //    | --> avoid these types of conversions and be carefull if these conversions occur in code
console.log(undefined == 0);   //    |  
console.log(undefined > 0);    //    |
console.log(undefined < 0);    // ---

// ===  --> strict check (check value and datatype also)

console.log("2" === 2);