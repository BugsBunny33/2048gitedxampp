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

var matrica = {
		k1:1,
        k2:2,
        k3:3,
        k4:4,
        k5:5,
        k6:6,
        k7:7,
        k8:8,
        k9:9,
        k10:10,
        k11:11,
        k12:12,
        k13:13,
        k14:14,
        k15:132,
        k16:2048
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
	//make list with merged tiles
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

