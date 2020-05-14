httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/WB00255301/progress-bars.vue');
httpVueLoader.register(Vue, 'components/WB00255301/hover-box.vue');
httpVueLoader.register(Vue, 'components/WB00255301/pdf.vue');
httpVueLoader.register(Vue, 'components/dot.vue');
httpVueLoader.register(Vue, 'components/case.vue');

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
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result;
        },
        percentages() {
            if (!this.result.index.progressBars) return null;

            // 排序各組數值
            let percentages = [];
            this.result.index.progressBars.forEach(function (progressBar) {
                let percentage = [];
                progressBar.items.forEach(function (item) {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        progressBars() {
            if (!this.result.index.progressBars) return null;

            // 取得各組前三名
            this.result.index.progressBars.forEach(function (progressBar, idx) {
                progressBar.items.forEach(function (item) {
                    if (item.percentage === this.percentages[idx][0] || item.percentage === this.percentages[idx][1] || item.percentage === this.percentages[idx][2]) {
                        item['highest'] = true;
                    }
                }.bind(this));
            }.bind(this));

            return this.result.index.progressBars;
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