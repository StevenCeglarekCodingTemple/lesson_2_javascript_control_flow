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