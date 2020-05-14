<template>
    <div class="brand">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        
        <template v-if="isReady">
            <swiper-box :boxs="result.hoverBoxs"></swiper-box>
            <case-tab :cases="result.caseTab"></case-tab>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'brand',
    computed: {
        result() {
            return store.state.result.brand;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
