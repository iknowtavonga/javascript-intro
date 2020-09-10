// Creating an array from a string using seperators
let fruits = 'Apple, Pear, Orange, Banana';
fruits = fruits.split(', '); // You can't use const for this type of array because you will need to assign the split position
console.log(fruits);

// Creating arrays the normal way
const cars = ['Audi', 'BMW', 'Toyota', 'Mazda'];
console.log(cars);