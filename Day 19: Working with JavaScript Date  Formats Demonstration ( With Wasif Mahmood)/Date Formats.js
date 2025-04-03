// JavaScript Date Formats Demonstration

// ISO Date Format (YYYY-MM-DD)
const isoDate = new Date("2015-03-25");
console.log("ISO Date:", isoDate);

// ISO Date Format (YYYY-MM without specifying the day)
const isoYearMonth = new Date("2015-03");
console.log("ISO Year and Month:", isoYearMonth);

// ISO Date Format (Only Year - YYYY)
const isoYear = new Date("2015");
console.log("ISO Year Only:", isoYear);

// ISO Date Format with Time (YYYY-MM-DDTHH:MM:SSZ)
const isoDateTime = new Date("2015-03-25T12:00:00Z");
console.log("ISO Date-Time (UTC):", isoDateTime);

// ISO Date-Time with UTC Offset
const isoDateTimeOffset = new Date("2015-03-25T12:00:00-06:30");
console.log("ISO Date-Time with Offset:", isoDateTimeOffset);

// Short Date Format (MM/DD/YYYY)
const shortDate = new Date("03/25/2015");
console.log("Short Date:", shortDate);

// Long Date Format (MMM DD YYYY)
const longDate1 = new Date("Mar 25 2015");
console.log("Long Date (MMM DD YYYY):", longDate1);

const longDate2 = new Date("25 Mar 2015");
console.log("Long Date (DD MMM YYYY):", longDate2);

const longDate3 = new Date("January 25 2015");
console.log("Long Date (Full Month Name):", longDate3);

const longDate4 = new Date("Jan 25 2015");
console.log("Long Date (Abbreviated Month):", longDate4);

const longDate5 = new Date("JANUARY, 25, 2015");
console.log("Long Date (Case Insensitive, with Commas):", longDate5);

// Parsing Dates with Date.parse()
let parsedMilliseconds = Date.parse("March 21, 2012");
console.log("Milliseconds since Jan 1, 1970:", parsedMilliseconds);

// Converting Milliseconds to Date Object
const parsedDate = new Date(parsedMilliseconds);
console.log("Parsed Date from Milliseconds:", parsedDate);
