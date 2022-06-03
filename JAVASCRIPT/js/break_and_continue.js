/*
var rnd = Math.floor((Math.random()*50)+1);
var message = 'Random odd number to skip is: ' + isOdd(rnd);
console.log(message);
function isOdd(x) {
    if (rnd % 2 == 0) {rnd += 1;
                        return rnd} 
    else{ rnd; return rnd;}
}
for(var i = 1; i < 50; i++){
	if ((i % 2) === 0) {
		continue;	
	}
	if (i === rnd) {
		console.log('Yikes! Skipping number: ' + rnd);

	}
	else{
	console.log('Here is an odd number: ' + i);
    }
}
*/
console.log("Number to skip is: 27");
for(var i = 1; i < 50; i++){
	if ((i % 2) === 0) {
		continue;	
	}
	if (i === 27) {
		console.log('Yikes! Skipping number: ' + 27);
	}
	else{
	console.log('Here is an odd number: ' + i);
    }
}