console.log("variables");
//comments are notes for devs

//string
//a string is text

let firstName = "Justin";
let lastName = "Smith";
let city = "Murrieta";

console.log(firstName);
console.log(lastName);
console.log(city);

//we can update a variable

firstName = "Jesus";
console.log(firstName); 

//Numbers
//integers or floating point numbers

let age = 36;
let price = 10.50

console.log(age);
console.log(price);

// Booleans
// a boolean is either true or false

let isStudent = false; 
let isLoggedin = true; 

console.log(isStudent); 
console.log(isLoggedin);

// Arithmetic operations

let num1 = 21;
let num2 = 7; 

let sum = num1 + num2; 
let sub = num1 - num2; 
let mult = num1 * num2; 
let div = num1 / num2; 

console.log("sum is " + sum);
console.log("sub is " + sub); 
console.log("mult is " + mult); 
console.log("div is " + div); 

//build strings with variables
//option 1 - concatenation (using +)
console.log("My name is " + firstName + " and I live in " + city);

//option 2 - template literal (cleaner use '')
console.log(`My name is ${firstName} and i live in ${city}`);

// Constants 
// const = this value will nmever change
const daysInWeek = 7;
const pi = 3.1416;

console.log(daysInWeek);
console.log(pi);

const truckColor = "antimatter blue";
const makeModel = "Ford F150";
let mileage = "150000";

console.log(truckColor);
console.log(makeModel);
console.log(mileage);

const city2 = "New York";
console.log("I live in " + city2);``