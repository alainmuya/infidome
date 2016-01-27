 app = angular.module("services",[]);
 //check if session existe
app.service('check_session', function($http,$q){	
										return ({
													Get_checked_session : Get_checked_session,
													//checked_if_nurse_exist : checked_if_nurse_exist	
												});	
		function Get_checked_session(){
			var session = sessionStorage.getItem("email");
			if (!session){	window.location = '/loginPage';}											
			return	
			}
		/*
			function checked_if_nurse_exist(dataemail){
			var request = $http({
			url:"http://localhost/infidomeAPI/ifexiste.php",
			method: "POST",
			data : dataemail,
			cache : false
			});
			return request.then(function(response) {
				console.log(response.data);
				return response.data;
			} , errorCB);		
			}
			*/
		function errorCB(response){                            
            console.log(response.data);				
              
			if(!angular.isObject(response.data) || !response.data){
				return $q.reject("an error occurs");					
					 }
				return $q.reject(response.data);
				 }								
})