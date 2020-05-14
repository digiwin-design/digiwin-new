httpVueLoader.register(Vue, 'components/intro/main-header.vue');
httpVueLoader.register(Vue, 'components/intro/article-component.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section1-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section2-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section3-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section4-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section5-svg.vue');

new Vue({
    el: 'main',
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        isIE() {
            return detectIE();
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