httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/barcode/tabs.vue');

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

Vue.component('demo', {
    props: ['result'],
    data() {
        return {
            index: 1,
            timer: null
        };
    },
    mounted() {
        this.loop();
        this.swipeHandler();
    },
    methods: {
        loop() {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.index = this.index % 4 < 3 ? this.index + 1 : 1;
                }, 5000);
            }
        },
        stopLoop() {
            clearInterval(this.timer);
            this.timer = null;
        },
        setIndex(index) {
            this.stopLoop();
            this.index = index;
            this.loop();
        },
        swipeHandler() {
            let Section = this;
            let el = this.$el.querySelector('.js-slider-container');
            $(el).swipe({
                swipe (event, direction, distance, duration, fingerCount, fingerData) {
                    Section.stopLoop();
                    if (direction === 'left' && Section.index !== 3) {
                        Section.index += 1;
                    }
                    else if (direction === 'right' && Section.index !== 1) {
                        Section.index -= 1;
                    }
                    Section.loop();
                },
                threshold: 0
            });
        }
    },
    template: `
        <section :id="'demo' + result.id">
            <h1 :class="'demo' + result.id">{{result.title}}</h1>
            <div class="slider-container js-slider-container">
                <div class="slider-wrapper" :class="'index' + index">
                    <figure v-for="(content, contentIdx) in result.contents">
                        <img :src="'images/barcode/section4-slide' + result.id + '-' + (contentIdx + 1) + '.png'" alt="">
                        <figcaption v-show="contentIdx !== 2">{{content}}</figcaption>
                    </figure>
                </div>
                <ul class="slider-pagination">
                    <li v-for="(content, contentIdx) in result.contents" @click="setIndex(contentIdx + 1)">{{contentIdx + 1}}</li>
                </ul>
            </div>
        </section>
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
            let mm = window.matchMedia('(min-width: 1200px)');
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
        new WOW().init();
    },
});