<?php
header('Content-type: application/json');

if (empty($_POST["video"])) die("Missing video");

@mkdir($_POST["video"]);

$_POST["IP"] = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$_POST["comment"] = htmlspecialchars($_POST["comment"]);

$j = json_encode($_POST);
file_put_contents($_POST["video"] . "/" . date("U") . ".json", $j);

echo $j

?>
