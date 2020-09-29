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
*/
for (let numLoop = 0; numLoop <= 100; numLoop++){
    console.log(numLoop)
}
