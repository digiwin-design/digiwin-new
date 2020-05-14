<template>
    <div class="manufacture">
        <slider-banner-s v-bind:slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="電子業<br>IT建置需求狀況圖"></section-title>
                    <progress-bar :progress-bar="result.progressBar"></progress-bar>
                </div>
                <div class="pains">
                    <div class="container">
                        <pain :content="pain" v-for="pain in pains.section1" :key="pain.imgSrc"></pain>
                    </div>
                </div>
            </article>

            <article class="section2">
                <div class="container w-1000">
                    <section-title
                        title="當營收成長、規模擴充，生產與物料規劃就不能<br>再延用舊有方式"
                        desc="處於快速成長期的企業，業績及市佔率正急速擴張，資料的複雜度與數量也持續膨漲，加上近年來電子業客戶下單習慣的改變，不僅預估變得保守，訂單來得又快又急，下單的頻率從以往一個月一次，到一週一次，甚至是每天下單........過去要花三天規劃物料及生產排程，再回覆交期的作法，要如何在這個快速變遷的年代生存?產銷資訊不一致，將導致<strong>高庫存、低業績</strong>的管理瓶頸"
                    ></section-title>
                </div>
                <div class="container">
                    <div class="pains">
                        <pain :content="pain" v-for="pain in pains.section2" :key="pain.imgSrc"></pain>
                    </div>
                </div>
            </article>

            <article class="section3">
                <div class="container w-1000">
                    <section-title
                        title="料況和生產資訊清楚通透，訂單達交與齊料控料皆可雙贏"
                        desc="以往只知道有缺料未齊，其它料什麼時候才會齊，則必須要一顆一顆確認。如能有系統協助將資料收集完畢，有了快速且完整的料況資訊，做決定變的又快又容易。當Production Planner(PP)在規劃月排程的時候，可以從系統裡，看到整個月排程的優先順序，依產能規劃生產進度，建議業務多接一些料況齊全的訂單，達成與客戶承諾交期。對於Production Controller(PC)而言，更加容易透由每一張工單了解細部的齊料狀況；而採購人員若發現缺料，可依照訂單排程狀況，調整追補的材料順序"
                    ></section-title>
                </div>
                <collapse :items="result.collapse"></collapse>
            </article>

            <article class="section4">
                <div class="container w-1000">
                    <section-title
                        title="「有能力回溯」將是廠商接單基本條件"
                        desc="退貨與客訴是企業最不願意面對的現實，退貨發生當下，除了追出有瑕疵的半成品或成品？來自於哪幾個批號？進一步聚焦產品來源以及賣給了哪些對象？最重要是避免客訴問題再度發生，與減少賠償風險降低損失。近年來客戶稽核的需求愈來愈高，「有能力回溯」已經是廠商接單基本條件之一，產品溯源及品質監控將是提升客戶滿意度，建立品牌競爭力的最佳途徑。"
                    ></section-title>
                    <picture>
                        <source
                            media="(min-width: 769px)"
                            srcset="images/manufacture/section4-illust.png"
                        />
                        <img src="images/manufacture/section4-illust-s.png" alt />
                    </picture>
                </div>
            </article>

            <article class="section5">
                <div class="container w-1000">
                    <section-title
                        title="稼動率顯示產能已經滿載，但真的不能再提升了嗎?"
                        desc="設備花大錢買進總是希望能發揮最大產能，但產能已經發揮最大效率了嗎?如何知道設備的產能損失發揮在那裡?看稼動率已經產能滿載，但真的不能再提升了嗎?你清楚設備浪費多少產能在等待，換線? 效率是否合理非經驗說了算，提出有效的數據佐證才是最佳利器。"
                    ></section-title>
                    <div class="charts">
                        <figure>
                            <figcaption>機台每日稼動表</figcaption>
                            <img src="images/manufacture/section5-illust1.png" alt />
                        </figure>
                        <figure>
                            <figcaption>OEE分析柏拉圖</figcaption>
                            <img src="images/manufacture/section5-illust2.png" alt />
                        </figure>
                    </div>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'manufacture',
    components: {
        'progress-bar': httpVueLoader('components/manufacture/progress-bar.vue'),
        'collapse': httpVueLoader('components/manufacture/collapse.vue'),
    },
    computed: {
        result() {
            return store.state.result.manufacture;
        },
        isReady() {
            return store.state.isReady;
        },
        pains() {
            return {
                section1: this.result.pains.slice(0, 3),
                section2: this.result.pains.slice(3)
            };
        },
    },
}
</script>
