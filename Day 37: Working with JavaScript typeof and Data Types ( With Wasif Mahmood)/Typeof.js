// Day 38 - JavaScript typeof and Data Types

// ✅ Primitive Data Types
console.log(typeof "John");            // "string"
console.log(typeof ("John" + "Doe"));  // "string"
console.log(typeof 3.14);              // "number"
console.log(typeof 33);                // "number"
console.log(typeof (33 + 66));         // "number"
console.log(typeof true);              // "boolean"
console.log(typeof false);             // "boolean"
console.log(typeof 1234n);             // "bigint"
console.log(typeof Symbol());          // "symbol"

let x;
console.log(typeof x);                 // "undefined"
console.log(typeof null);              // "object" (bug in JavaScript)

// ✅ Complex Data Types
console.log(typeof { name: 'John' });      // "object"
console.log(typeof [1, 2, 3, 4]);          // "object"
console.log(typeof new Map());            // "object"
console.log(typeof new Set());            // "object"
console.log(typeof function () {});       // "function"

// ❓ Check if it's an array
const fruits = ["apples", "bananas", "oranges"];
console.log(Array.isArray(fruits));        // true

// ❓ instanceof operator
const time = new Date();
console.log(time instanceof Date);         // true
console.log(fruits instanceof Array);      // true
console.log(new Map() instanceof Map);     // true
console.log(new Set() instanceof Set);     // true

// ✅ Undefined Variables
let car;
console.log(typeof car); // "undefined"

car = "Volvo";
car = undefined;
console.log(typeof car); // "undefined"

car = "";
console.log(typeof car); // "string"

// ✅ Null
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;
console.log(person);           // null
console.log(typeof person);    // "object"

person = undefined;
console.log(typeof person);    // "undefined"

// ✅ undefined vs null
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"
console.log(null === undefined);   // false
console.log(null == undefined);    // true

// ✅ constructor property
console.log([1, 2, 3].constructor === Array);         // true
console.log(new Date().constructor === Date);         // true
console.log({ name: "John", age: 34 }.constructor);   // function Object()
console.log((new Set()).constructor);                 // function Set()
console.log((new Map()).constructor);                 // function Map()
console.log((function () {}).constructor);            // function Function()

// 🧠 All Together
console.log(typeof NaN);                // "number"
console.log(typeof {});                 // "object"
console.log(typeof []);                 // "object"
console.log(typeof new Object());       // "object"
console.log(typeof new Array());        // "object"
console.log(typeof new Date());         // "object"
console.log(typeof function () {});     // "function"

// 🧪 typeof + Exercise
let result = typeof('John' + 35);
console.log(result); // "string"

// ✅ The void Operator
// void(0) returns undefined without evaluating the expression
// Often used in hyperlinks to avoid page reload
// <a href="javascript:void(0);">Useless link</a>
// <a href="javascript:void(document.body.style.backgroundColor='red');">Click me</a>
