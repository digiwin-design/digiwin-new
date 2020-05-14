<template>
    <div class="slider">
        <input
            type="radio"
            v-for="(item, idx) in nav"
            :key="item"
            :id="id + '-' + idx"
            :name="id"
            :checked="idx === 0"
        >

        <div v-if="nav" class="slider-nav">
            <label v-for="(item, idx) in nav" :key="item" :for="id + '-' + idx">{{item}}</label>
        </div>

        <div class="slider-content">
            <div ref="slides" class="slider-slides">
                <div v-for="(item, idx) in nav" :key="item" class="slider-slide js-slider-slide">
                    <div class="container">
                        <slot :name="id + '-' + idx + '-t'"></slot>
                        <slot :name="id + '-' + idx"></slot>
                    </div>
                </div>
                <div v-if="!nav" class="slider-slide js-slider-slide">
                    <div class="container">
                        <slot :name="id + '-0-t'"></slot>
                        <slot :name="id + '-0'"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id', 'nav'],
    data: function () {
        return {
            index: 0,
        };
    },
    methods: {
        initHeight: function () {
            let _height = this.getHeight(0);
            this.$refs.slides.style.height = _height + 'px';
        },
        changeHandler: function () {
            let _this = this;
            _this.$el.querySelectorAll('input[type=radio]').forEach(function (el) {
                el.addEventListener('change', function () {
                    _this.index = $(this).index();
                    let _height = _this.getHeight(_this.index);
                    _this.$refs.slides.style.height = _height + 'px';
                });
            });
        },
        resizeHandler: function () {
            if (!this.$refs.slides) return;
            let _height = this.getHeight(this.index);
            this.$refs.slides.style.height = _height + 'px';
        },
        getHeight: function (index) {
            return $(this.$el).find('.js-slider-slide').eq(index).find('.container').outerHeight();
        },
    },
    mounted: function () {
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('load', this.initHeight);
        this.changeHandler();
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.resizeHandler);
    },
}
</script>