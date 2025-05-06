// Day 51: JavaScript Classes (ES6)

// 🧱 Basic Class Definition
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // Class method that calculates the age of the car
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }

  // Class method that takes a year as parameter
  ageWithParam(currentYear) {
    return currentYear - this.year;
  }
}

// 🚗 Creating objects from the class
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// 📦 Logging object properties
console.log("Car 1 Name:", myCar1.name); // Ford
console.log("Car 1 Year:", myCar1.year); // 2014

console.log("Car 2 Name:", myCar2.name); // Audi
console.log("Car 2 Year:", myCar2.year); // 2019

// 📅 Using the age method
console.log("My first car is " + myCar1.age() + " years old.");
console.log("My second car is " + myCar2.age() + " years old.");

// 🧮 Using method with parameter
const currentYear = new Date().getFullYear();
console.log("Using param method: Car 1 is " + myCar1.ageWithParam(currentYear) + " years old.");
console.log("Using param method: Car 2 is " + myCar2.ageWithParam(currentYear) + " years old.");

// ✅ End of Day 51 - JavaScript Classes
