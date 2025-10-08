// Conditional Statements

const checkAge = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log(checkAge(20)); // Adult
console.log(checkAge(16)); // Minor

const getGrade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(85)); // B
console.log(getGrade(45)); // F

const getDayName = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(3)); // Wednesday
console.log(getDayName(8)); // Invalid day

// Ternary Operator
// Syntax: condition ? valueIfTrue : valueIfFalse

const isEven = number => {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(4)); // Even
console.log(isEven(3)); // Odd

// Multiple Conditions
const getStatus = age => {
    return age >= 18 ? "Adult" : age >= 13 ? "Teen" : "Child"
}

// Basic for loop
const countToTen = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// Loop through array
const printArrayItems = (items) => {
    for (let i = 0; i < items.length; i++){
        console.log(`Item ${i}: ${items[i]}`)
    }
}

const fruits = ['apple', 'banana', 'strawberry'];
printArrayItems(fruits);

// While Loop
const countdownFrom = (n) => {
    while (n > 0) {
        console.log(n);
        n--;
    }
    console.log("Blast off")
}

countdownFrom(5);

// For.... of Loops (Arrays)
const printArrayItemsInForOfLoop = (items) => {
    for (let item of items) {
        console.log(item);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
printArrayItemsInForOfLoop(numbers);

// For..... in Loops (Objects)
const printObjectProperties = (obj) => {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}

const person = {
    name: 'Frank', 
    age: 25, 
    city: 'New York'
};
printObjectProperties(person);

// Break - exit loop early
const findFirstEven = (numbers) => {
    for (let i =0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(`First even number: ${numbers[i]} at index ${i}`);
            break;
        }
    }
}

// Continue - skip current iteration
const printOddsOnly = (numbers) => {
    for (let num of numbers) {
        if (num % 2 === 0) {
            continue;
        } 
        console.log(`Odd Number: ${num}`)
    }
}

const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findFirstEven(testNumbers);
printOddsOnly(testNumbers);


// 1. Create a function declaration that calculates the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// 2. Create a function expression that calculates the perimeter
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};

// 3. Create an arrow function that calculates the diagonal
const calculateDiagonal = (length, width) => {
    return Math.sqrt(length * length + width * width);
};

// 4. Test all functions
let length = 5;
let width = 3;

console.log("=== Rectangle Calculations ===");
console.log(`Length: ${length}, Width: ${width}`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);



// 1. Create a function that determines if a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 2. Create a function that determines the season based on month
function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Fall";
    } else {
        return "Winter";
    }
}

// 3. Create a function that calculates discount based on age
function calculateDiscount(age, price) {
    if (age < 18) {
        return price * 0.1; // 10% discount
    } else if (age >= 65) {
        return price * 0.2; // 20% discount
    } else {
        return 0; // No discount
    }
}

// 4. Test all functions
console.log("=== Decision Making Practice ===");
console.log("Number check:", checkNumber(5)); // Positive
console.log("Number check:", checkNumber(-3)); // Negative
console.log("Number check:", checkNumber(0)); // Zero

console.log("Season check:", getSeason(6)); // Summer
console.log("Season check:", getSeason(12)); // Winter

console.log("Discount for 16-year-old, $100:", calculateDiscount(16, 100)); // 10
console.log("Discount for 70-year-old, $100:", calculateDiscount(70, 100)); // 20
console.log("Discount for 30-year-old, $100:", calculateDiscount(30, 100)); // 0



// 1. Create a function that prints multiplication table
function multiplicationTable(number) {
    console.log(`=== Multiplication Table for ${number} ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// 2. Create a function that finds the sum of all numbers in an array
function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// 3. Create a function that finds the largest number in an array
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// 4. Create a function that prints numbers 1 to 100, but skips multiples of 7
function printNumbersSkipSeven() {
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            continue; // Skip multiples of 7
        }
        console.log(i);
    }
}

// 5. Test all functions
console.log("=== Loop Practice ===");
multiplicationTable(5);

console.log("\n=== Array Sum ===");
// const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of ${testNumbers}: ${sumArray(testNumbers)}`);

console.log("\n=== Find Largest ===");
console.log(`Largest in ${testNumbers}: ${findLargest(testNumbers)}`);

console.log("\n=== Numbers 1-100 (skip multiples of 7) ===");
printNumbersSkipSeven();


// Number Guessing Game
function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;
    
    console.log("=== Number Guessing Game ===");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log(`You have ${maxAttempts} attempts to guess it!`);
    
    // Simulate guesses (in real app, this would be user input)
    const guesses = [50, 25, 75, 60, 65, 63, 64];
    
    for (let guess of guesses) {
        attempts++;
        console.log(`\nAttempt ${attempts}: You guessed ${guess}`);
        
        if (guess === secretNumber) {
            console.log(`🎉 Congratulations! You guessed it in ${attempts} attempts!`);
            return;
        } else if (guess < secretNumber) {
            console.log("Too low! Try a higher number.");
        } else {
            console.log("Too high! Try a lower number.");
        }
        
        if (attempts >= maxAttempts) {
            console.log(`\n💀 Game Over! The secret number was ${secretNumber}`);
            return;
        }
    }
}

// Additional functions for the game
function getHint(guess, secretNumber) {
    const difference = Math.abs(guess - secretNumber);
    if (difference <= 5) {
        return "Very close!";
    } else if (difference <= 15) {
        return "Getting warmer!";
    } else {
        return "Still cold!";
    }
}

function calculateScore(attempts, maxAttempts) {
    const percentage = ((maxAttempts - attempts + 1) / maxAttempts) * 100;
    return Math.round(percentage);
}

// Run the game
numberGuessingGame();