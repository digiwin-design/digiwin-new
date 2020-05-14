const store = new Vuex.Store({
    state: {
        isMobile: false,
        isMediumWidth: false,
        isRightSlide: false,
        result: null,
        loadedSvg: [],
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
        updateSlide(state, payload) {
            state.isRightSlide = payload;
        },
        updateLoadedSvg(state, payload) {
            if (state.loadedSvg.length < 2) {
                state.loadedSvg.push(payload);
            }
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
                });
            });
        },
    }
});

let app = new Vue({
    el: 'main',
    components: {
        'slider-banner': httpVueLoader('components/case1/slider-banner.vue'),
        'slider-banner-s': httpVueLoader('components/case1/slider-banner-s.vue'),
        'slider-checkbox': httpVueLoader('components/case1/slider-checkbox.vue'),
        'section-title': httpVueLoader('components/case1/section-title.vue'),
        'section-title2': httpVueLoader('components/case1/section-title2.vue'),
        'section2-svg': httpVueLoader('components/case1/svg/section2-svg.vue'),
        'section3-svg': httpVueLoader('components/case1/svg/section3-svg.vue'),
        'section4-svg': httpVueLoader('components/case1/svg/section4-svg.vue'),
        'section5-svg': httpVueLoader('components/case1/svg/section5-svg.vue'),
        'section6-svg': httpVueLoader('components/case1/svg/section6-svg.vue'),
        'section7-svg': httpVueLoader('components/case1/svg/section7-svg.vue'),
        'section8-l-svg': httpVueLoader('components/case1/svg/section8-l-svg.vue'),
        'section8-r-svg': httpVueLoader('components/case1/svg/section8-r-svg.vue'),
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
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor(768);
        this.mediaSensor2(1199);
    },
});