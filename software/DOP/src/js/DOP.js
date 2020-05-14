httpVueLoader.register(Vue, 'components/contact.vue');

new Vue({
    el: 'main',
    methods: {
        hoverHandler() {
            var $titles = $('.tabs').eq(0);
            $titles.find('.titles>li').hover(function () {
                $(this).addClass('on').siblings().removeClass('on');
                var index = $titles.find('.titles>li').index(this);
                $('.tab_img div').eq(index).show().siblings().hide();
            });
            $titles.find('.titles>li').on('click', function () {
                $(this).addClass('on').siblings().removeClass('on');
                var index = $titles.find('.titles>li').index(this);
                $('.mh div').eq(index).show().siblings().hide();
            });
        }
    },
    mounted() {
        this.hoverHandler();
    },
});