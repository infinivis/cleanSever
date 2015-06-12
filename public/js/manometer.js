// Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    var fps = 60.0;

    // Animations
    var animations = [ new arrowOrbit() ];

    function arrowOrbit() {

      // Control and anchor points
      this.points = [
                    [ [72.5, 346.7], [53.5, 315.9], [42.5, 279.3], [42.5, 240.0] ],
                    [ [42.5, 240.0], [42.5, 130.9], [127.4, 42.5], [232.2, 42.5] ],
                    [ [232.2, 42.5], [336.9, 42.5], [421.9, 130.9], [421.9, 240.0] ],
                    [ [421.9, 240.0], [421.9, 277.1], [412.1, 311.8], [395.0, 341.4] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.47, 0.06], [0, 0.92, 0.13], [1, 0.13, 0.19], 
                    [1, 0.30, 0.25], [1, 0.47, 0.31], [1, 0.65, 0.38], [1, 0.82, 0.44], 
                    [1, 0.99, 0.50], [2, 0.16, 0.56], [2, 0.33, 0.63], [2, 0.51, 0.69], 
                    [2, 0.68, 0.75], [2, 0.85, 0.81], [3, 0.03, 0.88], [3, 0.50, 0.94], 
                    [3, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [0.14, 0.50, 0.87, 1.00];

      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(10.00, 0.00, 1, false, 0, linear, this.linear.length - 1, 1.00, 0.0000);

      // Update function
      this.update = updatePath;
    }

    function initManometer() {

      // Set main canvas and context references
      canvas = document.getElementById("canvasManometer");
      ctx = canvas.getContext("2d");

      // Initialize animations
      arrow.followOrientation = 0.00 * Math.PI / 180.0;

      // Start animation clocks
      animations[0].pathClock.start();

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
      updateAnimations();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      manometer(ctx);

      ctx.save();
      ctx.translate(animations[0].x, animations[0].y);
      ctx.rotate(arrow.followOrientation + animations[0].orientation);
      arrow(ctx);
      ctx.restore();
    }

    function manometer(ctx) {

      var gradient;

      // manometer/Groupe
      ctx.save();

      // manometer/Groupe/Trac
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(426.9, 350.0);
      ctx.bezierCurveTo(445.4, 316.9, 456.0, 278.6, 456.0, 237.8);
      ctx.bezierCurveTo(456.0, 112.6, 356.4, 11.0, 233.5, 11.0);
      ctx.bezierCurveTo(110.6, 11.0, 10.9, 112.6, 10.9, 237.8);
      ctx.bezierCurveTo(10.9, 278.6, 21.5, 316.9, 40.0, 350.0);
      ctx.lineTo(426.9, 350.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 254, 254)";
      ctx.fill();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(34.2, 311.6);
      ctx.bezierCurveTo(11.2, 252.3, 12.4, 192.9, 41.1, 136.5);
      ctx.bezierCurveTo(74.3, 71.1, 128.6, 32.0, 201.9, 21.3);
      ctx.bezierCurveTo(261.4, 12.7, 315.4, 27.2, 362.6, 63.9);
      ctx.bezierCurveTo(406.4, 98.0, 433.6, 143.2, 441.4, 198.6);
      ctx.bezierCurveTo(449.3, 254.8, 438.8, 306.3, 406.9, 352.0);
      ctx.lineTo(429.1, 352.0);
      ctx.bezierCurveTo(454.7, 309.9, 467.0, 259.2, 461.5, 206.0);
      ctx.bezierCurveTo(447.2, 68.5, 311.5, -26.6, 177.1, 6.7);
      ctx.bezierCurveTo(77.5, 31.4, 6.8, 115.0, 0.5, 217.8);
      ctx.bezierCurveTo(-2.5, 266.8, 8.5, 311.8, 33.9, 352.0);
      ctx.lineTo(55.8, 352.0);
      ctx.bezierCurveTo(46.7, 339.7, 39.8, 326.0, 34.2, 311.6);
      ctx.closePath();
      gradient = ctx.createLinearGradient(0.0, 176.0, 462.8, 176.0);
      gradient.addColorStop(0.00, "rgb(0, 0, 0)");
      gradient.addColorStop(0.48, "rgb(159, 160, 160)");
      gradient.addColorStop(1.00, "rgb(0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(441.4, 198.6);
      ctx.bezierCurveTo(433.6, 143.2, 406.4, 98.0, 362.6, 63.9);
      ctx.bezierCurveTo(315.4, 27.2, 261.4, 12.7, 201.9, 21.3);
      ctx.bezierCurveTo(128.6, 32.0, 74.3, 71.1, 41.1, 136.5);
      ctx.bezierCurveTo(12.4, 192.9, 11.2, 252.3, 34.2, 311.6);
      ctx.bezierCurveTo(39.8, 326.0, 46.7, 339.7, 55.8, 352.0);
      ctx.lineTo(69.3, 352.0);
      ctx.bezierCurveTo(56.3, 333.6, 45.4, 314.0, 38.8, 292.1);
      ctx.bezierCurveTo(21.4, 234.8, 27.4, 180.3, 57.9, 128.7);
      ctx.bezierCurveTo(86.8, 80.0, 128.9, 48.5, 183.8, 35.4);
      ctx.bezierCurveTo(247.1, 20.3, 304.9, 33.6, 356.7, 73.1);
      ctx.bezierCurveTo(371.6, 84.4, 384.6, 97.5, 394.3, 113.6);
      ctx.lineTo(394.3, 113.6);
      ctx.lineTo(394.3, 113.6);
      ctx.bezierCurveTo(411.6, 133.5, 421.7, 157.3, 427.5, 182.4);
      ctx.bezierCurveTo(442.2, 247.0, 430.3, 303.8, 393.4, 352.0);
      ctx.lineTo(406.9, 352.0);
      ctx.bezierCurveTo(438.8, 306.3, 449.3, 254.8, 441.4, 198.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 230, 229)";
      ctx.fill();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(104.2, 351.0);
      ctx.bezierCurveTo(75.6, 320.0, 58.2, 278.7, 58.2, 233.2);
      ctx.bezierCurveTo(58.2, 137.2, 136.0, 59.4, 232.0, 59.4);
      ctx.bezierCurveTo(328.0, 59.4, 405.8, 137.2, 405.8, 233.2);
      ctx.bezierCurveTo(405.8, 278.7, 388.4, 320.0, 359.8, 351.0);
      ctx.lineTo(399.5, 351.0);
      ctx.bezierCurveTo(423.7, 317.2, 438.0, 275.8, 438.0, 231.1);
      ctx.bezierCurveTo(438.0, 117.4, 345.8, 25.1, 232.0, 25.1);
      ctx.bezierCurveTo(118.2, 25.1, 26.0, 117.4, 26.0, 231.1);
      ctx.bezierCurveTo(26.0, 275.8, 40.3, 317.2, 64.5, 351.0);
      ctx.lineTo(104.2, 351.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(26.0, 188.1, 438.0, 188.1);
      gradient.addColorStop(0.08, "rgb(226, 0, 10)");
      gradient.addColorStop(0.18, "rgb(234, 72, 5)");
      gradient.addColorStop(0.24, "rgb(242, 145, 0)");
      gradient.addColorStop(0.28, "rgb(148, 157, 25)");
      gradient.addColorStop(0.55, "rgb(54, 169, 50)");
      gradient.addColorStop(0.72, "rgb(148, 157, 25)");
      gradient.addColorStop(0.74, "rgb(242, 145, 0)");
      gradient.addColorStop(0.83, "rgb(234, 72, 5)");
      gradient.addColorStop(0.97, "rgb(226, 0, 10)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(235.0, 25.0);
      ctx.lineTo(235.0, 60.0);
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(183.9, 40.4);
      ctx.lineTo(188.5, 57.3);
      ctx.lineWidth = 4.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(136.4, 60.1);
      ctx.lineTo(145.1, 75.3);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(87.0, 85.0);
      ctx.lineTo(111.0, 109.0);
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(64.1, 132.3);
      ctx.lineTo(79.3, 141.0);
      ctx.lineWidth = 4.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(44.4, 179.8);
      ctx.lineTo(61.3, 184.4);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(26.0, 230.9);
      ctx.lineTo(59.0, 230.9);
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(44.3, 281.9);
      ctx.lineTo(61.2, 277.4);
      ctx.lineWidth = 4.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(64.0, 329.5);
      ctx.lineTo(79.1, 320.8);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(405.6, 329.7);
      ctx.lineTo(390.5, 321.0);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(425.4, 282.2);
      ctx.lineTo(408.5, 277.6);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(437.9, 231.1);
      ctx.lineTo(405.9, 231.1);
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(425.4, 180.1);
      ctx.lineTo(408.5, 184.6);
      ctx.lineWidth = 4.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(405.8, 132.5);
      ctx.lineTo(390.6, 141.2);
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(379.0, 87.0);
      ctx.lineTo(355.9, 110.2);
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(333.6, 60.2);
      ctx.lineTo(324.9, 75.4);
      ctx.lineWidth = 4.0;
      ctx.stroke();

      // manometer/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(286.0, 40.5);
      ctx.lineTo(281.5, 57.4);
      ctx.stroke();

      // manometer/Groupe/Air Force Tree
      ctx.font = "17.0px 'Myriad Pro'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("Air Force Tree", 185.0, 333.0);

      // manometer/Groupe/irregular                                                                             violent
      ctx.font = "18.0px 'Myriad Pro'";
      ctx.save();
      ctx.transform(0.016, -1.000, 1.000, 0.016, 77.0, 236.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.036, -0.999, 0.999, 0.036, 77.0, 232.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.060, -0.998, 0.998, 0.060, 77.2, 229.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.083, -0.997, 0.997, 0.083, 77.4, 225.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.107, -0.994, 0.994, 0.107, 77.7, 221.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.131, -0.991, 0.991, 0.131, 78.1, 217.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.155, -0.988, 0.988, 0.155, 78.6, 214.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.179, -0.984, 0.984, 0.179, 79.2, 210.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.203, -0.979, 0.979, 0.203, 79.8, 206.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.228, -0.974, 0.974, 0.228, 80.6, 203.1);
      ctx.fillText("i", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.259, -0.966, 0.966, 0.259, 81.5, 199.1);
      ctx.fillText("r", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.296, -0.955, 0.955, 0.296, 83.0, 193.4);
      ctx.fillText("r", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.339, -0.941, 0.941, 0.339, 84.6, 188.1);
      ctx.fillText("e", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.396, -0.918, 0.918, 0.396, 87.6, 179.8);
      ctx.fillText("g", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.454, -0.891, 0.891, 0.454, 91.5, 170.7);
      ctx.fillText("u", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.493, -0.870, 0.870, 0.493, 96.0, 162.0);
      ctx.fillText("l", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.528, -0.849, 0.849, 0.528, 98.0, 158.4);
      ctx.fillText("a", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.567, -0.824, 0.824, 0.567, 102.5, 151.2);
      ctx.fillText("r", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.592, -0.806, 0.806, 0.592, 105.8, 146.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.611, -0.792, 0.792, 0.611, 108.1, 143.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.630, -0.777, 0.777, 0.630, 110.3, 140.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.648, -0.761, 0.761, 0.648, 112.7, 137.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.666, -0.746, 0.746, 0.666, 115.1, 134.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.684, -0.729, 0.729, 0.684, 117.6, 131.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.701, -0.713, 0.713, 0.701, 120.2, 129.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.718, -0.696, 0.696, 0.718, 122.8, 126.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.735, -0.678, 0.678, 0.735, 125.5, 123.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.751, -0.660, 0.660, 0.751, 128.2, 121.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.766, -0.642, 0.642, 0.766, 131.0, 118.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.782, -0.624, 0.624, 0.782, 133.9, 116.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.796, -0.605, 0.605, 0.796, 136.8, 114.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.811, -0.585, 0.585, 0.811, 139.8, 111.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.825, -0.566, 0.566, 0.825, 142.8, 109.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.838, -0.546, 0.546, 0.838, 145.9, 107.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.851, -0.525, 0.525, 0.851, 149.1, 105.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.863, -0.505, 0.505, 0.863, 152.3, 103.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.875, -0.483, 0.483, 0.875, 155.5, 101.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.887, -0.462, 0.462, 0.887, 158.8, 99.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.898, -0.441, 0.441, 0.898, 162.1, 98.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.908, -0.419, 0.419, 0.908, 165.5, 96.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.918, -0.396, 0.396, 0.918, 168.9, 94.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.927, -0.374, 0.374, 0.927, 172.3, 93.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.936, -0.351, 0.351, 0.936, 175.8, 92.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.945, -0.328, 0.328, 0.945, 179.3, 90.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.952, -0.305, 0.305, 0.952, 182.8, 89.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.959, -0.282, 0.282, 0.959, 186.4, 88.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.966, -0.259, 0.259, 0.966, 190.0, 87.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.972, -0.235, 0.235, 0.972, 193.6, 86.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.977, -0.211, 0.211, 0.977, 197.2, 85.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.982, -0.188, 0.188, 0.982, 200.9, 84.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.986, -0.164, 0.164, 0.986, 204.5, 83.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.990, -0.140, 0.140, 0.990, 208.3, 83.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.993, -0.116, 0.116, 0.993, 211.9, 82.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.996, -0.092, 0.092, 0.996, 215.7, 82.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.998, -0.068, 0.068, 0.998, 219.4, 82.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.999, -0.044, 0.044, 0.999, 223.1, 81.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(1.000, -0.020, 0.020, 1.000, 226.9, 81.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(1.000, 0.016, -0.016, 1.000, 230.6, 81.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(1.000, 0.027, -0.027, 1.000, 234.3, 81.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.999, 0.051, -0.051, 0.999, 238.1, 81.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.997, 0.075, -0.075, 0.997, 241.8, 81.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.995, 0.099, -0.099, 0.995, 245.6, 82.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.992, 0.123, -0.123, 0.992, 249.3, 82.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.989, 0.147, -0.147, 0.989, 253.0, 82.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.985, 0.170, -0.170, 0.985, 256.7, 83.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.981, 0.194, -0.194, 0.981, 260.4, 84.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.976, 0.218, -0.218, 0.976, 264.1, 84.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.970, 0.242, -0.242, 0.970, 267.7, 85.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.964, 0.265, -0.265, 0.964, 271.4, 86.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.957, 0.289, -0.289, 0.957, 275.0, 87.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.950, 0.312, -0.312, 0.950, 278.5, 88.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.942, 0.335, -0.335, 0.942, 282.1, 89.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.934, 0.358, -0.358, 0.934, 285.6, 91.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.925, 0.380, -0.380, 0.925, 289.1, 92.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.915, 0.403, -0.403, 0.915, 292.6, 93.8);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.905, 0.425, -0.425, 0.905, 296.0, 95.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.895, 0.447, -0.447, 0.895, 299.4, 96.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.884, 0.468, -0.468, 0.884, 302.8, 98.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.872, 0.489, -0.489, 0.872, 306.1, 100.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.860, 0.510, -0.510, 0.860, 309.3, 102.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.847, 0.531, -0.531, 0.847, 312.6, 104.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.834, 0.551, -0.551, 0.834, 315.7, 106.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.821, 0.571, -0.571, 0.821, 318.9, 108.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.807, 0.591, -0.591, 0.807, 321.9, 110.2);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.792, 0.610, -0.610, 0.792, 324.9, 112.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.778, 0.629, -0.629, 0.778, 327.9, 114.7);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.762, 0.647, -0.647, 0.762, 330.8, 117.1);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.746, 0.666, -0.666, 0.746, 333.7, 119.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.730, 0.683, -0.683, 0.730, 336.5, 122.0);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.714, 0.700, -0.700, 0.714, 339.2, 124.5);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.697, 0.717, -0.717, 0.697, 341.9, 127.2);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.679, 0.734, -0.734, 0.679, 344.5, 129.9);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.661, 0.750, -0.750, 0.661, 347.0, 132.6);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.643, 0.766, -0.766, 0.643, 349.5, 135.4);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.625, 0.781, -0.781, 0.625, 351.9, 138.3);
      ctx.fillText(" ", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.593, 0.805, -0.805, 0.593, 354.3, 141.1);
      ctx.fillText("v", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.560, 0.828, -0.828, 0.560, 359.3, 148.0);
      ctx.fillText("i", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.523, 0.852, -0.852, 0.523, 361.6, 151.4);
      ctx.fillText("o", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.484, 0.875, -0.875, 0.484, 366.7, 159.7);
      ctx.fillText("l", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.447, 0.895, -0.895, 0.447, 368.7, 163.3);
      ctx.fillText("e", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.392, 0.920, -0.920, 0.392, 372.7, 171.2);
      ctx.fillText("n", 0, 0);
      ctx.restore();
      ctx.save();
      ctx.transform(0.345, 0.939, -0.939, 0.345, 376.5, 180.2);
      ctx.fillText("t", 0, 0);
      ctx.restore();

      // manometer/Groupe/pressure control
      ctx.font = "17.0px 'Myriad Pro'";
      ctx.fillStyle = "rgb(85, 85, 84)";
      ctx.fillText("pressure control", 178.0, 315.0);

      // manometer/Groupe/harmonious
      ctx.font = "18.0px 'Myriad Pro'";
      ctx.save();
      ctx.transform(1.000, 0.008, -0.008, 1.000, 189.0, 92.0);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("harmonious", 0, 0);
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }

    function arrow(ctx) {

      // arrow/Groupe
      ctx.save();

      // arrow/Groupe/Trac
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(8.9, -21.4);
      ctx.lineTo(19.3, -21.4);
      ctx.lineTo(14.1, -12.4);
      ctx.lineTo(8.9, -3.4);
      ctx.lineTo(3.7, -12.4);
      ctx.lineTo(-1.5, -21.4);
      ctx.lineTo(8.9, -21.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(203, 203, 204)";
      ctx.fill();
      ctx.lineWidth = 0.9;
      ctx.strokeStyle = "rgb(1, 1, 2)";
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4.0;
      ctx.stroke();

      // arrow/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(8.9, 30.1);
      ctx.lineTo(-1.5, 30.1);
      ctx.lineTo(3.7, 21.1);
      ctx.lineTo(8.9, 12.1);
      ctx.lineTo(14.1, 21.1);
      ctx.lineTo(19.3, 30.1);
      ctx.lineTo(8.9, 30.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // arrow/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(13.9, 195.8);
      ctx.lineTo(4.9, 195.8);
      ctx.lineTo(4.9, 29.8);
      ctx.lineTo(13.9, 29.8);
      ctx.lineTo(13.9, 195.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    }