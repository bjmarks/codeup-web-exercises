/*
Code For Java.html 
*/


			// <nav id="block">
			// 	<ul id="links">
			// 		<li><a href="HWCU.html" active>Home Page</a></li>
			// 		<li><a href="form.html">Form Page</a></li>
			// 		<li><a href="css_intro.html">Css Page</a></li>
			// 		<li><a href="Java.html">Java Page</a></li>
			// 	</ul>
		 // 	 </nav>
			// <hr>



/*
code for Exercises
*/
console.log("JS Running -> Hello from external JavaScript");
var test = "Hello Codeup";
console.log('test is ' + test);
var name = "Codeup";
console.log("name's type is " + typeof name);
var almostPi = 3.14;
console.log("almostPi's type is " + typeof almostPi);
var success = true;
console.log("success's type is " + typeof success);
var todoList = [];
console.log("todoList's type is " + typeof todoList);
var car = {};
console.log("car's type is " + typeof car);
var doSomething = function () {};
console.log("doSomething's type is " + typeof doSomething);
var unassigned;
console.log("unassigned's type is " + typeof unassigned);
var setToNull = null;
console.log("setToNull's type is " + typeof setToNull);
console.log('!true is = ' + !true);;
console.log('!false is equal to ' + !false);
console.log('!!true is equal to ' + !!true);
console.log('!!false is equal to ' + !!false);
console.log('!!0 is equal to ' + !!0);
console.log('!!-0 is equal to ' + !!-0);
console.log('!!1 is equal to ' + !!1);
console.log('!!-1 is equal to ' + !!-1);
console.log('!!0.1 is equal to ' + !!0.1);
console.log('!!"hello"  is equal to ' + !!"hello");
console.log('!!"" is equal to ' + !!"");
console.log("!!'' is equal to " + !!'');
console.log('!!"false" is equal to ' + !!"false");
console.log('!!"0" is equal to ' + !!"0");
console.log('"false && false || true" comes out as '+ (true || false && false));
console.log('"true || !true && true && false" comes out as ' + (true || !true && true && false));
console.log("5 + 10 x 20 is " + (5 + 10 * 20));
var a = 1;
console.log("a is " + a);
var b = a++;
console.log("b is " + b);
var c = ++a;
console.log("c is " + c);
console.log("a Should be 1, " + "b Should be 2, " + "c Should be 3, ");
var d = "hello";
console.log("d is equal to " + d);
var e = false;
console.log("e is equal to " + e);
console.log("d++ becomes " + d++);
console.log("e++ becomes " + e++);
var perplexed;
console.log(perplexed);
perplexed + 2;
console.log(perplexed);
var price = 2.7;
console.log(price.toFixed(2));
if (isNaN(0)) {
		console.log("isNaN(0) is true");
	}
	else
		console.log("isNaN(0) is false");
if (isNaN(1)) {
		console.log("isNaN(1) is true");
	}
	else
		console.log("isNaN(1) is false");
if (isNaN("")) {
		console.log("isNaN'' is true");
	}
	else
		console.log("isNaN'' is false");
if (isNaN("string")) {
		console.log("isNaN('string')true");
	}
	else
		console.log("isNaN('string')false");
if (isNaN("0")) {
		console.log("isNaN('0') is true");
	}
	else
		console.log("isNaN('0') is false");
if (isNaN("1")) {
		console.log("isNaN('1') is true");
	}
	else
		console.log("isNaN('1') is false");
if (isNaN("3.145")) {
		console.log("isNaN('3.145') is true");
	}
	else
		console.log("isNaN('3.145') is false");
if (isNaN(Number.MAX_VALUE)) {
		console.log("isNaN(Number.MAX_VALUE) is true");
	}
	else
		console.log("isNaN(Number.MAX_VALUE) is false");
if (isNaN(Infinity)) {
		console.log("isNaN(Infinity) is true");
	}
	else
		console.log("isNaN(Infinity) is false");
if (isNaN("true")) {
		console.log("isNaN('true') is true");
	}
	else
		console.log("isNaN('true') is false");
if (isNaN(true)) {
		console.log("isNaN(true) is true");
	}
	else
		console.log("isNaN(true) is false");
if (isNaN("false")) {
		console.log("isNaN('false') is true");
	}
	else
		console.log("isNaN('false') is false");
if (isNaN(false)) {
	 	console.log("isNaN(false) is true");
	 }
	else 
		console.log("isNaN(false) is false");
	var string1 = "NaN == NaN is ";
