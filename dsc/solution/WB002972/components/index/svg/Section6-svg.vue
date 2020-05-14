<template>
    <div ref="svg" class="svgContainer"></div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            timeline: new TimelineMax(),
            target: null
        }
    },
    methods: {
        getSvg: function () {
            fetchFile('images/index/svg/section6.svg').then(function (res) {
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
            this.timeline.set($(this.$refs.svg).find('.js-group'), {
                transformOrigin: '50% 50%',
                scale: .3,
                opacity: 0
            });
            this.timeline.pause(0);
            for (let i = 1; i <= 9; i++) {
                let offset = i === 1 ? '+=0' : '-=.4';
                this.timeline.to($(this.$refs.svg).find('.js-group' + i), .8, {
                    scale: 1,
                    opacity: 1
                }, offset);
            }
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