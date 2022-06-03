"use strict";
function showMultiplicationTable(x) {
    for (let i = 1; i < 11; i++) {
        console.log((x) + " * " + (i) + " = " + (x * i));
    }
}
//showMultiplicationTable(5);
function isOddOrEven(x) {
    for (let i = 1; i < 11; i++) {
        var rand = Math.floor((Math.random() * 180) + 20);
            if(rand % 2 == 0){
                console.log(rand + " is even");
            }
            else{
                console.log(rand + " is odd");
        }
    }
}
//isOddOrEven();
function countIncrease(x) {
    for (let i = 1; i <= 9; i++) {
        var count = [];
        for (let a = 1; a <= i; a++) {
            count.push(i);
        }
        console.log(count.join(""));
    }
}
//countIncrease();
function countDown(){
    for (let iCount = 100; iCount > 0; iCount--) {
        console.log(iCount);
        iCount = iCount - 4;
    }
}
//countDown();