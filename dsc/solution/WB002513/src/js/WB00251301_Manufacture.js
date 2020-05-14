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
                context.commit('setData', res.data.manufacture);
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
        'slider-banner': httpVueLoader('components/WB00251301_Manufacture/slider-banner.vue'),
        'slider-banner-s': httpVueLoader('components/WB00251301_Manufacture/slider-banner-s.vue'),
        'section-title': httpVueLoader('components/WB00251301_Manufacture/section-title.vue'),
        'progress-bar': httpVueLoader('components/WB00251301_Manufacture/progress-bar.vue'),
        'pain': httpVueLoader('components/WB00251301_Manufacture/pain.vue'),
        'collapse': httpVueLoader('components/WB00251301_Manufacture/collapse.vue'),
        'chart-list': httpVueLoader('components/WB00251301_Manufacture/chart-list.vue'),
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
        pains() {
            return {
                section1: this.result.pains.slice(0, 3),
                section2: this.result.pains.slice(3)
            };
        }
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