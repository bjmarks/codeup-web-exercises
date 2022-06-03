"use strict";
//var color = prompt("What is your favourite color of the rainbow?", "red");
function analyzeColor(color) {
    console.log(color);
    if(color === ("red" || "RED" || "Red")){
        alert( color + " is for Roses");
    }
    else if(color === ("orange" || "ORANGE" || "Orange")){
        alert( color + " is for Oranges");
    }
    else if(color === ("yellow" || "YELLOW" || "Yellow")){
        alert( color + " is for Lemons");
    }
    else if(color === ("green" || "GREEN" || "Green")){
        alert( color + " is for Grass");
    }
    else if(color === ("blue" || "BLUE" || "Blue")){
        alert( color + " is for Water");
    }
    else if(color === ("indigo" || "INDIGO" || "Indigo")){
        alert( color + " is for Lapis Lasuli");
    }
    else if(color === ("violet" || "VIOLET" || "Violet")){
        alert( color + " is for Laveveder");
    }
    else {
        alert("I don't know the color " + color);
    }
}
//analyzeColor(color);
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 * You should use an if-else-if-else block to return different messages.
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
 function swicthAnalyzeColor(color){
    console.log(color);
    switch(color){
    case "red" || "RED" || "Red" : console.log( color + " is for Roses");
    break;
    case "orange" || "ORANGE" || "Orange" : console.log( color + " is for Oranges");
    break;
    case "yellow" || "YELLOW" || "Yellow" : console.log( color + " is for Lemons");
    break;
    case "green" || "GREEN" || "Green" : console.log( color + " is for Grass");
    break;
    case "blue" || "BLUE" || "Blue" : console.log( color + " is for Water");
    break;
    case "indigo" || "INDIGO" || "Indigo" : console.log( color + " is for Lapis Lasuli");
    break;
    case "violet" || "VIOLET" || "Violet" : console.log( color + " is for Laveveder");
    break;
    default :  console.log("I don't know the color " + color);
    break;
    }
}
swicthAnalyzeColor(randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var luckyNumber = Math.round(Math.random() * 5);
var totalAmount = 100;
var discount;
console.log(luckyNumber);
function calculateTotal(x){
    switch (x) {
        case 1:
            console.log("You're Discount is  10% for " + (totalAmount * .1) + " Off.");
            discount = 0.10;
        break;
        case 2:
            console.log("You're Discount is  25% for "+ (totalAmount * .25) + " Off.");
            discount = 0.25;
        break;
        case 3:
            console.log("You're Discount is  35% for "+ (totalAmount * .35) + " Off.");
            discount = 0.35;
        break;
        case 4:
            console.log("You're Discount is  50% for " + (totalAmount * .5) + " Off.");
            discount = 0.50;
        break;
        case 5:
            console.log("You're Discount is 100% for " + (totalAmount * 1) + " Off.");
            discount = 1;
        break;
        default:
            console.log("You're Discount is an amazing 0% for " + (totalAmount * 0) + " Off.");
            discount = 0;
        break;
    }
}
calculateTotal(luckyNumber, totalAmount);
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber1 = Math.floor(Math.random() * 6);
var tot = prompt("your total ammount is ", "100");
alert("your lucky number is " + luckyNumber);
calculateTotal(luckyNumber, tot);
alert('your total with discount is ' + (tot * discount));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function jscript() {
    let x = confirm("Would you like to input a number?");
        if(true){
            var takt = prompt("what is the Number young travler? ", "1");
            tFun(takt);
            console.log(takt);
                function tFun(x){
                    console.log(takt);
                    isOdd(takt);
                    function isOdd(x){
                        if(takt % 2 == 0){
                            alert("your number " + takt + " is Even");
                        }
                        else {
                            alert("your number " + takt + " is Odd");
                        }
                    }
                    plusH(takt);
                    function plusH(x){
                        alert("your number " + takt + " is now " + (takt * 100));
                    }
                    isPos(takt);
                    function isPos(x){
                        if(takt > 0) {
                        alert("your number "+ takt + " is in the positives");
                        }
                        else if (takt < 0){
                            alert("your number " + takt + "is in the negitives");
                        }
                        else {
                            alert("your number " + takt + "is zero");
                        }
                    }
                }
        }
        else{
            alert("alright I won't tell you the story of the Holy Flail");
        }
}
jscript();

