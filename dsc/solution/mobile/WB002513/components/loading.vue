<template>
    <transition name="fade">
        <div v-show="loading" class="cover">
            <img src="images/loading.svg" class="loading" alt />
        </div>
    </transition>
</template>

<script>
module.exports = {
    computed: {
        loading() {
            return store.state.loading;
        }
    },
}
</script>

<style>
.cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000000;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
    color: #fff;
    font-size: 20px;
    justify-content: center;
    align-items: center;
}
.loading {
    width: 50px;
    animation: rotate 1s linear infinite;
}
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>