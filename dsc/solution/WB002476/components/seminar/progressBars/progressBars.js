module.exports = {
    props: ['progressBars'],
    data() {
        return {
            isInit: false,
        };
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
    },
    methods: {
        scrollHandler: _.throttle(function () {
            if (!this.isInit) {
                let progressBarsPos = $(this.$refs.progressBars).offset().top;
                let distance = progressBarsPos - $(window).height();
                let windowPos = $(window).scrollTop();
                if (windowPos >= distance) {
                    this.initComponent();
                    this.isInit = true;
                }
            }
        }, 100),
        initComponent() {
            setTimeout(() => {
                $('.js-barGroup').each(function (barIdx) {
                    $(this).find('.js-bar').removeClass('disabled').each(function (itemIdx) {
                        let percentage = this.dataset.percentage;
                        new CountUp(`bar${barIdx + 1}-${itemIdx + 1}`, 0, percentage).start();
                    });
                });
            }, 100);
        },
        setBarWidth(value) {
            let percentage;
            if (this.isMobile && value < 23) {
                percentage = 23;
            }
            else if (value < 14) {
                percentage = 14;
            }
            else {
                percentage = value;
            }
            return `${percentage}%`;
        }
    },
    mounted() {
        this.scrollHandler();
        window.addEventListener('scroll', this.scrollHandler);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    },
};