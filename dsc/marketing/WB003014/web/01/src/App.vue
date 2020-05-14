<template>
    <div>
        <div class="wrapper" v-if="!loading">
            <Header></Header>
            <MenuMask></MenuMask>
            <main :style="mainBgStyle">
                <div class="main-container">
                    <div class="hero">
                        <div class="container">
                            <h1><img src="images/logo-w.png" alt="Digiwin TV">鼎新線上活動</h1>
                            <p>研討會參會新選擇<br>不出門也能了解產業脈動與最新趨勢</p>
                            <a href="https://www.digiwin.com/tw/zlsq.html?id=2069" target="_blank" class="mainLink check">訂閱活動消息</a>
                        </div>
                    </div>

                    <article class="latest">
                        <div class="container">
                            <h1 class="title" data-text="THE LATEST VEDIO">近期播出</h1>
                            <div class="content">
                                <div class="content__illust">
                                    <!-- 圖片 -->
                                    <img src="images\latest-illust.jpg" alt="記銘工業線上參訪">

                                    <!-- 影片 -->
                                    <!-- <div class="video-container">
                                       <iframe src="https://www.youtube.com/embed/Sd11MiQrdlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div> -->
                                </div>
                                <div class="content__text">
                                    <h2><i class="logo sm"></i>{{result.latest.title}}</h2>
                                    <p class="content__text-subtitle">{{result.latest.subtitle}}</p>
                                    <p class="content__text-content">{{result.latest.content}}</p>
                                    <p class="content__text-time">{{result.latest.time}}</p>
                                    <a :href="result.latest.link" target="_blank" class="mainLink calendar">了解詳情</a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="about">
                        <div class="container">
                            <h1 class="title" data-text="ABOUT DIGIWINTV">關於<i class="logo"></i></h1>
                            <p>在《重構：數字化轉型的邏輯》書中，數位化轉型的關鍵字之首為「不確定性」，<br>以知識和資訊力應對不確定性成為轉型共同的挑戰！</p>
                            <p><strong>DigiwinTV線上活動</strong>，讓您獲取知識不再被時間、地點、人數所限。<br>從專家視角共論趨勢議題、親眼走訪標竿企業製造現場、效益導向的數位化轉型實證解析...</p>
                            <p>人人啟發與賦能將成數位化轉型最大的動能，讓DigiwinTV為您蓄滿能量！</p>
                            <a href="https://www.digiwin.com/tw/zlsq.html?id=2069" target="_blank" class="mainLink check">訂閱DigiwinTV電子報<br> 掌握最新活動訊息</a>
                        </div>
                    </article>

                    <article class="category">
                        <div class="container">
                            <h1 class="title" data-text="CATEGORY"><i class="logo"></i>系列主題</h1>
                            <div class="items">
                                <div class="item" v-for="(item, idx) in result.category" :key="item.title">
                                    <div class="item__illust">
                                        <img :src="`images/category-icon${idx + 1}.png`" alt>
                                    </div>
                                    <h2>{{item.title}}</h2>
                                    <p>{{item.desc}}</p>
                                    <a href class="end" @click.prevent="scrollToAnchor(item.link)" v-if="activityEnded(item.link)">往期內容<i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
                                    <a :href="item.link" target="_blank" v-else>預約觀看<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article id="recommended" class="recommended">
                        <div class="container">
                            <h1 class="title" data-text="RECOMMENDED">精彩內容試看</h1>
                            <Carousel :items="result.recommended"></Carousel>
                        </div>
                    </article>

                    <article id="video-list" class="video-list">
                        <div class="container">
                            <h1 class="title" data-text="VIDEO LIST">往期內容</h1>
                            <p class="desc">錯過直播了嗎？別扼腕，<br>精彩直播活動回看同樣精彩！</p>
                            <Collapse :items="result.videoList"></Collapse>
                        </div>
                    </article>

                    <div class="follow">
                        <div class="container">
                            <h1 class="title" data-text="FOLLOW US">想知道更多時下發燒話題，歡迎關注</h1>
                            <div class="items">
                                <a
                                    href="https://www.facebook.com/DSCmain/?utm_source=facebook.com&utm_medium=social&utm_content=facebook.com_DSC_1122_fb_fans&utm_campaign=facebook.com_DSC_1122_digiwintv"
                                    target="_blank"
                                    class="item"
                                >
                                    <img src="@/assets/images/icon-fb.png" alt>
                                    <p>成為鼎新電腦Facebook粉絲，<br>為您分享更多有趣或時下熱門議題！</p>
                                </a>
                                <a href="https://acho.tw/acho/f/1yEaW" target="_blank" class="item">
                                    <img src="@/assets/images/icon-line.png" alt>
                                    <p>加個LINE好友！<br>不定時會有抽獎小活動和新知分享唷～</p>
                                </a>
                                <a href="/tw" target="_blank" class="item">
                                    <img src="@/assets/images/icon-digiwin.png" alt>
                                    <p>更多專業解析及<br>不同產業轉型案例分享！</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
            <Ad :info="adData" v-if="adData"></Ad>
        </div>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import Carousel from '@/components/Carousel.vue';
