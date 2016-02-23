$(document).ready(function() {
	console.log("javascript is running");
	//allows use of socket.io's methods
	var socket = io();
	/* asks the server to emit the 
	value of the text editor*/
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

  //changes the mode of the text editor
  $("#selectMode").change(function(){
  	if ($("#selectMode").val() == "1") {
  	console.log("js mode");
	editor.setOption("mode", "javascript");
	} else if ($("#selectMode").val() == "2") {
  	console.log("css mode");
	editor.setOption("mode", "css");
	} else if ($("#selectMode").val() == "3") {
  	console.log("ruby mode");
	editor.setOption("mode", "ruby");
	} else if ($("#selectMode").val() == "4") {
  	console.log("python mode");
	editor.setOption("mode", "python");
	} 
  });
});

