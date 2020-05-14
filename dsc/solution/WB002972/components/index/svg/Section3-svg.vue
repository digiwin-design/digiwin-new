<template>
    <div ref="svg" class="svgContainer"></div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            timeline: new TimelineMax(),
        }
    },
    methods: {
        getSvg: function () {
            fetchFile('images/index/svg/section3.svg').then(function (res) {
                this.$refs.svg.innerHTML = res;
                // this.initGUI();
                this.initAn();
                this.scrollHandler();
                window.addEventListener('scroll', this.scrollHandler);
            }.bind(this));
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
            this.timeline.pause(0);

            // 水波紋
            this.timeline.to('.js-bg', 1, {
                scale: 1.5,
                opacity: 0,
                repeat: -1,
                transformOrigin: '50% 50%',
            });

            // 箭頭
            let arrowUp = TweenMax.to($(this.$refs.svg).find('.js-arrow-up'), 1, {
                y: -20,
                repeat: -1,
                ease: Linear.easeNone,
                yoyo: true,
            });
            this.timeline.add(arrowUp, 0);
            let arrowDown = TweenMax.to($(this.$refs.svg).find('.js-arrow-down'), 1, {
                y: 20,
                repeat: -1,
                ease: Linear.easeNone,
                yoyo: true,
            });
            this.timeline.add(arrowDown, 0);
        },
        scrollHandler: _.throttle(function () {
            let el = this.$refs.svg;
            getScrollPos(el, function () {
                this.timeline.play();
                window.removeEventListener('scroll', this.scrollHandler);
            }.bind(this));
        }, 100),
    },
    mounted: function () {
        this.getSvg();
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollHandler);
    },
}
</script>

<style>
main .svgContainer {
    position: relative;
    width: 100%;
    height: 0;
}
main .svgContainer svg {
    position: absolute;
    top: 0;
    left: 0;
}
</style>