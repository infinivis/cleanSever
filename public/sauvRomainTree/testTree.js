 
		var dessin=CreateCanvas('canapea');
		
		function noeud(){
			this.x=0;
			this.y=0;
			this.length=0;
			this.parent = null;
			this.left = null;
			this.right = null;
		}
		function feuille(){
			this.x=0;
			this.y=0;
			this.size=0;
			this.momx=0;
			this.momy=0;
		}
		function herbe(){
			this.x=0;
			this.y=0;
			this.der=0;
			this.grow=1;
			this.size=0;
		}
		
		var arbre = new Array;
		arbre[0]=new noeud;
		arbre[1]=new noeud;
		arbre[1].parent=arbre[0];
		
		
		//vent,randomizarea si harmonique
		var center=0;
		var momentum=0;
		var curent=0;
		function armonic_wind(){
			momentum-=(curent-center)*0.0008*Math.random();
			curent+=momentum;
			
			momentum*=0.997;
		}
		function randomized_wind(){
			center=(Math.random()-1/2);
		}
//		setInterval(armonic_wind,1);
//		setInterval(randomized_wind,30);
                
                
		//traits.................................................................................................
		var gamma=0.86;
		var wind=0;
		var wind_dev=(Math.random()-0.5)*0.1;
		var wind_strength=0.1;
		arbre[0].x=400; //original
		arbre[0].y=550; //original
		arbre[1].x=400; //original
		arbre[1].y=540; //original
