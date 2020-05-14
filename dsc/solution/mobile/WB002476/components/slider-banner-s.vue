<template>
    <div class="banner swiper-container" :class="{ clickable, disabled }" @click="clickHandler">
        <div class="swiper-wrapper">
            <div
                v-for="slide in slides"
                :key="slide.id"
                :style="{ backgroundImage: 'url(' + (slide.imgSrc[deviceType] || slide.imgSrc[0]) + ')' }"
                :class="'slide' + slide.id"
                class="banner-slide swiper-slide"
            >
                <slot :name="'slot' + slide.id"></slot>
            </div>
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
        device: {
            type: String,
            required: true
        },
    },
    data: function () {
        return {
            index: 0
        }
    },
    computed: {
        deviceType: function () {
            return this.device === 'desktop' ? 0 : 1;
        },
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
            let otherPage = url.match(/\/tw\//);
            if (otherPage) {
                window.open(url);
            }
            else {
                location.assign(url);
            }
        },
    },
    mounted: function () {
        this.initSwiper();
    },
}
</script>