<template>
    <div class="sectionTitle" :style="{'padding-bottom':padding}">
        <h1 v-html="title"></h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: ['title', 'desc', 'padding']
}
</script>

<style>
.sectionTitle {
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 2em;
    font-size: 26px;
    line-height: 36px;
    align-items: center;
}
.sectionTitle h1 {
    max-width: 100%;
    font-size: 26px;
}
.sectionTitle p {
    margin-top: .5em;
    max-width: 100%;
}
@media (min-width: 769px) {
    .sectionTitle {
        padding-top: 58px;
        font-size: 36px;
        line-height: 48px;
    }
    .sectionTitle h1 {
        font-size: 36px;
    }
}
</style>