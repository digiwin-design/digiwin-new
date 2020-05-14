<template>
    <div class="issue01">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        
        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title
                        title="大量客製化趨勢引發的轉變及衝擊"
                        desc="面對少量多樣市場 ,只要調整接單模式就好嗎?<br>偏偏,接單模式調整後 問題仍持續發生.."
                    ></section-title>
                    <img src="images/issue01/section1-illust.png" alt="">
                </div>
            </article>

            <article class="section2">
                <div class="container">
                    <p>最終，我們仍被迫要接受的事實是…</p>
                    <figure>
                        <figcaption>總營收佔比</figcaption>
                        <img src="images/issue01/section2-chart1.png" alt="">
                    </figure>
                    <i class="material-icons">arrow_downward</i>
                    <figure>
                        <figcaption>訂單交易筆數</figcaption>
                        <img src="images/issue01/section2-chart2.png" alt="">
                    </figure>
                    <p>這些交易中將有 80% 為小批量訂單 !</p>
                </div>
            </article>

            <article class="section3">
                <div class="container">
                    <section-title title="少量多樣接單模式引發的效應?"></section-title>
                    <ul>
                        <li v-for="item in result.section3" :key="item" v-html="item"></li>
                    </ul>
                </div>
            </article>

            <article class="section4">
                <div class="container">
                    <section-title
                        title="您可以這樣作...<br>因應客製化議題之<strong>精簡化</strong>與<strong>高速化</strong>的管理模式"
                        padding-bottom="1.5em"
                    ></section-title>
                    <carousel :slides="result.slides"></carousel>
                </div>
            </article>

            <article class="section5">
                <div class="container">
                    <section-title title="走過少量多樣，看看他們怎麼做?"></section-title>
                    <case-list :list="result.caseList"></case-list>
                </div>
            </article>

            <article class="section6">
                <div class="container">
                    <section-title title="欲了解更多的<strong>電子業客製化解決方案</strong>與<strong>企業績效改善案例</strong>…"></section-title>
                    <a href="#contact" class="js-nav">索取資料<i class="fa fa-download" aria-hidden="true"></i></a>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'issue01',
    components: {
        'carousel': httpVueLoader('components/issue01/carousel.vue'),
    },
    computed: {
        result() {
            return store.state.result.issue01;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
