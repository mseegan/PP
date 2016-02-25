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
app.get('/projects', function(req, res, next){
	res.sendFile(__dirname + '/public/views/project.html');
});
//database
var db = require('./models');

//API Endpoints
app.get('/projects/:id', function getProject(req, res){
	console.log('requested project id=', req.params.id);
	db.Project.findOne({_id: req.params.id}, function(err, project){
		if (err) { console.log('error', err); }
		console.log(project);
		res.sendFile(__dirname + '/public/views/project.html');
	});
});

app.post('/projects', function createProject(req, res){
	console.log('body', req.body);

	db.Project.create(req.body, function(err, project) {
	  if (err) { console.log('error', err); }
	  console.log(project);
	  res.redirect("/projects/" + project._id);


	});
});
//sockets
io.on('connection', function(socket) {
	var roomId;
	socket.on('create', function(room){
		roomId = room;
		socket.join(room);
	});
	//a user connects
		console.log('a user connected');
	//a user disconnects
	  	socket.on('disconnect', function(){
    	console.log('a user disconnected');
	});
	//sends text to all browsers connected to the server
	socket.on('write code', function(text){
		socket.to(roomId).broadcast.emit('write code', text);
	});
	//language mode change
	socket.on('change mode', function(e){
		socket.to(roomId).broadcast.emit('change mode', e);
	});
	//chat sends message
	socket.on('chat message', function(username, msg){
	  console.log('message: ' , msg);
	  io.to(roomId).emit('chat message',username + msg);
	});	
});

//server
server.listen(process.env.PORT || 3000, function () {
	console.log('listening on localhost:3000');
});