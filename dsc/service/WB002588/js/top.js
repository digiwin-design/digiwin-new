	

	/*這段js刪掉，改放下面那段
	var historyHash = window.location.hash;
	if(historyHash = ''){
		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(historyHash).offset().top - _linkOuterHeight - _buffer)
		}, 400);		
	}
	*/

	/*放這段*/
	var historyHash = window.location.hash,
		topHeight =  _linkOuterHeight + _buffer;
	if(historyHash !=''){
		if(historyHash =='#top'){
			topHeight = 0;
		}
		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(historyHash).offset().top - topHeight)
		}, 400);		
	}


	/*js註解說明，此段js碼是用在從其他頁面點回本頁錨點時的滑動效果*/
	var historyHash = window.location.hash,   //取得網址的錨點
		topHeight =  _linkOuterHeight + _buffer;   //設一個變數topHeight，並將值設成"_linkOuterHeight(選單高度)+_buffer(緩衝值)"，
												   //選單高度跟緩衝值在js最上面有設定變數了
	if(historyHash !=''){  //寫一個if判斷式，判斷網址是否有錨點，有的話則進入，沒有的話就直接結束離開
		if(historyHash =='#top'){  //判斷網址的錨點是否為top，如果是的話將topHeight設為零，避免扣除後移到網頁最頂端，看不出效果
			topHeight = 0;
		}
		$htmlBody.stop().animate({
			scrollTop: Math.ceil($(historyHash).offset().top - topHeight)
		}, 400);	//網頁做滑動效果，算出錨點的位置後，移到該區塊頂端
	}
	