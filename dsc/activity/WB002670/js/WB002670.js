$(function(){
	var $htmlBody = $('html, body');
	var $win = $(window);
	var $winWidth = $win.width();
	var height = -650;
	var n = 1;	
	var oldN;
	var imgSliderTimer = setTimeout(imgSlider, 3000);
	function imgSlider(){	
		oldN = n;
		if(n == 1){
			n++;
		}else{
			n = 1;
		} 
		$('.hightLight0'+oldN).fadeOut(1700);
		$('.hightLight0'+n).fadeIn(1700);
		setTimeout(imgSlider, 5000);
    }

    $('.moreInfo').click(function(){
    	$htmlBody.stop().animate({scrollTop: $('#hightLight').offset().top});
    })


    function mainVisual(){
	    if($winWidth < 480){
	    	$('#mainVisual img').attr('src', 'images/mainVisual_mobile.jpg');
	    	$('.btnGroup .mobileClose').addClass('noAnchor').find('a').attr('href', 'http://mag.digiwin.biz/?p=3278').attr('target','_blank');
	    }else{
	    	$('#mainVisual img').attr('src', 'images/mainVisual.png');
	    	$('.btnGroup .mobileClose').removeClass('noAnchor').find('a').attr('href', '#hightLight');
	    }    
    }

    var agendaDetNum = $('.agendaDet').length;
    $('.detClose, .detOpen').click(function(){
    	var $this = $(this);
    	var $thisOpen = $this.hasClass('detOpen');
    	var $thisPrev = $this.prev();
    	console.log($thisPrev)
    	var $thisNext = $this.parents('.agendaList').next('.agendaDet');
    	if($thisOpen){
    		$this.removeClass('fa-minus-square-o detOpen').addClass('fa-plus-square-o detClose');
    		$thisPrev.show();
    		for(var i=0; i<agendaDetNum; i++){
	    		if($thisNext){
	    			$thisNext.removeClass('openDet');
	    			$thisNext = $thisNext.next('.agendaDet');
	    			i++;
	    		}else{
	    			i=agendaDetNum;
	    		}
    		}
    	}else{
    		$this.removeClass('fa-plus-square-o detClose').addClass('fa-minus-square-o detOpen');
    		$thisPrev.hide();
    		for(var i=0; i<agendaDetNum; i++){
	    		if($thisNext){
	    			$thisNext.addClass('openDet');
	    			$thisNext = $thisNext.next('.agendaDet');
	    			i++;
	    		}else{
	    			i=agendaDetNum;
	    		}
    		}
    	}
    })

    $('.btnGroup>li').not('.noAnchor').click(function(){
    	var $this = $(this);
    	var href = $(this).find('a').attr('href');
    	$htmlBody.stop().animate({scrollTop: $(href).offset().top});
    	return false; 
    })

    $win.resize(function() {
    	$winWidth = $win.width();
    	mainVisual();
    }).resize();
})