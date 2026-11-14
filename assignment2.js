function showRestaurantName(){
    console.log("Welcome to Justin's Restaurant")
};
showRestaurantName();
function greetCustomer(customerName){
    console.log("Welcome, " + customerName + "! We are happy to have you at Justin's Restaurant.")
};
greetCustomer("Mike");
greetCustomer("Mitch");
greetCustomer("Mary");

function calculateTotal(dishPrice, taxRate){
    return dishPrice + (dishPrice * taxRate);
};
console.log("Sushi AYCE Total: $" + calculateTotal(50.00, 0.07));
console.log("Chicken Wings AYCE Total: $" + calculateTotal(40.00, 0.07));
console.log("Tacos al pastor AYCE Total: $" + calculateTotal(25.00, 0.07));

function calculateTip(totalPrice, tipPercentage){
    return totalPrice + tipPercentage;
};

let sushiTotal = calculateTotal(50.00, 0.07);
let sushiTip = calculateTip(sushiTotal, 0.20);

console.log("Sushi AYCE Total: $" + sushiTotal);
console.log("Sushi AYCE Tip: $" + sushiTip);


let wingsTotal = calculateTotal(40.00, 0.07);
let wingsTip = calculateTip(wingsTotal, 0.20);

console.log("Chicken Wings AYCE Total: $" + wingsTotal);
console.log("Chicken Wings AYCE Tip: $" + wingsTip);


let tacosTotal = calculateTotal(25.00, 0.07);
let tacosTip = calculateTip(tacosTotal, 0.20);

console.log("Tacos al Pastor AYCE Total: $" + tacosTotal);
console.log("Tacos al Pastor AYCE Tip: $" + tacosTip);