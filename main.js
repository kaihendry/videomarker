$(document).ready(function() {
	$(".v video").on("timeupdate", function(event) {
		// console.log("video being played", this.currentTime, this.duration);
		$(this).closest('.v').find('.current').text(this.currentTime);
		$(this).closest('.v').find('.duration').text(this.duration);
		$(this).closest('.v').find('input[name=pos]').val(this.currentTime);
	});

	$(".feedbackform").on("submit", function(event) {
		event.preventDefault();

		var self = $(this);

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

			self.closest('.v').find('.feedback').prepend("<li>" + d + " " + response.IP + " says: " + tags + pos + " <span class=comment>" + response.comment + "</span></li>");
		});
	});

});

