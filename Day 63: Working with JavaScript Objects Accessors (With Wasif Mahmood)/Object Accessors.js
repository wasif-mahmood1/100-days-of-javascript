// Day 63: JavaScript Object Accessors - Getters and Setters

// Example 1: JavaScript Getter (The get Keyword)
// Create an object with a getter to access the 'lang' property
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language; // getter to access the 'language' property
  }
};

// Display data from the object using the getter
document.getElementById("demo1").innerHTML = `Language: ${person1.lang}`;

///////////////////////////////////////////////////////////////////////////////

// Example 2: JavaScript Setter (The set Keyword)
// Create an object with a setter to modify the 'lang' property
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang; // setter to set the 'language' property
  }
};

// Set an object property using the setter
person2.lang = "fr";

// Display data from the object using the setter
document.getElementById("demo2").innerHTML = `Language: ${person2.language}`;

///////////////////////////////////////////////////////////////////////////////

// Example 3: JavaScript Function vs Getter
// Using a function to return the full name
const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a function
document.getElementById("demo3").innerHTML = `Full Name (function): ${person3.fullName()}`;

///////////////////////////////////////////////////////////////////////////////

// Example 4: Using a Getter for Full Name
const person4 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName; // getter to access full name
  }
};

// Display data from the object using a getter (simpler syntax)
document.getElementById("demo4").innerHTML = `Full Name (getter): ${person4.fullName}`;

///////////////////////////////////////////////////////////////////////////////

// Example 5: Secure Better Data Quality with Getters
// Create an object with a getter to return language in upper case
const person5 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase(); // getter to return the language in uppercase
  }
};

// Display data from the object using the getter
document.getElementById("demo5").innerHTML = `Language (Uppercase): ${person5.lang}`;

///////////////////////////////////////////////////////////////////////////////

// Example 6: Secure Better Data Quality with Setters
// Create an object with a setter to store language in upper case
const person6 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase(); // setter to store the language in uppercase
  }
};

// Set an object property using the setter
person6.lang = "en";

// Display data from the object using the setter
document.getElementById("demo6").innerHTML = `Language (Stored in Uppercase): ${person6.language}`;

///////////////////////////////////////////////////////////////////////////////

// Example 7: Using Object.defineProperty() to Define Getters and Setters

// Define object with a counter property
const counterObj = { counter: 0 };

// Define getters and setters using Object.defineProperty
Object.defineProperty(counterObj, "reset", {
  get: function() { this.counter = 0; } // getter to reset counter to 0
});
Object.defineProperty(counterObj, "increment", {
  get: function() { this.counter++; } // getter to increment the counter
});
Object.defineProperty(counterObj, "decrement", {
  get: function() { this.counter--; } // getter to decrement the counter
});
Object.defineProperty(counterObj, "add", {
  set: function(value) { this.counter += value; } // setter to add a value to counter
});
Object.defineProperty(counterObj, "subtract", {
  set: function(value) { this.counter -= value; } // setter to subtract a value from counter
});

// Play with the counter using the getters and setters
counterObj.reset;
counterObj.add = 5;
counterObj.subtract = 1;
counterObj.increment;
counterObj.decrement;

// Display the final counter value
document.getElementById("demo7").innerHTML = `Counter Value: ${counterObj.counter}`;

///////////////////////////////////////////////////////////////////////////////

// To demonstrate the usage of this file, ensure there are HTML elements with
// corresponding IDs in your HTML file:

// <div id="demo1"></div>
// <div id="demo2"></div>
// <div id="demo3"></div>
// <div id="demo4"></div>
// <div id="demo5"></div>
// <div id="demo6"></div>
// <div id="demo7"></div>
