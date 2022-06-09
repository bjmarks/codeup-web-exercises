"use strict";
console.log('Hello World');
console.log("99.9 is a " + typeof(99.9));
console.log(99.9);
console.log('"false" is a ' + typeof("false"));
console.log("false");
console.log("false is a " + typeof(false));
console.log(false);
console.log("'0' is a " + typeof('0'));
console.log('0');
console.log("0 is a " + typeof(0));
console.log(0);
console.log("true is a " + typeof(true));
console.log(true);
console.log("'true' is a " + typeof('true'));
console.log('true');
console.log('%c ------------------------------------ ', 'color: #222; background: #bada55');
console.log("'1' + 2 becomes " + '1' + 2);
console.log("typeof '1' + 2 becomes " +  typeof '1' + 2);
console.log("6 % 4 becomes " + 	6 % 4);
console.log("'3 + 4 is ' + 3 + 4 becomes " + '3 + 4 is ' + 3 + 4);
console.log("how could you make this produce the correct output?");
console.log("'3 + 4 is ' + 3 + 4 becomes " + '3 + 4 is ' + (3 + 4));
console.log("0 < 0 becomes " + (0 < 0));
console.log("'false' == false becomes " + ('false' == false));
console.log("true == 'true'	 becomes " + (true == 'true'));
console.log("5 >= -5 becomes " + (5 >= -5));
console.log("!false || false becomes " + (!false || false));
console.log('true || "42" becomes ' + (true || "42"));
console.log("!true && !false becomes " + (!true && !false));
console.log("6 % 5 becomes " + 	(6 % 5));
console.log("5 < 4 && 1 === 1  becomes " + (5 < 4 && 1 === 1));
console.log("typeof 'codeup' === 'string' becomes " + (typeof 'codeup' === 'string'));
console.log("'codeup' === 'codeup' && 'codeup' === 'Codeup' becomes " + ('codeup' === 'codeup' && 'codeup' === 'Codeup'));
console.log("4 >= 0 && 1 !== '1' becomes " + (4 >= 0 && 1 !== '1'));
console.log("6 % 3 === 0 becomes " + (6 % 3 === 0));
console.log("5 % 2 !== 0 becomes " + (5 % 2 !== 0));
console.log('%c ------------------------------------ ', 'color: #222; background: #bada55');
function varitables() {
    var a = 1;
    console.log("a is " + a);
    var b = a++;
    console.log("b is " + b);
    var c = ++a;
    console.log("c is " + c);
    console.log(a + " " + b + " " + c);
    var d = "hello";
    console.log(d);
    var e = false;
    console.log(e);
    d++;
    console.log(d);
    e++;
    console.log(e);
    var perplexed; // perplexed is undefined (no value is assigned)
    console.log(perplexed);
    perplexed + 2;
    console.log(perplexed);
    var price = 2.7;
    console.log(price);
    console.log(price.toFixed(2));
    var price = "2.7";
    console.log(price);
    //console.log("price with a toFixed stirng becomes " + (price.toFixed(2)));
}
varitables();
console.log('%c ------------------------------------ ', 'color: #222; background: #bada55');
console.log("0 is "	+ isNaN(0));
console.log("1 is "	+ isNaN(1));
console.log('"" is '	+ isNaN(""));
console.log('"string" is ' +	isNaN("string"));
console.log('"0" is ' + isNaN("0"));
console.log('"1" is ' + isNaN("1"));
console.log('"3.145" is ' + isNaN("3.145"));
console.log("Number.MAX_VALUE is " + isNaN(Number.MAX_VALUE));
console.log("Infinity is " + isNaN(Infinity));
console.log('"true" is ' + isNaN("true"));
console.log("true is " + isNaN(true));
console.log('"false" is ' + isNaN("false"));
console.log("false is " + isNaN(false));
console.log('NaN == NaN' + NaN == NaN);
console.log('!true' + !true);
console.log('!false' + !false);
console.log('!!true' + !!true);
console.log('!!false' + !!false);
console.log('!!0' + !!0);
console.log('!!-0' + !!-0);
console.log('!!1' + !!1);
console.log('!!-1' + !!-1);
console.log('!!0.1' + !!0.1);
console.log('!!"hello"' + !!"hello");
console.log('!!""' + !!"");
console.log("!!''" + !!'');
console.log('!!"false"' + !!"false");
console.log('!!"0"' + !!"0");
console.log('%c ------------------------------------ ', 'color: #222; background: #bada55');
var sample = "Hello Codeup";
console.log(sample + " length is " + sample.length);
console.log(sample.toUpperCase() + " || || || " + sample.toLowerCase());
sample += " Students";
console.log(sample);
console.log(sample.replace("Students", "Class"));// Replace "Students" with "Class".
console.log(sample.indexOf("c") + " " + sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), (sample.indexOf("p") + 1)));
function myPrice() {
    var Brother_Bear = 5, Little_Mermaid = 3, Hercules = 1;
    var movies = [Little_Mermaid, Brother_Bear, Hercules];
    let price = 5;
    var total = 0;
    total = ((movies[0] * price) + (movies[1] * price)+(movies[2] * price));
    console.log("$" + total + " for all the movies rented");
}
myPrice();
function companies(){
    var google_p = 400, amazon_p = 380, facebook_p = 350;
    var google_h = 6, amazon_h = 4, facebook_h = 10;
    var paycheck = 0;
    paycheck = ((google_p * google_h) + (amazon_p * amazon_h) + (facebook_p * facebook_h));
    console.log("The total ammount i will get paid this week is $" + paycheck);
}
companies();
function schedule() {
    var timeFree = Math.round(Math.random() * 56);
    var classTime = Math.round(Math.random() * 112);
    var classLimit = 25;
    var classCount = Math.round(Math.random() * 25);
    var able;
    console.log(timeFree + "/" + classTime + " " + classCount + "/" + classLimit)
    if(timeFree > classTime && classCount < classLimit) {
        able = true;
    }
    else {
        able = false;
    }
    console.log(able);
}
schedule();
function cuopon() {
    var offer,
        bought = Math.round(Math.random() * 10),
        expired = Math.round(Math.random() * 10),
        member = Math.round(Math.random() * 10);
    console.log(bought + " " + member + " " + expired)
    if (member<5) {
        if (bought > 2) {
            if(expired > 5){
                offer = true;
            }
            else{offer = false;}
        }
        else{offer = false;}
    }
    else if (expired > 5) {
        offer = true;
    }
    else{offer = false;}
    console.log(offer);
}
cuopon();
function login() {
    var username = 'codeup';
    var password = 'notastrongpassword';
    var login;
    console.log("password length is " + password.length + 1);
    console.log("password dosen't contain username " + (password.search(username) <= -1));
    console.log("username isn't too long " + (username.length < 20));
    console.log("username has no blank space " + (username.search(" ") <= -1));
    console.log("password has no blank space " + (password.search(" ") <= -1));
    if ((password.length + 1 > 5) && (password.search(username) <= -1) && username.length < 20 && username.search(" ") <= -1 && password.search(" ") <= -1){
        login = true;
    }
    else {
        login = false;
    }
    console.log("login is " + login);
}
login();
console.log("%c Hello World ","font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");