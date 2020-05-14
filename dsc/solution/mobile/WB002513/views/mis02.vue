<template>
    <div class="mis02">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="企業常見資訊維護問題與解決方案"></section-title>
                    <section :id="item.id" v-for="item in result.list" :key="item.title">
                        <h1>{{item.title}}</h1>
                        <p v-for="i in item.content" :key="i" v-html="i"></p>
                    </section>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'mis02',
    components: {
        'slider-banner-s': httpVueLoader('components/mis02/slider-banner-s.vue'),
    },
    computed: {
        result() {
            return store.state.result.mis02;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
