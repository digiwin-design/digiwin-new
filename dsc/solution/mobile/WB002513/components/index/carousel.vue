<template>
    <div class="carousel">
        <swiper ref="awesomeSwiperA" :options="swiperOptionA">
            <swiper-slide v-for="slide in slides" :key="slide.title">
                <div class="slide">
                    <div class="container">
                        <div class="video-container">
                            <iframe :src="slide.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="quote container">
                        <div class="quote__company" v-html="slide.company"></div>
                        <div class="quote__text">
                            <p class="quote__text--people">{{slide.people}}</p>
                            <p class="quote__text--content">{{slide.content}}</p>
                        </div>
                    </div>
                </div>
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
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000
                },
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