<template>
    <div class="index">
        <slider-banner-s v-bind:slides="result.banner" device="mobile">
            <template slot="slot1">
                <div class="title">
                    <h1>魔鬼就在細節中！<br><strong>90%</strong>的訂單客製化！</h1>
                </div>
                <div class="btns container">
                    <a href="#contact" class="js-nav">立即諮詢</a>
                    <a href="/tw/zlsq.html?id=1236" target="_blank">下載解決方案</a>
                </div>
            </template>
        </slider-banner-s>

        <article class="section1">
            <div class="container">
                <h1 class="sectionTitle1">經濟部落實台商回流衝智慧製造</h1>
                <p>2019/11/24 中時電子報<br>經濟部投資業務處參事章遠智11/13在台商權益座談會上指出，受到中美貿易戰影響，台商今年返台投資金額大增，申請回流金額將突破7000億，預估到年底可以落實1900億；經濟部要求申請台商必須要有智慧化元素在內，不管是製造業或服務業，特別是「智慧製造」和「工業4.0」，經濟部都會詳細審閱及派人到現場了解，就是希望把台灣定位為高階產品製造中心，把台灣打造成為智慧製造的基地，重新建立台灣完整的產業供鏈鏈。</p>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="sectionTitle1">業界對工具機產業發展之期許：發展中高階工具機 著眼客製化</h1>
                <img src="images/index/section2-illust.png" alt="">
                <p>中時電子報<br>發展中高階工具機的客製化應用，應可以台灣內需的作為練兵的市場，例如：航太領域。以台中精機為例，公司投入多年研發與台灣航太發動機供應鏈合作，並且成立「顧客創值應用中心」，不斷以客戶需求為導向，強化應用技術的研發，現已打入漢翔、長亨等業者供應鏈之高階零件。</p>
                <router-link to="/WB00247601_2/3" class="sectionBtn">影響與因應</router-link>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <h1 class="sectionTitle2">研討會資訊</h1>
                <img src="images/index/section3-illust.png" alt="">
                <h2>從市場參賽者到規則制定者，重塑產業競爭邊界－東野精機案例分享</h2>
                <p>成立超過二十年的東野精機，於「鋁擠型」產業中深耕技術與服務，逐漸累積業界知名度。 面臨近年市場的激烈競爭，如何不落於紅海成為東野下一步策略佈局的重要關鍵， 以優化產品與重整形象著手，東野精機展現蛻變決心，更結合從設計、加工、組裝到技術的 「一條龍」服務機制，從鋁擠加工商轉向OEM、ODM生產的專案設備解決方案，再創公司 營收新高！ 本次研討會邀請東野精機擁有從加工至專案設備的各類訂單，如何有效生產並達成與客戶的承諾「如期、如 質」成為重要課題。透過資訊化建立創新「減法」管理，運用數據串聯做到有效監控，並打 造出與傳產廠房有明顯差異的精緻生產模式，由內而外讓客戶見證東野獨到的生產樣貌。東 野精機有了高效運營支持，未來便能挑戰更高營收動能，持續締造產業佳話。</p>
                <a href="/tw/dsc/activity/WB002901/WB00290101.htm" class="sectionBtn" target="_blank">了解更多</a>
                <a href="/tw/dsc/solution/WB002476/WB00247601_4.html" class="sectionBtn">看更多研討會資訊</a>
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <h1 class="sectionTitle2">客戶證言</h1>
                <tabs></tabs>
            </div>
        </article>

        <article class="section5">
            <div class="container">
                <h1 class="sectionTitle2">影音視頻</h1>

                <template v-for="video in result.videos">
                    <div class="video-container" :key="video.videoSrc">
                        <iframe :src="video.videoSrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p class="section5-videoCaption" :key="video.videoCaption">{{video.videoCaption}}</p>
                </template>

                <a href="https://www.youtube.com/user/DSCTCE00" class="sectionBtn" target="_blank">更多精彩視頻</a>
                <p class="section5-additional">歡迎訂閱鼎新 Youtube 頻道<br>一手掌握最新活動及E化案例訊息</p>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'index',
    components: {
        'tabs': httpVueLoader('components/index/tabs.vue'),
    },
    computed: {
        result() {
            return store.state.result.index;
        }
    },
}
</script>
