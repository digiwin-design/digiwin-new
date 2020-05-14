<template>
    <div class="slider">
        <swiper ref="awesomeSwiperA" :options="swiperOptionA">
            <slot></slot>
        </swiper>
    </div>
</template>

<script>
module.exports = {
    props: {
        slides: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            swiperOptionA: {
                slidesPerView: 'auto',
                spaceBetween: 6,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
            }
        }
    },
    computed: {
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
        }
    },
}
</script>