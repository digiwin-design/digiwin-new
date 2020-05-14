<template>
    <div class="hoverBoxs">
        <div v-if="isMobile" class="swiper-box">
            <swiper
                ref="awesomeSwiperA"
                v-bind:options="swiperOptionA"
                v-on:slide-change="onSlideChange"
            >
                <!-- slides -->
                <swiper-slide v-for="box in boxs" v-bind:key="box.imgSrc">
                    <hover-box>
                        <template slot="content">
                            <img v-bind:src="box.imgSrc" alt>
                            <p class="hoverBox-title">{{box.title}}</p>
                        </template>
                        <template slot="hover">
                            <p v-html="box.hoverText"></p>
                            <a
                                v-bind:href="box.link.url"
                                v-bind:target="box.link.target"
                                class="js-hoverBox-btn"
                            >想要了解更多</a>
                        </template>
                    </hover-box>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <div v-else class="boxs">
            <hover-box v-for="box in boxs" v-bind:key="box.imgSrc">
                <template slot="content">
                    <img v-bind:src="box.imgSrc" alt>
                    <p class="hoverBox-title">{{box.title}}</p>
                </template>
                <template slot="hover">
                    <p v-html="box.hoverText"></p>
                    <a
                        v-bind:href="box.link.url"
                        v-bind:target="box.link.target"
                        class="btn js-hoverBox-btn"
                    >想要了解更多</a>
                </template>
            </hover-box>
        </div>
    </div>
</template>

<script>
function touchendHandler(evt) {
    if (evt.target.className.search('js-hoverBox') !== -1) {
        $(evt.target).find('.js-hoverBox-hover').animate({ top: 0 });
    }
    else {
        $(evt.target).parents('.js-hoverBox').find('.js-hoverBox-hover').animate({ top: 0 });
    }
}
module.exports = {
    props: ['boxs'],
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                on: {
                    init: function () {
                        $('.js-hoverBox').swipe({
                            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                                if (direction === null && event.target.className !== 'swiper-button-prev' && event.target.className !== 'swiper-button-next') {
                                    touchendHandler(event);
                                }
                            },
                            threshold: 0,
                            allowPageScroll: 'vertical',
                            excludedElements: '.js-hoverBox-btn'
                        });
                    },
                }
            },
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        },
    },
    methods: {
        onSlideChange: function () {
            $('.js-hoverBox-hover').css({ top: '100%' });
        }
    },
}
</script>