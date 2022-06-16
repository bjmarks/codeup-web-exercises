(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    planetsArray = planetsString.split("|");
    console.log(planetsArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log(planetsArray.join(" <br> "));
    document.write(planetsArray.join(" <br> "));




    
    var spliUll = ["Alysha", "Benjamin", "Carlos", "Daneil"];
    var text = '<ul>';
        for (let i = 0; i < spliUll.length; i++) {
            text += "<li>" + spliUll[i] + "</li>";             
        }
    text += "</ul>";
    document.write(text);
})();