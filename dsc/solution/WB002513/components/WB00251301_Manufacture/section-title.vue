<template>
    <div class="sectionTitle" :style="{ 'padding-top': paddingTop, 'padding-bottom': paddingBottom }">
        <h1 v-html="title"></h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: {
        title: {
            type: String
        },
        desc: {
            type: String
        },
        paddingTop: {
            type: String,
            default: '2.7em'
        },
        paddingBottom: {
            type: String,
            default: '2em'
        }
    }
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
    font-weight: bold;
    font-size: 26px;
}
.sectionTitle p {
    margin-top: .5em;
    max-width: 100%;
}
@media (min-width: 769px) {
    .sectionTitle h1 {
        font-size: 36px;
    }
}
</style>