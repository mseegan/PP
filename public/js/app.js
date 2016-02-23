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

  socket.on('change mode', function(e){
  	$("#selectMode").val(e);
  	setLanguage(e);
  })

  // //requests the server to change the language mode
  // of another browser's text editor.
  $("#selectMode").change(function (){
  	
	var selection =	$('#selectMode').val();
	socket.emit('change mode', selection);
 	setLanguage(selection)
  });
  $("#selectTheme").change(function (){
  	var selection = $('#selectTheme').val();
	editor.setOption("theme", selection);
  });
});




//sets the language of the text editor
function setLanguage(selection) {
	editor.setOption("mode", selection);
	editor.setOption("htmlMode", selection === "xml");		
}
