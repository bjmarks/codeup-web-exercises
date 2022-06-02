"use strict";
function sayHello(name){
    var message = "hello " + name;
   console.log(message);
}
sayHello("codeup");
/*
TODO:
Create a function called 'sayHello' that takes a parameter 'name'.
When called, the function should return a message that says hello to the passed in name.
Example
sayHello("codeup") // returns "Hello, codeup!"
*/
var helloMessage = sayHello("benjamin");
console.log((helloMessage));
/*
TODO:
Call the function 'sayHello' and pass your name as a string literal argument.
Store the result of the function call in a variable named 'helloMessage'.
console.log 'helloMessage' to check your work
*/
var myName = "benjamin J."
sayHello(myName);
/*
TODO:
 Store your name as a string in a variable named 'myName', and pass that
 variable to the 'sayHello' function. You should see the same output in the
 console.
 */
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
function isTwo(x){
    var isTrue;
    if(x === 2){
        isTrue = true;
        console.log("yes this is 2");
    }
    else {
        isTrue = false;
        console.log("no this is not 2");
    }
}
isTwo(random);
/*
TODO:
Create a function called 'isTwo' that takes a number as a parameter.
The function should return a boolean value based on whether or not the passed
number is the number 2.
Example
> isTwo(1) // returns false
> isTwo(2) // returns true
> isTwo(3) // returns false
Call the function 'isTwo' passing the variable 'random' as a argument.
console.log *outside of the function* to check your work (you should see a
different result everytime you refresh the page if you are using the random
number)
 */
var billTotal = Math.round(Math.random() * 9999);
var billQ = alert("Your bill is $" + billTotal);
let pretipQ = prompt("How much of a tip would you like to leave?", "20");
var pretip = pretipQ;
var tipPercentage = (pretip * 0.01);
function calculateTip(tipPercentage, billTotal) {
    var tipTotal = Math.floor(tipPercentage * billTotal);
    console.log(tipTotal);
    var trueTotal = tipTotal + billTotal;
    console.log(trueTotal);
    console.log("youre bill is now $" + trueTotal + " your amount in tip is $" + tipTotal);
    alert("youre bill is now $" + trueTotal + " your amount in tip is $" + tipTotal + " you tipped " + tipPercentage * 100 + "%, and your bill total was " + billTotal);
}
calculateTip(tipPercentage, billTotal);
/*
TODO:
Create a function named 'calculateTip' to calculate a tip on a bill at a
restaurant. The function should accept a tip percentage and the total of the
bill, and return the amount to tip
Examples:
> calculateTip(0.20, 20) // returns 4
> calculateTip(0.25, 25.50) // returns 6.375
> calculateTip(0.15, 33.42) // returns 5.013
*/
/*
TODO:
Use prompt and alert in combination with your calculateTip function to
prompt the user for the bill total and a percentage they would like to tip,
then display the dollar amount they should tip
*/
var originalPrice = Math.round(Math.random() * 999);
console.log("original Price is " + (originalPrice));
var rnd = Math.random() * 10;
var discountPercent = rnd.toFixed(2);
console.log("discounted Percent is " + discountPercent);
function applyDiscount(originalPrice, discountPercent) {
    var discounted = originalPrice - discountPercent;
    console.log("discounted price is now $" + discounted);
}
applyDiscount(originalPrice, discountPercent);
/*
TODO:
Create a function named `applyDiscount`. This function should accept a price
(before a discount is applied), and a discount percentage (a number between 0
and 1). It should return the result of applying the discount to the original
price.
Example:
> var originalPrice = 100;
> var discountPercent = .2; // 20%
> applyDiscount(originalPrice, discountPercent) // 80
> applyDiscount(45.99, 0.12) // 40.4712
*/
