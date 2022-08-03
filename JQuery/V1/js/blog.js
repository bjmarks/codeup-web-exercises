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
//     Ajax Blog

// Create a new html file called ajax-blog.html.
// At minimum, your Ajax blog will need an empty <div> with an id of posts.
// Add your own Bootstrap theme to this file as well. Feel free to use the same one as your store or choose a different one.
// Download blog.json to your data directory from before.
// Use Ajax to load the contents of blog.json and add the data from it to your #posts div.
// Add additional entries to blog.json and make sure your changes are reflected on the page.