httpVueLoader.register(Vue, '/tw/article/components/aboutdsc/main-content.vue');
httpVueLoader.register(Vue, '/tw/article/components/aboutdsc/main-nav.vue');
// httpVueLoader.register(Vue, 'components/aboutdsc/hover-box.vue');
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
            axios.get('/tw/article/db.json').then(res => {
                context.commit('setData', res.data);
            });
        },
    }
});

new Vue({
    el: 'main',
    data: {
        fixedHeader: false,
    },
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
        scrollHandler: _.throttle(function () {
            this.fixedHeader = document.querySelector('header').classList.contains('fixed-block');
        }, 100),
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
        if (location.hostname === 'www.digiwin.com') {
            window.addEventListener('scroll', this.scrollHandler);
        }
    },
});