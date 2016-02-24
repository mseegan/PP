var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(http).listen(server);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//html endpoints
app.get('/', function(req, res, next){
	res.sendFile(__dirname + '/public/views/index.html');
});
app.get('/project', function(req, res, next){
	res.sendFile(__dirname + '/public/views/project.html');
});
//database
var db = require('./models');

//API Endpoints
app.get('/project', function createProject(req, res){
	console.log('body', req.body);
});
//sockets
io.on('connection', function(socket) {
	//a user connects
		console.log('a user connected');
	//a user disconnects
	  	socket.on('disconnect', function(){
    	console.log('a user disconnected');
	});
	//sends text to all browsers connected to the server
	socket.on('write code', function(text){
		socket.broadcast.emit('write code', text);
	});
	//language mode change
	socket.on('change mode', function(e){
		socket.broadcast.emit('change mode', e);
	});
	//chat sends message
  	socket.on('chat message', function(msg){
    	console.log('message: ' , msg);
 	 io.emit('chat message', msg);
  	});
});
//server
server.listen(process.env.PORT || 3000, function () {
	console.log('listening on localhost:3000');
});

// handle incoming connections from clients
io.sockets.on('connection', function(socket) {
    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('room', function(room) {
        socket.join(room);
    });
});

// now, it's easy to send a message to just the clients in a given room
room = "abc123";
io.sockets.in(room).emit('message', 'what is going on, party people?');

// this message will NOT go to the client defined above
io.sockets.in('foobar').emit('message', 'anyone in this room yet?');