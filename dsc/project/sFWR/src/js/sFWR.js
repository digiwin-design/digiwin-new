httpVueLoader.register(Vue, 'components/contact.vue');

new Vue({
    el: 'main',
    methods: {
        initSwiper() {
            new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'my-button-disabled'
                }
            });
        },
        hoverHandler() {
            $('#case li').hover(function () {
                $(this).find('.fadein').stop().animate({ 'top': '0' });
                $(this).find('.fadeout');
            }, function () {
                $(this).find('.fadein').stop().animate({ 'top': '130%' });
                $(this).find('.fadeout');
            });
        }
    },
    mounted() {
        this.initSwiper();
        this.hoverHandler();
    },
});