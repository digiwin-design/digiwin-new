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
            fetchFile('images/index/svg/section1.svg').then(function (res) {
                this.$el.innerHTML = res;
                this.setSize();
                // this.initGUI();
                // this.initAn();
                // this.scrollHandler();
            }.bind(this));
        },
        setSize: function () {
            let w = this.$el.firstElementChild.viewBox.baseVal.width;
            let h = this.$el.firstElementChild.viewBox.baseVal.height;
            this.$el.style.paddingTop = (h / w * 100) + '%';
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
            
        },
        scrollHandler: _.throttle(function () {
            window.addEventListener('scroll', this.scrollHandler);
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