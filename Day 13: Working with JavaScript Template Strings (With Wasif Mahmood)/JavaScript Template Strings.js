// Day 13: JavaScript Template Strings

// Using Back-Ticks Syntax
let message = `Hello World!`;
console.log(message);

// Quotes Inside Strings
let text = `He's often called "Johnny"`;
console.log(text);

// Multiline Strings
let multilineText = `The quick
brown fox
jumps over
the lazy dog`;
console.log(multilineText);

// Variable Substitutions (String Interpolation)
let firstName = "John";
let lastName = "Doe";
let greeting = `Welcome ${firstName}, ${lastName}!`;
console.log(greeting);

// Expression Substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);
