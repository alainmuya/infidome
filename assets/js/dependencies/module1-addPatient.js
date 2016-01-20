
app = angular.module('addpatient',[]);



app.controller('showPatientController', [ '$scope', '$http', function($scope,$http){	
					$http({
						  method: 'POST',
						  url: 'http://127.0.0.1/infidomeAPI/listpatient.php',
						  data : {email:$scope.email } 
						}).then(function successCallback(response) {
						    // this callback will be called asynchronously
						    // when the response is available
						    console.log(response.data);
						    $scope.patient = response.data;
						    }, function errorCallback(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    console.log("cant connect to php restfull");
						  });

				}]);



app.controller('addpatientController', [ '$scope', '$http', function($scope,$http){	
$scope.addpatient = function(){
		console.log($scope.name);
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

