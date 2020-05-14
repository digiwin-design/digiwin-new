module.exports = {
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
    },
    watch: {
        isMobile(value) {
            // mobile->desktop時預設展開第一項
            if (!value) {
                $(this.$refs.accordion).find('h2').eq(0).addClass('active').next().slideDown()
                    .end().siblings('h2').removeClass('active').next().slideUp();
            }
        }
    },
    methods: {
        slideToggle(event) {
            let $target = event.target.nodeName === 'H2' ? $(event.target) : $(event.target).parents('h2');
            $target.toggleClass('active').next().slideToggle();
            if (!this.isMobile) {
                $target.siblings('h2').removeClass('active').next().slideUp();
            }
        },
        clickHandler(event) {
            let delay = $(event.target).data('delay');
            this.scrollHandler(event, delay);
        },
        clickHandlerOnMobile(event) {
            this.scrollHandler(event);
        },
        scrollHandler(event, delay = 0) {
            // 展開/收合
            $(event.target.hash).addClass('active').next().slideDown();
            if (!this.isMobile) {
                $(event.target.hash).siblings('h2').removeClass('active').next().slideUp();
            }

            // 滾動頁面
            let $target = $(event.target);
            let target = $target.attr('href') || $target.data('target');
            setTimeout(() => {
                let offset = $('.page-submenu').outerHeight();
                let targetPos = $(target).offset().top;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }, delay);
        }
    },
    mounted() {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};