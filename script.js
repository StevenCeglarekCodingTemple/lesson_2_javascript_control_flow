// // Function Declarations
// // Syntax: function name(parameters) { code here }
// function greet(name) {
//     console.log(`Hello, ${name}`)
//     return `Hello, ${name}`;
// }

// // Calling the Function
// greet("Mary");
// console.log(greet("Kevin"));


// // Function Expressions
// // Syntax: const name = function(parameters) { code here }
// const greetExpression = function(name) {
//     return `Hello, ${name}`;
// }

// //Calling the Function
// console.log(greetExpression("Joseph"));


// // Arrow Functions (ES6+)
// // Syntax: const name = (parameters) => { code here }
// const greetArrow = (name) => {
//     return `Hello, ${name}`;
// }

// // Shorter syntax for single expressions
// const greetShort = name => `Hello, ${name}`;

// console.log(greetArrow("Franky"));
// console.log(greetShort("Louis"));

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));
// console.log(add(234, 88));

// function greetNew(name = 'Guest', greeting = 'Hello') {
//     return `${greeting}, ${name}`;
// }

// console.log(greetNew());
// console.log(greetNew('Ned'));
// console.log(greetNew('Harry', 'Hi'));

// function createUser(firstName, lastName, age = 18, isActive = true) {
//     return {
//         firstName,
//         lastName,
//         age,
//         isActive,
//         fullName: `${firstName} ${lastName}`
//     };
// }

// const user = createUser('Sherry', 'Smith');
// console.log(user);

// // Functions with return values
// function calculateArea(length, width) {
//     return length * width;
// }

// const area = calculateArea(5, 3);
// console.log(area);

// // Functions without return values (return undefined)
// function logMessage(message) {
//     console.log(`[LOG]: ${message}`)
// }

// const result = logMessage('Hello');
// console.log(result);

// // Global Scope
// let globalVar = 'Im Global';

// function scopeDemo() {
//     console.log(globalVar) // can access global variables
// }

// scopeDemo();

// // Function Scope

// function scopeDemo1() {
//     // Function scope variable
//     let functionVar = 'Im in the function scope';
//     console.log(functionVar);
// }

// console.log(functionVar); Error: functionVar is not defined, cannot access outside of the function
// let blockVar;
// // Block scope
// function scopeDemo3() {
//     if (true) {
//         // Block scope
//         blockVar = 'Im in block scope';
//         console.log(blockVar);
//     }

//     console.log(blockVar);
// }

// console.log(blockVar);
// console.log(scopeDemo3());
// console.log(blockVar);


// var is hoisted but not initialized
console.log(hoistedVar); // undefined (not error)
var hoistedVar = 'Im hoisted';


// console.log(letVar); // Error: Cannot access 'letVar' before initialization
// const/let are not hoisted
let letVar = 'Im not hoisted';

// Function declarations are fully hoisted
console.log(hoistedFunction()); // Works because function is hoisted

function hoistedFunction() {
    return 'Im Hoisted';
}

// Function expressions are not hoisted
// console.log(notHoisted()); // Error: Cannot access 'notHoisted' before initialization
const notHoisted = function() {
    return 'Im not Hoisted';
}