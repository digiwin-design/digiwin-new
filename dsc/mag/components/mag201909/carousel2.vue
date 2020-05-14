<template>
    <div id="carousel2" class="carousel2">
        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide js-swiper-slide"
                    v-for="(item, idx) in content"
                    :key="item.title"
                >
                    <section class="slideItem">
                        <div class="slideItem-img">
                            <img :src="'images/mag201909/carousel2-' + (idx + 1) + '.jpg'" alt />
                        </div>
                        <div class="slideItem-text">
                            <h2>{{item.subtitle}}</h2>
                            <h1 v-html="item.title"></h1>
                            <p>{{item.content}}</p>
                            <a :href="item.link" class="btn" target="_blank">more</a>
                        </div>
                    </section>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'carousel2',
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            mySwiper: null,
        }
    },
    computed: {
        breakpoint: function () {
            return window.matchMedia('(min-width:1200px)');
        },
        articles: function () {
            return document.querySelectorAll('#carousel2 .js-swiper-slide');
        }
    },
    methods: {
        breakpointChecker: function () {
            // if larger viewport and multi-row layout needed
            if (this.breakpoint.matches === true) {
                window.addEventListener('scroll', this.scrollHandler);

                // clean up old instances and inline styles when available
                if (this.mySwiper !== null) {
                    this.mySwiper.destroy(true, true);
                }

                // or/and do nothing
                return;

                // else if a small viewport and single column layout needed
            } else if (this.breakpoint.matches === false) {
                window.removeEventListener('scroll', this.scrollHandler);
                this.articles.forEach(function (article) {
                    article.classList.add('active');
                });

                // fire small viewport version of swiper
                return this.enableSwiper();

            }
        },
        enableSwiper: function () {
            this.mySwiper = new Swiper(this.$refs.swiper, {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        },
        scrollHandler: _.throttle(function () {
            let windowBottom = window.pageYOffset + window.innerHeight;
            this.articles.forEach(function (article) {
                let articlePos = article.getBoundingClientRect().top + window.pageYOffset;
                if (articlePos < windowBottom) {
                    article.classList.add('active');
                }
                else {
                    article.classList.remove('active');
                }
            });
        }, 100)
    },
    mounted: function () {
        // keep an eye on viewport size changes
        this.breakpoint.addListener(this.breakpointChecker);

        // kickstart
        this.breakpointChecker();
    },
}
</script>