$(function() {	
var $win = $(window);
var	$winWidth = $win.width();
var	$winHeight = $win.height();
var	$htmlBody = $('html, body');

/*agenda btn click*/
$('#agenda .btn').click(function(){
	var goTo =Math.ceil($('#carTime').offset().top);
	$htmlBody.stop().animate({scrollTop: goTo - 55}, 400);
 	return false;
})

$('#carTime .btn').click(function(){
	var goTo =Math.ceil($('#backcar').offset().top);
	$htmlBody.stop().animate({scrollTop: goTo - 30}, 400);
 	return false;
})
});