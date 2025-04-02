// JavaScript Date Objects Demonstration

// 1. Creating Date Objects
const currentDate = new Date();
const specificDate = new Date("2022-03-25");
const dateFromNumbers = new Date(2025, 10, 18, 10, 30, 45); // Nov 18, 2025
const dateFromMilliseconds = new Date(100000000000);

console.log("Current Date:", currentDate);
console.log("Specific Date:", specificDate);
console.log("Date from Numbers:", dateFromNumbers);
console.log("Date from Milliseconds:", dateFromMilliseconds);

// 2. Displaying Dates
console.log("toString:", currentDate.toString());
console.log("toDateString:", currentDate.toDateString());
console.log("toUTCString:", currentDate.toUTCString());
console.log("toISOString:", currentDate.toISOString());

// 3. Getting Date Components
console.log("Year:", currentDate.getFullYear());
console.log("Month (0-based):", currentDate.getMonth());
console.log("Day:", currentDate.getDate());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("Milliseconds:", currentDate.getMilliseconds());
console.log("Day of the week:", currentDate.getDay()); // 0 = Sunday, 6 = Saturday

// 4. Setting Date Components
let newDate = new Date();
newDate.setFullYear(2030);
newDate.setMonth(5); // June
newDate.setDate(15);
newDate.setHours(12, 45, 30);
console.log("Updated Date:", newDate);

// 5. Comparing Dates
const date1 = new Date("2024-10-01");
const date2 = new Date("2024-12-01");
console.log("Date1 < Date2:", date1 < date2);
console.log("Date1 > Date2:", date1 > date2);

// 6. Converting Dates to Milliseconds
const millisecondsSinceEpoch = currentDate.getTime();
console.log("Milliseconds since Jan 1, 1970:", millisecondsSinceEpoch);

// 7. Creating Dates from Milliseconds
const newDateFromMilliseconds = new Date(millisecondsSinceEpoch + 86400000); // +1 day
console.log("Date after 1 day:", newDateFromMilliseconds);

// 8. Handling Time Zones
console.log("Locale String:", currentDate.toLocaleString());
console.log("Locale Date String:", currentDate.toLocaleDateString());
console.log("Locale Time String:", currentDate.toLocaleTimeString());

// 9. Exercise: What is the date created here?
const exerciseDate = new Date(2024, 10, 18); // November 18, 2024
console.log("Exercise Date:", exerciseDate);