console.log(string1)
console.log(NaN == NaN);
var sample = "Hello Codeup";
console.log('samples length is ' + sample.length);
console.log(sample.toLowerCase());
console.log(sample.toUpperCase());
sample += " Students";
console.log(sample);
let new1 = sample.replace("Students", "Class");
console.log(new1);
console.log(new1.indexOf("c"));
console.log(new1.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"),sample.indexOf(" S")));
console.log(parseInt("abcd1234"));
console.log(parseInt("1234abcd"));
console.log(parseInt("1,000"));
console.log(parseInt("2.12"));
console.log(parseInt("0"));
console.log(parseInt(""));
console.log(parseFloat("3.14"));
"use strict";
//--------------------------------------------------------------------
// 			ifElse Exercise
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var favorite = 'orange';
console.log('If/Else color is ' + color);
if (color === 'red') {
console.log('Clifford is the color of red');
}
else if (color === 'orange') {
	console.log('cheeto puffs are the color of orange');
}
else if (color === 'yellow') {
	console.log('lemon are the color of yellow');
}
else if (color === 'green') {
	console.log('slime is the color of green');
}
else if (color === 'blue') {
	console.log('winter is the color of blue');
}
else {
	console.log('%cI do not know anything by that color, theres not much here' , 'color: violet; background:indigo;');
}
(color === favorite) ? console.log(color + " is my favorite color!") : console.log(color + " is not my favorite color!");
//------------------------------------------------------------------------
//			switch Exercise
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
console.log("Switch color is " + color);
switch (color) {
	case 'red':
		console.log('Clifford is the color of red')
		break;
	case 'orange':
		console.log('cheeto puffs are the color of orange');
		break;
	case 'yellow':
		console.log('lemons are the color of yellow');
		break;
	case 'green':
		console.log('slime is the color of green');
		break;
	case 'blue':
		console.log('winter is the color of blue');
		break;
	default: 
	console.log('%cI do not know anything by that color, theres not much here' , 'color: violet; background:indigo;');
	}
//---------------------------------------------------------------------------
//			while loops
var i = 1;
var loop = 0;
while (i < 65536) {
	i = i * 2;
	loop++;
	console.log(' while loop #' + loop + ' is equal to ' + i);
	}
//---------------------------------------------------------------------------
//			forLoop Exercise
var count = 1;
for (var i = 100; i > 0; i--) {
console.log('for loop #' + count + ' is equal to ' + i);
i = i-4;
count++;
}
//---------------------------------------------------------------------------
//			Break&Continue Exercise
var rnd = Math.floor((Math.random()*50)+1);
console.log('Random odd number to skip is: ' + rnd);
for(var i= 1; i < 50; i++){
	if ((i % 2) === 0) {
		continue;	
	}
	if (i === rnd) {
		console.log('Yikes! Skipping number: ' + rnd);

	}
	else{
	console.log('Here is an odd number: ' + i);
}}
//---------------------------------------------------------------------------
// 			Funtions Excersice
var myNameIs = 'Benjamin';
function sayHello(name) {
console.log("Hello My name is " + name);
}
sayHello(myNameIs);
var random = Math.floor((Math.random()*100)+1);
function isOdd(x) {
	(x % 2 == 0) ? console.log("the number " + random +" is even"):console.log("the number " + random +" is odd");
}
isOdd(random);
//---------------------------------------------------------------------------
//			User Interaction
function userLogin(){
	var name = prompt("What is your Name?");
	if (name === '') {
		userLogin();
	}
	else{
		alert("welcome " + name);
	}
	var response = confirm("Do you like pineapple pizza?");
		if(response){
			alert('I like it too, ' + name);
		}
		else {
			alert('well i like pineapple pizza, you must be one of those people who like sweet corn as a topping?');
		}
}
//---------------------------------------------------------------------------
//			Variable Scope
(function() {
var myNameWas = 'Joseph';
function sayHello(name) {
console.log("Hello My name is " + name);
}
sayHello(myNameWas);
var randomV = Math.floor((Math.random()*100)+1);
function isOdd(x) {
	(x % 2 == 0) ? console.log("the 2nd number " + randomV +" is even"):console.log("the 2nd number " + randomV +" is odd");
}
isOdd(randomV);
})();
//---------------------------------------------------------------------------
//			Iteration Arrays
var names = ['Alysha', 'Benjamin', 'Carlos', 'Daniel'];
	console.log('there are ' + names.length + ' in the array');
	console.log('the first name is ' + names[0]);
	console.log('the second name is ' + names[1]);
	console.log('the third name is ' + names[2]);
	console.log('the fourth name is ' + names[3]);
//---------------------------------------------------------------------------
//			forEach Iteration Arrays
(function(){
    "use strict";
    var names = ['Alysha', 'Benjamin', 'Carlos', 'Daniel', 'Emily'];
    var count = 0;
	console.log('there are ' + names.length + ' in the array');
	for (var i = 0; i  < names.length; i++) {
		console.log('Name at For loop index:' + i + ' is ' + names[i]);
	}
	names.forEach(function(name, count){
		count++;
	console.log('The name at ForEach loop index: ' + (count - 1)  + ' is '  + names[count - 1]);
});})();
//---------------------------------------------------------------------------
//			Manipulating Arrays
(function(){
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        //console.log("---- ---- ---- ----");
    }
    logPlanets();
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');
    logPlanets();
  	console.log('Adding "Pluto" to the end of the planets array.');
  	planets.push('Pluto');
	logPlanets();
	console.log('Removing "The Sun" from the beginning of the planets array.');
	planets.shift(0);
	logPlanets();
 	console.log('Removing "Pluto" from the end of the planets array.');
 	planets.pop();
    logPlanets();
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Earth's index is # " + planets.indexOf('Earth'));
    console.log('Using splice to remove the planet after "Earth".');
    planets.splice(3, 1);
    logPlanets();
    console.log('Using splice to add back the planet after "Earth".');
    planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars');
    logPlanets();
    console.log("Reversing the order of the planets array.");
    planets.reverse();
    logPlanets();
    console.log("Sorting the planets array.");
    planets.sort();
    logPlanets();
})();
//---------------------------------------------------------------------------
//			Split And Join Arrays
	function stringA() {
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|'); 
	console.log(planetsArray);
	var res = planetsArray.join('<br>');
	//document.write(res);
	document.getElementById('string1').innerHTML = res;
	var i = 0;
	planetsArray.forEach(function(x){
		console.log(planetsArray[i]);
		i++;
	});}
	function stringB() {
	var secString = 'Alysha Benjamin Carlos Daniel Emily Fred Greg Hugh Ignel Joker Kotaro Licht Mark Natsu';
	var secondString = secString.split(' ');
	var text = '<ul>';
	for (var i = 0; i < secondString.length; i++) {
		text += "<li>" + secondString[i] + "</li>";	
	 console.log(secondString[i]);
	}
	text += "</ul>";
	document.getElementById('string2').innerHTML = text;       
	}















