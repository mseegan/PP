$(document).ready(function() {
	console.log("javascript is running");

	//create new Project
	$.ajax({
		method: 'POST',
		url: '/project',
		data: formData,
		success: function(data){
			console.log(data._id);
		}
	});
});