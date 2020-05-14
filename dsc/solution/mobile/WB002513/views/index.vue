<template>
    <div class="index">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        
        <template v-if="isReady">
            <article id="solution" class="section1">
                <div class="container">
                    <section-title
                        title="專為特定產業研發的解決方案"
                        desc="電子業涵蓋範圖廣大，光電光學半導體各自擁有不同產業特性與挑戰，鼎新針對各行業特性開發專用模組，提供業界更適合的系統應用。"
                    ></section-title>
                    <div class="grid">
                        <router-link :to="item.link" v-for="(item, idx) in result.section1" :key="item.link">
                            <figure>
                                <img :src="`images/index/section1-${idx + 1}.png`" alt="">
                                <figcaption>{{item.figcaption}}</figcaption>
                            </figure>
                        </router-link>
                    </div>
                </div>
            </article>

            <article id="ERPII" class="section2">
                <div class="container">
                    <section-title
                        title="ERP不再只是ERP"
                        desc="依據企業各階段所面臨的挑戰、組織能力與階段性任務，發展出所需的服務以支撐客戶各階段需求"
                    ></section-title>
                    <div class="grid">
                        <a :href="item.link" v-for="item in result.section2" :key="item.text">{{item.text}}</a>
                    </div>
                </div>
            </article>

            <article id="case" class="section3">
                <div class="container">
                    <section-title
                        title="行業深耕，獨到專精"
                        desc="鼎新電腦累積 30 多年產業輔導驗，50,000 多家企業成功案例，提供完整行業解決方案；因應產業趨勢、法令製度的變化，提供最佳服務與支援！"
                    ></section-title>
                    <img src="images/index/section3-illust.jpg" alt="">
                    <router-link to="wall" class="main-link">
                        瀏覽更多案例<i class="material-icons">arrow_forward</i>
                    </router-link>
                </div>
            </article>

            <article class="section4">
                <div class="container">
                    <section-title
                        title="我們給您規劃的解決方案藍圖"
                        desc="從企業初創、上市櫃到集團化的完整資訊系統方案<br>逐步疊加過程，實現工業4.0智慧製造"
                    ></section-title>
                    <div class="items">
                        <a href="images/index/section4-1.jpg" data-fancybox="gallery">
                            <figure>
                                <img src="images/index/section4-1-s.jpg" alt="">
                                <figcaption>▲智慧工廠整合資訊系統架構</figcaption>
                            </figure>
                        </a>
                        <a href="images/index/section4-2.jpg" data-fancybox="gallery">
                            <figure>
                                <img src="images/index/section4-2-s.jpg" alt="">
                                <figcaption>▲資通訊科技產業解決方案藍圖</figcaption>
                            </figure>
                        </a>
                    </div>
                    <a href="#contact" class="main-link js-nav">
                        索取解決方案<i class="material-icons">arrow_forward</i>
                    </a>
                </div>
            </article>

            <article class="section5">
                <section-title
                    title="成就客戶創造應用價值"
                    desc="迎向工業4.0，對抗紅色供應鏈<br>企業先進如何推動管理變革與轉型升級?"
                    class="container"
                ></section-title>
                <carousel :slides="result.slides"></carousel>
            </article>

            <article class="section6">
                <div class="container">
                    <section-title
                        title="研討會資訊"
                        padding-bottom="1em"
                    ></section-title>
                    <img src="images/index/section6-illust.png" alt="">
                    <h2>跨越疆界與文化，管理在彈指之間達成目標</h2>
                    <p>雅得電池南向佈建，發揮生產基地優勢創造利潤空間，營收破 10%持續成長! 安全與舒適是當今的車子不間斷地要求，身為傳統二輪車用鉛酸電池大廠的雅得電池，成立於 1989 年，百分之百外銷的商業模式。在面臨環保議題以及科技的衝擊和挑戰，仍持續不斷堅守本質、發展電池技術。2011 年南向佈局，將生產基地遷移至越南，形成台灣總部、全球銷售(主要在歐美)、越南生產的多國營運模式。面對市場激烈競爭下，雅得積極投入創新的技術、改善生產流程、降低成本減低風險，滿足經營策略下的管理機制，讓營收持續成長，奠定未來成功的基石。本活動邀請雅得電池李美宜執行副總、黃慧玲財務長及陳燕如生管課長，為您深入剖析雅得電池成功關鍵。</p>
                    <a href="/tw/dsc/activity/WB002862/WB00286201.htm" target="_blank" class="main-link">了解更多</a>
                    <router-link to="seminar/?tab=6" class="main-link">看更多研討會資訊</router-link>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'index',
    components: {
        'slider-banner-s': httpVueLoader('components/index/slider-banner-s.vue'),
        'carousel': httpVueLoader('components/index/carousel.vue'),
    },
    computed: {
        result() {
            return store.state.result.index;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
