/**
 * 
 */
//document.getElementById("k1").innerHTML = 7;
/*
p = [1,1,0,2,0,3,4,4];

document.getElementById("pol").innerHTML = JSON.parse(JSON.stringify(p));*/

var p = {
	0:[3,4,5],
	1:[6,7,8],
	2:[91,10,110],
};

var objekat = new twentyEightyFour(4,5);

objekat.Reset();

/*
objekat.setTile(3,3,0);
objekat.setTile(2,2,0);
objekat.setTile(0,0,0);
*/

objekat.setTile(0,0,0);
objekat.setTile(0,1,0);
objekat.setTile(0,2,0);
objekat.setTile(0,3,0);
objekat.setTile(1,0,4);
objekat.setTile(1,1,5);
objekat.setTile(1,2,6);
objekat.setTile(1,3,7);
objekat.setTile(2,0,8);
objekat.setTile(2,1,9);
objekat.setTile(2,2,10);
objekat.setTile(2,3,11);
objekat.setTile(3,0,12);
objekat.setTile(3,1,13);
objekat.setTile(3,2,14);
objekat.setTile(3,3,15);
objekat.setTile(4,0,16);
objekat.setTile(4,1,17);
objekat.setTile(4,2,18);
objekat.setTile(4,3,19);
/*
objekat.newTile();
s=JSON.stringify(objekat.Matrix);
*/

//document.getElementById("pol1").innerHTML = objekat.startIndices()[0][0][0];

document.getElementById("pol2").innerHTML = objekat.move("UP");
document.getElementById("pol1").innerHTML = objekat.matrica();



/*
p[3] = [33,44,55];
p[4] = [];
p[4][0] = 77;

document.getElementById("pol").innerHTML = p[4][0];*/