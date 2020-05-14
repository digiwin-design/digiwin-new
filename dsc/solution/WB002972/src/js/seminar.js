new Vue({
    el: 'main',
    components: {
        'seminar': httpVueLoader('components/seminar/seminar.vue'),
    },
    computed: {
        result() {
            return store.state.result && store.state.result.seminar;
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