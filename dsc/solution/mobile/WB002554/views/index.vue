<template>
    <div class="index">
        <main-header url="https://www.moea.gov.tw/MNS/dos/bulletin/Bulletin.aspx?kind=9&html=1&menu_id=18808&bull_id=2968">
            <template slot="content">
                <h1>別讓回收料拖垮品質及企業信譽</h1>
                <p>
                    企業常忽略次料管理，
                    <br />造成生產品質不符合客戶要求的規範?
                    <br />次料要如何確實記錄BOM表，成為生產依據?
                    <br />次料常因收集不易未計入產品成本，造成產品成本扭曲?
                </p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="輕量化的塑膠材料將成為發展趨勢"
                    desc="當少量多樣已成常態，再來是輕量化將成為發展趨勢，適用醫材、船舶、航太、電動機汽車等多種產品，塑膠產業在研發上必須更多著墨，少量多樣已是必備條件，生產的品質、研發的價值才是勝出的關鍵。"
                    padding-bottom="1em"
                ></section-title>
            </div>

            <carousel :slides="index.slides"></carousel>

            <div class="container">
                <div class="section1-list">
                    <ul>
                        <li>面對市場變化和趨勢，該如何因應？</li>
                        <li>塑膠產業如何符合高彈性和高效率？</li>
                        <li>生產製造的作業流程應該如何運作？</li>
                    </ul>
                    <router-link :to="{ name: 'control', params: { tab: 5 } }">
                        <i class="material-icons">arrow_forward</i>
                        因應複雜多變的產業環境，您可以這樣作!
                    </router-link>
                </div>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="副總的訂單要先做才是對的?"
                    desc="一家塑膠老客的生管人員告訴鼎新:副總的訂單他就會優先安排，年資越淺的業務他就會排越後面，造成交期永遠都會逾期，產銷會議時大家總是抱怨連連...........生管真難為?業務與生管之  間還有那些美麗與哀愁?"
                ></section-title>
                <pain
                    v-for="pain in index.pains"
                    :key="pain.title"
                    :content="pain"
                ></pain>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="成就客戶創造應用價值"
                    desc="鼎新累積30多年塑膠產業輔導經驗，<strong>品茂塑膠、上溢精密、集泉塑膠、嘉碁科技、成綸企業、愛子美實業、金上吉塑膠</strong>等多家企業成功案例，提供您最佳服務與支援！"
                    padding-bottom="1em"
                ></section-title>
                <img src="images/index/section3-illust.png" alt />
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <section-title
                    title="塑膠業精實生產模具、設備、排程  缺一不可"
                    desc="鼎新電腦提供塑膠產業一套完整符合並能掌握生產環節的管理模式，也因應工業4.0之發展趨勢，開發出<strong>新型整合設備，整合傳a統三色燈及機台生產資訊</strong>，並與<strong>模具系統及自動排程系統深度整合</strong>，引領塑膠業以<strong>現場生產管理</strong>為主軸，打造通往智能生產、智慧工廠的生產環境。"
                    padding-bottom="1em"
                ></section-title>
                <img src="images/index/section4-illust.png" alt />
                <router-link :to="{ name: 'control', params: { tab: 5 } }">
                    <i class="material-icons">arrow_forward</i>
                    因應複雜多變的產業環境，您可以這樣作!
                </router-link>
            </div>
        </article>

        <article class="section5">
            <div class="container">
                <section-title title="塑膠產業完整解決方案" padding-bottom="1em"></section-title>
                <img src="images/index/section5-illust.png" alt />
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'Index',
    components: {
        'carousel': httpVueLoader('components/index/carousel.vue'),
    },
    computed: {
        index() {
            return store.state.result.index;
        }
    },
}
</script>