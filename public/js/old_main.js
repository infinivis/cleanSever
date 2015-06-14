var kmh1;
var kmh2;
var howLength;
var myRun_interval = function (howLength) {

    //setInterval(growStep(howLength), 1);
    setInterval(function () {
        growStep(howLength);
    }, 1);

};




$(document).ready(function () {
    initManometer();
    console.log("ready!");

    $("#grow").on("click", function () {
        console.log("Growing");

var myVar = 
    setInterval(function () {
    growStep();
}, 50);



function myStopFunction() {
    clearInterval(myVar);
}


$("#stop").on("click", function () {
       console.log("Stop grow");
       myStopFunction();

    })

    })
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
    
    
   $("#testMoveArrow").on("click", function () {
       console.log("Move arrow");
   
       myAngle = myAngle+1;
      
   }); 
   $("#arrowBackward").on("click", function () {
       console.log("Arrow Reverse");
   
        animations[0].pathClock.direction = -1;
        
        arrow.followOrientation = Math.PI;
        animations[0].pathClock.reset();
        animations[0].pathClock.start();
      
   }); 
   $("#arrowForward").on("click", function () {
       console.log("Arrow Reverse");
   
        animations[0].pathClock.direction = 1;
        
        arrow.followOrientation = 0;
        animations[0].pathClock.reset();
        animations[0].pathClock.start();
      
   }); 
   
   $("#j1FAIBLE").on("click", function () {
       console.log("j1 FAIBLE");
       kmh1= 15;
       $( document ).trigger( "WindIncoming", kmh1 );
      
       
        animations[0].pathClock.stop();
      
       
   }); 
   $("#j2FAIBLE").on("click", function () {
       console.log("j2 FAIBLE");
       kmh2= 15;
       $( document ).trigger( "WindIncoming", kmh2 );
   }); 
   $("#j1JUSTE").on("click", function () {
       console.log("j1 JUSTE");
       kmh1= 30;
       $( document ).trigger( "WindIncoming", kmh1 );
   }); 
   $("#j2JUSTE").on("click", function () {
       console.log("j2 JUSTE");
       kmh2= 30;
       $( document ).trigger( "WindIncoming", kmh2 );
   }); 
   $("#j1FORT").on("click", function () {
       console.log("j1 FORT");
       kmh1= 45;
       $( document ).trigger( "WindIncoming", kmh1 );
   }); 
   $("#j2FORT").on("click", function () {
       console.log("j2 FORT");
       kmh2= 45;
       $( document ).trigger( "WindIncoming", kmh2 );
   }); 
   
   $( document ).on( "WindIncoming", function( event, arg1 ) {
   
    console.log( arg1 );           
   
});
 

 


   
    
    
    
 
    
});/////end DOM ready

function growStep() {
    wind=curent+wind_dev;
    for (i in arbre) {
        if ((arbre[i].left == null) && (arbre[i].right == null)) {
            if (Math.random() < 0.07) {
                add(Math.random() * 3, arbre[i]);
                //add(1000, arbre[i]);
            }
        }
    }

    recalculate();
    console.log("im in growStep");
    console.log(arbre.length);
 
  
}

function unGrowStep() {
    wind=curent+wind_dev;
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
