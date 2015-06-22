var kmh1;
var kmh2;
var howLength;
var count=30;






$(document).ready(function () {
    
    console.log("ready!");
    





   

    




});/////end DOM ready



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




function myTimer() {
    console.log("Hello");
}




