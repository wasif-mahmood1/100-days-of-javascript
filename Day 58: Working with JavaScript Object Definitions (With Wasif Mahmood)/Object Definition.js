
// Day 58: JavaScript Object Definition and Methods (With Wasif Mahmood)

// 1. Object Literal
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// 2. Using new Object()
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

// 3. Object Constructor Function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// 4. Object.assign()
const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source); // { a: 1, b: 2 }

// 5. Object.create()
const proto = { greet() { return "Hello!"; } };
const newObj = Object.create(proto);

// 6. Object.fromEntries()
const entries = [['foo', 'bar'], ['baz', 42]];
const objFromEntries = Object.fromEntries(entries); // { foo: "bar", baz: 42 }

// 7. General Methods
const obj = { x: 1, y: 2 };
console.log(Object.entries(obj));   // [ [ 'x', 1 ], [ 'y', 2 ] ]
console.log(Object.keys(obj));      // [ 'x', 'y' ]
console.log(Object.values(obj));    // [ 1, 2 ]

// 8. Property Management
const car = {};
Object.defineProperty(car, "type", { value: "Fiat" });
console.log(Object.getOwnPropertyDescriptor(car, "type"));

// 9. Object Protection Methods
const frozenCar = { type: "Fiat", model: "500", color: "white" };
Object.freeze(frozenCar);
console.log(Object.isFrozen(frozenCar)); // true

// 10. Using const
const constCar = { brand: "Toyota" };
constCar.brand = "Honda"; // OK
// constCar = { brand: "Ford" }; // Error: Assignment to constant variable
