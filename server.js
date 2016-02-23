var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(http).listen(server);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//database
var db = require('./models');

//routes
io.on('connection', function(socket) {
	//a user connects
		console.log('a user connected');
	//a user disconnects
	  	socket.on('disconnect', function(){
    	console.log('a user disconnected');
	});
	/*sends text to all browsers connected to the server*/
	socket.on('write code', function(text){
		socket.broadcast.emit('write code', text);
	});
});

//html endpoints
app.get('/', function(req, res, next){
	res.sendFile(__dirname + '/public/views/index.html');
});

//server
server.listen(3000, function(){
	console.log('listening on localhost:3000');
});