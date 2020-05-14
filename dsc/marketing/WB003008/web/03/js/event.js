

$(function(){

//swiper廣告
 var swiper = new Swiper('.swiper-container', {
     
      loop: true,
     
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
        
    
     
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
    	
//頁內錨點滑動效果
    $(function(){$('.link-1').click(function() {      
         $('html,body').animate({scrollTop:$('#part1').offset().top}, "show");return false;
        });  
    });
    $(function(){$('.link-2').click(function() {      
         $('html,body').animate({scrollTop:$('#part2').offset().top}, "show");return false;
        });  
    });
    $(function(){ $('.link-3').click(function() {      
         $('html,body').animate({scrollTop:$('#part3').offset().top}, "show");return false;
        });  
    });
    
     $(function(){$('.btn-contact').click(function() {      
         $('html,body').animate({scrollTop:$('#contact').offset().top}, "show");return false;
        });  
    });
    
    
    
    
//右方選單控制

    $(window).bind('scroll resize', function(){
        var $this_Top=$(this).scrollTop();

        if($this_Top < 420){
            $('.a1-nav-side').removeClass("nav-side-show");
            }
        if($this_Top > 420){
            $('.a1-nav-side').addClass("nav-side-show");

        }
         
        
    }).scroll();
    
  

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});

