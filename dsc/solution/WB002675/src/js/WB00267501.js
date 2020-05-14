httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/WB00267501/slider-banner.vue');
// httpVueLoader.register(Vue, 'components/WB00267501/hover-box.vue');
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
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
            });
        },
    }
});

new Vue({
    el: 'main',
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data() {
        return {
            swiperOptionA: {
                loop: true,
                autoHeight: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            },
        };
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result;
        },
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
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