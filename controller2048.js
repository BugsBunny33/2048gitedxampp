/**
 * 
 */


var App2048 = angular.module('App2048',[]);

App2048.controller('Ctrl2048', function($scope){
	console.log('Halo iz kontrolera');
	
	$scope.tablica = {br1:1, 
		              br2:2, 
		              br3:3, 
		              br4:4,
		              br5:5,
		              br6:6,
		              br7:7,
		              br8:8,
		              br9:9,
		              br10:10,
		              br11:11, 
		              br12:12, 
		              br13:13, 
		              br14:14, 
		              br15:132, 
		              br16:2048};
		              
    $("tablica.br1").keydown(function(){
    	tablica.br1 = 13;
    });
		
});



