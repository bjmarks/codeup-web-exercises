"use strict";
console.log("Hello from external JavaScript");
function button(){
alert('Welcome to my Website!');
let ask = prompt("what's your fouvrite color? " , "green");
alert("Great, " + ask + " that's my favorite color too");
var Brother_Bear = prompt("How Many days do you want to rent the movie Brother Bear?", 5);
var Little_Mermaid = prompt("How Many days do you want to rent the movie Little Mermaid?", 3);
var Hercules = prompt("How Many days do you want to rent the movie Hercules?", 1);
var google_h = prompt("How many hours did you work this week for Google ? ", 6), 
amazon_h = prompt("How many hours did you work this week for amazon ?", 4),
facebook_h = prompt("How many hours did you work this week for facebook ?", 10);
var timeFree = prompt("how many hours of learning can you do ? ", (Math.round(Math.random() * 50)));
var bought = prompt("How many items are you going to buy ? ", (Math.round(Math.random() * 10)));
var member = prompt("are you a member ?", "yes");
var pro1 = prompt("type in username",'codeup');
var pro2 = prompt("type in your password",'notastrongpassword');
function myPrice() {
    var movies = [Little_Mermaid, Brother_Bear, Hercules];
    let price = 3;
    var total = 0;
    total = ((movies[0] * price) + (movies[1] * price)+(movies[2] * price));
    alert("$" + total + " for all the movies rented");
    console.log("$" + total + " for all the movies rented");
}
myPrice();
function companies() {
    var google_p = 400, amazon_p = 380, facebook_p = 350;
    var paycheck = 0;
    paycheck = ((google_p * google_h) + (amazon_p * amazon_h) + (facebook_p * facebook_h));
    alert("The total ammount i will get paid this week is $" + paycheck);
    console.log("The total ammount i will get paid this week is $" + paycheck);
}
companies();
function schedule() {
    var classTime = Math.round(Math.random() * 70);
    var classLimit = 25;
    var classCount = Math.round(Math.random() * 25);
    var able;
    console.log(timeFree + "/" + classTime + " " + classCount + "/" + classLimit)
    if(timeFree > classTime && classCount < classLimit) {
        able = "your able to Join School to learn";
    }
    else {
        able = "there seems to be a conflict with your selection";
    }
    alert(able);
    console.log(able);
}
schedule();
function cuopon() {
    var offer,
         expired = Math.round(Math.random() * 10);
    console.log(bought + " " + member + " " + expired);
    if (member != "yes" || "Yes" || "Y" || "YES") {
        if (bought > 2) {
            if(expired > 5){
                offer = "OFFER Applied";
            }
            else{offer = "OFFER NOT Applied";}
        }
        else{offer = "OFFER NOT Applied";}
    }
    else if (expired > 5) {
        offer = "OFFER Applied";
    }
    else{offer = "OFFER NOT Applied";}
    alert(offer);
    console.log(offer);
}
cuopon();
function login() {
    var username = pro1;
    var password = pro2;
    var login;
    console.log("password length is " + (password.length + 1));
    console.log("password dosen't contain username " + (password.search(username) <= -1));
    console.log("username isn't too long " + (username.length < 19));
    console.log("username has no blank space " + (username.search(" ") <= -1));
    console.log("password has no blank space " + (password.search(" ") <= -1));
    if ((password.length + 1 > 5) && (password.search(username) <= -1) && username.length < 19 && username.search(" ") <= -1 && password.search(" ") <= -1){
        login = true;
    }
    else {
        login = false;
    }
    console.log("login is " + login);
}
login();};