<template>
    <div class="demand">
        <main-header url="https://www.moea.gov.tw/MNS/dos/bulletin/Bulletin.aspx?kind=9&html=1&menu_id=18808&bull_id=2968">
            <template slot="content">
                <h1>同業需求</h1>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="塑橡膠同業反應建置資訊系統欲改善的問題"
                    desc="統計今年度塑橡膠業反映的作業與管理困擾整理出相關數據，發現因次料未做好庫存管理，導致次料用量與原料帳不準等成本結算問題，甚致造成現場缺料影響生產進度，進而產生資訊系統重購或IT建置的需求，誠如下圖所示，尤其以成本結算、庫存管理、模具管理、生產進度與工時收集等相關議題最受重視，並列入IT建置首要改善的重點。"
                    padding-bottom="1em"
                ></section-title>
                
                <progress-bars :progress-bars="demand.progressBars"></progress-bars>
            </div>

            <div class="section1-pains">
                <div class="container">
                    <pain
                        v-for="pain in demand.pains"
                        :key="pain.title"
                        :content="pain"
                    ></pain>
                </div>
            </div>
        </article>

        <article class="section2">
            <section-title title="成就客戶創造應用價值"></section-title>
            <collapse :items="demand.collapse"></collapse>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'Demand',
    components: {
        'progress-bars': httpVueLoader('components/demand/progress-bars.vue'),
        'collapse': httpVueLoader('components/demand/collapse.vue'),
    },
    computed: {
        demand() {
            return store.state.result.demand;
        }
    },
}
</script>