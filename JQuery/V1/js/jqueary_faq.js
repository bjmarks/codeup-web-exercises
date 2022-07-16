$("#show").click(function () {$("dd").toggleClass("invisible")});
$("dt").click(function () {$(this).toggleClass("green")});
$("#liHighlihgt").click(function () {$("#ulParent").children().each(function () {$(this).children().last().children().last().toggleClass("yellow");})});
$("h3").click(function (){$(this).next().toggleClass("bold")});
$("#ulParent").children().children().click(function() {$(this).children().first().toggleClass("blueText")});
// Bonus
// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
// The rules are the following:
// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.