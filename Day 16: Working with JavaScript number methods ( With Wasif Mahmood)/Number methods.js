// Day 16: JavaScript Number Methods

// 1. Number.isInteger()
console.log("1. Number.isInteger()")
console.log(Number.isInteger(4)); // true
console.log(Number.isInteger(4.5)); // false
console.log(Number.isInteger("4")); // false

// 2. Number.isNaN()
console.log("\n2. Number.isNaN()")
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("10")); // false
console.log(Number.isNaN(NaN)); // true

// 3. Number.parseInt()
console.log("\n3. Number.parseInt()")
console.log(Number.parseInt("10.5")); // 10
console.log(Number.parseInt("Hello")); // NaN
console.log(Number.parseInt("10 years")); // 10

// 4. Number.parseFloat()
console.log("\n4. Number.parseFloat()")
console.log(Number.parseFloat("10.5")); // 10.5
console.log(Number.parseFloat("Hello")); // NaN
console.log(Number.parseFloat("10.5 years")); // 10.5

// 5. Number.isFinite()
console.log("\n5. Number.isFinite()")
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("10")); // false

// 6. Number.toFixed()
console.log("\n6. Number.toFixed()")
let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toFixed(0)); // "123"

// 7. Number.toPrecision()
console.log("\n7. Number.toPrecision()")
let num2 = 123.456;
console.log(num2.toPrecision(4)); // "123.5"
console.log(num2.toPrecision(6)); // "123.456"

// 8. Number.isSafeInteger()
console.log("\n8. Number.isSafeInteger()")
console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger("10")); // false

// 9. Number.MAX_VALUE and Number.MIN_VALUE
console.log("\n9. Number.MAX_VALUE and Number.MIN_VALUE")
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// 10. Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY
console.log("\n10. Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY")
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// 11. Number.EPSILON
console.log("\n11. Number.EPSILON")
console.log(Number.EPSILON); // 2.220446049250313e-16

// 12. Number.isInteger()
console.log("\n12. Number.isInteger()")
console.log(Number.isInteger(4)); // true
console.log(Number.isInteger(4.2)); // false

// 13. Number(value)
console.log("\n13. Number(value)")
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 14. toExponential()
console.log("\n14. toExponential()")
let num3 = 123456;
console.log(num3.toExponential(2)); // "1.23e+5"
console.log(num3.toExponential(4)); // "1.2346e+5"

// 15. toLocaleString()
console.log("\n15. toLocaleString()")
let num4 = 1234567.89;
console.log(num4.toLocaleString()); // "1,234,567.89"
console.log(num4.toLocaleString("de-DE")); // "1.234.567,89"

// 16. Number.isNaN()
console.log("\n16. Number.isNaN()")
console.log(Number.isNaN("123abc")); // false
console.log(Number.isNaN(NaN)); // true

// 17. Number.isSafeInteger()
console.log("\n17. Number.isSafeInteger()")
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// 18. Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
console.log("\n18. Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER")
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

