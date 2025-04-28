// Day 43: JavaScript Operator Precedence

// What is Operator Precedence?
// Operator precedence determines the order in which operators are evaluated in expressions.

// Higher precedence operators are executed before lower precedence ones.

// Example 1: Multiplication has higher precedence than addition
let result1 = 100 + 50 * 3;
console.log("100 + 50 * 3 =", result1); // 250

// Example 2: Parentheses change the order
let result2 = (100 + 50) * 3;
console.log("(100 + 50) * 3 =", result2); // 450

// Example 3: Operators with same precedence are evaluated left to right
let result3 = 100 / 50 * 3;
console.log("100 / 50 * 3 =", result3); // 6

// Example 4: Understanding precedence with more operators
let result4 = 2 + 3 * 4 ** 2;
console.log("2 + 3 * 4 ** 2 =", result4); // 2 + 3 * 16 = 50

// Example 5: Grouping with parentheses overrides precedence
let result5 = ((2 + 3) * 4) ** 2;
console.log("((2 + 3) * 4) ** 2 =", result5); // (5 * 4)^2 = 400

// Mini Exercise:
// Predict the output before running
let a = 10;
let b = 5;
let c = 2;
let result6 = a + b * c - b / c;
console.log("a + b * c - b / c =", result6); // 10 + 10 - 2.5 = 17.5

// Reference: Operator Precedence Order (Simplified)
/*
Highest to lowest:
()              // Grouping
**              // Exponentiation
*, /, %         // Multiplication, Division, Modulo
+, -            // Addition, Subtraction
<, >, <=, >=    // Comparisons
==, ===, !=     // Equality
&&, ||, ??      // Logical operations
=, +=, -=       // Assignment
*/

// Tip: When in doubt, use parentheses to make the order explicit!
