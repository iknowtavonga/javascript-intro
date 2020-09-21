// These are the ways you can call functions

// METHOD 1 - Pure function declaration
function greeting(){
    console.log('I am your guide, how can i assist you?');
}
greeting();


// METHOD 2 - Variable declaration function
const personalGuide = function(name){
    console.log(`Hi there! My name is ${name} and i will be your guide today.`);
}
('Tavonga');

// METHOD 1 - Immediately Invoked Function Expression
(function welcomeMessage(){
    console.log('Hey there! Thank you for visiting');
})();

