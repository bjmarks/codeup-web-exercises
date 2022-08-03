const cheatCode = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a,Enter";
const sercret = "v,e,n,u,s,Enter";
$("body").on("keydown", checkCode);
let sequence = [];
function checkCode(e) {
    const log = e.key;
    sequence.push(log);
    let seq = sequence.toString();
    if(seq.length < 1000)
        if(seq.includes(cheatCode)){
            $("#myBox").html(`<h1>なに,</h1><h6>you know about God mode?</h6><button onclick="reload()">Return?</button>`);
            $("#song").attr("src", "assests/KonamiCode.mp3");
            $("#song").trigger("play");
            $("body").css("animation", "godMode 1s 4");
            console.log("sound should play");
            sequence =  [];
        }
        else if(seq.includes(sercret)){
            $("#myBox").html(`<h3>Its dangerous to go in alone, take this</h3><button onclick="reload()">Return?</button>`);
            $("#song").attr("src", "assests/Doctor.mp3");
            // song.currentTime = 100;
            $("#song").trigger("play");
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
