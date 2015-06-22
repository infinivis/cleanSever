var widthFull = $( window ).width();
var heightFull = $( window ).height();
console.log(widthFull);
console.log(heightFull);
//var widthFull = 1920;
//var heightFull = 1342;
var dessin;
var arbrePositionX = 550;
var arbrePositionY = 800;
var troncColor = "#6B4226";
var TREE;


function initTree(){
    
   
    dessin= document.getElementById("canvas");
    dessin.context=dessin.getContext('2d');
    TREE = new Tree(60);
}


function Tree(framerate) {    
    this.wind = 0;
    this.timer = null;
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
    var t = 1;
    
     this.run = $.proxy(function () {            
        for (i in this.tronc) {                            
            if ((this.tronc[i].left == null) && (this.tronc[i].right == null)) {
                if (Math.random() < 0.07) {
                    //add(Math.random() * 3, this.tronc[i]);
                    this.add(Math.random() * 3, this.tronc[i]);
                }
            }
        }        
        this.recalculate();        
    }, this);
    
    this.grow = function () {
        for (i in this.tronc) {
            if ((this.tronc[i].left == null) && (this.tronc[i].right == null)) {
                if (Math.random() < 0.07) {
                    //add(Math.random() * 3, this.tronc[i]);
                    this.add(Math.random() * 3, this.tronc[i]);
                }
            }
        }
        this.recalculate();
    };

    this.startAutoGrow = function () {
        this.timer = setInterval($.proxy(this.grow, this), 1);
    };
    this.stopAutoGrow = function () {
        clearInterval(this.timer); //ici si je mets this ça ne fonctionne pas
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
    this.recalculate = function() {

        for (x in this.tronc) {
            
            if (!(this.tronc[x].parent == null)) {
                if (this.tronc[x].length > 10) {
                    if ((this.tronc[x].left == null) && (this.tronc[x].right == null)) {

                        this.tronc[x].left = new NOEUD;
                       
                        this.tronc[x].right = new NOEUD;


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
    };
    
    this.debri = function(){
        var debri = new Array;
		function run_debri(){
			for(i in debri){
				debri[i].momx+=-wind*3*Math.random();
				debri[i].momy+=(Math.random()-6/13)*40*Math.abs(wind);
				debri[i].x+=debri[i].momx-wind*30*(Math.random()+1);
				debri[i].y+=debri[i].momy;
				if(debri[i].y>600){
					debri.splice(i,1);
				}
			}
		}
		
		var debri_gen=null;
		setTimeout("debri_gen=setInterval(new_debri,30);",2000);
		setInterval(run_debri,30);
    };
    this.newDebri = function(){
        var debri = new Array;
			if(Math.random()>0.8){
				var temp=this.tronc[Math.floor(Math.random()*this.tronc.length)];
				var leaf=new FEUILLE;
				leaf.size=Math.random()*10;
				leaf.x=temp.x;
				leaf.y=temp.y;
				debri.push(leaf);
			}
		}
}





 
//var WIND = new Wind(50);





 
    
    