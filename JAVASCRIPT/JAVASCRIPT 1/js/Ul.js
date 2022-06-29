function ulist() {
    var jsList = [
        "JsExercise1",
        "external_js",
        "inline_js",
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
        var start = "<nav> <ul>";
    for(let i = 0; i <= jsList.length - 1; i++){
        start = start + "<li>" + '<a href="'+jsList[i]+ '.html">' + jsList[i] + '</a>' + "</li>";    
    }
        document.write(start + "</ul> </nav>");
    }
    ulist();