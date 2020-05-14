// JavaScript Document

	$(window).load(function(){

		// 淡出淡入的時間及滾動的時間倍數(越小越快)
		var _fadeInSpeed = 1000, 
			_scrollStep = 60;
		
		// .abgne-20110711 的元素全取出並一一設定
		$('.abgne-20110711').each(function(){
			// 先找出第一個超連結及其圖片
			var $a = $(this).find('a:first'),
				$img = $a.find('img'), 
				_src = $img.attr('src');
			
			// 小圖的檔名可以是 xxxx_normal,jpg, 長條圖可以是 xxxx_scroll.jpg
			// 程式會自動替換 _normal 為 _scroll, 若都是同一張圖片時, 檔名可以不用加 _normal
			_src = _src.replace('_normal', '_scroll');
			
			// 產生一個完整的長條圖片
			var $scrollImg = $('<img />').attr('src', _src).css({
				position: 'absolute', 
				display: 'none', 
				width: 'auto', 
				height: 'auto', 
				opacity: 0
			});
			
			// 把 $scrollImg 加到 $a 中, 並加上 .hover() 事件
			$a.prepend($scrollImg).hover(function(){
				// 顯示 $scrollImg 並移動到 top: 0px; 的位置
				// 同時淡入
				$scrollImg.css({
					display: 'block',
					top: 0
				}).stop(true).fadeTo(_fadeInSpeed, 1);
				
				// 算出要移動的距離及時間
				var _diff = $img.height() - $scrollImg.height(), 
					_moveTime = _diff * _scrollStep * -1;
				
				// 用來修正如果本身圖片跟要滾動的圖片高度是一樣的問題
				if(_diff==0){
					_diff = $a.parent().height() - $scrollImg.height();
					_moveTime = _diff * _scrollStep * -1;
				}
				
				// 開始滾動
				setTimeout(function(){
					$scrollImg.css('top', 0).animate({
						top: _diff
					}, _moveTime);
				},3000);
			
				
			}, function(){
				// 當滑鼠移出時則停止滾動及淡出隱藏
				$scrollImg.stop(true).fadeTo(_fadeInSpeed, 0, function(){
					$scrollImg.hide();
				});
			});
		});
	});
