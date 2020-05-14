<template>
    <div class="carousel">
        <div class="carousel-slider">
            <local-swiper
                ref="awesomeSwiperB"
                v-bind:options="swiperOptionB"
                v-on:slide-change="onSlideChange"
            >
                <local-slide v-for="slide in slides" v-bind:key="slide.imgSrc">
                    <img v-bind:src="slideImg(slide.imgSrc)" alt>
                </local-slide>
            </local-swiper>
        </div>
        <span class="carousel-caption">{{caption}}</span>
    </div>
</template>

<script>
module.exports = {
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: function() {
        return {
            swiperOptionB: {
                loop: true,
                autoplay: {
                    disableOnInteraction: false
                }
            },
            activeIndex: 0,
        }
    },
    computed: {
        swiperB: function() {
            return this.$refs.awesomeSwiperB.swiper;
        },
        slides: function() {
            return [
                {
                    imgSrc: 'slide1.jpg',
                    caption: '设备状态'
                },
                {
                    imgSrc: 'slide2.jpg',
                    caption: '设备稼动'
                },
                {
                    imgSrc: 'slide3.jpg',
                    caption: '资产回报量化'
                },
                {
                    imgSrc: 'slide4.jpg',
                    caption: '总体稼动率'
                },
                {
                    imgSrc: 'slide5.jpg',
                    caption: '设备综合效率'
                },
            ];
        },
        caption: function() {
            return this.slides[this.activeIndex].caption;
        },
    },
    methods: {
        onSlideChange: function() {
            this.activeIndex = this.swiperB.realIndex;
        },
        slideImg: function(imgSrc) {
            if (this.locale === 'tw') {
                return 'images/tw/' + imgSrc;
            }
            else {
                return 'images/' + imgSrc;
            }
        },
    },
}
</script>