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
   
   myAngle = myAngle+ 0.1010000000000001;
   //var arctan = -2.4649345476100026;
   
       
      
   }); 
   $("#arrowBackward").on("click", function () {
       console.log("Arrow Reverse");
   
        animations[0].pathClock.direction = -1;
        
        ombrage.followOrientation = Math.PI;
        animations[0].pathClock.reset();
        animations[0].pathClock.start();
      
   }); 
   $("#arrowForward").on("click", function () {
       console.log("Arrow Reverse");
   
        animations[0].pathClock.direction = 1;
        
        ombrage.followOrientation = 0;
        animations[0].pathClock.reset();
        animations[0].pathClock.start();
      
   });
   
   
   
   $("#j1FAIBLE").on("click", function () {
       console.log("j1 FAIBLE");
       
       kmh1= generateNumber("faible");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmL = kmh1;
        //animations[0].pathClock.stop();
      convertKMtobar(kmL,kmR);
       
   }); 
   $("#j2FAIBLE").on("click", function () {
       console.log("j2 FAIBLE");
        kmh1= generateNumber("faible");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmR = kmh1;
       convertKMtobar(kmL,kmR);
   }); 
   $("#j1JUSTE").on("click", function () {
       console.log("j1 JUSTE");
        kmh1= generateNumber("juste");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmL = kmh1;
   }); 
   $("#j2JUSTE").on("click", function () {
        kmh1= generateNumber("juste");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmR = kmh1;
   }); 
   $("#j1FORT").on("click", function () {
       console.log("j1 FORT");
      kmh1= generateNumber("fort");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmL = kmh1;
   }); 
   $("#j2FORT").on("click", function () {
       console.log("j2 FORT");
      kmh1= generateNumber("fort");
       
       //$( document ).trigger( "WindIncoming", kmh1 );
      
       kmR = kmh1;
   }); 
   
   var toggleWarning = 0;
   $("#warning").on("click", function () {
       console.log("Warning");
      
       toggleWarning = toggleWarning+1;
       if(toggleWarning%2==0){
           myWarning = false;
       }else{
           myWarning = true;
       }
      
   });
   
   $( document ).on( "WindIncoming", function( event, arg1 ) {
   
    console.log( arg1 );           
   
});
 

 


   
    
    
    
 
    
});/////end DOM ready

function convertKMtobar(kmL,kmR){
    
    myBar = Math.round((kmL+kmR)*0.016*10)/10;
    
}

function generateNumber(force){
       if(force=="faible"){
           kmh1= Math.floor((Math.random() * 15) + 1);
       }else if(force=="fort") {
           kmh1= Math.floor((Math.random() * 50) + 35);
       }else if(force=="juste"){
           kmh1= Math.floor((Math.random() * 40) + 30);
       }
       
       return kmh1;
   };
   
   
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
