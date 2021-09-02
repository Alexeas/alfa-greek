$(document).ready(function(){
	$('.cookie_btn').click(function(){
		$('.cookie_block').hide(100);
		document.cookie = "cookie_block=true; max-age=31556926";
		return false;
	});
});