import Collapse from '@/components/Collapse.vue';
import Ad from '@/components/Ad.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Loading,
        Carousel,
        Collapse,
        Ad,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
        adData() {
            return this.$store.state.adData;
        },
        loading() {
            return this.$store.state.loading;
        },
        mainBgStyle() {
            let bg1 = this.isMobile ? 'images/main-bg-s.png' : 'images/main-bg.png';
            let bg2 = 'images/main-bg2.png';
            let bg3 = 'images/main-bg3.png';
            return { 'background-image': `url(${bg1}), url(${bg2}), url(${bg3})` };
        }
    },
    watch: {
        result() {
            this.preloadImg([
                'images/main-bg.png',
                'images/main-bg-s.png',
                'images/logo-w.png',
                'images/latest-illust.jpg',
                'images/category-icon1.png',
                'images/category-icon2.png',
                'images/category-icon3.png',
            ])
                .then(() => this.$store.commit('updateLoading', false));
        },
        loading() {
            this.$nextTick(() => this.scrollToAnchor(location.hash, false));
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('updateDevice', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        preloadImg(imgs) {
            return new Promise(resolve => {
                if (!imgs.length) resolve();
                let loaded = 0;
                for (let i = 0; i < imgs.length; i++) {
                    const element = imgs[i];
                    let img = document.createElement('IMG');
                    img.src = element;
                    img.onload = () => {
                        loaded++;
                        if (loaded === imgs.length) {
                            resolve();
                        }
                    };
                }
            });
        },
        activityEnded(link) {
            return link.startsWith('#');
        },
        scrollToAnchor(targetId, behavior = 'smooth') {
            if (targetId) {
                let targetPos = document.querySelector(targetId).getBoundingClientRect().top + window.pageYOffset;
                if (behavior) {
                    window.scroll({ top: targetPos, left: 0, behavior });
                }
                else {
                    window.scroll({ top: targetPos, left: 0 });
                }
            }
        },
    },
    created() {
        this.$store.dispatch('getData');
        this.$store.dispatch('getAdData');
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor(768);
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.video-container {
    @include youtubeIframe();
}
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    padding-bottom: 40px;
    min-width: 360px;
    background-color: #0f3f7b;
    background-position: 50% 0, 50% 1888px, 50% 3366px;
    background-repeat: no-repeat;
    flex-grow: 1;
}
.main-container {
    margin: 0 auto;
    max-width: $content-width;
}
.container {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1200px;
    @media (min-width: 361px) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: 1200px) {
        padding-right: 50px;
        padding-left: 50px;
    }
}
i.logo {
    @include imgBg('~@/assets/images/logo.svg');
    display: inline-block;
    margin: 0 5px;
    width: 139px;
    height: 45px;
    vertical-align: text-bottom;
    &.sm {
        width: 131px;
        height: 42px;
    }
}
.title {
    display: block;
    margin: 0 auto .6em;
    padding-top: 40px;
    color: #3f3f41;
    text-align: center;
    letter-spacing: getLetterSpacing(30);
    font-weight: bold;
    font-size: 38px;
    &::before {
        display: block;
        margin-bottom: 10px;
        color: #d12223;
        content: attr(data-text);
        font-size: 18px;
    }
}
.mainLink {
    display: flex;
    border-radius: 5px;
    color: #fff;
    letter-spacing: getLetterSpacing(10);
    font-weight: bold;
    font-size: 26px;
    line-height: 34px;
    justify-content: center;
    align-items: center;
    &::before {
        margin-right: 10px;
        content: '';
        @at-root {
            .mainLink.check::before {
                @include imgBg('~@/assets/images/icon-check.svg');
                width: 27px;
                height: 24px;
            }
            .mainLink.calendar::before {
                @include imgBg('~@/assets/images/icon-calendar.svg');
                width: 25px;
                height: 27px;
            }
        }
    }
}
.hero {
    padding-top: 207px;
    padding-bottom: 60px;
    @media (min-width: $tablet-width + 1) {
        padding: 100px 50px 70px;
    }
    h1 {
        color: #fff;
        letter-spacing: getLetterSpacing(30);
        font-weight: bold;
        font-size: 40px;
        @media (min-width: $tablet-width + 1) {
            font-size: 48px;
        }
        img {
            display: block;
            @media (min-width: $tablet-width + 1) {
                width: 290px;
            }
        }
    }
    p {
        margin: 1em 0;
        color: #ffe08b;
        letter-spacing: getLetterSpacing(10);
        font-weight: bold;
        font-size: 21px;
        line-height: 32px;
        @media (min-width: $tablet-width + 1) {
            font-size: 30px;
            line-height: 42px;
        }
    }
    .mainLink {
        height: 63px;
        background-color: #f96823;
        @media (min-width: $tablet-width + 1) {
            padding-top: 23px;
            padding-bottom: 23px;
            width: 320px;
            height: 80px;
            font-size: 32px;
        }
        &::before {
            width: 37px;
            height: 34px;
        }
    }
}
.latest {
    padding-bottom: 40px;
    border-radius: 20px;
    background-color: #ffbd0b;
    .content {
        display: flex;
        flex-wrap: wrap;
        @media (min-width: $content-width + 1) {
            align-items: center;
        }
        &__illust {
            width: 100%;
            text-align: center;
            @media (min-width: $tablet-width + 1) {
                width: calc(100% - 415px);
            }
        }
        &__text {
            padding-top: 30px;
            width: 100%;
            @media (min-width: $tablet-width + 1) {
                padding-top: 0;
                padding-left: 45px;
                width: 415px;
            }
            h2 {
                margin-bottom: .5em;
                color: #d12223;
                font-weight: bold;
                font-size: 26px;
            }
            &-subtitle {
                margin-bottom: .2em;
                letter-spacing: getLetterSpacing(10);
                font-weight: bold;
                font-size: 26px;
                line-height: 40px;
            }
            &-content {
                letter-spacing: getLetterSpacing(10);
                font-size: 20px;
                line-height: 28px;
            }
            &-time {
                margin-top: .5em;
                margin-bottom: 1em;
                letter-spacing: getLetterSpacing(10);
                font-weight: bold;
                font-size: 20px;
                line-height: 28px;
            }
            .mainLink {
                height: 70px;
                background-color: #0c7fd0;
                @media (min-width: $tablet-width + 1) {
                    width: 310px;
                }
            }
        }
    }
}
.about {
    @include bg('~@/assets/images/about-bg.png', 50% 100%);
    margin-top: 30px;
    padding-bottom: 40px;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
    p {
        letter-spacing: getLetterSpacing(10);
        font-size: 20px;
        line-height: 28px;
        @media (min-width: $tablet-width + 1) {
            text-align: center;
        }
        + p {
            margin-top: .5em;
        }
        strong {
            color: #0f3f7b;
            font-weight: bold;
        }
        br {
            display: none;
            @media (min-width: $tablet-width + 1) {
                display: block;
            }
        }
    }
    .mainLink {
        margin-top: 1em;
        max-width: 610px;
        height: 100px;
        background-color: #f96823;
        @media (min-width: $tablet-width + 1) {
            margin-right: auto;
            margin-left: auto;
            height: 70px;
            br {
                display: none;
            }
        }
    }
}
.category {
    padding-bottom: 50px;
    background-color: #dee2e8;
    .items {
        display: flex;
        flex-direction: column;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            width: (100% - percentage(140 / 1100)) / 3;
        }
        + .item {
            margin-top: 60px;
            @media (min-width: $tablet-width + 1) {
                margin-top: 0;
            }
        }
        &__illust {
            width: 100%;
            text-align: center;
        }
        h2 {
            margin-top: .8em;
            color: #0f3f7b;
            letter-spacing: getLetterSpacing(30);
            font-weight: bold;
            font-size: 30px;
            line-height: 1.2;
        }
        p {
            margin-top: .5em;
            margin-bottom: 1em;
            width: 100%;
            color: #3f3f3f;
            letter-spacing: getLetterSpacing(10);
            font-size: 20px;
            line-height: 28px;
            flex-grow: 1;
            @media (min-width: $tablet-width + 1) {
                font-size: 22px;
            }
        }
        a {
            display: flex;
            padding-right: 17px;
            padding-left: 30px;
            width: 100%;
            height: 70px;
            border-radius: 5px;
            background-color: #0c7fd0;
            color: #fff;
            letter-spacing: getLetterSpacing(70);
            font-weight: bold;
            font-size: 26px;
            justify-content: space-between;
            align-items: center;
            &.end {
                background-color: #ffbd0b;
                color: #0f3f7b;
            }
        }
    }
}
.recommended {
    @include bg('~@/assets/images/recommended-bg.jpg');
    .title {
        color: #fff;
        &::before {
            color: #ffbd0b;
        }
    }
}
.video-list {
    margin-bottom: 30px;
    padding-bottom: 50px;
    border-radius: 0 0 20px 20px;
    background-color: #dee2e8;
    .desc {
        margin-bottom: 1em;
        color: #3f3f3f;
        text-align: center;
        letter-spacing: getLetterSpacing(10);
        font-size: 24px;
        line-height: 34px;
        @media (min-width: $tablet-width + 1) {
            &::before {
                content: '\\ ';
            }
            &::after {
                content: '/';
            }
            br {
                display: none;
            }
        }
    }
}
.follow {
    padding-bottom: 30px;
    border-radius: 20px;
    background-color: #dee2e8;
    .title {
        line-height: 42px;
        @media (min-width: $tablet-width + 1) {
            line-height: 1;
        }
        &::before {
            line-height: 1;
        }
    }
    .items {
        display: flex;
        margin: 0 -7px;
        @media (min-width: $tablet-width + 1) {
            margin-right: auto;
            margin-left: auto;
            max-width: 930px;
        }
    }
    .item {
        margin: 0 7px;
        width: 100%;
        flex-grow: 1;
        @media (min-width: $tablet-width + 1) {
            text-align: center;
        }
    }
    img {
        display: block;
        margin: 0 auto 14px;
    }
    p {
        color: #3f3f41;
        line-height: 22px;
        br {
            display: none;
            @media (min-width: $tablet-width + 1) {
                display: block;
            }
        }
    }
}
</style>