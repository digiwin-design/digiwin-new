<template>
    <swiper ref="awesomeSwiperA" :options="swiperOptionA">
        <swiper-slide v-for="slide in slides" :key="slide.title">
            <div class="slide">
                <p class="slide-title" v-html="slide.title"></p>
                <p class="slide-content">
                    <vue-text-dot :line="4" :msg="slide.content"></vue-text-dot>
                </p>
                <p class="slide-quote">{{slide.quote}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
module.exports = {
    name: 'Carousel',
    props: {
        slides: {
            type: Array
        }
    },
    data: function () {
        return {
            swiperOptionA: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            }
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        }
    },
}
</script>