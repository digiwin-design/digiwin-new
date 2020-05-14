<template>
    <div id="banner" class="banner swiper-container" @click="clickHandler">
        <div class="swiper-wrapper">
            <div
                v-for="slide in slides"
                :key="slide.title"
                :style="{ backgroundImage: 'url(' + slide.imgSrc + ')' }"
                :class="'slide' + slide.id"
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
    data: function () {
        return {
            index: 0
        }
    },
    methods: {
        initSwiper: function () {
            let _this = this;
            new Swiper('#banner', {
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
                },
                on: {
                    slideChange: function () {
                        _this.index = this.realIndex;
                    }
                }
            });
        },
        clickHandler: function (e) {
            if (e.target.matches('[role=button]')) return;
            let url = this.slides[this.index].url;
            let otherPage = url.match(/\/tw\//);
            if (otherPage) {
                window.open(url);
            }
            else {
                location.assign(url);
            }
        }
    },
    mounted: function () {
        this.initSwiper();
    },
}
</script>