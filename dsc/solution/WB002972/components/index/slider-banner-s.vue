<template>
    <div id="bannerS" class="banner swiper-container">
        <div class="swiper-wrapper">
            <div
                v-for="slide in slides"
                v-bind:key="slide.title"
                v-bind:style="{ backgroundImage: 'url(' + slide.imgSrc[device] + ')' }"
                class="banner-slide swiper-slide"
            >
                <div class="container">
                    <p class="banner-title" v-html="slide.title"></p>
                    <p class="banner-desc" v-html="slide.desc"></p>
                </div>
            </div>
        </div>
        <div class="banner-controls">
            <div class="banner-button-next"></div>
            <div class="banner-button-prev"></div>
            <div class="banner-pagination"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['slides', 'device'],
    methods: {
        initSwiper: function () {
            new Swiper('#bannerS', {
                loop: true,
                autoplay: {
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.banner-pagination',
                    clickable: true,
                    bulletClass: 'banner-pagination-bullet',
                    bulletActiveClass: 'banner-pagination-bullet-active'
                },
                navigation: {
                    nextEl: '.banner-button-next',
                    prevEl: '.banner-button-prev'
                }
            });
        },
    },
    mounted: function () {
        this.initSwiper();
    },
}
</script>