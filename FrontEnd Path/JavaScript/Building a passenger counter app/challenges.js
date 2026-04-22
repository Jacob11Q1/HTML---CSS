// let myAge = 30;
// console.log(myAge);

// let firstBatch = 5;
// let secondBatch = 8;
// let count = firstBatch + secondBatch;
// console.log(count);

// Challenge Human To Dog Age Ratio:
let myAge = 30;
let humanDogRatio= 7;
let myDogAge = myAge * humanDogRatio;
console.log("My Dog Age: " + myDogAge);

// Assigneing the value of count
let count = 5;
count = count + 2;
console.log(count);

// Challenges Day 1: 15 - 4 - 2026 Basics
// Challenge BonusPoints:
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;

bonusPoints = bonusPoints - 75;

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

// Challenge 1 = Bank Account 1:
let balance = 100;
balance = balance + 50;
console.log(balance);

balance = balance - 30;
console.log(balance);

balance = balance + 10;
console.log(balance);

// Challenge 2 = Salary 2:
let salary = 500;
salary = salary + (salary * 0.20);
console.log(salary);

salary = salary - 50;
console.log(salary);

// Challenge 3: Fix The Bug 3:
let points = 10;
let bonus = 5;

points = points + bonus;
console.log(points);

// Bonus Challenge:
let name = "Yacoub";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old`)

function increment() {
    console.log("The button was clicked");
}

// setting up the race
function countdown(){
    console.log(5);
    console.log(4);
    console.log(6);
    console.log(2);
    console.log(1);
}

countdown()

// Declare The Number Function
function declareTheNumber(){
    console.log(24);
}

declareTheNumber();

// Function That Logs The Sum:
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumOfLaps(){
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
}

sumOfLaps();

// Function the increments:
let lapsCompleted = 0;
function incrementLaps(){
    lapsCompleted = lapsCompleted + 1;
    
}

incrementLaps();
incrementLaps();
incrementLaps();

console.log(lapsCompleted);

// Challenges Day 2: 16 - 4 - 2026 Funtions
// Greeting Function
function greetUser(name){
    return "Hello " + name + "!";
}
console.log(greetUser("Yacoub"));

// Likes Function
function totalLikes(a , b){
    return a + b;
}

let total = totalLikes(8 , 48);
console.log(total);

// Increment Function
function incrementByOne(num){
    return num + 1;
}

let count = 0;
count = incrementByOne(count);
count = incrementByOne(count);
console.log(count);

// Calculate Age Function
function calculateDogAge(age){
    return age * 7;
}

let humanDogAge = calculateDogAge(30);
console.log(humanDogAge);

// Strings
let username = "Jacob";
console.log(username);

// Challenge 1 create a variable, message that stores text
let message = "You have three new notifications";
console.log(message + ", " + username + "!")

// Challenge 2: Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

// Challenge 3: Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let myName = "Jacob";
let greeting = "Hi, my name is ";
let myGreeting = greeting + myName;
console.log(myGreeting);

let points = 5;
let bonusPoints = "45";
let totalPoints = points + bonusPoints;
console.log(totalPoints);

// Examples of Strings vs Variables and Numbers:
console.log(4 + 5); // 9
console.log("2" + "4"); // 24
console.log("5" + 1); // 51
console.log(100 + "100"); // 100100