// "use strict";
 var widthCanevas = 800;
 var heightCanevas = 600;
 ///myTest/////////////////////////////////////
  var textcanvas = document.getElementById('canvas');
      var context = textcanvas.getContext('2d');
     
      
        var x = 80;
      var y = 100;
          
             context.font = '60pt Calibri';
      context.lineWidth = 3;
      // stroke color
      context.strokeStyle = 'blue';
      context.strokeText('Hello World!', x, y);
             
           
      
      ///////////////////////////////////////////
            
//            class Tree {
//                constructor(position){
//                    this.position = position;
//                    
//                    this.size = new Victor(10, 50);
//                }
//                
//            draw(c) {
//               c.fillStyle = "#8b4726";
//               c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
//               
//            }
//            }
//            
//            var canvas = document.getElementById('canvas');
//            canvas.width = widthCanevas;//window.innerWidth;
//            canvas.height = heightCanevas; //window.innerHeight;
//            var c = canvas.getContext('2d');
//            c.fillStyle = "#ffffff";
//
//
//            var x = 0;
//            var y = 0;
//            
//            var img = document.getElementById("treeBaby");
//            var tree = new Tree(new Victor(widthCanevas/2, heightCanevas/2));
////////execution///////////////////////////////////////
//            function draw()
//            {
//                c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//                x += 1;
//                y = y+Math.pow(0.1, x);
//
//                c.beginPath();
//                c.rect(x, y, 20, 20);
//                c.stroke();
//                c.closePath();
//                
//                
//                tree.draw(c);
//                tree.size.addY(new Victor(0, Math.pow(x, 3/4)));
//                c.drawImage(img, widthCanevas/2, heightCanevas/2, 200, 200 );
//                
//               
//                
//               
//      
//       requestAnimationFrame(draw);
//                
//            }
//            
//            draw();
            
           

      
            
            
            