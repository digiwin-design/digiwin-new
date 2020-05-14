<template>
    <div class="mis01">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        
        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="企業IT維運的三帖良方"></section-title>
                    <div class="item" :class="`item${idx + 1}`" v-for="(item, idx) in result.section1" :key="item.title">
                        <div class="item__circle">{{idx + 1}}</div>
                        <h2 v-html="item.title"></h2>
                        <ol>
                            <li v-for="i in item.list" :key="i" v-html="i"></li>
                        </ol>
                    </div>
                </div>
            </article>

            <article class="section2">
                <div class="container">
                    <section-title title="Q:貴公司的資訊架構<br>正面臨這些威脅嗎?"></section-title>
                    <checklist :list="result.checklist"></checklist>
                </div>
            </article>

            <article class="section3">
                <div class="container">
                    <section-title title="資訊風險一觸即發<br>快速復原系統運作<br>將<strong><營運中斷時間></strong>及<br><strong><企業損失降到最低></strong><br>最重要"></section-title>
                    <a href="#contact" class="js-nav">資料索取</a>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'mis01',
    components: {
        checklist: httpVueLoader('components/mis01/checklist.vue'),
    },
    computed: {
        result() {
            return store.state.result.mis01;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
