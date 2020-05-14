$(function(){
	var $win = $(window); 
	var _winWidth = $win.width();
	var isOpen = true;
	var _navLeftW = $('#navLeft').outerWidth(true);
	var imgLink = 'navLeft';
	var move, moveImgT, moveImgL, show;

	$win.resize(function(event) {
		_winWidth = $win.width();
		moveImgT = (_winWidth < 768) ? 5 : 60;
	}).resize();

	$('#navIcon .imageStyle').click(function(){
		if(isOpen){
			slideNav(-_navLeftW, 5, 0, 'navLeft', false);
		}else{	
			slideNav(0, 5, 110, 'navLeftClose', true);
		}
	});

	function slideNav(move, moveImgT, moveImgL, imgLink, show){
		$('#navLeft').stop().animate({left: move});
		$('#navIcon').stop().animate({left: moveImgL, top: moveImgT});
		$('#navIcon .imageStyle').attr('src', 'images/' + imgLink +'.png');
		isOpen = show;
	}
	//選單預設打開，2秒後收合
	setTimeout(function(){slideNav(-_navLeftW, moveImgT, 0, imgLink, false);}, 1500)
	var f1Top=$('#section_01').offset().top-20;
	var f2Top=$('#section_02').offset().top-20;
	var f3Top=$('#section_03').offset().top-20;
	var f4Top=$('#section_04').offset().top-20;
	var jianCe=function(){
		var windowScrollTop=$(window).scrollTop();
		if(windowScrollTop  >= f4Top){
			$('#navLeft>ul>li').eq(3).addClass('now').siblings().removeClass('now');
		}else if(windowScrollTop  >= f3Top){			
			$('#navLeft>ul>li').eq(2).addClass('now').siblings('li').removeClass('now');
		}else if(windowScrollTop >= f2Top){			
			$('#navLeft>ul>li').eq(1).addClass('now').siblings('li').removeClass('now');
		}else if(windowScrollTop >= f1Top){	
			$('#navLeft>ul>li').eq(0).addClass('now').siblings('li').removeClass('now');	
		}

	}
	$win.scroll(jianCe);
	
	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 20)
        }, 800);
        $win.scroll(jianCe);
        event.preventDefault();

        $anchor.parent().addClass('now').siblings().removeClass('now');
        slideNav(-_navLeftW, moveImgT, 0, imgLink, false);
    });
    var scrollTopNow = function(){
    	var windowScrollTop=$(window).scrollTop();
    }
	
})