/**
 * 
 */

const UP = 1, DOWN = 2, LEFT = 3, RIGHT = 4;
const OFFSETS = {
	UP:[1,0],
	DOWN:[-1,0],
	LEFT:[0,1],
	RIGHT:[0,-1],	
};


//Helper function that merges a single row or column in 2048
function merge(line){
	//make copy of object that not has functions as property
	var linija = JSON.parse(JSON.stringify(line));	
	//make list without zeros
	var i = 0;
	while (i <= linija.length - 1){
		if (linija[i] == 0){
		    linija.splice(i, 1);
			linija.push(0);
		}		
		i++;
	}	
	//make a list with merged tiles
	i = 0;
	while (i < linija.length - 1){
		if (linija[i] == linija[i+1]) {
			linija[i] = linija[i] + linija[i+1];
			linija[i+1] = 0;
		}
		i++;
	}
	//clear out zeros
	i = 0;
	while (i <= linija.length - 1){
		if (linija[i] == 0){
		    linija.splice(i, 1);
			linija.push(0);
		}		
		i++;
	}
	return linija;
};


function twentyEightyFour(width, height){
	this.grid_height = height;
	this.grid_width  = width;
	this.Matrix = {};
	
	
	this.startIndices = function(){
		var UP = {}, DOWN = {}, LEFT = {}, RIGHT = {}, i;
		for(i=0; i <= this.grid_width - 1; i++){
			UP[i] = [0, i]; 
			DOWN[i] = [this.grid_height - 1, i];	
		};
		for(i=0; i <= this.grid_height - 1; i++){
			LEFT[i] = [i, 0]; 
			RIGHT[i] = [i, this.grid_width - 1];	
		};
		//string = JSON.stringify(); 
		return [UP, DOWN, LEFT, RIGHT];
	};
	
	
	this.Reset = function () {
		var i,j;
		for(i=0; i <= this.grid_height - 1; i++){
			this.Matrix[i] = [];
			for(j=0; j <= this.grid_width - 1; j++){
				this.Matrix[i][j] = 0;
			};
		};
		this.newTile();
	};
	 
	
	
	this.getGridHeight = function (){
		return this.grid_height;
	};
	
	this.getGridWidth = function (){
		return this.grid_width;
	};
	
	/*Create a new tile in a randomly selected empty square.  The tile should be 2 90% of the time and
    4 10% of the time.*/
	this.newTile = function(){
		var oni_koji_su_0 = {};
		var i,j,k=0;
		
		for(i=0; i <= this.grid_height - 1; i++){
			for(j=0; j <= this.grid_width - 1; j++){
				if (this.Matrix[i][j] == 0){
					oni_koji_su_0[k] = [i,j];
					k++;
				};
			};
		};
		//if there are no empty tiles
		if (Object.keys(oni_koji_su_0) == 0) return "Game over";
		//
		var odabrani = oni_koji_su_0[Math.floor(Math.random() * Object.keys(oni_koji_su_0).length)];
		var dva_i_cetiri = [2,2,2,2,2,2,2,2,2,4];
		var row = odabrani[0], col = odabrani[1], koji = dva_i_cetiri[Math.floor(Math.random() * dva_i_cetiri.length)];
		this.setTile(row, col, koji);
	};
	//sets tile to specified value
	this.setTile = function(row, col, value){
		this.Matrix[row][col] = value;
	};
	//gets value of specified tile
	this.getTile = function(row, col){
		return this.Matrix[row][col];
	};
	//returns Matrix in string, for debugging purpose
	this.matrica = function(){
		return JSON.stringify(this.Matrix);
	};
	
	//Move all tiles in the given direction and add a new tile if any tiles moved.
	this.move = function(direction){
		var poredbeni = JSON.parse(JSON.stringify(this.Matrix));
		var smestaj_nizova = [];
		var startni = this.startIndices();
		
		switch(direction){
		case "UP":
			for(i=0; i <= this.grid_width - 1; i++){
				var trenutni_niz = [];
				for(j=0; j <= this.grid_height - 1; j++){
					trenutni_niz[j] = this.Matrix[j][i];					 
				}
				smestaj_nizova = merge(trenutni_niz);
				for(j=0; j <= this.grid_height - 1; j++){
					this.Matrix[j][i] = smestaj_nizova[j];
				};			
			} 						
			break;
		case "DOWN":
		    for(i=0; i <= this.grid_width - 1; i++){
				var trenutni_niz = [];
				for(j=0; j <= this.grid_height - 1; j++){
					trenutni_niz[j] = this.Matrix[j][i];					 
				}
				smestaj_nizova = merge(trenutni_niz);
				for(j=0; j <= this.grid_height - 1; j++){
					this.Matrix[j][i] = smestaj_nizova[j];
				};			
			}
		    break;
		case "LEFT":
			break;
		case "RIGHT":
			break;
		default:
			return "Greska";
		break;
		}
	};
	
};

/*
document.getElementById("k1").innerHTML = matrica.k1;
document.getElementById("k2").innerHTML = matrica.k2;
document.getElementById("k3").innerHTML = matrica.k3;
document.getElementById("k4").innerHTML = matrica.k4;
document.getElementById("k5").innerHTML = matrica.k5;
document.getElementById("k6").innerHTML = matrica.k6;
document.getElementById("k7").innerHTML = matrica.k7;
document.getElementById("k8").innerHTML = matrica.k8;
document.getElementById("k9").innerHTML = matrica.k9;
document.getElementById("k10").innerHTML = matrica.k10;
document.getElementById("k11").innerHTML = matrica.k11;
document.getElementById("k12").innerHTML = matrica.k12;
document.getElementById("k13").innerHTML = matrica.k13;
document.getElementById("k14").innerHTML = matrica.k14;
document.getElementById("k15").innerHTML = matrica.k15;
document.getElementById("k16").innerHTML = matrica.k16;
*/
