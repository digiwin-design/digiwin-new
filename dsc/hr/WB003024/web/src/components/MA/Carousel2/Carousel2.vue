<template>
    <div class="carousel">
        <!-- desktop -->
        <el-carousel
            ref="carousel"
            :interval="4000"
            type="card"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            :autoplay="autoplay"
            v-show="!isMobile"
        >
            <el-carousel-item v-for="item in items" :key="item">
                <div class="item">
                    <img :src="require(`./${item}`)" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <!-- mobile -->
        <el-carousel
            ref="carouselM"
            class="carouselM"
            :interval="4000"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            :autoplay="autoplay"
            v-show="isMobile"
        >
            <el-carousel-item v-for="item in items" :key="item">
                <div class="item">
                    <img :src="require(`./${item}`)" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <a href class="carousel__arrow carousel__arrow--left" @click.prevent="onChange(-1)"></a>
        <a href class="carousel__arrow carousel__arrow--right" @click.prevent="onChange(1)"></a>
    </div>
</template>

<script>
import _ from 'lodash';
import 'jquery-touchswipe';

export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            imgSize: {
                width: 600,
                height: 350
            },
            carouselHeight: '',
            autoplay: true,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        device() {
            return this.$store.state.device;
        },
    },
    methods: {
        setCarouselHeight: _.throttle(function () {
            let scaleW = this.isMobile ? 1 : 0.5; // .el-carousel__item 預設寬度
            let cardWidth = getComputedStyle(this.$el).width.replace('px', '') * scaleW;
            this.carouselHeight = cardWidth * (this.imgSize.height / this.imgSize.width) + 'px';
        }, 100),
        onChange(type) {
            this.autoplay = false;
            let el = this.isMobile ? this.$refs.carouselM : this.$refs.carousel;
            if (type === -1) {
                el.prev();
            }
            else {
                el.next();
            }
        },
        initTouchswipe() {
            const _this = this;
            $('.carouselM').swipe({
                swipe(event, direction) {
                    if (direction === 'left') {
                        _this.onChange(1);
                    }
                    else if (direction === 'right') {
                        _this.onChange(-1);
                    }
                },
                threshold: 0,
                allowPageScroll: 'vertical',
            });
        },
    },
    mounted() {
        window.addEventListener("resize", () => this.setCarouselHeight());
        this.setCarouselHeight();
        if (this.device) {
            this.initTouchswipe();
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';
$main-color: #3a46ac;

.carousel {
    position: relative;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 22px;
    max-width: 600px;
    @media (min-width: $mobile-width + 1) {
        padding-right: 46px;
        padding-left: 46px;
    }
    @media (min-width: $tablet-width + 1) {
        max-width: 1200px;
    }
    &__arrow {
        position: absolute;
        top: 50%;
        width: 17px;
        height: 17px;
        background: url('arrow.svg') no-repeat;
        content: '';
        @media (min-width: $mobile-width + 1) {
            width: 36px;
            height: 36px;
        }
        &--left {
            left: 0;
            transform: scaleX(-1) translateY(-50%);
        }
        &--right {
            right: 0;
            transform: translateY(-50%);
        }
        &::before {
            @include clickableArea(17px, 17px);
            @media (min-width: $mobile-width + 1) {
                @include clickableArea(36px, 36px);
            }
        }
    }
}
/deep/ .el-carousel {
    overflow-y: hidden; /* for ie */
    &__mask {
        z-index: 1;
        background-color: #000;
        opacity: .6;
    }
    &__indicators {
        display: none;
    }
}
</style>