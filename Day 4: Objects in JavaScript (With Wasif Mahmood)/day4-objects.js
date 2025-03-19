// Day 4: Objects in JavaScript

// Creating an object
let person = {
    name: "Wasif",
    age: 25,
    city: "Rawalpindi",
    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

// Accessing object properties
console.log(person.name);  //  Wasif 
console.log(person["age"]); // 25
person.greet(); // Hello, my name is  Wasif!

// Adding and Removing properties
person.country = "Pakistan";
delete person.city;
console.log(person);

// Object Methods
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getCarInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};
console.log(car.getCarInfo()); // Toyota Corolla (2022)

// Iterating over object properties
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // [ 'name', 'age', 'greet', 'country' ]
console.log(Object.values(person)); // [ 'Wasif', 25, [Function: greet], 'Pakistan' ]
console.log(Object.entries(person));

// Merging Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Challenge Task: Check if an object is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({})); // true
console.log(isEmpty({ key: "value" })); // false
