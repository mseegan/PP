$(document).ready(function() {
	console.log("javascript is running");
	var socket = io();
  editor.on("keyup", function() {
    console.log("input valuess!");
    socket.emit('write code', editor.getValue());
    editor.getValue('');
  });

  socket.on('write code', function(text){
  	editor.setValue(text);
  });
});