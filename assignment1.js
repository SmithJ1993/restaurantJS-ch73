const restaurantName = "Murrieta Sushi Palace";
const cuisine = "Japanese style Sushi";
const city = "Murrieta";

let specialDish = "Tonkatsu Ramen";
let openTables = "4";
let restaurantStatus = "open";

console.log("==== Restaurant Report ===="); 
console.log("Restaurant: " + restaurantName);
console.log("Cuisine: " + cuisine);
console.log("City: " + city);

console.log("Special of the day: " + specialDish);
console.log("Open tables: " + openTables);
console.log("Status: " + restaurantStatus);


specialDish = "California Roll combo";
openTables = 2;

console.log("UPDATED REPORT");
console.log("Special Dish: " + specialDish);
console.log("Open Tables: " + openTables);

console.log(`
 ==== Updated Report ====
 Restaurant: ${restaurantName} 
 cuisine: ${cuisine}
 city: ${city}  
 todays special dish: ${specialDish}
 open tables: ${openTables}
 status:${status}
    `)