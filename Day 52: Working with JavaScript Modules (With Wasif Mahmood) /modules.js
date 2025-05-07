// Day 52: JavaScript Modules.js
// Simulating 'person.js' with Named Exports
const PersonModule = (() => {
  const name = "Jesse";
  const age = 40;
  return { name, age }; // named exports
})();

// Simulating 'message.js' with Default Export
const MessageModule = (() => {
  const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
  };
  return message; // default export
})();

// Simulating 'main.js' with imports and usage
(() => {
  // "Import" named exports
  const { name, age } = PersonModule;

  // "Import" default export
  const message = MessageModule;

  // Use them
  console.log("Named exports:");
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);

  console.log("\nDefault export:");
  console.log(message());
})();
