Config = angular.module('Config',[]);
Config.config(function ($routeProvider,$httpProvider){
         $routeProvider 
                .when('/welcom',{
                          templateUrl :'custom.html',
                          controller:'adressUser' 
		          				})
                .when('/customer',{
                                 templateUrl :'welcom.html',
			 					 									controller :'Userinfo'	
		                         })
				    		.when('/patient',{
                                 templateUrl :'patient.html',
			 					 									controller :'patient'	
		                         })
				 				.when('/index',{
					 												templateUrl :'index.html',
					 												controller :'maincontroller'	
										 	})				 
                .otherwise({
                      redirectTo : '/'});	
	       						//Check if session existe, if not redirect to signup page											
										//var Url = 'http://flysys.be/route/index.html';										
										var Getstorage = localStorage.getItem("flysys_keyIDuser");
										if(jQuery.isEmptyObject(Getstorage)){
											$(location).attr('href','http://185.73.37.69:3000/');
										}	
      });