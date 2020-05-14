function init() {
    var $win = $(window);
    var $windowWidth = $win.width();
    var bannerNow = 0;
    var bannerOldNum = 0;
    var bannerTnum = $('#bannerCon>div').length;
    var bannerOrder = 1;
    var banTimer;
    var bannerOldNum1 = 1;
    var bannerNum = 2;
    var MOVE = null;
    $('#banner #bannerCon>div').css({ width: $windowWidth });
    $win.resize(function () {
        $windowWidth = $win.width();
        if ($windowWidth < 1000) {
            $windowWidth = 1000;
            $('#banner #bannerCon>div').css({ width: $windowWidth });
            MOVE = bannerOldNum * $windowWidth;
            $('#bannerCon').css({ left: -MOVE });
        } else {
            $('#banner #bannerCon>div').css({ width: $windowWidth });
            MOVE = bannerOldNum * $windowWidth;
            $('#bannerCon').css({ left: -MOVE });
        }

    });

    $('#bannerOrder>ul>li').hover(function () {
        var $this = $(this);
        var $bannerDes = $this.find('.bannerDes');
        $bannerDes.stop(true, true).fadeIn();
    }, function () {
        var $this = $(this);
        var $bannerDes = $this.find('.bannerDes');
        $bannerDes.stop(true, true).fadeOut();
    });

    // $('#banner').mouseenter(
    //     function () {
    //         clearInterval(banTimer);
    //     }
    // );

    // $('#banner').mouseleave(
    //     function () {
    //         clearInterval(banTimer);
    //         bannerRun();
    //     }
    // );
    // $('#bannerOrder>ul>li').click(function () {
    //     var $this = $(this).index();
    //     var _MOVE = $windowWidth * $this;
    //     var _MOVE2 = $windowWidth;

    //     $('#bannerOrder>ul>li').removeClass('now');
    //     $(this).addClass('now');
    //     $('#bannerCon>div').eq(bannerOldNum).find('h2').stop().animate({ left: -_MOVE2 }, 500, 'easeInBack').animate({ left: 0 });
    //     $('#bannerCon').stop().delay(500).animate({ left: -_MOVE });
    //     bannerOldNum = $this;

    //     bannerOldNum1 = 1;
    //     bannerNum = 2;
    // });

    window.bannerPlay = function () {
        var _MOVE2 = $windowWidth;
        var _MOVE = $windowWidth * (bannerNum - 1);
        if (bannerNum < bannerTnum) { bannerNum++; } else { bannerNum = 1; }
        $('#bannerOrder>ul>li').removeClass('now');
        $('#bannerOrder>ul>li').eq(bannerNum - 2).addClass('now');
        $('#bannerCon>div').eq(bannerOldNum1 - 1).find('h2').stop().animate({ left: -_MOVE2 }, 500, 'easeInBack').animate({ left: 0 });
        $('#bannerCon').stop().delay(500).animate({ left: -_MOVE });
        bannerOldNum1 = bannerNum - 1;
    };

    // bannerPlay();
    window.bannerRun = function () { banTimer = setInterval(bannerPlay, 5000); };
    window.caseStopRun = function () { clearInterval(banTimer); };
    // bannerRun();
    var timer,
        n = 1,
        pageOld = -1,
        wordSpeed = 4000;
    function wordsAutoPlay() {
        for (var i = 1; i < 3; i++) {
            $('#word' + i).fadeOut();
        }
        pageOld = n;
        if (n < 2) {
            n += 1;
        } else {
            n = 1;
        }
        $('#word' + n).stop().fadeIn();
        $('#page>li').removeClass('pageNow').eq(n - 1).addClass('pageNow');
    }

    function run() {
        timer = setInterval(wordsAutoPlay, wordSpeed);
    }

    function stopRun() {
        clearInterval(timer);
    }

    // run();

    //客戶證言-滑鼠滑過
    $('#wordTxt').hover(function () {
        stopRun();
    }, function () {
        if (timer) {
            clearInterval(timer);
            timer = setInterval(wordsAutoPlay, wordSpeed);
        }
    });

    //客戶證言-點選頁數
    $('#page>li').click(function () {
        n = $(this).index();
        if (pageOld == n) {
            return;
        } else {
            wordsAutoPlay();
        }
    });

    /*行業別 hover換行業icon底圖*/
    function bgPosition(id, isMouseIn) {
        if (isMouseIn) {
            var bgWidth = -1000;
        } else {
            var bgWidth = 1000;
        }
        var bgPos = $('#' + id)
                .css('backgroundPosition')
                .split(' '),
            bgPosX = parseFloat(bgPos[0]) + bgWidth + 'px',
            bgPosY = bgPos[1];
        return [bgPosX, bgPosY];
    }

    $('#industryTxt>li').hover(
        function () {
            var $thisId = $(this).attr('id'),
                newPos = bgPosition($thisId, true);
            $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
        },
        function () {
            var $thisId = $(this).attr('id'),
                newPos = bgPosition($thisId, false);
            $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
        }
    );

    /*首頁條狀圖*/
    $('.problemList').each(function () {
        var $this = $(this);
        var thisPercent =
            parseFloat(
                $this
                    .children('.digital')
                    .text()
                    .substr(0, 4)
            ) * 10;
        var problemListW = Math.round((490 * thisPercent) / 620);
        $this.animate(
            { width: problemListW },
            {
                duration: 2500,
                easing: 'easeInOutCubic',
                complete: function () {
                    $('.digital').fadeIn();
                }
            }
        );
    });

    // 點擊戰情室按鈕
    $(document).on('click', '.js-warRoom-btn', function () {
        var finished = 0;
        var $btn = $(this);
        var canvas = $btn.nextAll('canvas');

        $btn.addClass('is-disabled');

        $(canvas).each(function (index, element) {
            var ctx = element.getContext('2d');
            var cw = element.width;
            var ch = element.height;
            var fps = 60;
            var obj = {
                lineX: 0,
                lineY: ch / 2,
                arrowTopX: cw,
                arrowTopY: ch / 2,
                arrowBottomX: cw,
                arrowBottomY: ch / 2
            };

            function updateLine() {
                obj.lineX += 20;

                if (obj.lineX < cw) {
                    setTimeout(updateLine, 1000 / fps);
                }
                // 當線條動畫完成後再執行箭頭動畫
                else {
                    updateArrow();
                    requestAnimationFrame(drawArrow);
                }
            }

            function updateArrow() {
                obj.arrowTopX -= 1;
                obj.arrowTopY -= 1;
                obj.arrowBottomX -= 1;
                obj.arrowBottomY += 1;

                if (obj.arrowTopY > 0) {
                    setTimeout(updateArrow, 1000 / fps);
                } else {
                    finished++;
                }
            }

            function drawLine() {
                ctx.lineTo(obj.lineX, obj.lineY);
                ctx.stroke();

                if (obj.lineX < cw) {
                    requestAnimationFrame(drawLine);
                }
            }

            function drawArrow() {
                // 畫上箭頭
                ctx.beginPath();
                ctx.moveTo(cw, ch / 2);
                ctx.lineTo(obj.arrowTopX, obj.arrowTopY);
                ctx.stroke();

                // 畫下箭頭
                ctx.beginPath();
                ctx.moveTo(cw, ch / 2);
                ctx.lineTo(obj.arrowBottomX, obj.arrowBottomY);
                ctx.stroke();

                if (obj.arrowTopY > 0) {
                    requestAnimationFrame(drawArrow);
                }
            }

            function init() {
                ctx.strokeStyle = element.dataset.color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(obj.lineX, obj.lineY);

                // 執行線條動畫
                updateLine();
                requestAnimationFrame(drawLine);
            }

            if ($(element).hasClass('line8')) {
                $('#warroom-arrow').slideDown(function () {
                    init();
                });
            } else {
                init();
            }
        });

        // 當所有動畫完成後啟用按鈕及清除畫布
        var timer = setInterval(function () {
            if (finished === canvas.length) {
                clearInterval(timer);

                setTimeout(function () {
                    $btn.removeClass('is-disabled');

                    $(canvas).each(function (index, element) {
                        var ctx = element.getContext('2d');
                        var cw = element.width;
                        var ch = element.height;
                        ctx.clearRect(0, 0, cw, ch);

                        if ($(element).hasClass('line8')) {
                            $('#warroom-arrow').hide();
                        }
                    });
                }, 3000);
            }
        }, 100);
    });

    Shadowbox.init({
        language: 'en',
        players: ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv']
    });
    jQuery(document).ready(function () {
        var hashtag = /#\S+/;
        jQuery('#link a').click(function () {
            var match = jQuery(this)
                .attr('href')
                .match(hashtag);
            ga('send', 'pageview', location.pathname + match[0]);
        });
    });
}

const store = new Vuex.Store({
    state: {
        isMobile: false,
        isMediumWidth: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        updateDevice2(state, payload) {
            state.isMediumWidth = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                    init();
                });
            });
        },
    }
});

let app = new Vue({
    el: 'main',
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        isMediumWidth() {
            return store.state.isMediumWidth;
        },
        result() {
            return store.state.result;
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => store.commit('updateDevice', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        mediaSensor2(minWidth) {
            let resizeWidth = (pMatchMedia) => store.commit('updateDevice2', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        scrollTo(target) {
            let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
            let targetPos = document.querySelector(target).offsetTop;
            let finalPos = offset ? targetPos - offset : targetPos;
            window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor(768);
        this.mediaSensor2(1199);
    },
});