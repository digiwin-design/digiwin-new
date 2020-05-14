<template>
    <div class="case">
        <main-header>
            <template slot="content">
                <h1>行業深耕，獨到專精</h1>
                <p>鼎新電腦累積30多年產業輔導驗，50,000多家企業成功案例，提供完整行業解決方案；因應產業趨勢、法令制度的變化，提供最佳服務與支援！</p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title title="案例客戶"></section-title>
                <case-item :content="item" v-for="item in cases" :key="item.fileName"></case-item>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'Case',
    components: {
        'case-item': httpVueLoader('components/case/case-item.vue')
    },
    computed: {
        cases() {
            return store.state.result.case;
        }
    },
}
</script>