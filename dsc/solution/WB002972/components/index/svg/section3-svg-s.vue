<template>
    <div ref="svg" class="svgContainer"></div>
</template>

<script>
module.exports = {
    methods: {
        getSvg: function () {
            fetchFile('images/index/svg/section3-s.svg').then(function (res) {
                this.$refs.svg.innerHTML = res;
            }.bind(this));
        },
    },
    mounted: function () {
        this.getSvg();
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