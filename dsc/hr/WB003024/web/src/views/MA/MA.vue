<template>
    <div class="ma" v-if="!loading">
        <div class="hero" :style="{ backgroundImage: isMobile ? 'url(images/MA/hero-s.jpg)' : 'url(images/MA/hero.jpg)' }">
            <div class="logo">
                <div>
                    <picture>
                        <source media="(min-width: 769px)" srcset="./hero-logo.png">
                        <img src="./hero-logo-s.png" alt="DigiWIN Your Future">
                    </picture>
                </div>
            </div>
            <h1>
                <div class="container">
                    <picture>
                        <source media="(min-width: 769px)" srcset="images/MA/hero-title.png">
                        <img src="images/MA/hero-title-s.png" alt="2020儲備鼎尖數位人才養成計畫">
                    </picture>
                </div>
            </h1>
            <a href ref="arrow" class="arrow" :class="{ 'is-fixed': arrowFixed }" @click.prevent="scrollToAnchor('#section1')"></a>
        </div>

        <article id="section1" class="section1">
            <section-title
                title="<strong>賦能</strong>，夢想更接近"
                desc="人才養成與發展是鼎新一直以來的堅持，與我們一起引領企業數字化轉型"
                :padding-top="isMobile ? '55px' : '80px'"
                class="container"
            ></section-title>
            
            <Section1Content></Section1Content>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="<strong>實力</strong>，從這裡養成"
                    desc="從人才培養、訓練到驗收，建構完整的數字化人才訓練發展階梯"
                    :padding-top="isMobile ? '55px' : '80px'"
                ></section-title>
                <picture>
                    <source media="(min-width: 769px)" srcset="./section2-chart.svg">
                    <img src="./section2-chart-s.svg" alt="">
                </picture>
            </div>
        </article>

        <article class="section3">
            <section-title
                title="<strong>蛻變</strong>，耀眼成長過程"
                desc="獲得的不只是個人技能的提升，以更為全局的視角審視產業發展與企業經營"
                :padding-top="isMobile ? '55px' : '80px'"
                padding-bottom="2em"
                class="container"
            ></section-title>
            <Carousel :carousel="viewData.carousel"></Carousel>
        </article>

        <article class="section4">
            <img src="./section4-pic.jpg" alt="join us">
            <div class="container">
                <div class="content">
                    <section-title
                        title="認識儲備顧問，創造不平凡"
                        desc="不要懷疑，你正在通往一條不凡的路，只要你對職務內容感興趣，歡迎加入我們"
                        :padding-top="isMediumWidth ? '45px' : '75px'"
                        padding-bottom="2em"
                    ></section-title>
                    <ul>
                        <li>藉由完整流程輔導，深入接觸各企業，快速的積累管理經驗</li>
                        <li>以提升管理指標效益為目標，進行企業經營成效分析與管理診斷</li>
                        <li>以創造系統應用價值為前提，提供企業專業解決方案，成為企業高階的專業幕僚</li>
                    </ul>
                    <a href="https://forms.gle/P6hovf7QjtX6LXaK8" target="_blank">加入我們</a>
                </div>
                <div class="tag" data-text="join us"></div>
            </div>
        </article>

        <article class="section5 container">
            <section-title
                title="數位行家在鼎新"
                desc="給您的成長環境，不僅來自於工作中的教學相長，更在於創造輕鬆自在的經驗分享與知識傳遞氛圍"
                :padding-top="isMobile ? '55px' : '80px'"
                padding-bottom="2em"
            ></section-title>
            <div class="content">
                <a href="https://youtu.be/3X7zvkeyTPc" data-fancybox>
                    <img src="./section5-poster1.jpg" alt="">
                </a>
                <a href="https://youtu.be/fp0xugGs4qA" data-fancybox>
                    <img src="./section5-poster2.jpg" alt="">
                </a>
            </div>
        </article>

        <article class="section6">
            <div class="container">
                <section-title
                    title="頂尖優質環境，成就鼎尖人才"
                    desc="打造工作與休閒的舒適空間<br>同時擁有舒適感、幸福感與安全感"
                    :padding-top="isMobile ? '55px' : '80px'"
                    padding-bottom="3.4em"
                ></section-title>
                <Carousel2 :items="viewData.carousel2"></Carousel2>
            </div>
        </article>

        <article class="section7">
            <div class="container">
                <section-title
                    title="掌握人才招募訊息"
                    desc="您可以獲取近期關於鼎新招募活動，歡迎到現場拉近你我的距離"
                    :padding-top="isMobile ? '55px' : '80px'"
                    :padding-bottom="isMobile ? '2em' : '3.8em'"
                ></section-title>
                <div class="content">
                    <a href="http://career.digiwin.com" target="_blank">校園徵才活動</a> 
                    <a href="https://www.digiwin.com/tw/dsc/hr/WB003024/edm/WB00302402_edm.html" target="_blank">數位人才講座</a>
                </div>
            </div>
        </article>

        <article class="section8">
            <div class="container">
                <section-title title="歡迎聯繫我們"></section-title>
                <div class="content">
                    <div class="content__text">
                        更多儲備鼎尖人最新消息不定期在臉書粉絲團曝光，<br>
                        歡迎加入鼎新人才招募網粉絲專頁！<br>
                        若有相關疑問，請洽：<br>
                        2020儲備鼎尖人才專案小組<br>
                        電話：886-4-2305-4567#4581<br>
                        Email：kimberlyhsu@digiwin.com
                    </div>
                    <a href="https://www.facebook.com/digiwinHR" class="content__qrcode" target="_blank">
                        <figure>
                            <img src="./qrcode.jpg" alt="">
                            <figcaption>鼎新人才招募網粉絲專頁</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import _ from 'lodash';
