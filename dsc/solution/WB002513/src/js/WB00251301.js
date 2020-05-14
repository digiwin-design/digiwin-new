// Vue.use(VueAwesomeSwiper);

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
                context.commit('setData', res.data.WB00251301);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                    app.init();
                    app.scrollTo(location.hash);
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
        scrollTo(selector) {
            let target = document.querySelector(selector);
            if (!target) return;
            let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
            let targetPos = target.getBoundingClientRect().top + window.pageYOffset;
            let finalPos = offset ? targetPos - offset : targetPos;
            window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
        },
        init() {
            let bannerRun = function () { banTimer = setInterval(bannerPlay, 4000); };

            /*banner*/
            var $win = $(window);
            var $windowWidth = $win.width();
            var bannerNow = 0;
            var bannerNum = 1;
            var bannerOldNum = 0;
            var bannerTnum = $('#bannerCon>div').length;
            var bannerOrder = 1;
            var banTimer;
            let MOVE;
            // $("#banner #bannerCon>div").eq(0).clone().appendTo("#banner #bannerCon");
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

            $('#banner').mouseenter(
                function () {
                    clearInterval(banTimer);
                }
            );

            $('#banner').mouseleave(
                function () {
                    clearInterval(banTimer);
                    // bannerRun();
                }
            );
            $('#bannerOrder>ul>li').click(function () {
                var $this = $(this).index();
                var _MOVE = $windowWidth * $this;
                var _MOVE2 = $windowWidth;

                $('#bannerOrder>ul>li').removeClass('now');
                $(this).addClass('now');
                $('#bannerCon>div').eq(bannerOldNum).find('h2').stop().animate({ left: -_MOVE2 }, 500, 'easeInBack').animate({ left: 0 });
                $('#bannerCon').stop().delay(500).animate({ left: -_MOVE });
                bannerOldNum = $this;
            });
            window.bannerPlay = function () {
                var _MOVE2 = $windowWidth;
                var _MOVE = $windowWidth * (bannerNum - 1);
                if (bannerNum < bannerTnum) { bannerNum++; } else { bannerNum = 1; }
                $('#bannerOrder>ul>li').removeClass('now');
                $('#bannerOrder>ul>li').eq(bannerNum - 2).addClass('now');
                $('#bannerCon>div').eq(bannerOldNum - 1).find('h2').stop().animate({ left: -_MOVE2 }, 500, 'easeInBack').animate({ left: 0 });
                $('#bannerCon').stop().delay(500).animate({ left: -_MOVE });
                bannerOldNum = bannerNum - 1;
            };
            bannerPlay();

            window.bannerStopRun = function () { clearInterval(banTimer); };
            bannerRun();

            // JavaScript Document
            var tag = document.createElement('script');
            tag.src = 'http://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var players = {}; //Define a player storage object, to expose methods,without having to create a new class instance again.
            function onYouTubeIframeAPIReady() {
                $('.video > iframe[id]').each(function () {
                    var identifier = this.id;
                    //var frameID = getFrameID(identifier);
                    if (identifier) { //If the frame exists
                        players[identifier] = new YT.Player(identifier, {
                            events: {
                                'onStateChange': onPlayerStateChange,
                                'onReady': createYTEvent
                            }
                        });
                    }
                });
            }

            var done = false;
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !done) {
                    caseStopRun();
                    done = true;
                } else if (event.data == YT.PlayerState.PAUSED && done) {
                    caseRun();
                    done = false;
                }
            }

            function createYTEvent(event) {
                $('#caseOrder li').click(function () {
                    event.target.pauseVideo();
                    done = false;
                });
            }

            $(function () {

                var $win = $(window);
                var $htmlBody = $('html, body');
                let caseRun = function () { caseTimer = setInterval(casePlay, 4000); };

                //滑過選單(這段可以刪掉了)
                // $('#navLink>ul>li').hover(function(){
                // 	var $this = $(this);
                // 	$this.children('.subLink').stop(true,true).slideDown(100);
                // 		        alert('uo')
                // }, function(){
                // 	var $this = $(this);
                // 	$this.children('.subLink').stop(true,true).slideUp(100);
                // })

                /*banner輪播*/
                var $windowWidth = $win.width();
                $('#banner #bannerCon>div').css({ width: $windowWidth });

                /*客戶輪播-成就客戶創造應用價值*/
                var caseNum = 1,
                    caseTnum = $('#industry>.content>div').length,
                    caseNumOld = 0,
                    caseSpeed = 1000,
                    caseLeft = 2000,
                    caseTimer;


                $('#industry').hover(function () {
                    caseStopRun();
                }, function () {
                    if (done) {
                        clearInterval(caseTimer);
                    } else if (caseTimer || !done) {
                        clearInterval(caseTimer);
                        caseRun();
                        caseNumOld = caseNum - 1;
                    }
                });

                $('#caseOrder li').click(function () {
                    caseNum = $(this).index();
                    if (caseNum > caseNumOld) {
                        casePlay();
                    } else if (caseNum < caseNumOld) {
                        if (caseNum < caseTnum) { caseNum++; } else { caseNum = 1; }
                        $('#industry div.now').stop().animate({ left: caseLeft }, caseSpeed);
                        $('#case_' + caseNum).stop().css({ left: -caseLeft }).animate({ left: 0 }, caseSpeed);
                        $('#caseOrder li').removeClass('tabNow').eq(caseNum - 1).addClass('tabNow');
                        $('#industry div.now').removeClass('now');
                        $('#case_' + caseNum).addClass('now');
                        caseNumOld = caseNum - 1;
                    } else {
                        return;
                    }
                });

                window.casePlay = function () {
                    if (caseNum < caseTnum) { caseNum++; } else { caseNum = 1; }
                    $('#industry div.now').stop().animate({ left: -caseLeft }, caseSpeed);
                    $('#case_' + caseNum).stop().css({ left: caseLeft }).animate({ left: 0 }, caseSpeed);
                    $('#caseOrder li').removeClass('tabNow').eq(caseNum - 1).addClass('tabNow');
                    $('#industry div.now').removeClass('now');
                    $('#case_' + caseNum).addClass('now');
                    caseNumOld = caseNum - 1;
                };

                window.caseStopRun = function () { clearInterval(caseTimer); };
                caseRun();
            });
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