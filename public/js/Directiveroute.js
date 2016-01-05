app = angular.module("appTest",['ngRoute','Services','Config']);

app.controller('indexcontroller', function($scope){	
	$scope.logout = function(){
					localStorage.clear("flysys_keyIDuser");
					$(location).attr('href',"http://localhost:3000/home.html");
			}	
		
	
});
//routing menu
app.controller('Userinfo',function($scope){               
			 		 					$scope.welcom = 'welcome to alain muya page test ';
										$scope.myValue = true; 	
               			});
// We use ajaxRequest service to Handle the REST Api in PHP
// call getdata witch containe customer data object
app.controller('adressUser',function($scope,$http,ajaxRequest ){		
										$scope.myValue = true;
										$scope.my = "true";
										$scope.users ={};												
										ajaxRequest.getdata().then(function(response) {	
										$scope.users = response;
										});	
										$("#searchCustomer").keyup(function(){											
											//search user here											
											var userObj = {
																		name : $("#searchCustomer").val()
											}
											ajaxRequest.searchUser(userObj).then(function(response){																				
																					$scope.users = response;													
																					});												
										});
										$scope.submit = function() {		
																				var dataObj =	{																							
																								name: $scope.name,
																								lastname: $scope.lastname,
																								email: $scope.email,
																								tel : $scope.tel
																							}
																					ajaxRequest.adduser(dataObj);
																					$("#exampleModal").modal('hide');
																					ajaxRequest.getdata().then(function(response) {	
																					$scope.users = response;
																						});																					
										}	
										$scope.getuserid = function(id) {
																				$scope.id = Number(id); //Convert string 'id' to numeric
																				var IdObj = {
																										id:	$scope.id  
																								}
																					ajaxRequest.deldata(IdObj).then(function(){
																					ajaxRequest.getdata().then(function(response) {	
																					$scope.users = response;
																						});
																					});																	
																				}
            								 		});
  app.controller('patient', function($scope,$http,ajaxRequest){	
	//$scope.test = "hello sa marche ";	
		$scope.patients={};
		ajaxRequest.getAllPatient().then(function(response){			
			$scope.patients = response;
			//console.log(response);
			
			
		});
		
				
		
		
		
});