//		arbre[0].x=800;
//		arbre[0].y=850;
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
			
			if(arbre.length>2000) clearInterval(run_interval);
		}
		
		
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
		function new_debri(){
			if(Math.random()>0.8){
				var temp=arbre[Math.floor(Math.random()*arbre.length)];
				var leaf=new feuille;
				leaf.size=Math.random()*10;
				leaf.x=temp.x;
				leaf.y=temp.y;
				debri.push(leaf);
			}
		}
		var debri_gen=null;
		setTimeout("debri_gen=setInterval(new_debri,30);",2000);
		setInterval(run_debri,30);
		
		var grass = new Array;
		var frame_grass=1;
		for(i=0;i<250;i++){
			var temp=new herbe;
			temp.grow=1;
			temp.der=(Math.random()-0.5)*10;
			if(Math.random()>0.5){
				temp.x=Math.random()*Math.random()*200+400;
			}else{
				temp.x=-Math.random()*Math.random()*200+400;
			}
			temp.y=Math.random()*5+550;
			temp.size=Math.random()*5+5;
			grass.push(temp);
		}
		function run_grass(){
			for(i in grass){
				grass[i].size+=grass[i].grow*Math.random()*3/grass[i].size;
				if((Math.random()>0.99) || grass[i].size>40){
					grass[i].grow=-1;
				}
				if(grass[i].size<2){
					grass.splice(i,1);
					var temp=new herbe;
					temp.grow=1;
					temp.der=(Math.random()-0.5)*10;
					if(Math.random()>0.5){
						temp.x=Math.random()*Math.random()*200+400;
					}else{
						temp.x=-Math.random()*Math.random()*200+400;
					}
					temp.y=Math.random()*5+550;
					temp.size=Math.random()*3+2;
					grass.push(temp);
				}
			}
		}
		setInterval(run_grass,30);
		
		
		
		//seasons:
		
		var color = "black";//"rgba(0,255,0,1)";
		var s_size = 1;
		var seasons_frame=0;
		function seasons(){
			seasons_frame++;
			if(seasons_frame<=1000){
				color = "rgba("+Math.floor(seasons_frame*200/1050)+",200,0,1)";
			}else if(seasons_frame>1000 &&seasons_frame<1050){
				for(x in arbre){
					if(arbre[x].length<10 && Math.random()<0.015*((1050-seasons_frame)/50)){
						var temp=arbre[x];
						var leaf=new feuille;
						leaf.size=temp.length;
						leaf.x=temp.x;
						leaf.y=temp.y;
						debri.push(leaf);
					}
				}
				color = "rgba("+Math.floor(seasons_frame*200/1050)+",200,0,"+((1050-seasons_frame)/50)+")";
			}else if(seasons_frame==1050){
				clearInterval(debri_gen);
			}else if(seasons_frame>1050 && seasons_frame<=1400){
				color = "rgba(0,0,0,0)";
				s_size=0;
			}else if(seasons_frame>1400 && seasons_frame<=1600){
				color = "rgba(0,200,0,1)";
				s_size=(seasons_frame-1400)/200;
			}else if(seasons_frame>1600){
				seasons_frame=0;
				debri_gen=setInterval(new_debri,30);
			}
		}
		setInterval(seasons,10);
			
		
		
		
		function draw(){
		
		
			for(x=2;x<arbre.length;x++){
				dessin.context.beginPath();
				dessin.context.moveTo(arbre[x].x,arbre[x].y);
				dessin.context.quadraticCurveTo(arbre[x].parent.x,arbre[x].parent.y,arbre[x].parent.parent.x,arbre[x].parent.parent.y);
				dessin.context.moveTo(arbre[x].parent.parent.x,arbre[x].parent.parent.y);
				dessin.context.closePath();
				dessin.context.lineWidth=Math.sqrt(arbre[x].length)*0.1;
				dessin.context.lineCap="square";
				dessin.context.stroke();
				
				
			}
			
			dessin.context.fillStyle=color;
			for(x in arbre){
				if(arbre[x].length<10){
					dessin.context.beginPath();
					dessin.context.arc(arbre[x].x,arbre[x].y, arbre[x].length/5*s_size, 0, Math.PI*2, true); 
					dessin.context.closePath();
					dessin.context.fill();
				}
			}
			
			
			dessin.context.fillStyle="yellow";
//			for(i in debri){
//				dessin.context.beginPath();
//				dessin.context.arc(debri[i].x,debri[i].y, debri[i].size/5, 0, Math.PI*2, true); 
//				dessin.context.closePath();
//				dessin.context.fill();
//			}
			
			dessin.context.lineWidth=0.4;
//			for(i in grass){
// 
//				dessin.context.beginPath();
//				dessin.context.moveTo(grass[i].x,grass[i].y);
//				var x=grass[i].x-wind*grass[i].size*5+grass[i].der*grass[i].size*0.05;
//				var y=grass[i].y-grass[i].size+Math.abs(wind)*grass[i].size*3+Math.abs(grass[i].der)*grass[i].size*0.05;
//				dessin.context.quadraticCurveTo(grass[i].x,grass[i].y-grass[i].size*0.6,x,y);
//				dessin.context.moveTo(x,y);
//				dessin.context.closePath();
//				dessin.context.stroke();
//			}
			
		}
		//var wind_img=new Image();
		//wind_img.src="wind.png";
		
		function arata(){
			dessin.context.fillStyle="black";
			//dessin.context.fillStyle='rgba(0,0,0,.2)';
			//dessin.context.fillRect(0,0,800,600);
			dessin.context.fillRect(0,0,1800,1000);
			//dessin.context.drawImage(wind_img,650,25);
			
			wind=curent*wind_strength+wind_dev;
			recalculate();
			
			
			
			dessin.context.strokeStyle="white";
			
			dessin.context.save();
			dessin.context.translate(-200,-270);
			dessin.context.scale(1.5,1.5);
			dessin.context.translate(0,-60);
			
			draw();
			dessin.context.restore();
			
		}
		
		
		
		function bourrasque(event){
			if(window.innerHeight-event.clientY<100){
				wind_dev=-((event.clientX/window.innerWidth)-1/2)*0.1;
			}
		}
		onmousemove=bourrasque;
		
		
		
		
		run_interval=setInterval(run,1);
		setInterval(arata,60);
		
		
		
 
	