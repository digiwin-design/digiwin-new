<template>
    <transition name="fade">
        <div id="mask" class="mask" v-show="active" @click="toggleMask" @touchstart="toggleMask"></div>
    </transition>
</template>

<script>
module.exports = {
    computed: {
        active: function () {
            return store.state.showMask;
        }
    },
    methods: {
        toggleMask: function () {
            store.commit('toggleMask', false);
            store.commit('toggleAd', false);
        }
    }
}
</script>

<style>
.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, .7);
    content: '';
}
</style>
