<template>
    <div class="carousel">
        <!-- desktop -->
        <el-carousel
            ref="carousel"
            :interval="4000"
            type="card"
            :autoplay="!showPopup"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="!isMobile"
        >
            <el-carousel-item v-for="(item, idx) in items" :key="item.video">
                <div class="item" data-fancybox :href="item.video">
                    <div class="item__poster">
                        <img :src="require(`@/assets/images/recommended-poster/poster${idx + 1}.jpg`)" alt />
                    </div>
                    <ul class="hashtag">
                        <li v-for="tag in item.tags" :key="tag">#{{tag}}</li>
                    </ul>
                </div>
            </el-carousel-item>
        </el-carousel>

        <!-- mobile -->
        <el-carousel
            ref="carouselM"
            :interval="4000"
            :autoplay="!showPopup"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="isMobile"
        >
            <el-carousel-item v-for="(item, idx) in items" :key="item.video">
                <div class="item" data-fancybox :href="item.video">
                    <div class="item__poster">
                        <img :src="require(`@/assets/images/recommended-poster/poster${idx + 1}.jpg`)" alt />
                    </div>
                    <ul class="hashtag">
                        <li v-for="tag in item.tags" :key="tag">#{{tag}}</li>
                    </ul>
                </div>
            </el-carousel-item>
        </el-carousel>

        <a href class="carousel__arrow carousel__arrow--left" @click.prevent="onChange(-1)"></a>
        <a href class="carousel__arrow carousel__arrow--right" @click.prevent="onChange(1)"></a>
    </div>
</template>

<script>
import _ from 'lodash';
import '@fancyapps/fancybox';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            carouselHeight: '',
            showPopup: false,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        carousel() {
            return this.$refs.carousel;
        },
        carouselM() {
            return this.$refs.carouselM;
        }
    },
    methods: {
        setCarouselHeight: _.throttle(function () {
            let scaleW = this.isMobile ? 1 : 0.5;
            let cardWidth = this.$el.offsetWidth * scaleW;
            this.carouselHeight = cardWidth * 0.6 + "px";
        }, 100),
        onChange(type) {
            let el = this.isMobile ? this.carouselM : this.carousel;
            if (type === -1) {
                el.prev();
            }
            else {
                el.next();
            }
        },
        initPopup() {
            let _this = this;
            $("[data-fancybox]").fancybox({
                afterShow() {
                    _this.showPopup = true;
                },
                afterClose() {
                    _this.showPopup = false;
                },
            });
        }
    },
    mounted() {
        window.addEventListener("resize", () => this.setCarouselHeight());
        this.setCarouselHeight();
        this.initPopup();
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.carousel {
    position: relative;
    padding: 0 20px;
    @media (min-width: $tablet-width + 1) {
        padding-right: 40px;
        padding-left: 40px;
    }
    &__arrow {
        position: absolute;
        top: calc(50% - 36.5px);
        width: 23px;
        height: 23px;
        border-bottom: 5px solid rgba(255,255,255,.75);
        border-left: 5px solid rgba(255,255,255,.75);
        border-radius: 0;
        background-color: transparent;
        content: '';
        &--left {
            left: -5px;
            transform: translateY(-50%) rotate(45deg);
            @media (min-width: $tablet-width + 1) {
                left: 5px;
            }
        }
        &--right {
            right: -5px;
            transform: translateY(-50%) scaleX(-1) rotate(45deg);
            @media (min-width: $tablet-width + 1) {
                right: 5px;
            }
        }
    }
}
/deep/ .el-carousel {
    overflow-y: hidden; /* for ie */
    &__item {
        border-radius: 10px;
        background-image: repeating-linear-gradient(135deg, #313131 0, #313131 7px, #404040 7px, #404040 8px);
    }
    &__mask {
        z-index: 1;
        background-color: #000;
        opacity: .4;
    }
    &__indicator.is-active button {
        background-color: #ffbd0b;
    }
    &__indicator--horizontal {
        padding-top: 26px;
        padding-right: 7.5px;
        padding-bottom: 30px;
        padding-left: 7.5px;
    }
    &__button {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #9d9d9d;
        opacity: 1;
    }
}
/deep/ .item {
    display: flex;
    flex-direction: column;
    padding: 15px 15px 0;
    height: 100%;
    @media (min-width: $tablet-width + 1) {
        padding: 27px 27px 0;
    }
    &__poster {
        width: 100%;
    }
}
/deep/ .hashtag {
    display: flex;
    width: 100%;
    color: #fff6dc;
    letter-spacing: getLetterSpacing(30);
    font-weight: bold;
    flex-grow: 1;
    align-items: center;
    @media (min-width: 961px) {
        font-size: 22px;
    }
    li + li {
        margin-left: 1em;
    }
}
</style>