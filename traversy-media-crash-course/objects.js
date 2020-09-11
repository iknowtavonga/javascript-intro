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