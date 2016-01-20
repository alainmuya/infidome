app = angular.module('loginModule',[]);

app.controller('loginControler', [ '$scope', '$http', function($scope,$http){

	$scope.test="premier test angular";			
	//$scope.hideBarMenu =true;	
	//loginForm.loading= false;	  	
	$scope.loginForm = function(){
		console.log( $scope.email+''+$scope.password);		
		$http.post('/login', {email: $scope.email,
								 password: $scope.password
								})
		.then(function onSuccess(sailsResponse){
			console.log('working');
				window.location = '/';
		})
		.catch(function onError(sailsResponse){
					console.log('not working');
					$scope.error="mot de pass increcte"
		})


	}

	

}]);