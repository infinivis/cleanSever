var wind=0;
		var wind_dev=(Math.random()-0.5)*0.1;
		var wind_strength=0.1;

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