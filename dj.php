<?php

function displayJSON($dir) {
	if (! is_dir($dir)) return;
	$dirFiles = array();
	if ($handle = opendir($dir)) {

		while (false !== ($entry = readdir($handle))) {
			if ($entry != "." && $entry != "..") {
				$dirFiles[] = $entry;
			}
		}
		closedir($handle);
	}

	sort($dirFiles);

	foreach(array_reverse($dirFiles) as $entry) {
		output($dir . "/" . $entry);
	}
}


function output($jsonfile) {
	$f = file_get_contents($jsonfile);
	$d = json_decode($f);
	$epoch = basename($jsonfile, ".json");

	$pos = "";
	if (strlen($d->pos) > 0) {
		$pos = "<button class=pos>@" . $d->pos . "</button>";
	}

	$tags = "";
	if (isset($d->tag)) {
		$tags = join($d->tag, ",");
	}

	$comment = "";
	if (isset($d->comment)) {
		$comment = $d->comment;
	}

	echo "<li>" . date('Y-m-d', $epoch) . " " . $d->IP . " says: " . $tags . "$pos <span class=comment>" . $comment . "</span></li>\n";
}


?>
