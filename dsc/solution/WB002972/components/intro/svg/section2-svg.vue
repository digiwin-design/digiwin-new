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
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
    },
    methods: {
        getSvg: function () {
            fetchFile('images/intro/svg/section2.svg').then(function (res) {
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
                transformOrigin: '50% 50%',
                scale: .3,
                opacity: 0
            });
            this.timeline.pause(0);

            // left
            for (let i = 1; i <= 3; i++) {
                let pos = i === 1 ? '0' : '-=.4';
                this.timeline.to(this.$refs.svg.querySelector('[data-name=left' + i + ']'), .8, {
                    scale: 1,
                    opacity: 1
                }, pos);
            }

            // right
            let arr = this.getNoRepeatRandomNum(17);
            for (let i = 0, total = arr.length; i < total; i++) {
                let pos = i * 0.4;
                var tm = TweenMax.to(this.$refs.svg.querySelector('[data-name=right' + arr[i] + ']'), .8, {
                    scale: 1,
                    opacity: 1
                });
                this.timeline.add(tm, pos);
            }
        },
        scrollHandler: _.throttle(function () {
            let el = this.$refs.svg;
            getScrollPos(el, function () {
                this.timeline.play();
                window.removeEventListener('scroll', this.scrollHandler);
            }.bind(this));
        }, 100),
        getNoRepeatRandomNum: function (max) {
            if (!max) return;
            // 原始陣列
            let arr = [];
            for (let i = 1; i <= max; i++) {
                arr.push(i);
            }
            // 新陣列
            let result = [];
            for (let i = 0, total = arr.length; i < total; i++) {
                let ran = Math.floor(Math.random() * arr.length);
                result.push(arr.splice(ran, 1)[0]);
            }
            return result;
        }
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