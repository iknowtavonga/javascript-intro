var b = "smoothie";
console.log(b);

// Prompts and storing prompts
/* 

var name = prompt('What is your name?');
console.log(name);

// Manipulating the DOM
document.getElementById('some-text').innerHTML = `Hey ${name}, want a ${b}?`;

*/

// Incrementing numbers
var age = 23;
console.log(age);

age += 2;
console.log(age);

// Creating functions
function greeting(yourName){
    var result = document.getElementById('some-text').innerHTML = `Hey there ${yourName}, nice to meet you`;
    return result;
}

//var name = prompt('What is your name?');
//greeting(name);

/*                  WHILE LOOPS. 

This while loop will run through this variable until the statement is not true
anymore

var loopNum = 0;

while(loopNum < 100){
    loopNum += 1;
    console.log(loopNum);
}
*/

/*      FOR LOOPS 

This for loop is exactly the same as the while loop above.

for (let numLoop = 0; numLoop <= 100; numLoop++){
    console.log(numLoop)
}

*/

// DATA TYPES
let yourAge = 19;               // number
let yourName = 'Bob';           // string
let trust = false;              // Boolean
let random;                     // undefined
let nothing = null;             // null

let name = {
    first: 'Bob', 
    last: 'Belcher'
};                              // object

let groceries = [
    'juice',
    'ham',
    'pie',
    'bread'
];                              // array

// Strings in Js, common METHODS
let oneFruit = 'avocado';
let twoFruits = 'banana \napple';                   // New line escape character \n

console.log(oneFruit.length);                       // Length of a string
console.log(twoFruits);
console.log(oneFruit.slice(0,3));                   // Slicing a string, this shows the first 3 characters
console.log(oneFruit.replace('cado', 'napple'));    // Replacing characters in a string with other characters
console.log(oneFruit.toUpperCase());
console.log(oneFruit.toLowerCase());
console.log(oneFruit[1]);                           // Showing a specific character


//      ARRAYS
let genre = ['rap', 'hip hop', 'pop', 'rnb', 'soul', 'gospel'];

for (let index = 0; index < genre.length; index++){   // Looping throug an array
    console.log(genre[index]);
}
