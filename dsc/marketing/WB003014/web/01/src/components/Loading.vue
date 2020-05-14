<template>
    <transition name="fade">
        <div v-if="loading" class="cover">
            <img src="images/loading.svg" class="loading" alt />
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000000; // override Header
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
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