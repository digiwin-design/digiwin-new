<template>
    <div class="issue">
        <main-header url="https://www.moea.gov.tw/MNS/dos/bulletin/Bulletin.aspx?kind=9&html=1&menu_id=18808&bull_id=2968">
            <template slot="content">
                <h1>當少量多樣接單成為常態，企業運作流程需改變什麼?</h1>
                <p>產品變多元之後呢? 塑膠業如何解決因少量多樣接單帶來的小量採購、小批量生產、庫存管理、交貨速度、換線換模頻繁、甚至是生產效率大幅下降?……</p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="少量多樣接單引發的轉變及衝擊"
                    desc="面對少量多樣市場 ,只要調整接單模式就好嗎? 偏偏,接單模式調整後 問題仍持續在發生.."
                    padding-bottom="1em"
                ></section-title>
                <pain :content="issue.pain" height="490px"></pain>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="您可以這樣作...<strong>因應少量多樣</strong>議題的生產管理模式"
                    padding-bottom="0"
                ></section-title>
                
                <a href="#section2-anchor" class="section2-next js-nav">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </a>

                <h2>生產排程自動化</h2>
                <p>明明產能未滿載，但訂單還是排不進去，人工排產能無法滿足少量多樣帶來的複雜生產條件，現場資訊在即時性及正確性都不足的情況下，造成排程效率不佳，現場產能閒置，無法充分利用產能.....</p>

                <h3 id="section2-anchor">第一步：將生管及現場師傅經驗資訊化後，讓系統來自動安排生產！</h3>
                <p>符合塑膠業的排程考量</p>
                <ul>
                    <li>訂單生產的優先順序判斷。</li>
                    <li>優先考量模具連續使用的生產模式，降低換線動作。</li>
                    <li>相同顏色、材質一起生產，減少清洗、清線的動作。</li>
                    <li>左右共模生產的判斷條件。</li>
                    <li>可用機台及有限資源的考量。</li>
                </ul>
                <figure>
                    <img src="images/issue/section2-illust1.png" alt="">
                    <figcaption>▲ 方案圖</figcaption>
                </figure>
                <figure>
                    <img src="images/issue/section2-illust2.png" alt="">
                    <figcaption>▲ 方案圖</figcaption>
                </figure>

                <h3>第二步：系統自動產出模具使用狀況，提早做好預防管理！</h3>
                <p>接下來~繼續這樣做~<br>確認近期是否有訂單可能延遲出貨，分析延遲原因及提出行動方案<br>並結合設備甘特圖、產能負荷、行事曆。清楚的掌握產能狀況</p>
                <figure>
                    <img src="images/issue/section2-illust3.png" alt="">
                    <figcaption>▲ 方案圖</figcaption>
                </figure>
                <router-link :to="{ name: 'cost', params: { tab: 4 } }" class="more">
                    <span>還有更多<strong>塑膠自動排程與<br>少量多樣因應相關資訊</strong></span>
                </router-link>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="面對<strong>少量多樣</strong>，塑膠同業怎麼作?"
                    desc="面對少量多樣市場 ,只要調整接單模式就好嗎? 偏偏,接單模式調整後 問題仍持續在發生.."
                    padding-bottom="1em"
                ></section-title>
                <section class="section3-case">
                    <h1>品茂塑膠</h1>
                    <p>我們產品算是<strong>少量多樣</strong>，數量每天是非常龐大的......業務部柯協理談到：「客戶他會臨時插單，業務都會先答應客戶交期可以如期完成，卻沒有考慮到廠內訂單量目前的狀況，往往出現答應卻做不出來，變成產銷會議時大家會抱怨，然後就每天加班來應付急單....</p>
                </section>
                <section class="section3-case">
                    <h1>中勤實業</h1>
                    <p>蘇經理說。<strong>客製化</strong>東西要搶快，與時間賽跑，相對地風險就高。中勤從設計端開始就客製，需要把原材料就先備好，客製比例超過8成，物料也無法互相共用....</p>
                </section>
                <section class="section3-case">
                    <h1>勤龍塑膠</h1>
                    <p>為了因應客戶<strong>少量多樣</strong>需求，從原先OEM代工模式轉向ODM協同設計，掌握DFM(Design for Manafacturing)原則，提供客戶從設計圖面到產品製造的完整方案.....</p>
                </section>
            </div>
            <router-link :to="{ name: 'case', params: { tab: 7 } }">還有更多<strong>成功案例</strong></router-link>
        </article>

        <article class="section4">
            <div class="container">
                <section-title
                    title="少量多樣接單，<strong>塑膠產業管理</strong>還可以更多元"
                    desc="產品變多元之後呢? 塑膠業如何解決因少量多樣接單帶來的小量採購、小批量生產庫存管理、交貨速度、換線換模頻繁、甚至是生產效率大幅下降?……"
                    padding-bottom="1em"
                ></section-title>
                <img src="images/issue/section4-illust.png" alt="">
            </div>
            <a href="#contact" class="js-nav">了解更多接單資訊</a>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'Issue',
    computed: {
        issue() {
            return store.state.result.issue;
        }
    },
}
</script>