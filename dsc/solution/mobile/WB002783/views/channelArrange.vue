<template>
    <div class="channelArrange">
        <main-header>
            <template slot="content">
                <h1>製造業跨足買賣流通生意管理</h1>
                <p>常見製造業成立零售事業部門或創立自有品牌，除了佈局傳統零售通路(KA賣場、自家門市、百貨專櫃)，網購與跨境電商也後來居上，成為業界最愛的上架通路之一，更有傳統工廠轉型觀光工廠，賺取觀光財又可販售自家商品，通路百百種，管理又是一門學問，以下將為您整理不同通路之間，各有哪些管理視角需要關注？</p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="跨足不同銷售通路領域，做生意的關鍵在於如何讓支援作業一次到位！"
                    padding="1em"
                ></section-title>
                <p>B2B、B2C或是B2B2C的通路銷售模式，不同的通路銷售型態支持的管理與作業方式亦有所差異，經銷通路、連鎖賣場通路、電視購物、自有門市、百貨設櫃、網購電商勝或近年興起的觀光工廠的銷售通路管理，如何有效聚焦在「通路、商品、庫存、促銷」的銷售決策考量上，才是面對市場取得營收的重點所在！</p>
                <dl>
                    <template v-for="item in result.channelArrange.section1">
                        <dt :key="item.term">
                            <a :href="item.url" target="_blank">{{item.term}}</a>
                        </dt>
                        <dd :key="item.desc">
                            <a :href="item.url" target="_blank">{{item.desc}}</a>
                        </dd>
                    </template>
                </dl>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="他們是製造業，同時也是買賣零售業"
                ></section-title>
                <case
                    v-for="item in result.channelArrange.section2"
                    :key="item.company"
                    :kind="item.kind"
                    :company="item.company"
                    :desc="item.desc"
                    :url="item.url"
                ></case>
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
