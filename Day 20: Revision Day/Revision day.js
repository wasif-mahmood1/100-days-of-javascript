// Day 20 - Revision (Day 11 to Day 19)

// Day 11: String Methods
const text = "  JavaScript is Fun!  ";
console.log(text.trim()); // "JavaScript is Fun!"
console.log(text.toUpperCase()); // "  JAVASCRIPT IS FUN!  "
console.log(text.toLowerCase()); // "  javascript is fun!  "
console.log(text.includes("Fun")); // true

// Day 12: Template Literals
const name = "Wasif";
const message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);

// Day 13: JavaScript Numbers and Math Methods
console.log(Number("123")); // 123
console.log(parseInt("10.5")); // 10
console.log(parseFloat("10.5")); // 10.5
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.1)); // 5

// Day 14: Math Random and Rounding
console.log(Math.random()); // Random between 0 and 1
console.log(Math.floor(Math.random() * 10)); // Random 0-9

// Day 15: JavaScript Number Methods
const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toString()); // "123.456"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.toPrecision(5)); // "123.46"

// Day 16: JavaScript Number Conversion
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(parseInt("123abc")); // 123
console.log(parseFloat("123.45abc")); // 123.45

// Day 17: JavaScript Number Properties
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// Day 18: JavaScript Date Objects
console.log(new Date());
console.log(new Date("2022-03-25"));
console.log(new Date(2018, 11, 24, 10, 33, 30));
console.log(new Date(100000000000));

// Day 19: JavaScript Date Formats
console.log(new Date("2015-03-25")); // ISO
console.log(new Date("03/25/2015")); // Short
console.log(new Date("Mar 25 2015")); // Long
console.log(Date.parse("March 21, 2012")); // milliseconds
