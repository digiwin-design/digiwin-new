module.exports = {
    props: ['accordion'],
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
    },
    watch: {
        isMobile(val) {
            if (val) {
                this.destroyAccordion();
            }
            else {
                this.initAccordion();
            }
        }
    },
    methods: {
        btnClass(href) {
            return href === '#contact';
        },
        slideToggle(event) {
            if (this.isMobile) {
                $(event.target).toggleClass('active').next().slideToggle();
            }
        },
        initAccordion() {
            $(this.$refs.accordion).find('h2').removeClass('active');
            $(this.$refs.accordion).accordion({
                collapsible: true,
                heightStyle: 'content',
            });
        },
        destroyAccordion() {
            $(this.$refs.accordion).find('h2').eq(0).addClass('active');
            $(this.$refs.accordion).accordion('destroy');
        },
    },
    mounted() {
        if (!this.isMobile) {
            this.initAccordion();
        }
        else {
            $(this.$refs.accordion).find('h2').eq(0).addClass('active');
        }
    },
};