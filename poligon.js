/**
 * 
 */

var objekat = new twentyEightyFour(4,4);

objekat.Reset();

/*
objekat.setTile(0,0,1);
objekat.setTile(0,1,2);
objekat.setTile(0,2,3);
objekat.setTile(0,3,0);
objekat.setTile(1,0,5);
objekat.setTile(1,1,5);
objekat.setTile(1,2,6);
objekat.setTile(1,3,0);
objekat.setTile(2,0,8);
objekat.setTile(2,1,9);
objekat.setTile(2,2,10);
objekat.setTile(2,3,0);
objekat.setTile(3,0,12);
objekat.setTile(3,1,13);
objekat.setTile(3,2,14);
objekat.setTile(3,3,0);
objekat.setTile(4,0,15);
objekat.setTile(4,1,16);
objekat.setTile(4,2,17);
objekat.setTile(4,3,0);
*/
function prikaz(){
	document.getElementById("k1").innerHTML = objekat.Matrix[0][0];
	document.getElementById("k2").innerHTML = objekat.Matrix[0][1];
	document.getElementById("k3").innerHTML = objekat.Matrix[0][2];
	document.getElementById("k4").innerHTML = objekat.Matrix[0][3];
	document.getElementById("k5").innerHTML = objekat.Matrix[1][0];
	document.getElementById("k6").innerHTML = objekat.Matrix[1][1];
	document.getElementById("k7").innerHTML = objekat.Matrix[1][2];
	document.getElementById("k8").innerHTML = objekat.Matrix[1][3];
	document.getElementById("k9").innerHTML = objekat.Matrix[2][0];
	document.getElementById("k10").innerHTML = objekat.Matrix[2][1];
	document.getElementById("k11").innerHTML = objekat.Matrix[2][2];
	document.getElementById("k12").innerHTML = objekat.Matrix[2][3];
	document.getElementById("k13").innerHTML = objekat.Matrix[3][0];
	document.getElementById("k14").innerHTML = objekat.Matrix[3][1];
	document.getElementById("k15").innerHTML = objekat.Matrix[3][2];
	document.getElementById("k16").innerHTML = objekat.Matrix[3][3];
}

prikaz();

document.onkeyup = function(event){
	
	var key = event || window.event;
	
	switch(key.keyCode){
	  case 38:
		  key.preventDefault();
		  objekat.move("UP");
		  break;
	  case 40:
		  key.preventDefault();
		  objekat.move("DOWN");
		  prikaz();
		  break;
	  case 37:
		  key.preventDefault();
		  objekat.move("LEFT");
		  prikaz();
		  break;
	  case 39:
		  key.preventDefault();
		  objekat.move("RIGHT");
		  prikaz();
		  break;
	  default:
		  console.log("Greska u switchu funkcije onkeyup")
	
	}
}


//objekat.newTile();
//document.getElementById("pol1").innerHTML = objekat.move("RIGHT");
//document.getElementById("pol2").innerHTML = objekat.matrica();



