//creating variables and variable data types
var phrase = 'to be or not to be'; //string... js doesnt care whether you put double quotation or single on strings
var age = 20; //number
var gpa = 3.4; //still seen as an integer
var isMale = true; //boolean
var flaws = null; //no content 
var desctiption = undefined; //the value of the variable has not yet been defined

//adding html in javascript
document.write("<h2 style='background-color: aqua'>This was written in javascript</h2>");
document.write("<hr>");

//passing the variable in a document write
document.write(phrase)

// changing the value of a variable 
phrase = "it is what it is";

//passing the new variable content
document.write(phrase);