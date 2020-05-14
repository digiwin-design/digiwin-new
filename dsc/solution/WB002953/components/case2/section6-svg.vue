<template>
    <div ref="svg" class="svgContainer">
        <div id="section6-illust" class="section6-illust"></div>
    </div>
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
            fetchFile('images/case2/svg/section6.svg').then(function (res) {
                document.querySelector('#section6-illust').innerHTML = res;
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
            let target = document.querySelector('#section6-illust');
            this.timeline.set(target, {
                transformOrigin: '50% 50%'
            });
            this.timeline.pause(0);
            this.timeline.from(target, .8, {
                height: '0%',
                opacity: 0
            });
        },
        scrollHandler: _.throttle(function () {
            getScrollPos(this.$el, 0, function () {
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