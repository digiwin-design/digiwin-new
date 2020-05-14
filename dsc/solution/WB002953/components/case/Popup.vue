<template>
    <div id="popup" class="popup">
        <slot></slot>
        <button class="popup_close"></button>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            mySwiper: null,
        }
    },
    computed: {
        slideIdx: function () {
            return store.state.slideIdx;
        },
    },
    methods: {
        popupInit: function () {
            let self = this;
            $('#popup').popup({
                opacity: 0.3,
                transition: 'all 0.3s',
                scrolllock: true,
                onopen: function () {
                    self.initSwiper();
                },
                closetransitionend: function () {
                    self.mySwiper.destroy();
                }
            });
        },
        initSwiper: function () {
            this.mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoHeight: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                initialSlide: this.slideIdx
            });
        },
    },
    mounted: function () {
        this.popupInit();
    },
}
</script>