import '../sass/WB00278501_seminar/style.scss';

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
            axios.get('public/db.json').then(res => {
                context.commit('setData', res.data.WB00278501_seminar);
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
        'seminar': httpVueLoader('components/WB00278501_seminar/seminar.vue'),
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
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => store.commit('updateDevice', !pMatchMedia.matches);
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
    },
});