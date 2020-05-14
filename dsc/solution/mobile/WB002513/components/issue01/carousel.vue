<template>
    <div class="carousel">
        <swiper ref="awesomeSwiperA" :options="swiperOptionA">
            <swiper-slide v-for="(slide, idx) in slides" :key="slide.title">
                <div class="slide" :class="`slide${idx + 1}`" v-if="idx === 2">
                    <ul>
                        <li v-for="item in slide.list" :key="item">{{item}}</li>
                    </ul>
                </div>
                <carousel-slide :slide="slide" @onload="onLoad" v-else></carousel-slide>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
module.exports = {
    name: 'Carousel',
    props: {
        slides: {
            type: Array
        }
    },
    components: {
        'carousel-slide': httpVueLoader('components/issue01/carousel-slide.vue'),
    },
    data: function () {
        return {
            swiperOptionA: {
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000
                },
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            loadedImg: 0,
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        }
    },
    methods: {
        onLoad() {
            this.loadedImg++;
            if (this.loadedImg === 2) {
                this.swiperA.updateAutoHeight();
            }
        }
    },
}
</script>