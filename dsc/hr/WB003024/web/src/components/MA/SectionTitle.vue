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
            default: '50px'
        },
        paddingBottom: {
            type: String,
            default: '2.8em'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';
$main-color: #3a46ac;

.sectionTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    max-width: 100%;
    font-size: 30px;
    line-height: 1.2;
    @media (min-width: $tablet-width + 1) {
        font-size: 40px;
    }
}
p {
    margin-top: 1em;
    max-width: 100%;
    font-size: 18px;
    line-height: 1.3;
    @media (min-width: $tablet-width + 1) {
        margin-top: .5em;
        font-size: 28px;
    }
}
/deep/ strong {
    color: $main-color;
    font-weight: bold;
}
</style>