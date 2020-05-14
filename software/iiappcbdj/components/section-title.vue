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
    align-items: center;
}
.sectionTitle h1 {
    max-width: 100%;
    font-size: 30px;
    line-height: 36px;
}
.sectionTitle p {
    margin-top: 2em;
    max-width: 100%;
    font-size: 18px;
    line-height: 30px;
}
@media (min-width: 769px) {
    .sectionTitle p {
        margin-top: 1em;
    }
}
</style>