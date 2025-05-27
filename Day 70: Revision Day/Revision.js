// Day 70 Revision 

/* --------------------------------------------
   OBJECT METHODS (Day 61)
--------------------------------------------- */
const person = {
  firstName: "Wasif",
  lastName: "Mahmood",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log("Full Name:", person.fullName());

/* --------------------------------------------
   OBJECT PROPERTIES AND METHODS (Day 62)
--------------------------------------------- */
person.age = 30; // Adding property
person.getAge = function () { return this.age; }; // Adding method
console.log("Age:", person.getAge());

/* --------------------------------------------
   OBJECT ACCESSORS - GETTERS AND SETTERS (Day 63)
--------------------------------------------- */
const user = {
  firstName: "Ali",
  lastName: "Raza",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
  set lang(value) {
    this.language = value.toLowerCase();
  }
};
console.log("Language (get):", user.lang);
user.lang = "FR";
console.log("Language (set):", user.lang);

/* --------------------------------------------
   OBJECT PROTECTION - Object.freeze() & seal() (Day 64)
--------------------------------------------- */
const settings = {
  theme: "dark",
  version: "1.0"
};
Object.freeze(settings); // No changes allowed
settings.theme = "light";
console.log("Frozen Settings:", settings);

const config = {
  api: "/v1",
  retries: 3
};
Object.seal(config); // Properties can't be added/removed but can be modified
config.retries = 5;
console.log("Sealed Config:", config);

/* --------------------------------------------
   FUNCTION DEFINITIONS (Day 65)
--------------------------------------------- */
function greet(name) {
  return `Hello, ${name}`;
}
const square = function (x) {
  return x * x;
};
const multiply = (a, b) => a * b;

console.log(greet("Wasif"), square(4), multiply(3, 4));

/* --------------------------------------------
   FUNCTION PARAMETERS (Day 66)
--------------------------------------------- */
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
function greetUser(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log("Sum:", sumAll(1, 2, 3, 4, 5));
console.log(greetUser(), greetUser("Wasif"));

/* --------------------------------------------
   FUNCTION INVOCATION (Day 67)
--------------------------------------------- */
function showThis() {
  console.log("Current this:", this);
}
const obj = {
  name: "Test",
  method: showThis
};
obj.method(); // 'this' refers to obj

/* --------------------------------------------
   call() and Method Reuse (Day 68)
--------------------------------------------- */
const car = {
  brand: "Toyota",
  getBrand: function () {
    return this.brand;
  }
};
const bike = { brand: "Honda" };
console.log("Car Brand:", car.getBrand());
console.log("Bike Brand using call():", car.getBrand.call(bike));

/* --------------------------------------------
   apply() Method (Day 69)
--------------------------------------------- */
function introduce(lang1, lang2) {
  return `${this.name} knows ${lang1} and ${lang2}`;
}
const dev = { name: "Wasif" };
console.log(introduce.apply(dev, ["JavaScript", "Python"]));

/* END OF REVISION */
