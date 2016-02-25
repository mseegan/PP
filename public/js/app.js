$(document).ready(function() {
	console.log("javascript is running");
	var projectId = window.location.pathname.split('/')[2];
	//get one project
  $.ajax({
  	method: 'GET',
  	url: '/project/' + projectId,
  	success: function(data) {
  	}
  });

});