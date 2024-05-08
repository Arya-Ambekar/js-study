const name1 = "arya"
const repoCount = 5

/*----------------- Concatenating strings using '+' -----------------*/


// console.log(name1 + repoCount + "value");


/*----------------- Concatenating strings using 'Template Literals' -----------------*/


// console.log(`Hello! My name is ${name1} and my repo count is ${repoCount}`);     // also known as template strings


/*----------------- String Object -----------------*/

const gameName = new String("Ludo-game-dot-com")

// console.log(gameName.charAt(4));
// console.log(gameName.charCodeAt(2));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(1,7)
// console.log(newString);

const newString2 = gameName.substring(8,-2) // param = start(inclusive),end(exclusive).... if start no. is smaller than end no. then Nos. are swapped.... No. smaller than 0 are treated as 0.
// console.log(newString2);

// console.log(gameName.slice(-9));
// console.log(gameName.split("-")); // returns array
// console.log(gameName.search("-")); // returns index of first occurrance of given character

const newString3 = "   Arya   "
// console.log(newString3.trim())


const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))