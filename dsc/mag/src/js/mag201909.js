httpVueLoader.register(Vue, 'components/mag201909/robot.vue');
httpVueLoader.register(Vue, 'components/mag201909/storm.vue');
httpVueLoader.register(Vue, 'components/mag201909/carousel1.vue');
httpVueLoader.register(Vue, 'components/mag201909/carousel2.vue');
httpVueLoader.register(Vue, 'components/mag201909/toolbar.vue');
httpVueLoader.register(Vue, 'components/mag201909/articles.vue');
Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        isMediumWidth: false,
        isCarousel1MobileWidth: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        updateDevice2(state, payload) {
            state.isMediumWidth = payload;
        },
        updateDevice3(state, payload) {
            state.isCarousel1MobileWidth = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data.mag201909);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
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
        isIE() {
            return detectIE();
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
        mediaSensor3(minWidth) {
            let resizeWidth = (pMatchMedia) => store.commit('updateDevice3', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor(768);
        this.mediaSensor2(1199);
        this.mediaSensor3(1300);
    },
});