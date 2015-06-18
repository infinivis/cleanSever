var dessin= document.getElementById("canvas");
dessin.context=dessin.getContext('2d');
var widthFull = $( window ).width();
var heightFull = $( window ).height();
console.log(widthFull);
console.log(heightFull);
//var widthFull = 1920;
//var heightFull = 1342;

var arbrePositionX = 550;
var arbrePositionY = 800;
var troncColor = "#6B4226";

function Tree(framerate) {
    this.wind = 0;
    this.timer = 0;
    this.frameRate = framerate;
    this.gamma = 0.86;


    this.tronc = new Array();
    this.tronc[0] = new NOEUD;
    this.tronc[1] = new NOEUD;
    this.tronc[1].parent = this.tronc[0];
    this.tronc[0].x = arbrePositionX;
    this.tronc[0].y = arbrePositionY;
    this.tronc[1].x = arbrePositionX;
    this.tronc[1].y = arbrePositionY - 10;
    this.run = function () {
        while (this.tronc.length<=200){
            for(i in this.tronc){
				if((this.tronc[i].left==null)&&(this.tronc[i].right==null)){
					if(Math.random()<0.07){
						add(Math.random()*3,this.tronc[i]);
					}
				}
			}
			this.recalculate();
        }
    }

    this.grow = function () {
        //WIND.getCurrent();
        for (i in this.tronc) {
            if ((this.tronc[i].left == null) && (this.tronc[i].right == null)) {
                if (Math.random() < 0.07) {
                    //add(Math.random() * 3, this.tronc[i]);
                    this.add(Math.random() * 3, this.tronc[i]);
                }
            }
        }
        this.recalculate();
        console.log("im in growStep");
        console.log(this.tronc.length);
    };
    
    this.startAutoGrow = function () {
        this.timer = setInterval(this.grow, this.frameRate);
    };
    this.stopAutoGrow = function () {
        clearInterval(this.timer);
    };
    this.add = function (x, to) {
        while (!(to.parent == null)) {
            to.length += x;
            to = to.parent;
        }
        to.length += x;
    };
    this.substract = function (x, to) {
        while (!(to.parent == null)) {
            to.length -= x;
            to = to.parent;
        }
        to.length += x;
    };
    this.recalculate = function () {

        for (x in this.tronc) {
            if (!(this.tronc[x].parent == null)) {
                if (this.tronc[x].length > 10) {
                    if ((this.tronc[x].left == null) && (this.tronc[x].right == null)) {

                        this.tronc[x].left = new noeud;
                        this.tronc[x].right = new noeud;


                        this.tronc[x].left.length = Math.floor(Math.random() * (this.tronc[x].length - 2)) + 1;
                        this.tronc[x].right.length = this.tronc[x].length - this.tronc[x].left.length;



                        this.tronc[x].left.parent = this.tronc[x];
                        this.tronc[x].right.parent = this.tronc[x];


                        this.tronc.push(this.tronc[x].left);
                        this.tronc.push(this.tronc[x].right);

                    }
                }
            }
        }
        var stack = new Array;
        stack.push(this.tronc[1]);
//			while(stack.length>0){
//				var temp = stack.pop();				
//				if(!(temp.left==null)){				
//					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)+this.gamma*(temp.length-temp.left.length)/temp.length;																		
//					var len=1;
//					if((!(temp.left.left==null))&&(!(temp.left.right==null))){
//						len=Math.sqrt(2*(temp.left.left.length*temp.left.right.length)/(temp.left.left.length+temp.left.right.length));
//					}					
//					temp.left.x=temp.x+len*Math.cos(angle);
//					temp.left.y=temp.y-len*Math.sin(angle);					
//					stack.push(temp.left);
//				}				
//				if(!(temp.right==null)){
//					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)-this.gamma*(temp.length-temp.right.length)/temp.length;														
//					var len=1;
//					if((!(temp.right.left==null))&&(!(temp.right.right==null))){
//						len=Math.sqrt(2*(temp.right.left.length*temp.right.right.length)/(temp.right.left.length+temp.right.right.length));
//					}
//					temp.right.x=temp.x+len*Math.cos(angle);
//					temp.right.y=temp.y-len*Math.sin(angle);				
//					stack.push(temp.right);
//				}
//			}


        while (stack.length > 0) {
            var temp = stack.pop();

            if (!(temp.left == null)) {

                var angle = Math.atan2(temp.parent.y - temp.y, temp.x - temp.parent.x) + this.gamma * (temp.length - temp.left.length) / temp.length;

                if (Math.abs(angle) > Math.PI / 2) {
                    angle += (Math.PI - Math.abs(angle)) * angle / Math.abs(angle) * wind;
                } else {
                    angle += angle * wind;
                }


                var len = 1;
                if ((!(temp.left.left == null)) && (!(temp.left.right == null))) {
                    len = Math.sqrt(2 * (temp.left.left.length * temp.left.right.length) / (temp.left.left.length + temp.left.right.length));
                }

                temp.left.x = temp.x + len * Math.cos(angle);
                temp.left.y = temp.y - len * Math.sin(angle);

                stack.push(temp.left);
            }

            if (!(temp.right == null)) {
                var angle = Math.atan2(temp.parent.y - temp.y, temp.x - temp.parent.x) - this.gamma * (temp.length - temp.right.length) / temp.length;

                if (Math.abs(angle) > Math.PI / 2) {
                    angle += (Math.PI - Math.abs(angle)) * angle / Math.abs(angle) * wind;
                } else {
                    angle += angle * wind;
                }

                var len = 1;
                if ((!(temp.right.left == null)) && (!(temp.right.right == null))) {
                    len = Math.sqrt(2 * (temp.right.left.length * temp.right.right.length) / (temp.right.left.length + temp.right.right.length));
                }
                temp.right.x = temp.x + len * Math.cos(angle);
                temp.right.y = temp.y - len * Math.sin(angle);

                stack.push(temp.right);
            }
        }
    }
    this.show = function (){
        //console.log("In show function");
        var img=document.getElementById("fondImg");
var pat=dessin.context.createPattern(img,"repeat");
//dessin.context.rect(0,0,800,600);
dessin.context.fillStyle=pat;
dessin.context.fill();
    	dessin.context.fillRect(0,0,widthFull,heightFull);
        
        wind=curent*wind_strength+wind_dev;
			this.recalculate;								
			dessin.context.strokeStyle= troncColor;			
			dessin.context.save();
			dessin.context.translate(-200,-270);
			dessin.context.scale(1.5,1.5);
			dessin.context.translate(0,-60);
                        
                        for(x=2;x<TREE.tronc.length;x++){
				dessin.context.beginPath();
				dessin.context.moveTo(TREE.tronc[x].x,TREE.tronc[x].y);
				dessin.context.quadraticCurveTo(TREE.tronc[x].parent.x,TREE.tronc[x].parent.y,TREE.tronc[x].parent.parent.x,TREE.tronc[x].parent.parent.y);
				dessin.context.moveTo(TREE.tronc[x].parent.parent.x,TREE.tronc[x].parent.parent.y);
				dessin.context.closePath();
				dessin.context.lineWidth=Math.sqrt(TREE.tronc[x].length)*0.12;
				dessin.context.lineCap="square";
                                dessin.context.stroke();						
			}
			//draw();
                        //TREE.draw();
			dessin.context.restore();
    }

}

var TREE = new Tree(60);
console.log(TREE);
//console.log(TREE.tronc[1]);
 
//var WIND = new Wind(50);
$("#grow").on("click", TREE.startAutoGrow);
TREE.run;
setInterval(TREE.show, 60);
