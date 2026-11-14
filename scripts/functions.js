// Function Syntax 
// 1. Declare the fn (Create the fn)
// Void Function
function login(){
console.log("Welcome to the system!")
};

// 2. Call the function (code, console, user)
login();

// Functions with parameters
function logout(user){
console.log("Goodbye " + user + " See you later!");
};

logout("Justin");


// Function with multiple parameters
function gradeExam(student, correctItem, points){
let totalPoints = correctItem * points;
console.log(`${student} grade of the exam is: ${totalPoints}`);
};

gradeExam("Justin", 10, 0.33); 

// Mini Challenge 1: double the number 
// create a function called doubleNumber that takes one number.
// that function should print the number multiplied by 2
// Call the funcyion with different numbers and see 
// the results in the browsers console


function doubleNumber(number){
    console.log(number * 2);
}

doubleNumber(10);
doubleNumber(20);
doubleNumber(30);

// Functions with return
// create a function called add that returns the operation 
// of the sum of two delements
function add(num1, num2){
    let total = num1 + num2; 
    return Number(total); 
};

let x = add(10, 2);
doubleNumber(x);

// using return value in  another calculation
function applyDiscount(price, discountPercent){
    let discount = price *(discountPercent/100);
    return price - discount;
};
function addDeliveryFee(total, fee){
    return total + fee;
};

let originalPrice = 150;
let priceAfterDiscount = applyDiscount(originalPrice, 10);
let finalPrice = addDeliveryFee(priceAfterDiscount, 5);

console.log(`Original: ${originalPrice}
After Discount: ${priceAfterDiscount}
Final with Delivery ${finalPrice}
`);