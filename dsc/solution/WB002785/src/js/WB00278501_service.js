import '../sass/WB00278501_service/style.scss';

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
            axios.get('public/db.json').then(res => {
                context.commit('setData', res.data.WB00278501_service);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                    if (location.hash) {
                        app.moveTo(location.hash);
                    }
                });
            });
        },
    }
});

let app = new Vue({
    el: 'main',
    components: {
        mobile: httpVueLoader('components/WB00278501_service/mobile.vue'),
        desktop: httpVueLoader('components/WB00278501_service/desktop.vue'),
    },
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
        componentId() {
            return store.state.isMobile ? 'mobile' : 'desktop';
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
        moveTo(selector) {
            let target = document.querySelector(selector);
            if (!target) return;
            let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
            let targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;
            let finalPos = offset ? targetPos - offset : targetPos;
            window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
        },
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor(768);
        this.mediaSensor2(1199);
    },
});