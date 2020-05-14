<template>
    <div class="slider-checkbox">
        <div>
            <input type="checkbox" v-bind:id="'slider-toggle' + id" v-model="isRightSlide" />
            <div class="slider-checkbox-slides">
                <div class="slider-checkbox-slide">
                    <div class="container">
                        <slot name="left"></slot>
                    </div>
                </div>
                <div class="slider-checkbox-slide">
                    <div class="container">
                        <slot name="right"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            sectionHeight: [],
            isRightSlide: false,
            currentSlide: 0,
        }
    },
    computed: {
        loadedSvg: function () {
            return store.state.loadedSvg;
        }
    },
    watch: {
        isRightSlide: function (val) {
            this.currentSlide = val ? 1 : 0;
            this.getSlideHeight();
            this.setSlideHeight();
            store.commit('updateSlide', val);
        },
        loadedSvg: function (val) {
            if (val.length === 2) {
                this.getSlideHeight();
                this.setSlideHeight();
            }
        },
    },
    methods: {
        getSlideHeight: function () {
            this.$el.querySelectorAll('section').forEach(function (el, idx) {
                this.$set(this.sectionHeight, idx, el.offsetHeight);
            }.bind(this));
        },
        setSlideHeight: function () {
            this.$el.style.height = this.sectionHeight[this.currentSlide] + 'px';
        }
    },
    mounted: function () {
        window.addEventListener('resize', _.throttle(function () {
            this.getSlideHeight();
            this.setSlideHeight();
        }.bind(this), 100));
    },
}
</script>