Services = angular.module("Services",[]);
// service CRUD 
Services.service('ajaxRequest', function($http,$q){	
										return ({
															getdata : getdata,
															deldata	:	deldata,
															adduser : adduser,
															Sendusrlogin : Sendusrlogin,
															searchUser : searchUser,
															getAllPatient : getAllPatient
											//				CheckSession :CheckSession
												});	
									
									//functions get customer from DB
										function getdata(){
										 var request = $http({
														url:"http://flysys.be/route/php/",
														method: "POST",
														data : {},
											 			cache : false
														});
														return request.then(succesCB, errorCB);		
											}										
	  								function getAllPatient(){
										 var request = $http({
														url:"http://flysys.be/route/php/getAllpatient.php",
														method: "GET",
														data : {},
											 			cache : false
														});
														return request.then(succesCB, errorCB);		
											}		
	
										function deldata(objid) {
											var req = $http({
																						url : "http://flysys.be/route/php/delete.php",
																						method:"POST",
																						data: objid,
																						cache : false
																					});		
																					return req.then(function(data){
																						console.log(data); 																						
																					})			
																}
										function searchUser(objid) {
											var req = $http({
																						url : "http://flysys.be/route/php/search.php",
																						method:"POST",
																						data: objid,
																						cache : false
																					});		
																					return req.then(function(data){
																						//console.log(data); 	
																					return data.data;
																					})	
																}
	
										function adduser(dataObj){
												var request = $http({
																						method: "post",
																						url: "http://flysys.be/route/php/InsertClient/index.php",
																						data: dataObj,
																						cache : true
																				});
																				request.success(function(data) {
																								console.log(data);
																											}
                																);
																					}
          					function Sendusrlogin(Objdata,errorMessage){										
										var $req = $http({
																						url:"http://flysys.be/route/php/login/", 
																						method :"POST", 
																						data: Objdata,
												 										cache : true
										                 });
										  $req.then(function(response){
																					//use Jquery to check if callback is empty and display error 
																					//show and hide error message and add txt if error
																					if(jQuery.isEmptyObject(response.data)){
																						$('#error').show().html(errorMessage);
																					}else{
																						//redirect to home page if user is logged and use localStorage to store user session 
																						$('#error').hide().html("");																																														
																						$(location).attr('href','http://localhost:3000/home.html');
																						//console.log(response.data);																						
																							angular.forEach(response.data, function(value,key){
																						//define localStorage and store user key  	
																								//console.log(value);
																							localStorage.setItem("flysys_keyIDuser", JSON.stringify(value));
																						//console.log(sessionStorage.flysys_keyIDuser);
																																														
																								
																						});
																						return response.data;
																					}		
																				},errorCB);
									}  
						function succesCB(response){  														
                                return response.data;		
														}	
						function errorCB(response){                            
                                 console.log(response.data);				
              
													if(!angular.isObject(response.data) || !response.data){
														return $q.reject("an error occurs");					
													              }
														return $q.reject(response.data);
													 }
		});