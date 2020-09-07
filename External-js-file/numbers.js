var wholeNum = -2;
var decimalNum = 0.538

//Basic number calculations in javascript
document.write(3 * 4);
document.write('<br><br>');

//Basic BODMAS calculation
document.write(3 * (3 + 2));
document.write('<br><br>');

//Modulus values, number that only shows you the remainder left from the division
document.write(4 % 3);
document.write('<br><br>');

//Absolute math value (if the number is a negative it'll return it as positive)
document.write(Math.abs(wholeNum));
document.write('<br><br>');

//Max gives you the biggest number in comparison and min gives you the smallest
document.write(Math.max(wholeNum, 4));
document.write('<br><br>');
document.write(Math.min(wholeNum, 4));
document.write('<br><br>');

//Rounding decimal values
document.write(Math.round(decimalNum));
document.write('<br><br>');

//adding exponents
document.write(Math.pow(3, 2));
document.write('<br><br>');

//square rooting
document.write(Math.sqrt(25));
document.write('<br><br>');

//random number generator. Random generator only generates numbers between 0 and 1
document.write(Math.random());
document.write('<br><br>');
document.write(Math.round(Math.random() * 10))
document.write('<hr>');