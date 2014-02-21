<?php
header('Content-type: application/json');

if (empty($_POST["video"])) die("Missing video");
if (empty($_POST["id"])) die("Missing id");

$dir = base64_encode($_POST["video"]);
$id = $_POST["id"];

$IP = gethostbyaddr($_SERVER['REMOTE_ADDR']);

$jstring = file_get_contents($dir . "/" . $id . ".json");
$json = json_decode($jstring);

if ($IP === $json->IP) {
	if (unlink($dir . "/" . $id . ".json")) {
		echo json_encode(array('id' => "$id"));
	} else {
		echo json_encode(array('id' => ""));
	}
}

?>
