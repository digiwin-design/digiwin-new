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

        <div class="slider-nav">
            <label v-for="(item, idx) in nav" :key="item" :for="id + '-' + idx">{{item}}</label>
        </div>

        <div class="slider-content">
            <div class="slider-slides">
                <div v-for="(item, idx) in nav" :key="item" class="slider-slide">
                    <div class="container">
                        <slot :name="id + '-' + idx"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id', 'nav']
}
</script>