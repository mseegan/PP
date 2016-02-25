$(document).ready(function() {
	console.log("javascript is running");
	//allows use of socket.io's methods
	var socket = io();
  var projectId = window.location.pathname.split('/')[2];

socket.emit('create', projectId);
	socket.on('message', function(data) {
	   console.log('Incoming message:', data);
	});
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
  //change language mode
  socket.on('change mode', function(e){
  	$("#selectMode").val(e);
  	setLanguage(e);
  });
   // chat - recieve message
  socket.on('chat message', function(msg){
   $('#messages').append($('<li>').text(msg));
   $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
  });  

  // //requests the server to change the language mode
  // of another browser's text editor.
  $("#selectMode").change(function (){
  	
	var selection =	$('#selectMode').val();
	socket.emit('change mode', selection);
 	setLanguage(selection);
  });
  $("#selectTheme").change(function (){
  	var selection = $('#selectTheme').val();
	editor.setOption("theme", selection);
  });

  //chat - send message
   	 $('#chatSubmit').click(function(e){
 	 	console.log("submit pressed");
  		e.preventDefault();
    	socket.emit('chat message', $('#n').val() + ': ', $('#m').val());
   	 	$('#m').val('');
	});	
});




//sets the language of the text editor
function setLanguage(selection) {
	editor.setOption("mode", selection);
	editor.setOption("htmlMode", selection === "xml");		
}

