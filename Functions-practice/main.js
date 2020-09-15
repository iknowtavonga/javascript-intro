// The code below calculates the volume of a cube
var volume;
var unit = ' cm cubed'

// This function contains the formular
function volCube(side){
    return Math.pow(side, 3);
}

// The result is passed here with the values
volume = volCube(5);
console.log(volume + unit);

// Volume of a rectangular prism
function volRect(length, breadth, height){
    return length * breadth * height;
}

volume = volRect(10, 5, 6);
console.log(volume + unit);

// Volume of a cylinder
function volCyl(radius, height){
    return Math.round(Math.PI * Math.pow(radius, 2) * height);
}
volume = volCyl(6, 9);
console.log(volume + unit);

//Calculate function for input boxes
function calculate(){
    
}