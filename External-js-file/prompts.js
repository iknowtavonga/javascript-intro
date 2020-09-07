//First we create a variable where we can store the promt information
var name = window.prompt('What is your name?');
var age = window.prompt('How old are you?');

//Now we are going to print the details we stored in the variables by constructing a sentence with them
document.write('Hi ' + name + '. Thank you for joining us.');
document.write('<br><br>');
document.write('Since you are '+ age + ' you fit our criteria')

document.write('<hr>');