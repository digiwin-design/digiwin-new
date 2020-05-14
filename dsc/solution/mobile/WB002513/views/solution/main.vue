<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner" :class="result.name"></slider-banner-s>
        
        <template v-if="isReady">
            <router-view></router-view>        
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
