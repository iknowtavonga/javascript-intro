// CREATING AN OBJECT
const person = {
    name: 'John',
    surname: 'Doe',
    age: 23,
    isMale: true,
    hobbies: ['music', 'movies', 'sports'], // you can create an array in an object
    
    // you can also create an object within an object as shown below 
    address: {
        street: '1 Church Road',
        city: 'Midrand',
        province: 'Gauteng'
    }
}

console.log(person);    // displaying the whole object
console.log(person.name, person.surname);    // accessing specific items from the object
console.log(person.hobbies[1]);    // accessing a specific value in an array in the object
console.log(person.address);    //accessing an object within an object
console.log(person.address.city);   //accessing a nested object's value

person.email = 'johnd@gmail.com'   //directly adding properties to the object
console.log(person);

//Creating an object within an array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true 
    },
    // Item 2 of array below
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true 
    },
    // Item 3 of array
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

console.log(todos[1].text); // targeting a specific object property within your array