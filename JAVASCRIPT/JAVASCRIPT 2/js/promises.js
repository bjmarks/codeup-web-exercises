function wait(time){
    let count = 1;
    console.log(count)
   let timer = setInterval(() => { console.log(count + 1); count++},1000);
   setTimeout(()=> {clearInterval(timer)},time);
   
}
const input = document.querySelector("#input");
const search = document.querySelector("#search");
const users = document.querySelector("#users");
let user;
input.addEventListener("input", () => console.log(input.value));
search.addEventListener("click", () => {
    user = input.value;
    const url = `https://api.github.com/users/${user}/events/public`;
    fetch(url, {'Authorization': token}).then(response => response.json()).then(data => {
        console.log(data);
            for (let i = 0; i <= data.length; i++){
                if (data[i]["type"] == "PushEvent"){
                console.log("push event on " + i + " iteration");
                users.innerHTML += `
                <div class="card">
                <img src="${data[i].actor.avatar_url}" alt="prfile picture">
                <div class="login">${data[i].actor.login}</div>
                <a class="link" href="https://github.com/${data[i].actor.login}">${data[i].actor.display_login}</a>
                <div class="commitsName">${data[i].payload.commits[0].author.name}</div>
                <div class="commitsEmail">${data[i].payload.commits[0].author.email}</div>
                <div class="commitsMessage">${data[i].payload.commits[0].message}</div>
                </div>`;
            }
            else {
                console.log("no Push Event found on the " + i + " iterantion")
            }}
         })
})

// wait(5000).then(()=>{ console.log("waited for " + time)});

