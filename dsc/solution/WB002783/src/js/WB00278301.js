httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');

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

        new WOW().init();
        
        /*行業別 hover換行業icon底圖*/
        (function () {
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
        })();
    },
});