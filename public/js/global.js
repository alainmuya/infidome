// check connected nurse, create li element and output name of connected nurse	
	
	
var Getstorage = JSON.parse(localStorage.getItem("flysys_keyIDuser"));
			console.log(Getstorage.id);

				 var socket = io("http://185.73.37.69:3000");
					socket.emit('newconection', {origine: Getstorage.Nom});
					socket.on('test', function(data){					
					$('#listconnect').append($('<li>').text(data.message));
							});
				//	var clients = io.socket.clients();
				  console.log(socket.sessionId);