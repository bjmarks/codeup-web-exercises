function ulist() {
    var jsList = [
        "JsExercise1",
        "External_js",
        "Intenal_js",
        "functions_js",
        "conditionals",
        "loops",
        "iterating_arrays_js",
        "planets-js",
        "split-join",
        "objects",
        "math-js",
        "defuse-the-bom"
        ];
        var start = "<ul>";
    for(let i = 0; i <= jsList.length - 1; i++){
        start = start + "<li>" + '<a href="'+jsList[i]+ '.html">' + jsList[i] + '</a>' + "</li>";    
    }
        document.write(start + "</ul>");
    }
    ulist();