<template>
    <div class="customized">
        <main-header>
            <template slot="content">
                <h1>
                    當
                    <strong>大量客製化</strong>時代來臨，
                    <strong>少量多樣</strong>運作模式成為常態
                </h1>
                <p>製造業如何解決產品變多元、小量採購、庫存管理、交貨速度、小批量生產、換線換模頻繁，生產效率大幅下降？交期與存貨非得二難不可嗎？</p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="客製化時代，各行各業都需要為了接單調整營運模式，走過少量多樣，他們怎麼做？"
                    padding="1em"
                ></section-title>
                <customized-case
                    v-for="item in result.customized.section1"
                    :key="item.title"
                    :title="item.title"
                    :desc="item.desc"
                    :url="item.url"
                ></customized-case>
            </div>
        </article>

        <article class="section2">
            <div class="section2-block1">
                <div class="container">
                    <section-title title="大量客製化趨勢<br>引發的轉變及衝擊" desc="面對少量多樣市場，只要調整接單模式就好嗎？"></section-title>
                    <ul>
                        <li v-for="item in result.customized.section2" :key="item">{{item}}</li>
                    </ul>
                    <img src="images/customized/section2-illust1.png" alt="">
                </div>
            </div>
            <div class="section2-block2">
                <div class="container">
                    <div class="section2-block2-bubble">最終，我們仍被迫要接受的事實是…</div>
                    <figure>
                        <figcaption>總營收佔比</figcaption>
                        <img src="images/customized/section2-illust2.png" alt="">
                    </figure>
                    <img src="images/customized/arrow-down.png" alt="">
                    <figure>
                        <figcaption>訂單交易筆數</figcaption>
                        <img src="images/customized/section2-illust3.png" alt="">
                    </figure>
                    <div class="section2-block2-bubble">這些交易中將有 80% 為小批量訂單 !</div>
                </div>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="少量多樣接單模式引發的效應?"
                    padding="1em"
                ></section-title>
            </div>
            <div class="section3-illust">
                <img src="images/customized/section3-illust.png" alt="">
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <section-title
                    title="您可以這樣作<br>因應客製化議題之<strong>精簡化</strong>與<strong>高速化</strong>的管理模式?"
                ></section-title>
                <customized-swiper></customized-swiper>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        }
    },
}
</script>