<?php

if (! file_exists("VIDEOS.txt")) die("Read the README");

include("dj.php"); // Functions for displaying comments

include("header.inc");

$handle = fopen("VIDEOS.txt", "r");
while (($line = fgets($handle)) !== false) {
	$v = trim($line);
	include("t.php");
}

include("footer.inc");

?>
