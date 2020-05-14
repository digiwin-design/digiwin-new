httpVueLoader.register(Vue, 'components/case/hover-box.vue');
httpVueLoader.register(Vue, 'components/case/slider-banner.vue');
httpVueLoader.register(Vue, 'components/case/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/case/slider.vue');
httpVueLoader.register(Vue, 'components/case/article-component.vue');
httpVueLoader.register(Vue, 'components/case/svg/section1-1-svg.vue');
httpVueLoader.register(Vue, 'components/case/svg/section1-2-svg.vue');
httpVueLoader.register(Vue, 'components/case/svg/section2-svg.vue');
httpVueLoader.register(Vue, 'components/case/svg/section4-svg.vue');

new Vue({
    el: 'main',
    data() {
        return {
            runAn: false, // run section1-2.svg animation
        };
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