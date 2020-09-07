var phrase = 'It Is What It Is'
var source = '- the streets'
//passing the variable in html
document.write(phrase);
document.write('<br><br>');

//finding the character length of the variable
document.write(phrase.length);
document.write('<br><br>');

//changing text to uppercase using methods
document.write(phrase.toUpperCase());
document.write('<br><br>');

//changing text to lowercase
document.write(phrase.toLowerCase());
document.write('<br><br>');

//passing only 1 letter using parameters
document.write(phrase.charAt(4));
document.write('<br><br>');

//passing the position of a character
document.write(phrase.indexOf('W'));
document.write('<br><br>');

//passing the position of the last of a character kind
document.write(phrase.lastIndexOf('s'));
document.write('<br><br>')

//substrings... 
document.write(phrase.substring(phrase.indexOf('W'), phrase.length));
document.write('<br><br>');

//Ends with boolean value
document.write(phrase.endsWith('Is'));
document.write('<br><br>');

//includes parameter... to see if the variable includes the given parameter
document.write(phrase.includes('It'));
document.write('<br><br>');

//adding string variables in 1 line
document.write(phrase + ' ' + source)

document.write('<hr>');