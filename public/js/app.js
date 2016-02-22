$(document).ready(function() {
	console.log("javascript is running");
	//allows use of socket.io's methods
	var socket = io();
	/* keyup events trigger a request to emit the 
	value of the entire text editor to other users*/
  editor.on("keyup", function() {
    console.log("input text recieved");
    socket.emit('write code', editor.getValue());
    editor.getValue('');
  });

  /* on the 'write code' event, sets the value of the text editor
  equal to the text recieved in the event */
  socket.on('write code', function(text){
  	editor.setValue(text);
  });
});