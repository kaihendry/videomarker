$(document).ready(function() {
	$("#GOPR0014 video").on("timeupdate", function(event) {
		onTrackedVideoFrame(this.currentTime, this.duration);
	});

	$("#myform").on("submit", function(event) {
		event.preventDefault();
		$.post('/save.php', $(this).serializeArray(), function(response) {
			//console.log(response);

			var pos = "";
			if (response.pos) {
				pos = " @" + response.pos;
			}

			var tags = "";
			if (response.tag) {
				tags = response.tag.join(',');
			}

			d = new Date().toISOString().split("T")[0];

			$('.feedback').prepend("<li>" + d + " " +  response.IP + " says: " +
				tags + pos + " <span class=comment>" + response.comment + "</span></li>");
		});
	});

});

function onTrackedVideoFrame(currentTime, duration) {
	$('input[name=pos]').val(currentTime)
	$("#current").text(currentTime);
	$("#duration").text(duration);
}

