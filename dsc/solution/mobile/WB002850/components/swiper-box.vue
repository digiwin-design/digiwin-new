<template>
    <div class="swiper-box">
        <swiper
            ref="awesomeSwiperA"
            v-bind:options="swiperOptionA"
            v-on:slide-change="onSlideChange"
        >
            <!-- slides -->
            <swiper-slide v-for="box in boxs" v-bind:key="box.imgSrc">
                <hover-box :color="box.color">
                    <template slot="content">
                        <img v-bind:src="box.imgSrc" alt>
                        <p class="hoverBox-title">{{box.title}}</p>
                    </template>
                    <template slot="hover">
                        <p v-html="box.hoverText"></p>
                    </template>
                </hover-box>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
module.exports = {
    props: ['boxs'],
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                on: {
                    init: this.initSwiper
                }
            },
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        },
    },
    methods: {
        initSwiper: function () {
            let _this = this;
            $('.js-hoverBox').swipe({
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    if (direction === null && event.target.className !== 'swiper-button-prev' && event.target.className !== 'swiper-button-next') {
                        _this.touchHandler(event);
                    }
                },
                threshold: 0,
                allowPageScroll: 'vertical',
            });
        },
        touchHandler: function (e) {
            let el = null;
            if (e.target.className.includes('js-hoverBox')) {
                el = e.target.querySelector('.js-hoverBox-hover');
            }
            else {
                el = e.target.parentElement.querySelector('.js-hoverBox-hover');
            }
            $(el).animate({ top: 0 });
        },
        onSlideChange: function () {
            document.querySelectorAll('.js-hoverBox-hover').forEach(function (el) {
                el.style.top = '100%';
            });
        },
    },
}
</script>