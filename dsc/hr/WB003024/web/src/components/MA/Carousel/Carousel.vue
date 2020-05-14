<template>
    <div class="carousel" @mouseenter="hoverHandler" @mouseleave="hoverHandler">
        <div class="thumbs">
            <div class="avatar" :class="{ active: index === idx }" v-for="(item, idx) in carousel" :key="item.name" @click="changeSlide(idx)">
                <img class="avatar__pic" :src="require(`./avatar${idx + 1}.png`)" alt="">
            </div>
        </div>
        <div class="slide" ref="slide">
            <div class="container">
                <div class="avatar">
                    <p class="avatar__name" :data-text="slide.name"></p>
                    <img class="avatar__pic" :src="require(`./avatar${index + 1}.png`)" alt="">
                </div>
                <div class="text">
                    <p class="text__title">{{slide.title}}</p>
                    <div class="text__content" v-html="slide.content"></div>
                    <div class="text__bg"></div>
                </div>
            </div>
            <a href class="slide__next" @click.prevent="changeSlide(index + 1)"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        carousel: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            index: 0,
            timer: null,
            autoplay: true,
        }
    },
    computed: {
        slide() {
            return this.carousel[this.index];
        },
    },
    methods: {
        changeSlide(index) {
            clearInterval(this.timer);
            this.autoplay = false;
            this.index = index >= this.carousel.length ? 0 : index < 0 ? this.carousel.length - 1 : index;
        },
        play() {
            let index = this.index
            let total = this.carousel.length;
            this.timer = setInterval(() => {
                index++;
                this.index = index % total;
            }, 5000);
        },
        hoverHandler() {
            if (!this.autoplay) return;

            if (event.type === 'mouseenter') {
                clearInterval(this.timer);
            }
            else {
                this.play();
            }
        }
    },
    mounted() {
        this.play();
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';
$mobile-width: 560px;
$tablet-width: 1300px;
$main-color: #3a46ac;

.carousel {
    @media (min-width: $tablet-width + 1) {
        display: flex;
        margin: 0 auto;
        max-width: $content-width + 50px;
        align-items: flex-start;
    }
}
.thumbs {
    display: flex;
    margin: 0 auto 20px;
    width: 320px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: $mobile-width + 1) {
        margin-bottom: 27px;
    }
    @media (min-width: $tablet-width + 1) {
        flex: none;
        margin-top: 42px;
        margin-bottom: 0;
        width: 280px;
        order: 1;
        justify-content: flex-start;
    }
}
.slide {
    overflow: hidden;
    background-color: #bfdefb;
    @media (min-width: $mobile-width + 1) {
        position: relative;
        background-color: transparent;
    }
    @media (min-width: $tablet-width + 1) {
        overflow: visible;
        width: calc(100% - 280px);
    }
    > .container {
        margin: 0;
        max-width: none;
        @media (min-width: $mobile-width + 1) {
            display: flex;
            padding-right: 0;
            padding-left: percentage(67 / 768);
        }
    }
    &__next {
        display: none;
        @media (min-width: $mobile-width + 1) {
            position: absolute;
            top: 227px;
            left: percentage(90 / 768);
            display: block;
            width: 91px;
            height: 14px;
            border-width: 0 1px 1px 0;
            border-style: solid;
            border-color: transparent $main-color $main-color transparent;
            transform: skewX(45deg);
            &::before {
                @include clickableArea(false, 14px);
                transform: skewX(-45deg) translateX(7px);
            }
        }
        @media (min-width: $tablet-width + 1) {
            top: auto;
            right: -185px;
            bottom: 20px;
            left: auto;
        }
    }
}
.avatar {
    display: flex;
    background-image: radial-gradient(#f1fbfc, #c1c1c1);
    transform: skewX(14deg);
    @at-root {
        .thumbs .avatar {
            flex: none;
            box-sizing: content-box;
            width: 43.9px;
            height: 53px;
            border: 2px solid transparent;
            background-clip: content-box;
            cursor: pointer;
            justify-content: flex-end;
            align-items: flex-end;
            @media (min-width: $tablet-width + 1) {
                position: relative;
                margin: 3px;
                width: 91.6px;
                height: 110px;
                &:nth-child(3),
                &:nth-child(4) {
                    left: 30px;
                }
                &:nth-child(5),
                &:nth-child(6) {
                    left: 60px;
                }
            }
        }
        .slide .avatar {
            flex-direction: column;
            margin: 0 auto;
            width: 180.4px;
            height: 215px;
            justify-content: space-between;
            align-items: flex-end;
            @media (min-width: $mobile-width + 1) {
                position: relative;
                z-index: 1;
                flex: none;
            }
            @media (min-width: $tablet-width + 1) {
                width: 370px;
                height: 440px;
            }
        }
    }
    &.active {
        border-color: $main-color;
    }
    &__name {
        width: 100%;
        height: 24px;
        background-color: $main-color;
        text-align: center;
        @media (min-width: $tablet-width + 1) {
            width: 303.8px;
            height: 45px;
        }
        &::before {
            display: block;
            color: #fff;
            content: attr(data-text);
            font-size: 15px;
            line-height: 24px;
            transform: skewX(-14deg);
            @media (min-width: $tablet-width + 1) {
                letter-spacing: getLetterSpacing(50);
                font-size: 24px;
                line-height: 45px;
            }
        }
    }
    &__pic {
        transform: skewX(-14deg);
        @at-root {
            .thumbs .avatar__pic {
                margin-right: 2px;
                height: 50px;
                @media (min-width: $tablet-width + 1) {
                    margin-right: 5px;
                    height: 100px;
                }
            }
            .slide .avatar__pic {
                margin-right: 15px;
                height: 185px;
                @media (min-width: $tablet-width + 1) {
                    margin-right: 24px;
                    height: 375px;
                }
            }
        }
    }
}
.text {
    padding-bottom: 2em;
    @media (min-width: $mobile-width + 1) {
        position: relative;
        margin-top: 24px;
        padding-right: 1em;
        padding-left: 40px;
        min-height: 355px;
        width: 100%;
    }
    @media (min-width: $tablet-width + 1) {
        position: relative;
        margin-top: 45px;
        padding-right: percentage(60 / 1220);
        padding-left: percentage(90 / 1220);
        min-height: 445px;
        &::before,
        &::after {
            position: absolute;
            z-index: 2;
            width: 1px;
            height: 300px;
            content: '';
            transform: rotate(-14deg);
        }
        &::before {
            bottom: -45px;
            left: 80px;
            background-color: #b50b6f;
        }
        &::after {
            top: -35px;
            right: 45px;
            background-color: $main-color;
        }
    }
    &__title {
        margin-top: 1.5em;
        margin-bottom: 1em;
        color: $main-color;
        letter-spacing: getLetterSpacing(50);
        font-weight: bold;
        font-size: 18px;
        line-height: 1.3;
        @media (min-width: $mobile-width + 1) {
            position: relative;
            z-index: 1;
        }
        @media (min-width: $tablet-width + 1) {
            margin-top: 2em;
            font-size: 24px;
        }
    }
    &__content {
        font-size: 16px;
        line-height: 22px;
        @media (min-width: $mobile-width + 1) {
            position: relative;
            z-index: 1;
            letter-spacing: getLetterSpacing(50);
        }
        @media (min-width: $tablet-width + 1) {
            padding-left: 36px;
            font-size: 18px;
            line-height: 28px;
        }
        /deep/ p + p {
            margin-top: .5em;
        }
    }
    &__bg {
        display: none;
        @media (min-width: $mobile-width + 1) {
            position: absolute;
            top: 0;
            right: -100%;
            bottom: 0;
            left: -10px;
            display: block;
            background-color: #bfdefb;
            content: '';
            transform: skewX(14deg);
        }
        @media (min-width: $tablet-width + 1) {
            right: -20px;
            left: -30px;
        }
    }
}
</style>