$(function(){
	$('.problemList').each(function(){
		var $this = $(this);
		var thisPercent = parseFloat($this.children('.digital').text().substr(0,4)) * 10;
		var problemListW = Math.round(490 * thisPercent / 672);
		$this.animate({width:problemListW}, {
			duration: 2500,
			easing: 'easeInOutCubic',
			complete: function(){
				$('.digital').fadeIn();
			}
		});
	})
})