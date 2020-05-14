Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/erpAll/Contact.vue');
httpVueLoader.register(Vue, 'components/erpAll/Columns.vue');
httpVueLoader.register(Vue, 'components/erpAll/Banner.vue');
httpVueLoader.register(Vue, 'components/erpAll/HoverBoxs.vue');
httpVueLoader.register(Vue, 'components/erpAll/Accordion.vue');
httpVueLoader.register(Vue, 'components/erpAll/MapComponent.vue');
httpVueLoader.register(Vue, 'components/erpAll/section-btns.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');

const store = new Vuex.Store({
    state: {
        isMobile: true,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    }
});

Vue.component('hoverBox', {
    props: {
        customClass: String,
        fadeIn: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: true
        }
    },
    template: `
        <div class="hoverBox js-hoverBox" :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]">
            <slot name="content"></slot>
            <div class="hoverBox-hover js-hoverBox-hover">
                <slot name="hover"></slot>
            </div>
        </div>
    `
});

new Vue({
    el: 'main',
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
        getData() {
            axios.get('db.json').then(res => {
                store.commit('setData', res.data.erpAll);
            });
        },
    },
    mounted() {
        this.mediaSensor();
        this.getData();
    },
});