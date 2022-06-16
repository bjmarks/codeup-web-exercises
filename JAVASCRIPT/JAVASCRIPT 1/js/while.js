function whileLoops() {
    var i = 1;
    var page = "";
        while (i < 65536){
             i*=2;
            page = (page + i + "<br>");
        }
    document.getElementById("WriteBox").innerHTML = (page);
}

function sell() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);
        do {
            var sold = Math.floor(Math.random() * 5) + 1;
            switch (sold) {
                case 1:
                  allCones = allCones - 1;
                  console.log(sold + " cones sold " + allCones + " remaining");
                  break;
                case 2:
                  if(allCones < 2){console.log("cant sell anymore than 2"); break;}
                  else{
                  allCones = allCones - 2;
                  console.log(sold + " cones sold " + allCones + " remaining");
                  break;
                  }
                case 3:
                  if(allCones < 3){console.log("cant sell anymore than 3"); break;}
                  else{
                  allCones = allCones - 3;
                  console.log(sold + " cones sold " + allCones + " remaining");
                  break;
                  }
                case 4:
                  if(allCones < 4){console.log("cant sell anymore than 4"); break;}
                  else{
                  allCones = allCones - 4;
                  console.log(sold + " cones sold " + allCones + " remaining");            
                  break;
                  }
                case 5:
                  if(allCones < 5){console.log("cant sell anymore than 5"); break;}
                  else{
                  allCones = allCones - 5;
                  console.log(sold + " cones sold " + allCones + " remaining");
                  break;
                  }
                default:
                  console.log("Cannot sell you more cones");
                  allCones = allCones - 0;
                  break;
            }
        }
    while (allCones > 0);
}

/*
simulating the amount of cones being bought by her clients. 
Use a do-while loop to log to the console the amount of cones sold to each person. 
The below code shows how to get the random numbers for this exercise.
5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
*/
whileLoops();
sell();