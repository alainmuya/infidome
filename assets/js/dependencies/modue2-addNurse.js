
app = angular.module('addnurse',[]);


app.controller('shownurseController', [ '$scope', '$http', function($scope,$http){	
					$http({
						  method: 'POST',
						  url: 'http://127.0.0.1/infidomeAPI/listnurse.php',
						  data : {email:$scope.email } 
						}).then(function successCallback(response) {
						    // this callback will be called asynchronously
						    // when the response is available
						    console.log(response.data);
						    $scope.nurse = response.data;
						    }, function errorCallback(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    console.log("cant connect to php restfull");
						  });

				}]);

app.controller('addnurseController', [ '$scope', '$http', function($scope,$http){

// encrypte password and send nurse value to benck end for database storage	
$scope.addnurse = function(){
		console.log($scope.name);			

			$http.post('/addnurse', {	name: $scope.name,
										lastname: $scope.lastname,
									 	email : $scope.email ,
										inami :$scope.Inami,
										password : "undefined",
									 	telephone : $scope.telephone 
									})
			.then(function onSuccess(sailsResponse){
				//console.log(res.name);
					//window.location = '/';
					$http({
						  method: 'POST',
						  url: 'http://127.0.0.1/infidomeAPI/emailSender.php',
						  data : {email:$scope.email } 
						}).then(function successCallback(response) {
						    // this callback will be called asynchronously
						    // when the response is available
						    console.log(response);
						  }, function errorCallback(response) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						    console.log("cant connect to php restfull");
						  });
			})
			.catch(function onError(sailsResponse){
						console.log('not working');
			})
		}
}]);

