
	
/*-------右下角浮動TOP按鈕------------*/	
$(function(){
	// 當網頁載入完
	$(window).load(function(){
		var $win = $(window),
			$ad = $('#nav').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
			_width = $ad.width(),
			_height = $ad.height(),
			_diffY = 20, _diffX = 5,	// 距離右及下方邊距
			_moveSpeed = 800;	// 移動的速度
		
		// 先把 #abgne_float_ad 移動到定點
		$ad.css({
			top: $(document).height(),
			left: $win.width() - _width - _diffX,
			opacity: 1
		});

		// 幫網頁加上 scroll 及 resize 事件
		$win.bind('scroll resize', function(){
			var $this = $(this);
			
			// 控制 #abgne_float_ad 的移動
			$ad.stop().animate({
				top: $this.scrollTop() + $this.height() - _height - _diffY,
				left: $this.scrollLeft() + $this.width() - _width - _diffX
			}, _moveSpeed);
		}).scroll();	// 觸發一次 scroll()
	});
	
	
/*-------手機版NAV-------------*/	
		$("#BTN").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#dgwNAV").slideToggle(300);
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#dgwNAV").attr("style","");
		}
	}
//JQ 的功能指令主要是直接用程式產生 CSS 寫入到 HTML 內部的 style 之內
//然而 JQ 產生的 HTML 內部 style CSS 容易跟我們寫的外部 CSS 產生衝突
//使用 attr("style","") 就可以把 JQ 產生的 style CSS 清除乾淨

})