httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
// httpVueLoader.register(Vue, 'components/WB00271101/hover-box.vue');
// Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
                app.init();
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
        result() {
            return store.state.result;
        },
    },
    methods: {
        mediaSensor() {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
        init() {
            this.$nextTick().then(() => {
                //如果a的連結是#contact，滑到下方諮詢單
                $('a[href="#contact"]').click(function () {
                    $htmlBody.stop().animate({ scrollTop: Math.ceil($('#contact').offset().top - _navLinkOuterHeight) });
                    return false;
                });
    
                $('.jobProblem .txt').hover(function () {
                    var $this = $(this);
                    $this.find('.txtLayer').stop().fadeOut();
                    $this.find('.mask').stop().animate({ top: 0 }, function () {
                        $this.find('.txtLayer').css({ 'z-index': 5, 'color': '#fff' }).stop().fadeIn();
                    });
                }, function () {
                    var $this = $(this);
                    $this.find('.mask').stop().animate({ top: 100 + '%' });
                    $this.find('.txtLayer').removeAttr('style');
                });
    
    
    
                //案例超過字數顯示省略號
                $('.caseGroup .desc').each(function () {
                    var maxWordNum = 60;
                    if ($(this).text().length > maxWordNum) {
                        $(this).text($(this).text().substring(0, maxWordNum));
                        $(this).html($(this).html() + '...');
                    }
                });
    
                $('.fa-chevron-down').click(function () {
                    $('html, body').animate({ scrollTop: ($('.issueGroup').offset().top - $navLink.outerHeight(true)) + 'px' });
    
                });
    
                var changeNum = 0;
                $('#jobProblem .outline').click(function () {
                    var $this = $(this).index();
                    if (changeNum == $this) {
                        return;
                    } else {
                        $('#jobProblem .outline').removeClass('active').eq($this).addClass('active');
                        $('#jobProblem .jobProblem').eq($this).stop(true, true).fadeIn();
                        $('#jobProblem .jobProblem').eq(changeNum).stop(true, true).fadeOut();
                        changeNum = $this;
                    }
                });
    
                /*行業別 hover換行業icon底圖*/
                function bgPosition(id, isMouseIn) {
                    if (isMouseIn) {
                        var bgWidth = -1000;
                    } else {
                        var bgWidth = 1000;
                    }
                    var bgPos = $('#' + id).css('backgroundPosition').split(' '),
                        bgPosX = (parseFloat(bgPos[0]) + bgWidth) + 'px',
                        bgPosY = bgPos[1];
                    return [bgPosX, bgPosY];
                }
    
                $('#industryTxt>li').hover(function () {
                    var $thisId = $(this).attr('id'),
                        newPos = bgPosition($thisId, true);
                    $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
                }, function () {
                    var $thisId = $(this).attr('id'),
                        newPos = bgPosition($thisId, false);
                    $(this).css('backgroundPosition', newPos[0] + ' ' + newPos[1]);
                });
    
    
                /*首頁條狀圖*/
                $('.problemList').each(function () {
                    var $this = $(this);
                    var thisPercent = parseFloat($this.children('.digital').text().substr(0, 4)) * 10;
                    var problemListW = Math.round(490 * thisPercent / 620);
                    $this.animate({ width: problemListW }, {
                        duration: 2500,
                        easing: 'easeInOutCubic',
                        complete: function () {
                            $('.digital').fadeIn();
                        }
                    });
                });
    
                $(document).on('click', '.js-nav', function (event) {
                    event.preventDefault();
                    let target = $(this).attr('href') || $(this).data('target');
                    let offset = $(this).data('offset');
                    let targetPos = $(target).offset().top;
                    let finalPos = offset ? targetPos - offset : targetPos;
                    $('html, body').animate({ scrollTop: finalPos - 50 });
                });
            });
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});