<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Crowd source video annotation</title>
<style>
.comment { background-color: yellow }
</style>
<script src=jquery.js></script>
<script src=main.js></script>
</head>
<body>
<div id=GOPR0014>
<h1>2009-01-01/GOPR0014.mp4</h1>
<video controls preload=none src=http://mr2011.s3.amazonaws.com/2009-01-01/GOPR0014.mp4></video>
<br>
<form id="myform" name="myform">
<label><input type="checkbox" name="tag[]" value="funny">funny</label>
<label><input type="checkbox" name="tag[]" value="boring">boring</label>
<label><input type="checkbox" name="tag[]" value="interesting">interesting</label>
<input type=text size=50 name=comment placeholder="Comments?">
<input type=hidden name=pos>
<input type=hidden name=video value="GOPR0014">
<input type=submit value=Flag>
<span id="current">0:00</span>/<span id="duration">0:00</span>
</form>

<ul class=feedback>
<?php
include("dj.php");
displayJSON("GOPR0014");
?>
</ul>
</div>

<p><a href="https://github.com/kaihendry/videomarker">Source code, please help out!</a></p>
</body>
</html>
