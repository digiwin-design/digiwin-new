httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Slider.vue');
httpVueLoader.register(Vue, 'components/Tabs.vue');

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
    components: {
        mobile: httpVueLoader('components/WB00255301_produce/Mobile.vue'),
        desktop: httpVueLoader('components/WB00255301_produce/Desktop.vue'),
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result;
        },
        componentId() {
            return store.state.isMobile ? 'mobile' : 'desktop';
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
    },
});