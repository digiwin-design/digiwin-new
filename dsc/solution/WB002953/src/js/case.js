httpVueLoader.register(Vue, 'components/case/HoverBox.vue');
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/case/VideoSection.vue');
httpVueLoader.register(Vue, 'components/case/Popup.vue');
httpVueLoader.register(Vue, 'components/case/Accordion.vue');
httpVueLoader.register(Vue, 'components/case/Process.vue');

const store = new Vuex.Store({
    state: {
        isMobile: false,
        isLargeDevice: false,
        result: null,
        slideIdx: 0,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        updateLargeDevice(state, payload) {
            state.isLargeDevice = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
        setSlideIdx(state, payload) {
            state.slideIdx = payload;
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
    data() {
        return {
            processId: 0,
        };
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        isLargeDevice() {
            return store.state.isLargeDevice;
        },
        result() {
            return store.state.result;
        },
    },
    methods: {
        mediaSensor() {
            let mm = window.matchMedia('(min-width: 769px)');
            let mmL = window.matchMedia('(min-width: 1200px)');
            mm.addListener(this.resizeWidth);
            mmL.addListener(this.resizeLargeWidth);
            this.resizeWidth(mm);
            this.resizeLargeWidth(mmL);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
        resizeLargeWidth(pMatchMedia) {
            let isLargeDevice = pMatchMedia.matches ? false : true;
            store.commit('updateLargeDevice', isLargeDevice);
        },
        showPopup(idx) {
            store.commit('setSlideIdx', idx);
            $('#popup').popup('show');
            $.smartScroll($('#popup_wrapper'), $('#popup')); // 阻止body滾動
        },
        setProcess(event) {
            this.processId = $(event.target).index();
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});