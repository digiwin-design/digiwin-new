<template>
    <div v-if="slides" class="player">
        <div class="player-carousel">
            <div class="container">
                <swiper
                    ref="awesomeSwiperA"
                    :options="swiperOptionA"
                    @slide-change="onSlideChange"
                    @slide-change-transition-end="onSlideChangeTransitionEnd"
                >
                    <swiper-slide v-for="slide in slides" :key="slide.imgSrc">
                        <figure>
                            <img :src="slide.imgSrc" alt>
                            <figcaption>
                                <p>{{slide.company}}</p>
                                <p>{{slide.name}}</p>
                            </figcaption>
                        </figure>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>

        <div class="player-video">
            <div class="container">
                <p class="player-video-title">{{slides[getCurrentSlide(currentSlide)].videoTitle}}</p>
                <div class="player-video-container">
                    <img
                        v-if="!loaded"
                        src="images/1902/loading.svg"
                        class="player-video-loading"
                        alt
                    >
                    <template v-if="slideReady">
                        <iframe
                            @load="onLoaded()"
                            :src="slides[getCurrentSlide(currentSlide)].videoSrc"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['result'],
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1
                    }
                }
            },
            currentSlide: 0,
            loaded: false,
            slideReady: true,
            deviceChanged: false,
            slides: null,
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        },
        isMobile: function () {
            return store.state.isMobile;
        },
        mobileSlides: function () {
            return this.result;
        },
        desktopSlides: function () {
            let tempArr = _.cloneDeep(this.result);
            let lastItem = tempArr[tempArr.length - 1];
            tempArr.pop();
            tempArr.unshift(lastItem);
            return tempArr;
        },
    },
    watch: {
        isMobile: function (val, oldVal) {
            this.deviceChanged = true;
            this.setSlide();
        }
    },
    methods: {
        onSlideChange: function () {
            let _this = this;
            setTimeout(function () {
                if (!_this.deviceChanged) {
                    _this.loaded = false;
                    _this.slideReady = false;
                    _this.currentSlide = _this.swiperA.realIndex;
                }
                _this.deviceChanged = false;
            }, 100);
        },
        onSlideChangeTransitionEnd: function () {
            this.slideReady = true;
            this.clickHandler();
        },
        onLoaded: function () {
            this.loaded = true;
        },
        clickHandler: function () {
            let _this = this;
            $('.swiper-slide').off('click');
            $('.swiper-slide-next')
                .prev()
                .on('click', function () {
                    _this.swiperA.slidePrev();
                });
            $('.swiper-slide-next')
                .next()
                .on('click', function () {
                    _this.swiperA.slideNext();
                });
        },
        setSlide: function () {
            this.slides = this.isMobile ? this.mobileSlides : this.desktopSlides;
        },
        getCurrentSlide: function (slide) {
            return this.isMobile ? slide : slide >= 6 ? 0 : (slide + 1);
        }
    },
    mounted: function () {
        this.setSlide();
    },
    updated: function () {
        this.clickHandler();
    },
}
</script>
