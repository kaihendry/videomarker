<div class=v id=<?php echo $v; ?>>
<h3><?php echo $v; ?></h3>
<video width=640 height=360 controls preload=none src=<?php echo $v; ?>></video>
<br>
<form class="feedbackform">
<label><input type="checkbox" name="tag[]" value="funny">funny</label>
<label><input type="checkbox" name="tag[]" value="boring">boring</label>
<label><input type="checkbox" name="tag[]" value="interesting">interesting</label>
<input type=text size=50 name=comment placeholder="Comments?">
<input type=hidden name=pos>
<input type=hidden name=video value="<?php echo $v; ?>">
<button>Mark</button>
<span class="current">0:00</span>/<span class="duration">0:00</span>
</form>

<ul class=feedback>
<?php
displayJSON(base64_encode($v));
?>
</ul>
</div>
