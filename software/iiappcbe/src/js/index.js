httpVueLoader.register(Vue, 'components/HeaderForm.vue');
httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Carousel.vue');
Vue.use(VueAwesomeSwiper);

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
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        locale() {
            return location.href.search('www.digiwin.com/tw') !== -1 ? 'tw' : 'cn';
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
    mounted() {
        this.mediaSensor();
    },
});
