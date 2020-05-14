<template>
    <div class="svg">
        <div ref="svgContainer" class="svg__container" v-html="content"></div>
    </div>
</template>

<script>
module.exports = {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            content: '',
            timeline: new TimelineMax(),
        }
    },
    computed: {
        ref: function () {
            return this.$refs.svgContainer;
        }
    },
    methods: {
        getSvg: function () {
            fetchFile(this.src).then(function (res) {
                this.content = res;
                this.$nextTick(function () {
                    this.setSize();
                    // this.initGUI();
                    // this.initAn();
                    // this.scrollHandler();
                });
            }.bind(this));
        },
        setSize: function () {
            let w = this.ref.firstElementChild.viewBox.baseVal.width;
            let h = this.ref.firstElementChild.viewBox.baseVal.height;
            this.ref.style.paddingTop = (h / w * 100) + '%';
            this.$el.style.maxWidth = w + 'px';
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
            // get svg group total
            let nodes = Array.from(this.ref.querySelectorAll('[data-name^=g]'));
            let groups = nodes.map(function(val, idx) {
                return val.getAttribute('data-name');
            });
            groups = Array.from(new Set(groups));

            for (let i = 1; i <= groups.length; i++) {
                let pos = i === 1 ? '0' : '-=.4';
                this.timeline.from(this.ref.querySelectorAll('[data-name=g' + i + ']'), .8, { opacity: 0 }, pos);
            }
            this.timeline.pause();
        },
        scrollHandler: _.throttle(function () {
            window.addEventListener('scroll', this.scrollHandler);
            getScrollPos(this.ref, function () {
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

<style scoped>
.svg {
    margin: 0 auto;
}
.svg__container {
    position: relative;
    width: 100%;
    height: 0;
}
.svg__container svg {
    position: absolute;
    top: 0;
    left: 0;
}
</style>