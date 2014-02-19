<?php

if (! file_exists("VIDEOS.txt")) die("Read the README");

$videos = array();

$f = fopen("VIDEOS.txt", 'r');
$videos[0] = fgets($f);
$videos[1] = fgets($f);
fclose($f);

include("dj.php"); // Functions for displaying comments

include("header.inc");

foreach ($videos as $v) {
	$v = trim($v);
	include("t.php");
}

include("footer.inc");

?>
