var widthFull = $(window).width();
var heightFull = $(window).height();
var dessin;
var arbrePositionX = 550;
var arbrePositionY = 800;
var troncColor = "#6B4226";
var TREE;

function initTree() {
    console.log("Init Tree");
    dessin = document.getElementById("canvas");
    dessin.context = dessin.getContext('2d');
    TREE = new Tree(60);
}

function Tree(framerate) {
    this.maxNode = 2000;
    this.wind = 0;
    this.windMomentum = 0;
    this.timer = null;
    this.timerWind = null;
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

    this.startWind = function () {
        console.log("Start Wind");
        this.timerWind = setInterval($.proxy(this.armonicWind, this), 60);
    };
    this.stopWind = function () {
        clearInterval(this.timerWind);
    };
    this.startAutoGrow = function () {
        this.timer = setInterval($.proxy(this.grow, this), 2);
    };

    this.stopAutoGrow = function () {
        clearInterval(this.timer);
    };
    this.startUnGrow = function () {
        this.timer = setInterval($.proxy(this.unGrow, this), 2);
    };


    this.grow = function () {

        for (i in this.tronc) {
            if (this.tronc[i].left == null && Math.random() < 0.07) {
                this.add(Math.random() * 3, this.tronc[i]);
            }
        }
        this.recalculate();
    };
    this.unGrow = function () {

        for (i in this.tronc) {
            if (this.tronc[i].left == null && Math.random() < 0.07) {
                this.substract(Math.random() * 3, this.tronc[i]);
            }
        }
        this.recalculate();
    };

    

    this.add = function (x, to) {
        while (to.parent != null) {
            to.length += x;
            to = to.parent;
        }
        to.length += x;
    };

    this.substract = function (x, to) {
        while (to.parent != null) {
            to.length -= x;
            to = to.parent;
        }
        to.length -= x;
    };

    this.recalculate = function () {
        //do not add node if tree is allready at full size
        if (this.tronc.length < this.maxNode) {
            for (x in this.tronc) {
                if (this.tronc[x].parent != null && this.tronc[x].length > 10 && this.tronc[x].left == null) {
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
        var stack = new Array;
        stack.push(this.tronc[1]);
        while (stack.length > 0) {
            var current = stack.pop();
            if (current.left != null) {
                this.recalculateNode(current, current.left, true);
                stack.push(current.left);
                this.recalculateNode(current, current.right, false);
                stack.push(current.right);
            }
        }
    };


    this.recalculateNode = function (current, child, isLeft) {
        var angle = Math.atan2(current.parent.y - current.y, current.x - current.parent.x);
        var temp = this.gamma * (current.length - child.length) / current.length;
        angle += isLeft ? temp : -temp;
        if (Math.abs(angle) > Math.PI / 2) {
            angle += (Math.PI - Math.abs(angle)) * angle / Math.abs(angle) * this.wind;
        } else {
            angle += angle * this.wind;
        }
        var len = 1;
        if (child.left != null) {
            len = Math.sqrt(2 * (child.left.length * child.right.length) / (child.left.length + child.right.length));
        }
        child.x = current.x + len * Math.cos(angle);
        child.y = current.y - len * Math.sin(angle);
    };

    this.armonicWind = function () {
        this.windMomentum -= (this.wind - (Math.random() - 1 / 2)) * 0.0008 * Math.random();
        this.wind += this.windMomentum;
        this.windMomentum *= 0.997;
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
