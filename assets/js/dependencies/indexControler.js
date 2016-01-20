var app = angular.module("main",[]);

app.controller("indexControler",function($scope,$q){

	$scope.test="premier test angular";			
	$scope.hideBarMenu =false;	
	$scope.loading = true;	

	$scope.toLogin = function(){
		$scope.hideBarMenu =true;
		console.log("yes");		
	}


})