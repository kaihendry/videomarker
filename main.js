$(document).ready(function() {
	$("#GOPR0014 video").on("timeupdate", function(event) {
		onTrackedVideoFrame(this.currentTime, this.duration);
	});

	$("#myform").on("submit", function(event) {
		console.log("here I am");
		event.preventDefault();
		console.log($(this).serialize());
	});

});

function onTrackedVideoFrame(currentTime, duration) {
	$('input[name=pos]').val(currentTime)
	$("#current").text(currentTime);
	$("#duration").text(duration);
}

