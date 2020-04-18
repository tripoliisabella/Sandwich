var pbjCnt = 0;
var gcCnt = 0;
var beefCnt = 0;

$(document).ready(function(){
    var pbj = $("#pbj");
    var gc = $("#gc");
    var beef = $("#beef");

    var image = $(".sandwich");
    

    pbj.on("click", function(){
        pbjCnt++;
        alert("It's peanut butter jelly time!");
        alert("You ate the Peanut Butter Jelly sandwich " + pbjCnt + " times.");

        image.attr("src", "pbj.jpg");

    });

    gc.on("click", function(){
        gcCnt++;
        alert("Nom nom nom. Gooey Gooey Grilled Cheese!");
        alert("You've eaten " + gcCnt + " grilled cheese sandwiches.");

        image.attr("src", "gc.jpg");
    });

    beef.on("click", function(){
        beefCnt++;
        alert("I am all about that roast beef!");
        alert("You've eaten " + beefCnt + " roast beef sandwiches.");

        image.attr("src", "beef.jpg");
    });

});