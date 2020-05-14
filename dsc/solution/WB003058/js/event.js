

$(function(){
    
    
enquire.register("screen and (max-width: 768px)", {
    match : function() {
		
		//-----------輪播banner----------
        
        var swiper = new Swiper('.swiper-container', {

            loop: true,
//            autoplay: {
//				delay: 3000,
//				disableOnInteraction: false,
//            },

            hashNavigation: {
            watchState: true,
            },
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
		
		
		
		
		
		//-----------list展開----------

		$(".a1-list .a1-hover").hide();
		$(".list-open + .a1-hover").slideDown();

		$(".a1-list .a1-default ").click(function(){	
			
			$(this).parent().parent().siblings().find(".a1-hover").slideUp();
			$(this).parent().parent().siblings().find(".a1-default").removeClass("list-open");
			
			$(this).next(".a1-hover").slideToggle(300);
			$(this).toggleClass("list-open");
		
			
		});

		
		
		
       
    },
    unmatch : function() {
        
         $(window).resize(function(){
             
             location.reload();
        
            var swiper = null 
        
        });
       
    }
});
    
    
    
 /*-------------- 滑到內容才顯現------------------*/
	 wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
    
    
    



});

