<template>
    <div ref="accordion" class="accordion">
        <div
            v-for="(item,idx) in accordion"
            v-bind:key="item.title"
            class="accordion-col js-accordion-col"
            onclick
        >
            <h2 v-on:click="slideToggle" v-bind:class="{active:idx===0}">
                <i>{{item.title}}</i>
            </h2>
            <div v-bind:style="{display:displayHandler(idx)}">
                <div class="accordion-bar js-accordion-bar">
                    <div class="accordion-content">
                        <p class="accordion-content-title">{{item.title}}</p>
                        <p v-html="item.detail" class="accordion-content-detail"></p>
                        <a v-bind:href="item.link.url" v-bind:target="item.link.target" class="btn">了解更多</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['accordion'],
    data: function () {
        return {
            isMobile: false,
            timeline: new TimelineMax(),
        }
    },
    watch: {
        isMobile: function (value) {
            if (value) {
                this.timeline.clear();
                $('.js-accordion-bar').removeAttr('style');
            }
        }
    },
    methods: {
        mediaSensor: _.throttle(function () {
            let mm = window.matchMedia('(min-width: 1210px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        }, 100),
        resizeWidth: function (pMatchMedia) {
            this.isMobile = pMatchMedia.matches ? false : true;
        },
        slideToggle: function (evt) {
            if (this.isMobile) {
                let target = evt.target.tagName === 'I' ? evt.target.parentNode : evt.target;
                $(target).toggleClass('active').next().slideToggle();
            }
        },
        displayHandler: function (idx) {
            return this.isMobile && idx !== 0 ? 'none' : 'block';
        },
        initGUI: function () {
            let _this = this;
            let gui = new dat.GUI();
            let controls = {
                restart: function () {
                    _this.timeline.restart();
                    window.addEventListener('scroll', _this.scrollHandler);
                },
                pause: function () {
                    _this.timeline.pause(0);
                    window.addEventListener('scroll', _this.scrollHandler);
                }
            };
            gui.add(controls, 'restart');
            gui.add(controls, 'pause');
        },
        initAn: function () {
            this.timeline.pause();
            this.timeline.from('.js-accordion-bar', 1.5, {
                width: '0',
                opacity: 0,
            });
        },
        scrollHandler: _.throttle(function () {
            let el = this.$refs.accordion;
            getScrollPos(el, 0, function () {
                this.timeline.play();
                window.removeEventListener('scroll', this.scrollHandler);
            }.bind(this));
        }, 100),
    },
    mounted: function () {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
        if (!this.isMobile) {
            window.addEventListener('scroll', this.scrollHandler);
            // this.initGUI();
            this.initAn();
        }
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.mediaSensor);
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>