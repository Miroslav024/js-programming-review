function greet() { //in JavaSript its called a function , same concept as Methods in Java
  console.log("Hello World!");
}

greet(); // calling the function

function greetWithName(name) {
  console.log("Hello " + name);
}

greetWithName("Adam"); // calling the function with an argument

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 10)); // calling the function with arguments and logging the return value

console.log(add("5", "10"));
