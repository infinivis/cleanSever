
initManometer();
initTree();
setInterval(draw, 30);


///////////////////////////////////////////////// 
////    events  ///////////////////////////////// 
///////////////////////////////////////////////// 



$("#length").on("click", function () {
    console.log(TREE.tronc.length);
});
$("#startWind").on("click", function () {
    TREE.startWind();
});
$("#stopWind").on("click", function () {
    TREE.stopWind();
});
$("#newDebri").on("click", function () {
    TREE.newDebri();
});
$("#grow").on("click", function () {
    TREE.startAutoGrow()
});
$("#stopGrow").on("click", function () {
    TREE.stopAutoGrow()
});
$("#unGrow").on("click", function () {
    TREE.startUnGrow()
});
$("#start").on("click", function () {
    console.log("Start");

    startWS();


    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            //counter ended, do something here
            console.log("Timer finish");
            count = 30;
            connection.close();
            return;
        }

        //Do code for showing the number of seconds here
        console.log(count);
    }



});



$("#end").on("click", function () {
    console.log("end button");
    count = 0;

});

$("#colorWorse").on("click", function () {
    console.log("color worsing");
//       var rgb = rgb(45,45,69);
//       rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
// var finalColor = "#" +
//  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
//  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
//  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
//
//       
////       var changingColor = troncColor.substring(1);
////       var colorInt = parseInt(changingColor);
//       console.log(finalColor);
//       //var newColor = colorInt+10;
//       //console.log(newColor);
//      
//       
    troncColor = "#9D1309";

});

$("#testMoveArrowFor").on("click", function () {
    console.log("Move arrow +");

    if (myAngle < 15 * 0.15) {
        myAngle = myAngle + 0.15;

    } else {

    }


});
$("#testMoveArrowBack").on("click", function () {
    console.log("Move arrow -");

    if (myAngle > 0) {
        myAngle = myAngle - 0.15;

    } else {

    }

});

$("#j1FAIBLE").on("click", function () {
    console.log("j1 FAIBLE");

    kmh1 = generateNumber("faible");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmL = kmh1;
    //animations[0].pathClock.stop();
    convertKMtobar(kmL, kmR);

});
$("#j2FAIBLE").on("click", function () {
    console.log("j2 FAIBLE");
    kmh1 = generateNumber("faible");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmR = kmh1;
    convertKMtobar(kmL, kmR);
});
$("#j1JUSTE").on("click", function () {
    console.log("j1 JUSTE");
    kmh1 = generateNumber("juste");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmL = kmh1;
    convertKMtobar(kmL, kmR);
});
$("#j2JUSTE").on("click", function () {
    kmh1 = generateNumber("juste");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmR = kmh1;
    convertKMtobar(kmL, kmR);
});
$("#j1FORT").on("click", function () {
    console.log("j1 FORT");
    kmh1 = generateNumber("fort");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmL = kmh1;
    convertKMtobar(kmL, kmR);
});
$("#j2FORT").on("click", function () {
    console.log("j2 FORT");
    kmh1 = generateNumber("fort");

    //$( document ).trigger( "WindIncoming", kmh1 );

    kmR = kmh1;
    convertKMtobar(kmL, kmR);
});

$("#warning").on("click", function () {
    console.log("Warning");


    if (myWarning) {
        myWarning = false;
    } else {
        myWarning = true;
    }

});

$(document).on("WindIncoming", function (event, arg1) {

    console.log(arg1);

});

////////////////////////////////////////////////
///////////// functions ////////////////////////
////////////////////////////////////////////////
function timer()
{
    count = count - 1;

    console.log(count);

    //Do code for showing the number of seconds here
}
