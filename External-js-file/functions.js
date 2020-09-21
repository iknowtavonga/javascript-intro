// These are the ways you can call functions

// METHOD 1 - Pure function declaration
function greeting(){
    console.log('I am your guide, how can i assist you?');
}
greeting();

// METHOD 2 - Variable declaration function / ANNONYMOUS FUNCTION
const personalGuide = function(name){
    console.log(`Hi there! My name is ${name} and i will be your guide today.`);
}
('Tavonga');

// METHOD 3 - Immediately Invoked Function Expression
(function welcomeMessage(){
    console.log('Hey there! Thank you for visiting');
})();

// HELPER FUNCTIONS
/*  Helper functions are  functions being called within another function.
    Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
*/

// first we declare the function that'll get the number of monitors we need
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  // next we declare a function that multiplies the monitors we need with the price of 1 monitor
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
  }
  
  // we then store the cost in a variable that takes in the dimension of the space needed
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);