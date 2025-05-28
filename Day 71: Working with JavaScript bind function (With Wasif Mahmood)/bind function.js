// Day 71: JavaScript Function bind(), Function Borrowing & Preserving 'this'

// 1. Function Borrowing using bind()
// The member object borrows the fullName method from the person object using bind()

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

// bind() sets 'this' of fullName to 'member'
let fullName = person.fullName.bind(member);
console.log("Borrowed fullName using bind():", fullName()); // Output: Hege Nilsen


// 2. Preserving 'this' with bind()
// Without bind(), 'this' can be lost, especially in callbacks like setTimeout

const user = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    const message = this.firstName + " " + this.lastName;
    console.log("Display called:", message);
    // In the browser, you might do: document.getElementById("demo").innerHTML = message;
  }
};

// Incorrect: 'this' is lost
setTimeout(user.display, 2000); // Output: undefined undefined (in non-strict mode)

// Correct: bind user to preserve 'this'
let boundDisplay = user.display.bind(user);
setTimeout(boundDisplay, 4000); // Output: John Doe


// 3. Explanation of 'this' in different contexts
// this keyword refers to different objects depending on the context

function globalThisTest() {
  console.log("In function, this is:", this);
}
globalThisTest(); // In browser: Window object; In strict mode: undefined

const obj = {
  method: function () {
    console.log("Inside method, this is:", this);
  }
};
obj.method(); // this refers to obj

// Event listener example (in browser only)
// document.getElementById("myButton").addEventListener("click", function() {
//   console.log("In event listener, this refers to:", this); // The button element
// });


// Summary:
// - Use bind() to set 'this' explicitly.
// - bind() is useful for method borrowing and fixing callback context.
// - 'this' depends on where/how a function is called, not where it's defined.

