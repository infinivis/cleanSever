function draw(){
    var img = document.getElementById("fondImg");
    var pat = dessin.context.createPattern(img,"repeat");
    dessin.context.fillStyle=pat;
    dessin.context.fill();
    dessin.context.fillRect(0,0,widthFull,heightFull);
    TREE.recalculate();
    dessin.context.strokeStyle= troncColor;
    dessin.context.save();
    dessin.context.translate(-200,-270);
    dessin.context.scale(1.5,1.5);
    dessin.context.translate(0,-60);
    for(x = 2; x < TREE.tronc.length; x++){
            dessin.context.beginPath();
            dessin.context.moveTo(TREE.tronc[x].x,TREE.tronc[x].y);
            dessin.context.quadraticCurveTo(TREE.tronc[x].parent.x,TREE.tronc[x].parent.y,TREE.tronc[x].parent.parent.x,TREE.tronc[x].parent.parent.y);
            dessin.context.moveTo(TREE.tronc[x].parent.parent.x,TREE.tronc[x].parent.parent.y);
            dessin.context.closePath();
            dessin.context.lineWidth=Math.sqrt(TREE.tronc[x].length)*0.12;
            dessin.context.lineCap="square";
            dessin.context.stroke();
    }
    // feuille
    dessin.context.fillStyle="green";
			for(x in TREE.tronc){
				if(TREE.tronc[x].length<10){
					dessin.context.beginPath();
                                        
					dessin.context.arc(TREE.tronc[x].x,TREE.tronc[x].y, TREE.tronc[x].length/2, 0, Math.PI, true);
                                        //dessin.context.rotate(Math.random());
					//dessin.context.arc(TREE.tronc[x].x,TREE.tronc[x].y, TREE.tronc[x].length/5, 0, Math.PI*2, true); 
					dessin.context.closePath();
					dessin.context.fill();
				}
    
}
///feuille
dessin.context.restore();
}