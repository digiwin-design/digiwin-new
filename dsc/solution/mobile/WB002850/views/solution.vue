<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        
        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="實現醫美服務價值"></section-title>
                    <img src="images/solution/section1-illust.svg" alt="">
                </div>
            </article>
            <article class="section2">
                <div class="container">
                    <section-title title="醫學美容整體解決方案"></section-title>
                    <img src="images/solution/section2-illust.png" alt="">
                </div>
            </article>
            <article class="section3">
                <div class="container">
                    <section-title title="醫學美容管理系統"></section-title>
                    <img src="images/solution/section3-illust1.svg" alt="">
                    <img src="images/solution/section3-illust2.jpg" alt="">
                </div>
            </article>
            <article class="section4">
                <div class="container">
                    <section-title title="醫學美容服務流程"></section-title>
                    <img src="images/solution/section4-illust1.png" alt="">
                    <p>除了完整保留客戶服務紀錄，過程中若能完整連貫收入、紅利、成本、庫存...等衍生資訊，除了可以大大降低人力負荷，精準掌握實質貢獻與成本，也可作為商品與服務流程的設計依據，降低不必要的費用浪費，提升營運競爭力與獲利空間，成為永續經營的磐石。</p>
                    <img src="images/solution/section4-illust2.svg" alt="">
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
