// Day 75: JavaScript Static Methods

// Example 1: Basic Static Method
class Car {
  constructor(name) {
    this.name = name;
  }

  // Static method belongs to the class, not instances
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// Accessing static method from class
document.getElementById("demo").innerHTML = Car.hello();

// Trying to access from object will cause an error:
// document.getElementById("demo").innerHTML = myCar.hello(); // ❌ Error


// Example 2: Static Method with Parameters
class CarWithName {
  constructor(name) {
    this.name = name;
  }

  static hello(carObj) {
    return "Hello " + carObj.name;
  }
}

const mySecondCar = new CarWithName("Toyota");

// Calling static method with instance as argument
document.getElementById("demo").innerHTML += "<br>" + CarWithName.hello(mySecondCar);


// Summary:
// - Static methods are called on the class, not instances.
// - They are useful for utility or helper functions that relate to the class but don't need an instance.
// - Use parameters to pass instance data if needed.
