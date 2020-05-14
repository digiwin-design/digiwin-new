httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');

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
                
            });
        },
    }
});

new Vue({
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
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();

        (function () {
            var hash = window.location.hash;
            if (hash !== '') {
                $('html,body').animate({ scrollTop: $(hash).offset().top - 100 }, 400);
            }

            var counter = 0;
            var bgPositionY = '';
            function mouseClick() {
                if (counter == 0) {
                    bgPositionY = 'top';
                    counter = 1;
                } else {
                    bgPositionY = 'bottom';
                    counter = 0;
                }
                $('.icon-click').css({ backgroundPositionY: bgPositionY });
            }

            setInterval(mouseClick, 700);

            $('.btn-action').hover(function () {
                $(this).addClass('actived');
            }, function () {
                $(this).removeClass('actived');
            });

            var _winWidth = $(window).outerWidth();
            var _move = _winWidth / 2;

            $('.btn-action').click(function () {
                $('html, body').animate({ scrollTop: $('#order').offset().top - 100 }, 300);
                $('.btn-action').delay(300).animate({ top: '-2000px' }, 1000);
                $('.beforeBlock').delay(800).animate({ left: _move * -1 + 'px' }, 1000);
                $('.afterBlock').delay(800).animate({ left: _move + 'px' }, 1000);

            });

            $('.btn-close').click(function () {
                $('.btn-action').animate({ top: '210px' }, 1000);
                $('.beforeBlock').animate({ left: 0 }, 1000);
                $('.afterBlock').animate({ left: 0 }, 1000);
                $('html, body').delay(1100).animate({ scrollTop: $('#order').offset().top - 100 }, 300);
            });
        })();
    },
});