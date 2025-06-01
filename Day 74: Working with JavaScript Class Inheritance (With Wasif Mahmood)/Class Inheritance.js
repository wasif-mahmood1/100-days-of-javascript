// Day 74 - JavaScript Class Inheritance

// --- Class Inheritance Example ---
class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Calls the parent class constructor
    this.model = mod;
  }

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let inheritedCar = new Model("Ford", "Mustang");
document.getElementById("demo1").innerHTML = inheritedCar.show();


// --- Getters and Setters Example (using different property name) ---
class CarWithGetterSetter {
  constructor(brand) {
    this.carname = brand;
  }

  get cnam() {
    return this.carname;
  }

  set cnam(x) {
    this.carname = x;
  }
}

const getterSetterCar = new CarWithGetterSetter("Ford");
document.getElementById("demo2").innerHTML = getterSetterCar.cnam;


// --- Getters and Setters with Underscore Convention ---
class CarWithUnderscore {
  constructor(brand) {
    this._carname = brand;
  }

  get carname() {
    return this._carname;
  }

  set carname(x) {
    this._carname = x;
  }
}

const underscoreCar = new CarWithUnderscore("Ford");
document.getElementById("demo3").innerHTML = underscoreCar.carname;


// --- Using Setter to Change Property ---
const setterCar = new CarWithUnderscore("Ford");
setterCar.carname = "Volvo";
document.getElementById("demo4").innerHTML = setterCar.carname;


// --- Hoisting Example ---
// This will cause an error if uncommented, because classes are not hoisted
// const hoistedCar = new HoistedCar("Ford"); // ReferenceError

class HoistedCar {
  constructor(brand) {
    this.carname = brand;
  }
}

const hoistedCar = new HoistedCar("Ford");
document.getElementById("demo5").innerHTML = hoistedCar.carname;
