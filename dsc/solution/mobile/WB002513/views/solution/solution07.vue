<template>
    <div class="solution07">
        <div class="section1 container">
            <p>印刷電路版(Printed Circuit Board或Printed Wiring Board)提供電子零組件在安裝互連時的主要支撐體，經由特定的電路設計製成所需的印刷電路版，是組裝電子零件的基板，有「電子系統產品之母」的稱譽。</p>
            <img src="images/solution/solution07-illust1.jpg" alt="" class="mt-1">
            <p class="mt-1">印刷電路板的產業關聯中，銅箔、樹脂、玻纖布是最上游的原料，藉由這些原料可生產出銅箔基板及玻纖膠片，最後產出印刷電路板。PCB主要可分為硬板、軟板、複合板等類型，其應用範圍極廣，包括民生用品的電子產品以及通訊、資訊、車輛、航空、船舶等相關科技產品。另外，BGA(IC載板)為IC封裝中第一層封裝用的載板，主要作用在於為晶片提供保護、支撐、散熱的通道，並形成標準安裝尺寸。</p>
        </div>

        <article class="section2 container">
            <section-title title="管理重點"></section-title>
            <img src="images/solution/solution07-illust2.jpg" alt="">
        </article>

        <article class="section3 container">
            <section-title title="解決方案"></section-title>
            <img src="images/solution/solution07-illust3.jpg" alt="">
        </article>

        <article class="section4 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution07',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
