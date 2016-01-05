var fs 			 = require('fs');
var express 	 = require('express');

var app 		 = express();
var http 		 = require('http');
var server 		 = http.createServer(app);
var io 			 = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));
app.get('/socket.io/socket.io.js', function (req, res){
		res.sendfile(__dirname + 			 
			'/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js');
});
	
io.on('connection', function(socket){
  console.log('a user connected from socke app');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('newconection', function(data){
  	socket.emit('test' , {message:data.origine});
  });

    socket.on('abroad', function(data){
    console.log(data.origine);
  })

});
server.listen(3000, function() {
	console.log("server starting on port 3000");
});





