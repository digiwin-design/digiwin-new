<template>
    <div class="case-card">
        <div class="case-card__illust" :style="{ backgroundImage: `url(${myCase.imgSrc})` }"></div>
        <div class="case-card__content">
            <h3>{{myCase.category}}</h3>
            <h2>{{myCase.company}}</h2>
            <dot :height="150"><p>{{myCase.description}}</p></dot>
            <a :href="myCase.url" target="_blank">瀏覽閱讀</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        myCase: {
            type: Object,
            required: true
        }
    },
    components: {
        'dot': httpVueLoader('components/dot.vue'),
    }
}
</script>