<template>
    <div class="sectionTitle2" :style="{ 'padding-top': paddingTop, 'padding-bottom': paddingBottom }">
        <h1 v-html="title"></h1>
        <h2 v-html="subtitle"></h2>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: {
        title: {
            type: String
        },
        subtitle: {
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
.sectionTitle2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sectionTitle2 h1 {
    max-width: 100%;
    color: #fff;
    font-size: 26px;
}
@media (min-width: 769px) {
    .sectionTitle2 h1 {
        font-size: 36px;
    }
}
.sectionTitle2 h2 {
    max-width: 100%;
    color: #ffe400;
    font-size: 24px;
}
@media (min-width: 769px) {
    .sectionTitle2 h2 {
        font-size: 30px;
    }
}
.sectionTitle2 p {
    margin-top: .5em;
    max-width: 100%;
    color: #fff;
}
.sectionTitle2 strong {
    color: #bb0b20;
    font-weight: normal;
}
</style>