<template>
    <div class="slider">
        <input type="checkbox" v-bind:id="'slider-toggle' + id">
        <div class="slider-slides">
            <div class="slider-slide">
                <div class="container">
                    <slot name="left"></slot>
                </div>
            </div>
            <div class="slider-slide">
                <div class="container">
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id']
}
</script>