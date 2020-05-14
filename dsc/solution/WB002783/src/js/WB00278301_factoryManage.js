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

        new WOW().init();
        
        (function () {
            var $htmlBody = $('html, body');
            var _navLinkH = $('#navLink').outerHeight(true);

            /*奇數區塊新增class*/
            // $('.section:nth-of-type(odd)').addClass('sectionLight');

            /*錨點滾動*/
            var hash = window.location.hash;
            if (hash !== '') {
                $htmlBody.animate({ scrollTop: $(hash).offset().top - _navLinkH }, 400);
            }

            /*點擊選單滾動至對應錨點*/
            $('#navLink .link2 li').click(function () {
                var $this = $(this);
                var $thisName = $this.data('blockName');
                if ($thisName) {
                    $htmlBody.animate({ scrollTop: $('#' + $thisName).offset().top - _navLinkH }, 400);
                }
            });
        })();
    },
});