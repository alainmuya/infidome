
app = angular.module('addpatient',['services']);
app.controller('showPatientController', [ '$scope', '$http','check_session', function($scope,$http,check_session){	
					//redirect to loggin form if session not exist
	       			check_session.Get_checked_session();	       			
	       			//list all Patient	
					$http({
						  method: 'POST',
						  url: 'http://127.0.0.1/infidomeAPI/listpatient.php',
						  data : {email:$scope.email } 
						}).then(function successCallback(response) {
						    // this callback will be called asynchronously
						    // when the response is available
						   // console.log(response.data);
						    $scope.patient = response.data;
						    }, function errorCallback(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    console.log("cant connect to php restfull");
						  });
							/*
							var getit = sessionStorage.getItem("email");
							console.log(getit+"cool");
							*/
							$scope.toLogin= function(){
									//console.log("sa madcececec");
									sessionStorage.removeItem('email');
									window.location = '/loginPage';
							}								
				}]);

app.controller('addpatientController', [ '$scope', '$http', function($scope,$http){	
$scope.addpatient = function(){	
		$http.post('/addpatient', {	name: $scope.name,
									lastname: $scope.lastname,
								 	adresse : $scope.adresse ,
									SIS :$scope.SIS,
								 	telephone : $scope.telephone 
								})
		.then(function onSuccess(sailsResponse){
			//console.log(res.name);
				//window.location = '/';
		})
		.catch(function onError(sailsResponse){
					console.log('not working');
		})
	}
}]);

