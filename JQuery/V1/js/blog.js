"use strict";
// (async function() {
    async function fetchData() {
        const post = document.querySelector("#posts");
        fetch("data/blog.json").then(response => {
           if (response.status !== 200 || !response.ok){throw Error("erorr")};  
            return response.json()
        }).then(data => {
            const blog = data;
            blog.forEach(element => {
                post.innerHTML +=  `
                <h1>${element.title}</h1>
                <p>${element.content}</p>
                <h6>${element.categories}</h6>
                <h4>${element.date}</h4> <br>`; 
            });
        });} fetchData();
    // })();