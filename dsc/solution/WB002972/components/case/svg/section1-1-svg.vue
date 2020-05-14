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
            fetchFile('images/case/svg/section1-1.svg').then(function (res) {
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
            this.timeline.set(this.$refs.svg.querySelectorAll('g'), {
                transformOrigin: '50% 50%'
            });
            this.timeline.pause(0);
            for (let i = 1; i <= 9; i++) {
                let pos = i === 1 ? '0' : '-=.4';
                this.timeline.from(this.$refs.svg.querySelector('[data-name=group' + i + ']'), .8, {
                    scale: .3,
                    opacity: 0
                }, pos);
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