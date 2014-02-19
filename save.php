<?php
header('Content-type: application/json');

if (empty($_POST["video"])) die("Missing video");

$dir = base64_encode($_POST["video"]);
@mkdir($dir);

$_POST["IP"] = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$_POST["comment"] = htmlspecialchars($_POST["comment"]);

$j = json_encode($_POST);

if (file_put_contents($dir . "/" . date("U") . ".json", $j)) {
	echo $j;
} else {
	echo "Failed to write.";
}

?>
