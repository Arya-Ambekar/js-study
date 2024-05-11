// Immediately Invoked Function Expression (IIFE)

// some times because of global scope pollution, there may arise some problems... so to remove this pollution of variables or any other declarions in global scope we use IIFE.

(function user(){
    console.log("Hello, this is IIFE");
})();

( (username) => {
    console.log(`${username} just logged in!`);
})("Arya");