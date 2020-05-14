<template>
    <div class="banner swiper-container" :class="{ clickable, disabled }" @click="clickHandler" v-if="imgLoaded">
        <div class="swiper-wrapper">
            <div
                v-for="slide in slides"
                :key="slide.title"
                :style="{ backgroundImage: 'url(' + slide.imgSrc + ')' }"
                :class="'slide' + slide.id"
                class="banner-slide swiper-slide"
            >
                <div class="container">
                    <p class="banner-title" v-html="slide.title"></p>
                    <p class="banner-desc" v-html="slide.desc" v-if="slide.desc"></p>
                </div>
            </div>
        </div>
        <div class="banner-controls">
            <div class="banner-button-next" v-if="nav"></div>
            <div class="banner-button-prev" v-if="nav"></div>
            <div class="banner-pagination"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        slides: {
            type: Array,
            required: true
        },
        nav: {
            type: Boolean,
            default: false
        },
    },
    data: function () {
        return {
            index: 0,
            imgLoaded: false,
        }
    },
    computed: {
        clickable: function () {
            return this.slides[this.index].url !== 'javascript:;';
        },
        disabled: function () {
            return this.slides.length === 1;
        }
    },
    methods: {
        initSwiper: function () {
            let _this = this;
            new Swiper(_this.$el, {
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000
                },
                pagination: {
                    el: '.banner-pagination',
                    clickable: true,
                    bulletClass: 'banner-pagination-bullet',
                    bulletActiveClass: 'banner-pagination-bullet-active'
                },
                navigation: {
                    nextEl: '.banner-button-next',
                    prevEl: '.banner-button-prev'
                },
                on: {
                    slideChange: function () {
                        _this.index = this.realIndex;
                    }
                }
            });
        },
        clickHandler: function (e) {
            if (e.target.matches('[role=button]')) return;
            let url = this.slides[this.index].url;
            let otherPage = url.match(/\/tw\/|^http/);
            if (otherPage) {
                window.open(url);
            }
            else {
                location.assign(url);
            }
        },
        preload() {
            let imgs = this.slides.map(item => item.imgSrc);
            return preloadImg(imgs);
        },
    },
    mounted: function () {
        this.preload().then(() => {
            this.imgLoaded = true;
            this.$nextTick(() => this.initSwiper());
            store.commit('setReady', true);
        });
    },
}
</script>