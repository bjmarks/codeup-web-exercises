let dd = document.querySelectorAll(".invisible");
let dt = document.querySelectorAll("dt");
let ulParent = document.getElementById('ulParent');
let btn = document.getElementById("ylw").addEventListener("click", yellBG);
let heading0 = ulParent.children[0].firstElementChild.addEventListener("click", bold);
let heading1 = ulParent.children[1].firstElementChild.addEventListener("click", bold);
let heading2 = ulParent.children[2].firstElementChild.addEventListener("click", bold);
let li = function list(a) {
    for (let i = 0; i < ulParent.children.length; i++){
        let ulChild = ulParent.children[i].lastElementChild.children;
        for (let j = 0; j < ulChild.length; j++){
           let liGrandChild = ulChild[j];
           liGrandChild.addEventListener("click", function () {
                ulChild[0].classList.toggle("blueText");
                console.log("Clicked");
           })
        }   
    }
}();
document.getElementById("show").addEventListener("click" , () => {
    for (let i = 0; i < dd.length; i++) {
        const element = dd[i];
        console.log('log' + i); 
        element.classList.toggle("invisible");   
    }
});
dt.forEach(function (t) {
    t.addEventListener("click", function (e) {
        this.classList.toggle("green");
    })    
})
function yellBG() {
    console.log("clicked");
    for(let i = 0; i < ulParent.children.length; i++){
    ulParent.children[i].lastElementChild.lastElementChild.classList.toggle("yellow");
    }
}
function bold(){
    console.log("clicked");
        this.nextElementSibling.style.fontWeight = "bold";
        this.nextElementSibling.style.color = "blue";
}