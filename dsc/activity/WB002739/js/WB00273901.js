(function(){
	var topArray = [];
	var $winWidth ;
	var navHeight = $('.secBot').outerHeight(true);
	var $win = $(window);
	var secDiv = $('.secDiv');
	$win.resize(function(){
		$winWidth= $(window).width();
		$('.secBot ul>li').removeClass('current');
		$('.secBot ul>li').children().removeClass('now');
		if ( $winWidth>=1000 && $winWidth<= 1920) {
			$('.content').css('min-width','auto')
			return false;
			} else if($winWidth>=320 && $winWidth<= 750){
				$('.content').css('min-width','auto')
			return false;
			} else if($winWidth>=751 && $winWidth< 1000){
			$('.content').css('min-width',1000+'px');
			$('.section1 .content').css('min-width','auto')
		};
		videoSize();	

	}).resize();
	videoSize();

	// $win.resize(function(){
	// 	videoSize();
	// })

	function videoSize(){
		var winHeight = $win.height(),
			winWidth = $win.width(),
			videoWidth = (16*winHeight)/9;
		if(winWidth < 1024 && winWidth>750){
			$('.video').css({'height':565, 'width':1000});
		}else if(winWidth>1025){
			$('.video').css({'height':winHeight, 'width':videoWidth});
		}
	}

	function topFn() {
		for(var i = 0;i< secDiv.length ;i++) {
			topArray.push(parseInt(secDiv.eq(i).offset().top));
		}
	}
	topFn();
	$win.scroll(function(){
	 	var $winTop = $win.scrollTop();
	 	if ($winTop > topArray[0]-50) {
	 		$('.secBot').show();
	 		if ( $winWidth>=320 && $winWidth<= 750) {
	 			$('#register,#returnTop').show();
	 		} else {
	 			$('#register').show();
	 			$('#returnTop').hide();
	 		}
	 		for (var n = 0; n<4;n++ ) {
	 			if ( $winTop>=topArray[n]-navHeight && $winTop < topArray[n+1] -navHeight ) {
	 				if ( $winWidth>=1000 && $winWidth<= 1920) {
	 					$('.secBot ul>li').removeClass('current');
	 					$('.secBot ul>li').eq(n).addClass('current');
						return false;
	 				} else if($winWidth>=320 && $winWidth<= 750){
	 					$('.secBot ul>li').removeClass('current');
	 					$('.secBot ul>li').children().removeClass('now');
	 					$('.secBot ul>li').eq(n).children().addClass('now');
						return false;
					};
	 			} else if( $winTop>=topArray[3]-navHeight ){
	 				if ( $winWidth>=1000 && $winWidth<= 1920) {
	 					$('.secBot ul>li').removeClass('current');
	 					$('.secBot ul>li').eq(3).addClass('current');
						return false;
	 				} else if($winWidth>=320 && $winWidth<= 750){
	 					$('.secBot ul>li').removeClass('current');
	 					$('.secBot ul>li').children().removeClass('now');
	 					$('.secBot ul>li').eq(3).children().addClass('now');
						return false;
					};
	 			}	 			
	 		}

	 	}else {
	 		$('.secBot').hide();
	 		$('#register,#returnTop').hide();
	 	}

	
	}).scroll();
	

	$('.arrow').click(function(){
		var _thisNum = $(this).index();
		$('html,body').stop().animate({
			scrollTop:topArray[0]

		})
	})
	$('#returnTop,.reTop').click(function(){
		$('html,body').stop().animate({
			scrollTop:($('#banner').offset().top)

		},600)
	})
 	$('.secBot ul>li').click(function(){
 		var _thisNum = $(this).index();
 		console.log(_thisNum);
		$('html,body').stop().animate({
			scrollTop:topArray[_thisNum]

		},600)
 	})
 	// $('#teaIntr li').click(function(){
 	// 	$("#teaIntr").fadeOut();
 	// 	var _this = $(this).index();
 	// 	$(".wrap").find('.swiper-slide').eq(_this).fadeIn();
 		 
 	// 	console.log( _this)		
 	// 	// $(".wrap").css("transform","translate3d(0px,"+Height+")");

 	// })
 	$('.close').click(function(){
 		$(".wrap").hide();
 		$("#teaIntr").show();
 		

 	})
 	

})()
 	


// if ($winWidth>=1000 && $winWidth<= 1920 ) {
	
// } else if($winWidth>=320 && $winWidth<= 750){

// }
	



	
	
