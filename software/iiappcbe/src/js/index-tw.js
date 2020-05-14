httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Ad.vue');
httpVueLoader.register(Vue, 'components/MenuMask.vue');
Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        showMask: true,
        showAd: true,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        toggleMask(state, payload) {
            state.showMask = payload;
        },
        toggleAd(state, payload) {
            state.showAd = payload;
        },
    }
});

new Vue({
    el: 'main',
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: {
        swiperOptionB: {
            loop: true,
            autoplay: {
                disableOnInteraction: false
            }
        },
        activeIndex: 0,
        eventEnd: false,
    },
    computed: {
        locale() {
            return location.href.search('www.digiwin.com/tw') !== -1 ? 'tw' : 'cn';
        },
        swiperB() {
            return this.$refs.awesomeSwiperB.swiper;
        },
        slides() {
            return [
                {
                    imgSrc: 'slide1.jpg',
                    caption: '設備狀態'
                },
                {
                    imgSrc: 'slide2.jpg',
                    caption: '設備稼動'
                },
                {
                    imgSrc: 'slide3.jpg',
                    caption: '資產回報量化'
                },
                {
                    imgSrc: 'slide4.jpg',
                    caption: '總體稼動率'
                },
                {
                    imgSrc: 'slide5.jpg',
                    caption: '設備綜合效率'
                },
            ];
        },
        caption() {
            return this.slides[this.activeIndex].caption;
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
            if (!isMobile) {
                store.commit('toggleMask', false);
            }
        },
        onSlideChange() {
            this.activeIndex = this.swiperB.realIndex;
        },
        slideImg(imgSrc) {
            if (this.locale === 'tw') {
                return `images/tw/${imgSrc}`;
            }
            else {
                return `images/${imgSrc}`;
            }
        },
        checkTime() {
            this.eventEnd = dayjs('2019-07-18').isBefore(dayjs());
            if (this.eventEnd) return;
            setTimeout(this.checkTime, 1000);
        },
    },
    mounted() {
        this.mediaSensor();
        this.checkTime();
    },
});