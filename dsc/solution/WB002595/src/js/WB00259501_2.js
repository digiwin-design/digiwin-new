httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Slider.vue');
httpVueLoader.register(Vue, 'components/Tabs.vue');

const store = new Vuex.Store({
    state: {
        isMobile: false,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
    }
});

new Vue({
    el: 'main',
    components: {
        mobile: httpVueLoader('components/02/Mobile.vue'),
        desktop: httpVueLoader('components/02/Desktop.vue'),
    },
    computed: {
        componentId() {
            return store.state.isMobile ? 'mobile' : 'desktop';
        }
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
    mounted() {
        this.mediaSensor();
    },
});