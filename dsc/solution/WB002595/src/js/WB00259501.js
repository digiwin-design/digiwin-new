httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Slider.vue');

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
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
        mobile: httpVueLoader('components/index/Mobile.vue'),
        desktop: httpVueLoader('components/index/Desktop.vue'),
    },
    data: {
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
        content: null,
    },
    computed: {
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
        },
        componentId() {
            return store.state.isMobile ? 'mobile' : 'desktop';
        },
        nav() {
            return ['接單管理', '對帳管理', '退換貨管理', '合約管理'];
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
        getData() {
            axios.get('db.json').then(res => {
                this.content = res.data;
            });
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.mediaSensor();
    },
});