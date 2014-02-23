$(document).ready(function() {
	$(".v video").on("timeupdate", function(event) {
		// console.log("video being played", this.currentTime, this.duration);
		$(this).closest('.v').find('.current').text(this.currentTime);
		$(this).closest('.v').find('.duration').text(this.duration);
		$(this).closest('.v').find('input[name=pos]').val(this.currentTime);
	});

	$('.v video').click(function() {
		this.paused ? this.play() : this.pause();
	});

	$('.v').on('keydown', function(e) {
		if (e.ctrlKey && e.keyCode === 13) {
			var v = $(this).find('video').get(0);
			v.paused ? v.play() : v.pause();
			// console.log("Ctrl+ENTER");
		}
	});

//	$(".pos").click(function() {
//		console.log("POS", $(this).text());
//		//var v = $().closest('.v video').get(0);
//		var v = $().closest('.v video');
//		console.log(v);
//		v.currentTime = $(this).text().substring(1);
//	});

	$(".feedbackform").on("submit", function(event) {
		event.preventDefault();

		if (!$(this).find('input[name=pos]').val() > 0) {
			alert("Position not set: Watch the video!");
			return;
		}

		var self = $(this);

		$.post('/save.php', $(this).serializeArray(), function(response) {

			// console.log(response);
			var pos = "";
			if (response.pos) {
				pos = " <button class=pos>@" + response.pos + "</button>";
			}

			var tags = "";
			if (response.tag) {
				tags = response.tag.join(',');
			}

			d = new Date().toISOString().split("T")[0];

			self.closest('.v').find('.feedback').prepend("<li id=" + response.id + ">" + d + " " + response.IP + " says: " + tags + pos + " <span class=comment>" + response.comment + "</span> <button class=delete>delete</button></li>");
			console.log("Added " + response.id);

			$(".pos").click(function() {
				var v = self.closest('.v').find('video').get(0);
				v.currentTime = $(this).text().substring(1);
			});

			self.closest('.v').find('#' + + response.id + " button.delete").click(function() {
				var payload = {};
				payload.id = response.id;
				payload.video = response.video;
				$.post('/delete.php', payload, function(r) {
					console.log("Remove the added thing", r);
					//					self.closest('.v').find('#' + r.id).css("background-color", "red");
					self.closest('.v').find('#' + r.id).remove();
				});

			});

			self.find("input[name='comment']").val('');

		});

	});
});

