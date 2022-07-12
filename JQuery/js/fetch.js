(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    const tools = await fetch("data/invetory.json")
        .then(async function(response) {
        if(response.status !== 200){
            console.log("cannot read tools file")
            return ""
        }
        else {
            return await response.json()
        }
        });
        tools.forEach(function (tool, i) {
            let tableBody = document.querySelector("#insertProducts");
            tableBody.innerHTML =  `
                <tr>
                    <td>${tools[i].title}</td>
                    <td>${tools[i].quantity}</td>
                    <td>${tools[i].price}</td>
                    <td>${tools[i].categories}</td>
                </tr>`;
    })
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();