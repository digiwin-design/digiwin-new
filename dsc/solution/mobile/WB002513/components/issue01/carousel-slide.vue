<template>
    <div class="carousel-slide" :data-id="slide.id">
        <hgroup>
            <h1 v-html="slide.title"></h1>
            <h2>{{slide.subtitle}}</h2>
        </hgroup>
        <dl>
            <template v-for="item in slide.list">
                <dt :key="item.term">{{item.term}}</dt>
                <dd :key="item.desc" v-html="item.desc"></dd>
            </template>
        </dl>
        <img :src="slide.imgSrc" alt="" @load="onLoad">
    </div>
</template>

<script>
module.exports = {
    name: 'carousel-slide',
    props: {
        slide: {
            type: Object,
            required: true
        }
    },
    methods: {
        onLoad() {
            this.$emit('onload');
        }
    },
}
</script>