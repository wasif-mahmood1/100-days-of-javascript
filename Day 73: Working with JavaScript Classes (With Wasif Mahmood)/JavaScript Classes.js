// Day 73: JavaScript Classes

// What are JavaScript Classes?
// Classes are templates for creating JavaScript objects.
// Introduced in ECMAScript 2015 (ES6).

// Basic Class Syntax
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // Method to calculate car age using current year
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }

  // Method to calculate age by passing custom year
  ageFrom(year) {
    return year - this.year;
  }
}

// Creating instances (objects) of the Car class
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// Display car info in the console
console.log("Car 1:", myCar1.name, "| Year:", myCar1.year);
console.log("Car 2:", myCar2.name, "| Year:", myCar2.year);

// Use class methods
console.log("Age of Car 1:", myCar1.age(), "years");
console.log("Age of Car 2:", myCar2.age(), "years");

// Using method with custom parameter
const currentYear = new Date().getFullYear();
console.log("Car 1 age (from current year):", myCar1.ageFrom(currentYear), "years");
console.log("Car 2 age (from current year):", myCar2.ageFrom(currentYear), "years");

// Example of using class in a browser environment
// (Make sure there's an element with id="demo" in your HTML)
if (typeof document !== 'undefined') {
  const output = `My car is ${myCar1.age()} years old.`;
  document.getElementById("demo").innerHTML = output;
}

// Summary:
// - class keyword is used to define a class
// - constructor() initializes object properties
// - new keyword creates instances
// - class methods are added like normal functions inside the class
