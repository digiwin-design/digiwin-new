httpVueLoader.register(Vue, 'components/inventory/Contact.vue');
httpVueLoader.register(Vue, 'components/inventory/HoverBox.vue');
httpVueLoader.register(Vue, 'components/inventory/Case.vue');

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
    data: {
        result: null,
        section4ActiveNav: 0,
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
    },
    watch: {
        isMobile(value) {
            if (value) {
                // section4 >768px 僅顯示第一區塊(手風琴標題)
                $('.js-section4-subtitle').each(function (idx) {
                    if (idx === 0) {
                        $(this).addClass('active');
                    }
                    else {
                        $(this).removeClass('active');
                    }
                });

                // section4 >768px 僅顯示第一區塊(手風琴內容)
                $('.js-section4-content').each(function (idx) {
                    if (idx === 0) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                });
            }
            else {
                // section2 >768px 顯示所有區塊
                $('.section2-content').removeAttr('style');

                // section4 >768px 僅顯示第一區塊(頁籤選單)
                this.section4ActiveNav = 0;

                // section4 >768px 僅顯示第一區塊(頁籤內容)
                $('.js-section4-content').each(function (idx) {
                    if (idx === 0) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                });
            }
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
                this.result = res.data.inventory;
            });
        },
        foldToggle(evt) {
            $(evt.target).toggleClass('active')
                .next().slideToggle();
        },
        section4Switch(idx) {
            this.section4ActiveNav = idx;
            $('.js-section4-content:visible').hide();
            $(this.$refs[`section4-${idx}`]).show();
        },
        section4Show(idx) {
            return idx === 0 ? 'block' : 'none';
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.mediaSensor();
    },
});