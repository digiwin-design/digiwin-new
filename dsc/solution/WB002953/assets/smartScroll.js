$.smartScroll = function (container, selectorScrollable) {
    // 如果沒有滾動容器選擇器，或者已經綁定了滾動時間，忽略
    if (!selectorScrollable || container.data('isBindScroll')) {
        return;
    }

    // 是否是搓瀏覽器
    // 自己在這裡添加判斷和篩選
    var isSBBrowser;

    var data = {
        posY: 0,
        maxscroll: 0
    };

    // 事件處理
    container.on({
        touchstart: function (event) {
            var events = event.touches[0] || event;

            // 先求得是不是滾動元素或者滾動元素的子元素
            var elTarget = $(event.target);

            if (!elTarget.length) {
                return;
            }

            var elScroll;

            // 獲取標記的滾動元素，自身或子元素皆可
            if (elTarget.is(selectorScrollable)) {
                elScroll = elTarget;
            } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
                elScroll = null;
            }

            if (!elScroll) {
                return;
            }

            // 當前滾動元素標記
            data.elScroll = elScroll;

            // 垂直位置標記
            data.posY = events.pageY;
            data.scrollY = elScroll.scrollTop();
            // 是否可以滾動
            data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
        },
        touchmove: function (event) {
            // 如果不足於滾動，則禁止觸發整個窗體元素的滾動
            if (data.maxscroll <= 0 || isSBBrowser) {
                // 禁止滾動
                event.preventDefault();
            }
            // 滾動元素
            var elScroll = data.elScroll;
            // 當前的滾動高度
            var scrollTop = elScroll.scrollTop();

            // 現在移動的垂直位置，用來判斷是往上移動還是往下
            var events = event.touches[0] || event;
            // 移動距離
            var distanceY = events.pageY - data.posY;

            if (isSBBrowser) {
                elScroll.scrollTop(data.scrollY - distanceY);
                elScroll.trigger('scroll');
                return;
            }

            // 上下邊緣檢測
            if (distanceY > 0 && scrollTop == 0) {
                // 往上滑，並且到頭
                // 禁止滾動的默認行為
                event.preventDefault();
                return;
            }

            // 下邊緣檢測
            if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
                // 往下滑，並且到頭
                // 禁止滾動的默認行為
                event.preventDefault();
                return;
            }
        },
        touchend: function () {
            data.maxscroll = 0;
        }
    });

    // 防止多次重複綁定
    container.data('isBindScroll', true);
};
