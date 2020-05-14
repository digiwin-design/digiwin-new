<template>
    <div class="case">
        <p class="kind">{{kind}}<strong>{{company}}</strong></p>
        <p class="desc">{{desc}}</p>
        <a :href="url" target="_blank">more</a>
    </div>
</template>

<script>
module.exports = {
    props: ['kind', 'company', 'desc', 'url']
}
</script>

<style scoped>
    .kind {
        font-weight: bold;
        font-size: 16px;
    }
    strong {
        margin-left: 5px;
        font-size: 20px;
    }
    .desc {
        line-height: 27px;
    }
    a {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
    }
</style>
