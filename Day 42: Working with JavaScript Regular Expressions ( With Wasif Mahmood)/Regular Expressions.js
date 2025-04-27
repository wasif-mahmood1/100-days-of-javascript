// Day 42: JavaScript Regular Expressions

// What is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// It's used for matching text and replacing text.

console.log("=== Basic Syntax ===");

// Syntax: /pattern/modifiers

let pattern = /w3schools/i; // 'i' makes it case-insensitive
console.log("Pattern:", pattern);

// === Using RegEx with search() ===
console.log("\n=== Using search() ===");

let text1 = "Visit W3Schools!";
let result1 = text1.search("W3Schools"); // using string
console.log("Position with string:", result1); // 6

let result2 = text1.search(/w3schools/i); // using regex
console.log("Position with RegEx:", result2); // 6

// === Using RegEx with replace() ===
console.log("\n=== Using replace() ===");

let text2 = "Visit Microsoft!";
let replaced1 = text2.replace("Microsoft", "W3Schools"); // string replace
console.log("String replace:", replaced1);

let replaced2 = text2.replace(/microsoft/i, "W3Schools"); // regex replace
console.log("Regex replace:", replaced2);

// === Regular Expression Modifiers ===
console.log("\n=== Modifiers ===");

// i - case-insensitive
// g - global (find all matches)
// m - multiline
// d - start/end matching (ES2022+)

let text3 = "Hello hello HeLLo";
let matches = text3.match(/hello/gi); // global + case-insensitive
console.log("All matches:", matches); // ['Hello', 'hello', 'HeLLo']

// === Brackets and Character Sets ===
console.log("\n=== Brackets and Character Sets ===");

let text4 = "abc123XYZ";
console.log(text4.match(/[a-c]/g)); // ['a', 'b', 'c']
console.log(text4.match(/[0-9]/g)); // ['1', '2', '3']
console.log(text4.match(/(1|X)/g)); // ['1', 'X']

// === Metacharacters ===
console.log("\n=== Metacharacters ===");

let text5 = "The best things in life are free!";
console.log(/\d/.test(text5)); // false (no digits)
console.log(/\s/.test(text5)); // true (spaces exist)
console.log(/\bfree\b/.test(text5)); // true (word boundary match)

// === Quantifiers ===
console.log("\n=== Quantifiers ===");

let text6 = "nnnn nice";
console.log(/n+/.test(text6)); // true (at least one 'n')
console.log(/n*/.test(text6)); // true (zero or more 'n')
console.log(/n?/.test(text6)); // true (zero or one 'n')

// === Using RegExp Object ===
console.log("\n=== RegExp Object ===");

// test() returns true or false
const regex1 = /e/;
console.log(regex1.test("The best things in life are free!")); // true

// exec() returns match object or null
const regex2 = /e/;
console.log(regex2.exec("The best things in life are free!")); // Match info

// === Practice Exercise ===
console.log("\n=== Practice ===");

// Email check (simple example)
let email = "user@example.com";
let emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log("Is valid email:", emailPattern.test(email)); // true

// Replace all digits with '*'
let messy = "My number is 12345";
console.log(messy.replace(/\d/g, "*")); // My number is *****

// Match all words starting with "t"
let sentence = "Today is the time to try something new.";
console.log(sentence.match(/\bt\w+/gi)); // ['Today', 'the', 'time', 'to', 'try']

// === End of Day 42 ===
console.log("\n=== End of Day 42 ===");
