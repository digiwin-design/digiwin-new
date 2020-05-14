<template>
    <div class="quality">
        <main-header>
            <template slot="content">
                <h1>品質控管讓預防勝過應變，將損耗轉為利潤</h1>
                <p>智慧監控品管，第一次就要做對，我們建議塑膠產業管控品質可從模具管理、次料管控、生產異常分析與改善著手建置，產品品質不穩定將嚴重影響公司信譽，甚致發生客訴或退回產品，找出產品不良的真正原因並加以分析預防錯誤再發生，讓品質控管有效提升。</p>
            </template>
        </main-header>

        <collapse-and-tabs :content="quality"></collapse-and-tabs>
    </div>
</template>

<script>
module.exports = {
    name: 'Quality',
    components: {
        'collapse-and-tabs': httpVueLoader('components/collapse-and-tabs.vue'),
    },
    computed: {
        quality() {
            return store.state.result.quality;
        }
    },
}
</script>