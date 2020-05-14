$(window).load(function(){
  var $win = $(window); 
  var $windowWidth = $win.width();
  var bannerNow = 0;
  var bannerOldNum = 0;
  var bannerTnum= $('#bannerCon>div').length;
  var bannerOrder=1;
  var banTimer;
  var bannerOldNum1 = 1;
  var bannerNum = 2;
  $('#banner #bannerCon>div').css({width:$windowWidth});
  $win.resize(function(){
    $windowWidth = $win.width();
    if($windowWidth <1000){
      $windowWidth = 1000;
      $('#banner #bannerCon>div').css({width:$windowWidth});
      MOVE = bannerOldNum*$windowWidth;
      $('#bannerCon').css({left:-MOVE});
    }else{
      $('#banner #bannerCon>div').css({width:$windowWidth});
      MOVE = bannerOldNum*$windowWidth;
      $('#bannerCon').css({left:-MOVE});  
    }
  
  })

  $('#bannerOrder>ul>li').hover(function(){
    var $this = $(this);
    var $bannerDes = $this.find('.bannerDes');
    $bannerDes.stop(true, true).fadeIn();
  }, function(){
    var $this = $(this);
    var $bannerDes = $this.find('.bannerDes');
    $bannerDes.stop(true, true).fadeOut();
  })

  $("#banner").mouseenter(
   function(){
      clearInterval(banTimer);
    }
  );

  $("#banner").mouseleave(
    function(){
      clearInterval(banTimer);
      bannerRun();
    }
  );
  $('#bannerOrder>ul>li').click(function(){
    var $this = $(this).index();
    var _MOVE = $windowWidth * $this;
    var _MOVE2 = $windowWidth;
    
    $('#bannerOrder>ul>li').removeClass('now');
    $(this).addClass('now');
    $('#bannerCon>div').eq(bannerOldNum).find('h2').stop().animate({left:-_MOVE2}, 500, 'easeInBack').animate({left:0});
    $('#bannerCon').stop().delay(500).animate({left:-_MOVE});
    bannerOldNum = $this;

    bannerOldNum1 = 1;
    bannerNum = 2;
  });
  
  window.bannerPlay = function(){
    var _MOVE2 = $windowWidth;
    var _MOVE = $windowWidth * (bannerNum-1);
    if(bannerNum<bannerTnum){bannerNum++;}else{bannerNum=1;}
    $('#bannerOrder>ul>li').removeClass('now');
    $("#bannerOrder>ul>li").eq(bannerNum-2).addClass('now');
    $('#bannerCon>div').eq(bannerOldNum1-1).find('h2').stop().animate({left:-_MOVE2}, 500, 'easeInBack').animate({left:0});
    $('#bannerCon').stop().delay(500).animate({left:-_MOVE});
    bannerOldNum1 = bannerNum-1;
  };
  
  // bannerPlay();
  window.bannerRun = function(){banTimer = setInterval(bannerPlay, 7000)};
  window.caseStopRun = function(){clearInterval(banTimer)};
  bannerRun();
  var timer,
    n = 1,
    pageOld = -1,
    wordSpeed = 4000;
  function wordsAutoPlay(){
    for(var i =1; i<3; i++){
      $("#word"+i).fadeOut();
    }
    pageOld = n;
    if (n < 2){
      n += 1;
    }else {
      n = 1;
    }
    $("#word"+n).stop().fadeIn();
    $("#page>li").removeClass('pageNow').eq(n-1).addClass('pageNow');
  }
  
  function run(){
    timer = setInterval(wordsAutoPlay,wordSpeed); 
  }
  
  function stopRun(){
    clearInterval(timer); 
  }
  
  run();
  
})

