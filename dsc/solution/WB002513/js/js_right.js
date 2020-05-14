// JavaScript Document
$(function(){
		// 大廣告圖片的高度及動畫時間
		var adHeight = 500,
			animateSpeed = 400;
		$('#adblock ul.link li a').each(function(i){
			// 把選單排好位置
			$(this).css('top', i * 55);
		}).mouseover(function(){
			var $this = $(this),
				// 找出目前 li 是在選單中的第幾個(jQuery 1.4)
				no = $this.parent().index();
			
			// 先移除有 .selected 的超連結的樣式
			$('#adblock ul.link li a.selected').removeClass('selected');
			// 再把目前點擊到的超連結加上 .selected
			$this.addClass('selected');
			
			// 把 ul.showbox 的 top 移到相對應的高度
			$('#adblock ul.showbox').stop().animate({
				top: adHeight * no * -1
			}, animateSpeed);
		}).focus(function(){
			$(this).blur();
		}).eq(0).mouseover();
	});
