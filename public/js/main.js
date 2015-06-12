var howLength;
var myRun_interval = function (howLength) {

    //setInterval(growStep(howLength), 1);
    setInterval(function () {
        growStep(howLength);
    }, 1);

};




$(document).ready(function () {
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

    })

    })
    
});

function growStep() {
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