import '@fancyapps/fancybox';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import mixins from '@/mixins';
import SectionTitle from '@/components/MA/SectionTitle.vue';
import Section1Content from '@/components/MA/Section1Content/Section1Content.vue';
import Carousel from '@/components/MA/Carousel/Carousel.vue';
import Carousel2 from '@/components/MA/Carousel2/Carousel2.vue';

export default {
    name: 'ma',
    mixins: [mixins],
    components: {
        SectionTitle,
        Section1Content,
        Carousel,
        Carousel2,
    },
    data() {
        return {
            arrowFixed: false,
        }
    },
    watch: {
        loading(value) {
            if (value) return;
            this.$nextTick(() => {
                this.locateArrow();
                window.addEventListener('scroll', this.locateArrow);
                window.addEventListener('resize', this.locateArrow);
            });
        },
    },
    methods: {
        loadImg() {
            let images = [
                'images/MA/hero-s.jpg',
                'images/MA/hero.jpg',
                'images/MA/hero-title.png',
                'images/MA/hero-title-s.png',
            ];
            this.preloadImg(images)
                .then(() => {
                    setTimeout(() => {
                        this.$store.commit('setLoading', false);
                    }, 500);
                });
        },
        locateArrow: _.throttle(function () {
            let windowBottom = window.pageYOffset + window.innerHeight;
            let targetPos = document.querySelector('#section1').getBoundingClientRect().top + window.pageYOffset;
            this.arrowFixed = !(targetPos < windowBottom);
        }, 100),
    },
    created() {
        if (!this.$store.state.loading) {
            this.$store.commit('setLoading', true);
        }
        this.loadImg();
    },
    destroyed() {
        window.removeEventListener('scroll', this.locateArrow);
        window.removeEventListener('resize', this.locateArrow);
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';
$main-color: #3a46ac;

.ma {
    letter-spacing: -1px;
}
.container {
    max-width: $content-width;
    @media (min-width: $content-width) {
        padding-right: 0;
        padding-left: 0;
    }
}
.hero {
    position: relative;
    overflow: hidden;
    height: 757px;
    background-position: 50% 0;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: $mobile-width + 1) {
        padding-bottom: percentage(1080 / 768);
        height: 0;
    }
    @media (min-width: $tablet-width + 1) {
        padding-bottom: percentage(1080 / 1920);
        background-size: 100% auto;
    }
    .logo {
        position: absolute;
        top: 25px;
        right: 15px;
        width: 171px;
        @media (min-width: $mobile-width + 1) {
            right: 20px;
            width: percentage(230 / 768);
        }
        @media (min-width: $tablet-width + 1) {
            right: 15.1%;
            width: percentage(290 / 1920);
        }
        > div {
            @include rwdElement(290, 42);
        }
    }
    h1 {
        position: absolute;
        top: 100px;
        right: 35px;
        left: 35px;
        @media (min-width: $mobile-width + 1) {
            top: 14.2%;
            right: auto;
            left: 50%;
            width: percentage(517 / 768);
            transform: translateX(-50%);
        }
        @media (min-width: $tablet-width + 1) {
            top: 28.7%;
            right: 16.9%;
            left: auto;
            width: percentage(645 / 1920);
            transform: translateX(0);
        }
        > div {
            @include rwdElement(517, 248) {
                @media (min-width: $tablet-width + 1) {
                    padding-bottom: percentage(297 / 645);
                }
            }
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    .arrow {
        position: absolute;
        bottom: 70px;
        left: 50%;
        width: 44px;
        height: 44px;
        transform: translateX(-50%);
        @media (min-width: $tablet-width + 1) {
            bottom: 3.7%;
        }
        &.is-fixed {
            position: fixed;
            bottom: 3.7%;
        }
        &::before,
        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15px;
            height: 15px;
            border-bottom: 2px solid #fff;
            border-left: 2px solid #fff;
            content: '';
            @media (min-width: $tablet-width + 1) {
                width: 20px;
                height: 20px;
            }
        }
        &::before {
            transform: translateX(-50%) translateY(-50%) translateY(-10px) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
}
.section1 {
    background-color: #e2e9ef;
    .sectionTitle {
        position: absolute;
        z-index: 1;
        width: 100%;
        @media (min-width: $tablet-width + 1) {
            position: relative;
        }
    }
}
.section2 {
    @include bg('section2-bg-s.jpg', 50% 100%);
    padding-bottom: 70px;
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 147px;
        background-image: url('section2-bg.png');
        background-position: 50% 0;
    }
    img {
        display: block;
        margin: 0 auto;
        max-width: 470px;
        @media (min-width: $tablet-width + 1) {
            margin-top: 20px;
            max-width: 1133px;
        }
    }
}
.section3 {
    $mobile-width: 560px;
    $tablet-width: 1300px;
    overflow: hidden;
    background-color: #b5b9c6;
    @media (min-width: $mobile-width + 1) {
        padding-bottom: 70px;
    }
    @media (min-width: $tablet-width + 1) {
        background-color: transparent;
        background-image: linear-gradient(#b5b9c6 650px, #fff 0);
    }
}
.section4 {
    $tablet-width: 960px;
    padding-bottom: 70px;
    background-color: $main-color;
    color: #fff;
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 0;
        background: $main-color url('section4-bg.png') 50% 0 no-repeat;
    }
    > img {
        display: block;
        margin: 0 auto;
        @media (min-width: $tablet-width + 1) {
            display: none;
        }
    }
    > .container {
        position: relative;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            width: 55%;
            height: 620px;
            align-items: flex-start;
        }
        @media (min-width: $content-width + 1) {
            width: 50%;
        }
        > * {
            width: 100%;
        }
    }
    .sectionTitle {
        @media (min-width: $tablet-width + 1) {
            align-items: flex-start;
        }
    }
    ul {
        margin-bottom: 2.5rem;
        padding-left: 1.5em;
        list-style-type: disc;
        @media (min-width: $content-width + 1) {
            margin-bottom: 6rem;
        }
    }
    li {
        font-size: 18px;
        line-height: 22px;
        @media (min-width: $tablet-width + 1) {
            font-size: 20px;
        }
        + li {
            margin-top: .5em;
            @media (min-width: $tablet-width + 1) {
                margin-top: 1em;
            }
        }
    }
    a {
        @include btn(400px, 80px, $main-color, #bfdefb, 0, true);
        width: 100%;
        letter-spacing: getLetterSpacing(200);
        font-weight: bold;
        font-size: 36px;
        transition: all .15s ease-in-out;
        @at-root {
            html.no-mobile .section4 a:hover {
                background-color: #ff46aa;
                color: #fff;
            }
        }
    }
    .tag {
        display: none;
        @media (min-width: $tablet-width + 1) {
            position: absolute;
            top: 50%;
            right: 20px;
            display: block;
            width: 248.5px;
            height: 70px;
            background-color: rgba($main-color, .7);
            text-align: center;
            transform: skewX(14deg) translateY(-50%);
            &::before {
                display: block;
                color: #fff;
                content: attr(data-text);
                letter-spacing: getLetterSpacing(200);
                font-size: 30px;
                line-height: 70px;
                transform: skewX(-14deg);
            }
        }
        @media (min-width: $content-width + 1) {
            right: 85px;
        }
    }
}
.section5 {
    overflow: hidden;
    padding-bottom: 55px;
    @media (min-width: $tablet-width + 1) {
        position: relative;
        padding-bottom: 105px;
        &::before,
        &::after {
            position: absolute;
            z-index: -1;
            width: 1px;
            height: 625px;
            content: '';
            transform: rotate(-14deg);
        }
        &::before {
            top: -10px;
            left: 75px;
            background-color: #b50b6f;
        }
        &::after {
            right: 75px;
            bottom: -10px;
            background-color: $main-color;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
            justify-content: space-between;
        }
        a {
            width: 100%;
            + a {
                margin-top: 15px;
                @media (min-width: $tablet-width + 1) {
                    margin-top: 0;
                    margin-left: 15px;
                }
            }
        }
    }
}
.section6 {
    @include bg('section6-bg.jpg');
    padding-bottom: 64px;
    .sectionTitle {
        text-align: center;
    }
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 120px;
    }
}
.section7 {
    padding-bottom: 72px;
    background-color: $main-color;
    color: #fff;
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 120px;
    }
    @media (min-width: 1366px) {
        background-image: url('section7-bg1.png'), url('section7-bg2.png');
        background-position: 0 0, 100% 100%;
        background-repeat: no-repeat;
    }
    .content {
        display: flex;
        justify-content: space-between;
        &::before,
        &::after {
            content: '';
        }
        > a {
            display: flex;
            flex-direction: column;
            color: #fff;
            font-size: 18px;
            transition: color .15s ease-in-out;
            align-items: center;
            @media (min-width: $tablet-width + 1) {
                font-size: 30px;
            }
            @at-root {
                html.no-mobile .section7 .content > a:hover {
                    color: #ff46aa;
                }
            }
            &::before {
                margin-bottom: 13px;
                width: 135px;
                height: 105px;
                background: 50%/contain no-repeat;
                content: '';
                transition: background-image .15s ease-in-out;
                @media (min-width: $tablet-width + 1) {
                    margin-bottom: 37px;
                    width: 171px;
                    height: 134px;
                }
                @for $i from 1 through 2 {
                    @at-root {
                        .section7 .content > a:nth-child(#{$i})::before {
                            background-image: url('section7-icon#{$i}.png');
                        }
                        html.no-mobile .section7 .content > a:hover:nth-child(#{$i})::before {
                            background-image: url('section7-icon#{$i}-h.png');
                        }
                        // preload
                        .section7 .content > a:nth-child(#{$i})::after {
                            background-image: url('section7-icon#{$i}-h.png');
                            content: '';
                        }
                    }
                }
            }
        }
    }
}
.section8 {
    padding-bottom: 54px;
    background-color: #323232;
    color: #fff;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $mobile-width + 1) {
            flex-direction: row;
            justify-content: space-between;
        }
        @media (min-width: $tablet-width + 1) {
            margin: 0 auto;
            max-width: 640px;
        }
        &::before,
        &::after {
            content: '';
        }
        &__text {
            margin-bottom: 2em;
            font-size: 18px;
            line-height: 30px;
            @media (min-width: $mobile-width + 1) {
                margin-right: 1em;
                margin-bottom: 0;
            }
            @media (min-width: $tablet-width + 1) {
                font-size: 20px;
                line-height: 36px;
            }
        }
        &__qrcode {
            flex: none;
            color: #fff;
            text-align: center;
            figcaption {
                margin-top: 8px;
                font-size: 14px;
            }
        }
    }
}
</style>
