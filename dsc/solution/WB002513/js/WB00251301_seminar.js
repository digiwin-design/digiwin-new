var hg0 = $('#changeDIV1').children('.rightPart1').height();
$('#changeDIV1').children('.leftPart1').css('height',hg0 + 'px');
$(document).on('click','.iconsABC',function(){
	$('.changeDIV').slideUp();
	var top1=$('.sectionA').offset().top-100;
	var top2=$('.sectionB').offset().top-100;
	var top3=$('.sectionD').offset().top-100;
	var i = $(this).index()+1;
	if (i == 3 ) {
      
        $('body,html').animate({'scrollTop':top3+100},400);
   
		
		setTimeout(function(){
			$('#changeDIV3').slideDown();	
		},450)
		setTimeout(function() {
			var top4=$('.sectionD').offset().top-100;
			$('body,html').animate({'scrollTop':top4},400);
		},500)
		
	}else if (i == 2) {
		$('body,html').stop().animate({'scrollTop':top2},400);
		setTimeout(function(){
			$('#changeDIV2').slideDown();	
		},450)
		$('body,html').stop().animate({'scrollTop':top2},400);
		
	}else if (i == 1) {
		$('body,html').stop().animate({'scrollTop':top1},400);
		setTimeout(function(){
			$('#changeDIV1').slideDown();	
		},450)
		
	}
})


function changesta(){

	
	$('.sec-header').click(function() {
		if($(this).siblings('.changeDIV').is(':hidden')){	
		
			$(this).parent().siblings().find('.changeDIV').slideUp();
			$(this).siblings('.changeDIV').slideDown();
			
			$('body,html').stop().animate({'scrollTop':400},400,function(){

			})	
		
		}else{
			$(this).siblings('.changeDIV').slideUp();	
		}
		
	});
};
changesta();
function geInfor(){
	var top6 = $('#contact').offset().top-200;
	$(document).on('click','.infomat',function(){
		$('body,html').stop().animate({'scrollTop':top6},400,function(){

		})

	})
};
geInfor();