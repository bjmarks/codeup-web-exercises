"use strict";
let tools = {};
async function fetchData() {
// TODO: Create an AJAX GET request for the file under data/inventory.json
    const tableBody = document.querySelector("#insertProducts");
    fetch("data/inventory.json").then(response => {
        if (response.status !== 200 || !response.ok){
            throw Error("erorr")
        }
        return response.json();
            }).then(data => {
                console.log(data);
                const tools = data;
                for(let i = 0; i < tools.length; i++) {
                tableBody.innerHTML +=  `<tr><td>${tools[i].title}</td><td>${tools[i].quantity}</td><td>${tools[i].price}</td><td>${tools[i].categories}</td></tr>`;
                }});    
}
fetchData();