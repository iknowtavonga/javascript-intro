// The code below calculates the volume of a cube
var volume;
var unit = ' cm cubed'

// This function contains the formular
function volCube(side){
    return side * side * side;
}

volume = volCube(5);
console.log(volume + unit);