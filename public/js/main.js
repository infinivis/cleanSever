var kmh1;
var kmh2;
var howLength;
var count=30;
var myRun_interval = function (howLength) {

    //setInterval(growStep(howLength), 1);
    setInterval(function () {
        growStep(howLength);
    }, 1);

};

//function Tree(framerate, wind) {
//    this.wind = 0;
//    this.timer = 0;
//    this.frameRate = framerate;
//    
//    this.grow = function () {
//        WIND.getCurrent();
//        for (i in arbre) {
//            if ((arbre[i].left == null) && (arbre[i].right == null)) {
//                if (Math.random() < 0.07) {
//                    //add(Math.random() * 3, arbre[i]);
//                    this.add(0, arbre[i]);
//                }
//            }
//        }
//        recalculate();
//        console.log("im in growStep");
//        console.log(arbre.length);
//    };
//    this.startAutoGrow = function () {                
//        this.timer =  setInterval(this.grow, this.frameRate);                                          
//    };
//    this.stopAutoGrow = function () {
//        clearInterval(this.timer);
//    };
//}
//
//var TREE = new Tree(50);
//var WIND = new Wind(50);
//$("#grow").on("click", tree.startAutoGrow);



$(document).ready(function () {
    initManometer();
    console.log("ready!");

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



    })
    
    

    $("#end").on("click", function () {
        console.log("end button");
        count = 0;

    });
    $("#growOne").on("click", function () {
        console.log("Grow One");
        growStep();

    });
    $("#ungrowOne").on("click", function () {
        console.log("unGrow One");
        unGrowStep();

    });

//    $("#grow").on("click", function () {
//        console.log("Growing");
//
//        var myVar =
//                setInterval(function () {
//                    growStep();
//                }, 50);
//
//
//
//        function myStopFunction() {
//            clearInterval(myVar);
//        }
//
//
//        $("#stop").on("click", function () {
//            console.log("Stop grow");
//            myStopFunction();
//
//        });
//
//    });
    $("#ungrow").on("click", function () {
        console.log("UNGrowing");

        var myVar =
                setInterval(function () {
                    unGrowStep();
                }, 50);



        function myStopFunction() {
            clearInterval(myVar);
        }


        $("#stop").on("click", function () {
            console.log("Stop grow");
            myStopFunction();

        });

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











});/////end DOM ready

function timer()
{
  count=count-1;
  
  console.log(count);

  //Do code for showing the number of seconds here
}

function fluidRotate(num1, num2) {



}
function convertKMtobar(kmL, kmR) {
    var num1 = myBar;
    myBar = Math.round((kmL + kmR) * 0.016 * 10) / 10;
    myAngle = myBar;
    if (myBar < 2) {
        myWarning = false;
    } else {
        myWarning = true;
    }

}

function generateNumber(force) {
    if (force == "faible") {
        kmh1 = Math.floor((Math.random() * 15) + 1);
    } else if (force == "fort") {
        kmh1 = Math.floor((Math.random() * 50) + 35);
    } else if (force == "juste") {
        kmh1 = Math.floor((Math.random() * 40) + 30);
    }

    return kmh1;
}
;


function growStep() {
    wind = curent + wind_dev;
    for (i in arbre) {
        if ((arbre[i].left == null) && (arbre[i].right == null)) {
            if (Math.random() < 0.07) {
                add(Math.random() * 3, arbre[i]);
                //add(0, arbre[i]);
            }
        }
    }

    recalculate();
    console.log("im in growStep");
    console.log(arbre.length);


}

function unGrowStep() {
    wind = curent + wind_dev;
    for (i in arbre) {
        if ((arbre[i].left == null) && (arbre[i].right == null)) {
            if (Math.random() < 0.07) {
                substract(Math.random() * 3, arbre[i]);
            }
        }
    }

    recalculate();
    console.log("im in UNgrowStep");
    console.log(arbre.length);


}




function myTimer() {
    console.log("Hello");
}