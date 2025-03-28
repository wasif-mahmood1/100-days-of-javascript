# Day 13: JavaScript Template Strings

## Back-Ticks Syntax
Template Strings use back-ticks (``) rather than quotes to define a string:

```javascript
let message = `Hello World!`;
console.log(message);
```

## Quotes Inside Strings
Template Strings allow both single and double quotes inside a string:

```javascript
let text = `He's often called "Johnny"`;
console.log(text);
```

## Multiline Strings
Template Strings allow multiline strings:

```javascript
let multilineText = `The quick
brown fox
jumps over
the lazy dog`;
console.log(multilineText);
```

## Variable Substitutions
Template Strings allow variables in strings (String Interpolation):

```javascript
let firstName = "John";
let lastName = "Doe";
let greeting = `Welcome ${firstName}, ${lastName}!`;
console.log(greeting);
```

## Expression Substitution
Template Strings allow expressions inside strings:

```javascript
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
```

## HTML Templates
Template Strings are useful for creating HTML templates:

```javascript
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);
```

## Browser Support
Template Strings are an ES6 feature and are fully supported in all modern browsers since June 2017:

- Chrome 51
- Edge 15
- Firefox 54
- Safari 10
- Opera 38

**Note:** Template Strings are **not supported in Internet Explorer.**
