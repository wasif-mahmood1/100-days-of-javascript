// JavaScript String Search Methods

let text = "Wasif lives in Rawalpindi. Wasif is 25 years old.";

// indexOf() - Finds first occurrence
console.log(text.indexOf("Wasif")); // Output: 0

// lastIndexOf() - Finds last occurrence
console.log(text.lastIndexOf("Wasif")); // Output: 25

// search() - Similar to indexOf(), but supports regex
console.log(text.search("Rawalpindi")); // Output: 15
console.log(text.search(/Rawalpindi/)); // Output: 15

// match() - Returns an array of matches
console.log(text.match("Wasif")); // Output: [ 'Wasif', index: 0, input: '...', groups: undefined ]
console.log(text.match(/Wasif/g)); // Output: [ 'Wasif', 'Wasif' ]

// matchAll() - Returns an iterator for all matches
console.log([...text.matchAll(/Wasif/g)]); 
// Output: [ ['Wasif', index: 0, input: '...'], ['Wasif', index: 25, input: '...'] ]

// includes() - Checks if string contains a substring
console.log(text.includes("Rawalpindi")); // Output: true
console.log(text.includes("Islamabad")); // Output: false

// startsWith() - Checks if string starts with a substring
console.log(text.startsWith("Wasif")); // Output: true
console.log(text.startsWith("Rawalpindi")); // Output: false

// endsWith() - Checks if string ends with a substring
console.log(text.endsWith("25 years old.")); // Output: true
console.log(text.endsWith("Rawalpindi.")); // Output: false
