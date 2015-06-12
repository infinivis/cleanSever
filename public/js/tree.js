var widthFull = $( window ).width();
var heightFull = $( window ).height();
console.log(widthFull);
console.log(heightFull);
//var widthFull = 1920;
//var heightFull = 1342;

var arbrePositionX = 550;
var arbrePositionY = 800;
var troncColor = "#6B4226";

var dessin=CreateCanvas('canvas');
		
		function noeud(){
			this.x=0;
			this.y=0;
//			this.x=0;
//			this.y=0;
			this.length=0;
			this.parent = null;
			this.left = null;
			this.right = null;
			
		}
				
		var arbre = new Array;
		arbre[0]=new noeud;
		arbre[1]=new noeud;
		arbre[1].parent=arbre[0];
							
		var gamma=0.86;		
//		var gamma=0.86;		
		arbre[0].x=arbrePositionX;
		arbre[0].y=arbrePositionY;
		arbre[1].x=arbrePositionX;
		arbre[1].y=arbrePositionY-10;
//		arbre[0].x=400;
//		arbre[0].y=550;
//		arbre[1].x=400;
//		arbre[1].y=540;
					
		function recalculate(){		
			for(x in arbre){
				if(!(arbre[x].parent==null)){
					if(arbre[x].length>10){
						if((arbre[x].left==null) && (arbre[x].right==null)){
 
							arbre[x].left=new noeud;
							arbre[x].right=new noeud;
						
							
							arbre[x].left.length=Math.floor(Math.random()*(arbre[x].length-2))+1;
							arbre[x].right.length=arbre[x].length-arbre[x].left.length;
							
							
							
							arbre[x].left.parent=arbre[x];
							arbre[x].right.parent=arbre[x];
							
							
							arbre.push(arbre[x].left);
							arbre.push(arbre[x].right);
						
						}
					}
				}
			}			
			var stack = new Array;
			stack.push(arbre[1]);			
//			while(stack.length>0){
//				var temp = stack.pop();				
//				if(!(temp.left==null)){				
//					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)+gamma*(temp.length-temp.left.length)/temp.length;																		
//					var len=1;
//					if((!(temp.left.left==null))&&(!(temp.left.right==null))){
//						len=Math.sqrt(2*(temp.left.left.length*temp.left.right.length)/(temp.left.left.length+temp.left.right.length));
//					}					
//					temp.left.x=temp.x+len*Math.cos(angle);
//					temp.left.y=temp.y-len*Math.sin(angle);					
//					stack.push(temp.left);
//				}				
//				if(!(temp.right==null)){
//					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)-gamma*(temp.length-temp.right.length)/temp.length;														
//					var len=1;
//					if((!(temp.right.left==null))&&(!(temp.right.right==null))){
//						len=Math.sqrt(2*(temp.right.left.length*temp.right.right.length)/(temp.right.left.length+temp.right.right.length));
//					}
//					temp.right.x=temp.x+len*Math.cos(angle);
//					temp.right.y=temp.y-len*Math.sin(angle);				
//					stack.push(temp.right);
//				}
//			}

			
			while(stack.length>0){
				var temp = stack.pop();
				
				if(!(temp.left==null)){
				
					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)+gamma*(temp.length-temp.left.length)/temp.length;
					
					if(Math.abs(angle)>Math.PI/2){
						angle+=(Math.PI-Math.abs(angle))*angle/Math.abs(angle)*wind;
					}else{
						angle+=angle*wind;
					}
					
					
					var len=1;
					if((!(temp.left.left==null))&&(!(temp.left.right==null))){
						len=Math.sqrt(2*(temp.left.left.length*temp.left.right.length)/(temp.left.left.length+temp.left.right.length));
					}
					
					temp.left.x=temp.x+len*Math.cos(angle);
					temp.left.y=temp.y-len*Math.sin(angle);
					
					stack.push(temp.left);
				}
				
				if(!(temp.right==null)){
					var angle=Math.atan2(temp.parent.y-temp.y,temp.x-temp.parent.x)-gamma*(temp.length-temp.right.length)/temp.length;
					
					if(Math.abs(angle)>Math.PI/2){
						angle+=(Math.PI-Math.abs(angle))*angle/Math.abs(angle)*wind;
					}else{
						angle+=angle*wind;
					}
					
					var len=1;
					if((!(temp.right.left==null))&&(!(temp.right.right==null))){
						len=Math.sqrt(2*(temp.right.left.length*temp.right.right.length)/(temp.right.left.length+temp.right.right.length));
					}
					temp.right.x=temp.x+len*Math.cos(angle);
					temp.right.y=temp.y-len*Math.sin(angle);
					
					stack.push(temp.right);
				}
			}
		}
		
		function add(x,to){
			while(!(to.parent==null)){
				to.length+=x;
				to=to.parent;
			}
			to.length+=x;
		}
		function substract(x,to){
			while(!(to.parent==null)){
				to.length-=x;
				to=to.parent;
			}
			to.length-=x;
		}
		
		var run_interval=null;
		function run(){	
                    wind=curent+wind_dev;
			for(i in arbre){
				if((arbre[i].left==null)&&(arbre[i].right==null)){
					if(Math.random()<0.07){
						add(Math.random()*3,arbre[i]);
					}
				}
			}
			recalculate();		
			//if(arbre.length>2000) clearInterval(run_interval);
			if(arbre.length>200) clearInterval(run_interval);
                        
		}										
		
		function draw(){			
			for(x=2;x<arbre.length;x++){
				dessin.context.beginPath();
				dessin.context.moveTo(arbre[x].x,arbre[x].y);
				dessin.context.quadraticCurveTo(arbre[x].parent.x,arbre[x].parent.y,arbre[x].parent.parent.x,arbre[x].parent.parent.y);
				dessin.context.moveTo(arbre[x].parent.parent.x,arbre[x].parent.parent.y);
				dessin.context.closePath();
				dessin.context.lineWidth=Math.sqrt(arbre[x].length)*0.12;
				dessin.context.lineCap="square";
                                dessin.context.stroke();						
			}							
		}
		
		function show(){
			
var img=document.getElementById("fondImg");
var pat=dessin.context.createPattern(img,"repeat");
//dessin.context.rect(0,0,800,600);
dessin.context.fillStyle=pat;
dessin.context.fill();
    	dessin.context.fillRect(0,0,widthFull,heightFull);
        
        wind=curent*wind_strength+wind_dev;
			recalculate();								
			dessin.context.strokeStyle= troncColor;			
			dessin.context.save();
			dessin.context.translate(-200,-270);
			dessin.context.scale(1.5,1.5);
			dessin.context.translate(0,-60);			
			draw();
			dessin.context.restore();




					
		}
										
		run_interval = setInterval(run, 1);
		setInterval(show,60);	
          