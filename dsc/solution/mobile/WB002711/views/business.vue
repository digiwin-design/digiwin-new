<template>
    <div class="business">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="經營重點" padding-bottom="1em"></section-title>
                    <p class="desc">化妝品產業除了代工生產，自創品牌也不在少數，既有研發生產，後續還有複雜的行銷佈局，銷售通路多，產生的作業困擾也多......<br>兼具製造與買賣流通特性的化妝品產業，有那些經營重點需要關注?</p>
                    <div class="pains">
                        <pain :content="pain" v-for="pain in result.pains" :key="pain.imgSrc"></pain>
                    </div>
                </div>
            </article>

            <article class="section2">
                <section-title title="方案介紹"></section-title>
                <collapse :items="result.collapse"></collapse>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'business',
    components: {
        'collapse': httpVueLoader('../components/business/collapse.vue'),
    },
    computed: {
        result() { 
            return store.state.result.business;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
