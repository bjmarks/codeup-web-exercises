// "use strict";
// async function fetchData() {
//  const tableBody = document.querySelector("#insertProducts");
//  fetch("data/inventory.json").then(response => {
//     if (response.status !== 200 || !response.ok){throw Error("erorr")}
//      return response.json();
//  }).then(data => { const tools = data;
//         for(let i = 0; i < tools.length; i++) {
//         tableBody.innerHTML +=  `<tr><td>${tools[i].title}</td><td>${tools[i].quantity}</td><td>${tools[i].price}</td><td>${tools[i].categories}</td></tr>`;}});}
// fetchData();
(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", async function () {
        await fetch("data/inventory.json").then(response => {
            if(response.status !== 200){return [];}
            return response.json();}).then(data => {
            const tools = data;
            const tableBody = document.querySelector("#insertProducts");
            for(let i = 0; i < tools.length; i++) {
                tableBody.innerHTML +=  `<tr><td>${tools[i].title}</td><td>${tools[i].quantity}</td><td>$${tools[i].price-1}.99</td><td>${tools[i].categories.join(", ")}</td></tr>`;}
})})})();


// Ajax Store
// Create a data directory and download inventory.json to that folder.
// Your online tool store should load data from the JSON file using a get request and append the data to the table. You will need to use either $.ajax() or $.get(), and a .done() callback.
// Add some new entries to inventory.json and see how the data on the page gets updated.
// Add a "Refresh" button that will load inventory.json for you without having to refresh the entire page.
// Add Twitter Bootstrap to your online store with some custom CSS to make the style your own.