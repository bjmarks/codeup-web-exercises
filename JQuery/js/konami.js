const cheatCode = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a,Enter";
const sercret = "v,e,n,u,s,Enter";
const body = document.querySelector("body");
const sound = document.getElementById("song");
const box = document.getElementById('myBox');
body.addEventListener("keydown", checkCode);
//body.addEventListener("keypress", function(e){console.log("Key "+ e.key + " pressed");})
let sequence = [];
function checkCode(e) {
const log = e.key;
sequence.push(log);

let seq = sequence.toString();
if(seq.length < 1000)
    if(seq.includes(cheatCode)){
        box.innerHTML = `<h1>なに,</h1><h6>you know about God mode?</h6><button onclick="reload()">Return?</button>`
        sound.src = "assests/KonamiCode.mp3";
        sound.play();
        sound.playbackRate = 2
        body.style.animation = "godMode 1s 4";  
        console.log("sound should play");
        sequence =  [];
    }
    else if(seq.includes(sercret)){
        box.innerHTML = `<h3>Its dangerous to go in alone, take this</h3><button onclick="reload()">Return?</button>`
        sound.src = "assests/Doctor.mp3";
        sound.currentTime = 100;
        sound.play();
        sound.playbackRate = 4;
        console.log("sound should play");
        sequence =  [];
    }
    else{
        console.log(seq);
    }
else {
    console.log("max char reached, reseting code");
    sequence = [];
}
}
function reload(){
location.reload();
}
const leftArrowKey = document.getElementById("leftArrowKey");
leftArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowLeft'}))});
const upArrowKey = document.getElementById("upArrowKey");
upArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowUp'}))});
const downArrowKey = document.getElementById("downArrowKey");
downArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowDown'}))});
const rightArrowKey = document.getElementById("rightArrowKey");
rightArrowKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'ArrowRight'}))});
const aKey = document.getElementById("aKey");
aKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'a'}))});
const bKey = document.getElementById("bKey");
bKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'b'}))});
const startKey = document.getElementById("startKey");
startKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Enter'}))});
const fireKey = document.getElementById("fireKey");
fireKey.addEventListener("click", () => {body.dispatchEvent(new KeyboardEvent("keydown", {'key': 'Space'}))});