console.log('logic js for functions and such');

const firstName = "Dylan";
const lastName ="Griffith";

function fullName(){
  const myName = `${firstName} ${lastName}`;
  console.log("myName is", myName);
}

fullName()



const crayonColors = ["Green","Blue","Yellow"];
const fullBox = 4;

function addColor(newColor) {
  crayonColors.push(newColor);
  return crayonColors.length;
}


let crayonBoxNumber = addColor("Mulberry");

if (crayonBoxNumber < fullBox) {
  console.log('pick more colors');
} else {
  console.log('your box is full');
}




