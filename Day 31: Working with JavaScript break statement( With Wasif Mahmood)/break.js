
// Day 31: JavaScript Break and Continue

// The break statement "jumps out" of a loop.
let textBreak = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  textBreak += "The number is " + i + "\n";
}
console.log("Break Statement Output:\n" + textBreak);

// The continue statement "jumps over" one iteration in the loop.
let textContinue = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  textContinue += "The number is " + i + "\n";
}
console.log("Continue Statement Output:\n" + textContinue);

// JavaScript Labels and break with label
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let textLabel = "";
list: {
  textLabel += cars[0] + "\n";
  textLabel += cars[1] + "\n";
  break list;
  textLabel += cars[2] + "\n";
  textLabel += cars[3] + "\n";
}
console.log("Labelled Block Output:\n" + textLabel);
