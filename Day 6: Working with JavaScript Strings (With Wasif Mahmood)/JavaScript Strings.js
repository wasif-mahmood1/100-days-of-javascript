// Day 6: JavaScript Strings

// Creating Strings
let text1 = "Wasif"; // Name assigned is "Wasif"
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes

// Quotes Inside Quotes
let answer1 = "It's alright"; // Single quote inside double quotes
let answer2 = "He is called 'Wasif'"; // 'Wasif' inside double quotes
let answer3 = 'He is called "Wasif"'; // "Wasif" inside single quotes

// Template Strings (ES6)
let templateText = `He's often called "Wasif"`; // Using backticks for template string

// String Length
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let length = alphabet.length; // Length of the alphabet string
console.log(length); // 26

// Escape Characters
let text2 = "We are the so-called \"Vikings\" from the north."; // Escaping double quotes inside string
let text3 = 'It\'s alright.'; // Escaping single quote inside string
let text4 = "The character \\ is called backslash."; // Escaping backslash

// Escape Sequences
let newLineExample = "Hello\nWorld!"; // New line escape sequence
let tabExample = "Hello\tWorld!"; // Tab space escape sequence
console.log(newLineExample);
console.log(tabExample);

// Breaking Long Strings
let longString = "This is a very long string that " +
                 "is split into multiple lines for " +
                 "better readability."; // Concatenating long string
console.log(longString);

// Multiline Template Strings
let multiLineString = `The quick
brown fox
jumps over
the lazy dog`; // Multiline string with backticks
console.log(multiLineString);

// Strings as Objects (Not Recommended)
let x = "Wasif"; // Primitive string "Wasif"
let y = new String("Wasif"); // String object created using 'new'
console.log(x == y); // true, comparing value
console.log(x === y); // false, comparing reference

// Comparing Objects
let obj1 = new String("Wasif"); // String object "Wasif"
let obj2 = new String("Wasif"); // Another string object "Wasif"
console.log(obj1 === obj2); // false (different memory references)
