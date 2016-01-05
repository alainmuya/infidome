var app = angular.module('indexmodule', ['Services']);
app.controller('indexControler', function($scope,$q,ajaxRequest){	
														$('#error').hide();
	//localStorage.clear();
														$scope.submitdata = function(){
																		inputObj = { 
																					email : $scope.email,
																					password : $scope.password
																				}	
																		errorMessage = "Mot de passe ou Email pas correcte";
																	//$scope.result = ajaxRequest.Sendusrlogin(inputObj);
																		  ajaxRequest.Sendusrlogin(inputObj,errorMessage);
																	}
																});
					
																					
											
	

					