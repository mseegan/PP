var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(http).listen(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	//a user connects
		console.log('a user connected');
	//a user disconnects
	  	socket.on('disconnect', function(){
    	console.log('a user disconnected');
	});
	/*when requested to emit the value of the text editor, the 
	server broadcasts that information to everyone on the page
	except for the sender*/
	socket.on('write code', function(text){
		socket.broadcast.emit('write code', text);
	});
});

app.get('/', function(req, res, next){
	res.sendFile(__dirname + '/public/views/index.html');
});

server.listen(3000, function(){
	console.log('listening on localhost:3000');
});