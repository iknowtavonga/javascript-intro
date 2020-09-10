console.error('This is an error'); //inserting an error message
console.warn('This is a warning'); //inserting a warning

/* Variables: There are 3 types of variables in js and they are the following.
    var     - this is the old method of using variables
    let     - this type of variable can be initialised with no given value and can be changed later on
    const   - this type of variable can neither be initialised with no value nor changed later on. 
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

//position of a character to the nth number
console.log(name[name.length - 2]); // returns 'h' because it is second from last

console.log(typeof isCool); //typeof is used to see what type of variable it is

//Concatenation vs template strings
console.log('My name is ' + name + ' and i am ' + age); //concatenation
console.log(`My name is ${name} and i am ${age}`); // template string


//CREATING AN ARRAY - arrays are just variables that hold multiple values
const fruits = ['apples', 'oranges', 'bananas', 'pineapple']; // you can also put other data types in the array

console.log(fruits); //viewing all values
console.log(fruits[0]); // viewing an array value from a specific point

// Adding values to an array
console.log(Array.isArray(fruits)); // checking to see if something is an array
fruits[2] = 'strawberry';   // adding at a specific point
fruits[fruits.length - 3] = 'pear'; // adding at forth position from last
fruits.push('grapes');      // adding at the end of the array
fruits.unshift('mangoe');   // adding at the beginning of the array

console.log(fruits);
console.log(fruits.indexOf('pear'));