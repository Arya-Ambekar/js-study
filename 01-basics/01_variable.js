const accountId = 15462 
let accountEmail = "arya@fc,com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

// accountId = 2        // not allowed

accountEmail = "abc@gm.com"
accountPassword = "abcde"
accountCity = "Pune"


console.log(accountEmail);

/*
Prefer not to use var
because of issue in black scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])