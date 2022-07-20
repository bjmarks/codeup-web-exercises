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
            }}
         })
        // .catch();
})
// wait(5000).then(()=> console.log('You\'ll see this after 1 second'));
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of 
// the last commit that user made. Reference the github api documentation to achieve this.
// Create Your Own Promise
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
  