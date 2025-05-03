// Day 48: JavaScript 'this' Keyword

console.log("====== Day 46: JavaScript 'this' Keyword ======");

/* 
1. 'this' in an Object Method
   - Refers to the object that owns the method
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log("1. this in object method:", person.fullName()); // John Doe

/* 
2. 'this' Alone (in global context)
   - Refers to the global object (e.g., 'window' in browsers, 'global' in Node)
*/
let x = this;
console.log("2. this alone (global scope):", x);

/* 
3. 'this' in a Regular Function
   - Refers to the global object
*/
function globalFunction() {
  return this;
}
console.log("3. this in regular function:", globalFunction());

/* 
4. 'this' in Strict Mode Function
   - Refers to undefined
*/
"use strict";
function strictFunction() {
  return this;
}
console.log("4. this in strict mode function:", strictFunction()); // undefined

/* 
5. 'this' in an Event Handler (Simulated)
   - Normally refers to the HTML element that triggered the event
   - Cannot simulate fully in a .js file, but here's how it looks in HTML:
   <button onclick="this.style.display='none'">Click to Remove Me!</button>
*/

/* 
6. Object Method Returning 'this'
   - 'this' still refers to the object
*/
const person2 = {
  firstName: "Jane",
  lastName: "Smith",
  myFunction: function () {
    return this;
  }
};
console.log("6. this in method returning object:", person2.myFunction());

/* 
7. Explicit Binding using call()
   - Changes the context of 'this' to another object
*/
const personA = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const personB = {
  firstName: "Alice",
  lastName: "Wonderland"
};

console.log("7. this with call():", personA.fullName.call(personB)); // Alice Wonderland

/* 
8. Explicit Binding using apply()
   - Works like call(), but arguments are passed as an array
*/
console.log("8. this with apply():", personA.fullName.apply(personB)); // Alice Wonderland

/* 
9. Explicit Binding using bind()
   - Returns a new function with 'this' permanently bound
*/
const member = {
  firstName: "Hege",
  lastName: "Nilsen"
};
let boundFullName = personA.fullName.bind(member);
console.log("9. this with bind():", boundFullName()); // Hege Nilsen

/* 
10. 'this' Precedence Order
   1. bind()
   2. apply()/call()
   3. Object method
   4. Global scope
*/
console.log("10. this precedence explained in comments.");
