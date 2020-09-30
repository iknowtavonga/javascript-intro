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

for (let index = 0; index < genre.length; index++){ // Looping through an array
    console.log(genre[index]);
}

//      ARRAY COMMON METHODS
console.log(genre.toString());                      // Converts an array into a string
console.log(genre.join(' @'));                      // Joins array content with characters
genre[genre.length] = 'amapiano';                   // This is the same as push
console.log(genre);
genre.unshift('rock');                              // Adds a new item at the beginning of the array
console.log(genre);

let artists = ['beyonce', 'riri', 'young thug', 'dababy'];
let art = genre.concat(artists);                    // Combining 2 arrays
console.log(art);

console.log(art.reverse());                         // Reversing an array
console.log(art.slice(0, 4));                       // Slicing an array... only showing the first 4 items
console.log(genre.sort());                          // Sorting an array of strings alphabetically

let charts = [2, 45, 5, 93, 27, 109, 90, 1, 32, 87];
charts.sort(function (a,b){                         // Sorting a numeric array in ascending order
    return a - b;
});
console.log(charts);

charts.sort(function(a,b){                          // Sorting a numeric array in descending order
    return b - a;
});
console.log(charts);

let emptyArray = [];
for(let num = 0; num <= 10; num++){                 // Looping through an array and adding items
    emptyArray.push(num);
};
console.log(emptyArray);

//                      OBJECTS IN JAVASCRIPT

let student = {
    first: 'Louise', 
    last: 'Belcher',
    grade: 5,
    IQ: 180,
    studentInfo: function(){                        // These are the basics of how Object Oriented Programming is done
        return `${this.first} ${this.last} has an IQ of ${this.IQ}`;
    }                                                
};

console.log(student.first);                         // Viewing a specific value in an object
console.log(student['first']);                      // Viewing a specific value in an object

student.IQ = 192;                                   // Changing the value of an item in an array
console.log(student.IQ);

student.grade ++;                                   // Incrementing the value of a number
console.log(student.grade);

console.log(student.studentInfo());                 // This is how we view the function in the object
