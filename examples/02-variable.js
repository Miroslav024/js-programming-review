/*
let --> it is avaliable in the same cope blocks, and in any nested block
var --> it is avaliable in the same function. It is not avaliable outside the function it is defined in
const -->we are using this for static values that we dont wanna change. 
*/

let name = "Adam";
let age = 30;
let is_married = false;

//we are not able to declare a variable with the same nae in the same scope block.
//it will throw an error

//let name = "Adam"

var city = "New York";
var number = 100;
var is_student = true;

var city = "Los Angeles";
// we are able to declare a variable with the same name in the same function. It will not throw and error.
// this is a problem , if you accidently use the same name , and you have a lot of same name variables, you will not get an error

const PI = 3.14;
// always UPPERCASE letters
console.log(PI);
 
//{} - scoope

{
  let a = 20;
  var b = 30;
 

  console.log(a); // 20
  console.log(b); // 30

  console.log(PI);
}

var b = 50;
console.log(50);
//console.log(a); //reference error, because it is define in the scoope