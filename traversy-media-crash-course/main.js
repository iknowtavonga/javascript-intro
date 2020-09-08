console.log('Hello World');
console.error('This is an error'); //inserting an error message
console.warn('This is a warning'); //inserting a warning

/* Variables: There are 3 types of variables in js and they are the following.
    var - this is the old method of using variables
    let - this type of variable can be initialised with no given value and can be changed later on
    const - this type of variable can neither be initialised with no value nor changed later on. 
            In other words it is CONSTANT. 
            Always use const unless you intend on changing the variable later on
*/

const name = 'John'; // string
const age = 28; // number
const rating = 2.4; // number
const isCool = false; //Boolean
const x = null;
const y = undefined;
let z; // This is another way of making an undefined variable

console.log(typeof isCool); //typeof is used to see what type of variable it is

//Concatenation vs template strings
console.log('My name is ' + name + ' and i am ' + age); //concatenation
console.log(`My name is ${name} and i am ${age}`); // template string