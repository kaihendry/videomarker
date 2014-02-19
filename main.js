$(document).ready(function() {
	$(".v video").on("timeupdate", function(event) {
		$(this).siblings(".current").text(this.currentTime);
		$(this).siblings(".duration").text(this.duration);
	});

	$(".feedbackform").on("submit", function(event) {
		event.preventDefault();
		$.post('/save.php', $(this).serializeArray(), function(response) {

			var pos = "";
			if (response.pos) {
				pos = " @" + response.pos;
			}

			var tags = "";
			if (response.tag) {
				tags = response.tag.join(',');
			}

			d = new Date().toISOString().split("T")[0];

			$(this).parents('.v').first().find('.feedback').css("background-color", "red");
			$(this).closest('.v').find('.feedback').prepend("<li>fsdfs</li>");
			$(this).parents().closest('.feedback').css("background-color", "red");
			console.log("here");

			$(this).closest('.v').find('.feedback').prepend("<li>" + d + " " + response.IP + " says: " + tags + pos + " <span class=comment>" + response.comment + "</span></li>");
		});
	});

});

