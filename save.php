<?php
$_POST["IP"] = gethostbyaddr($_SERVER['REMOTE_ADDR']);
var_dump($_POST);
file_put_contents("debug.log", json_encode($_POST));
?>
