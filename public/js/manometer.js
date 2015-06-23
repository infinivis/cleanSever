    // Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    var fps = 60.0;

    // Animations
//    var animations = [ new ombrageOrbit() ];
//
//    function ombrageOrbit() {
//
//      // Control and anchor points
//      this.points = [
//                    [ [284.5, 72.8], [252.8, 46.8], [210.6, 33.9], [166.9, 40.5] ],
//                    [ [166.9, 40.5], [84.9, 52.9], [28.5, 129.5], [40.9, 211.5] ],
//                    [ [40.9, 211.5], [46.1, 245.6], [62.4, 275.2], [85.5, 297.4] ]
//                    ];
//
//      // Linear motion index
//      this.linear = [
//                    [0, 0.00, 0.00], [0, 0.41, 0.11], [0, 0.82, 0.22], [1, 0.11, 0.33], 
//                    [1, 0.33, 0.44], [1, 0.55, 0.56], [1, 0.77, 0.67], [1, 0.99, 0.78], 
//                    [2, 0.47, 0.89], [2, 1.00, 1.00]
//                    ];
//
//      // Segment T boundaries
//      this.segmentT = [0.27, 0.79, 1.00];
//
//      this.lastValue = -1.0;
//      this.x = 0;
//      this.y = 0;
//      this.orientation = 0.0;
//      this.pathClock = new clock(5.00, 0.00, 1, false, 0, linear, this.linear.length - 1, 1.00, 0.0000);
//
//      // Update function
//      this.update = updatePath;
//    }

    function initManometer() {

      // Set main canvas and context references
      canvas = document.getElementById("canvasManometer");
      ctx = canvas.getContext("2d");
      

      // Initialize animations
      ombrage.followOrientation = 0.00 * Math.PI / 180.0;

      // Start animation clocks
      //animations[0].pathClock.start();

      // Set animation timer
      setInterval(drawFrame, (1000 / fps));
    }

    function updateAnimations() {

      // Update animation clocks
      updateAllClocks();

      // Update animation paths  
      var animationCount = animations.length;
      for (var i = 0; i < animationCount; i++) {
        animations[i].update();
      }
    }

    function drawFrame() {

      // Update animations
      //updateAnimations();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      couronne(ctx);

      leds(ctx);

      ctx.save();
   
     ctx.translate(192, 192);
     
      
      ctx.rotate(myAngle);
    
      ombrage(ctx);
      ctx.restore();

      fond(ctx);
      if(myWarning){
          warning(ctx);
      }
      

      centre(ctx);

      joueurR(ctx);

      joueurL(ctx);
    }

    function couronne(ctx) {

      // couronne
      ctx.drawImage(document.getElementById("image1"), -0.0, -0.0);
    }

    function leds(ctx) {

      // leds
      ctx.drawImage(document.getElementById("image2"), 41.8, 41.8);
    }

    function ombrage(ctx) {

      var alpha = ctx.globalAlpha;

      // ombrage
     ctx.drawImage(document.getElementById("image3"), 152.5, 152.5, -304, -304);
    
    }

    function fond(ctx) {

      // fond
      ctx.drawImage(document.getElementById("image4"), 82.1, 114.9);
    }

    function warning(ctx) {

      // warning
      ctx.drawImage(document.getElementById("image5"), 198.0, 244.0);
    }
//var bar = "1.5";
    function centre(ctx) {

      // centre/kmh
      ctx.save();
      ctx.font = "97.0px 'Digital-7'";
      ctx.fillStyle = "rgb(108, 102, 173)";
      ctx.fillText(myBar, 111.9, 195.2);
      ctx.restore();
    }

    
    function joueurR(ctx) {

      // joueurR/kmh
      ctx.save();
      ctx.font = "35.0px 'Digital-7'";
      ctx.fillStyle = "rgb(108, 102, 173)";
      ctx.fillText(kmR, 244.7, 230.8);
      ctx.restore();
    }
    
    

    function joueurL(ctx) {

      // joueurL/kmh
      ctx.save();
      ctx.font = "35.0px 'Digital-7'";
      ctx.fillStyle = "rgb(108, 102, 173)";
      ctx.fillText(kmL, 245.3, 172.6);
      ctx.restore();
    }