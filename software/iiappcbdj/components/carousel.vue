<template>
    <div class="carousel">
        <div class="carousel-slider">
            <local-swiper
                ref="awesomeSwiperB"
                v-bind:options="swiperOptionB"
                v-on:slide-change="onSlideChange"
            >
                <local-slide v-for="slide in slides" v-bind:key="slide.imgSrc">
                    <img v-bind:src="'images/' + slide.imgSrc" alt>
                </local-slide>
            </local-swiper>
        </div>
        <p v-for="caption in captions" :key="caption" class="carousel-caption">
            <span>{{caption}}</span>
        </p>
    </div>
</template>

<script>
let config = {
    multiple: {
        loop: true,
        autoplay: {
            disableOnInteraction: false
        }
    },
    single: {
        allowTouchMove: false
    }
};
module.exports = {
    props: ['slides'],
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: function() {
        return {
            activeIndex: 0,
        }
    },
    computed: {
        swiperOptionB: function() {
            return this.slides.length > 1 ? config.multiple : config.single;
        },
        swiperB: function() {
            return this.$refs.awesomeSwiperB.swiper;
        },
        captions: function() {
            return this.slides[this.activeIndex].captions;
        },
    },
    methods: {
        onSlideChange: function() {
            this.activeIndex = this.swiperB.realIndex;
        },
    },
}
</script>