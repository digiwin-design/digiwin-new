$(function(){ 
	$('.question').click(function(){
		var $this = $(this);
		var isOpen = $this.parent('.questionList').hasClass('now');
		
		if(isOpen){		
			$this.parent('.questionList').removeClass('now');
		}else{
			$this.parent('.questionList').addClass('now');
		}
		$this.siblings('.answer').stop().slideToggle();	
	})
});