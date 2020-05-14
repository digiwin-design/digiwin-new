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

<style scoped>
.sectionTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    max-width: 100%;
    font-size: 26px;
}
p {
    margin-top: 1em;
    max-width: 100%;
}
</style>