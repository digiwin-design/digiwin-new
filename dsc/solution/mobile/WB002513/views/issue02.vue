<template>
    <div class="issue02">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <section-title title="電子業轉型,<br>您也是這樣嗎?"></section-title>
                <collapse :items="result.collapse"></collapse>
            </article>

            <article class="section2">
                <div class="container">
                    <section-title
                        title="您可以這樣作...<br>因應電子業轉型議題之提昇品質與客戶滿意度"
                        padding-bottom="1em"
                    ></section-title>
                    <p class="desc">企業通常採用的品質改善手法不外乎 8D,QC7,6 sigma…，但如何追蹤品質改善對策執行進度與成效?如何管理改善對策相關文件? 知識如何擴散?與reuse?若有一套品質改善對策管理系統，能協助您解決記錄對策意見，進度與成效追蹤，並能自動產出品質報告，事後更能查詢歷史紀錄並在部門之間作線上案例分享…</p>
                </div>
                
                <div class="arrow">鼎新提供您更有效率的品質管理系統CQA(Customer Quality Assurance)</div>
                
                <div class="container">
                    <tab :tab="result.tab"></tab>
                </div>
            </article>

            <article class="section3">
                <div class="container">
                    <section-title
                        title="<strong><品質管理效率></strong><br>決定<strong><轉型></strong>的成敗<br>嚴重的品質問題<br>可能面臨可觀的求償"
                        padding-bottom="1em"
                    ></section-title>
                </div>
            </article>
            
            <article class="section4">
                <div class="container">
                    <section-title title="另有APQP,FMEA,溯源..等品質品保解決方案"></section-title>
                    <a href="#contact" class="js-nav">索取資料<i class="fa fa-download" aria-hidden="true"></i></a>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'issue02',
    components: {
        'slider-banner-s': httpVueLoader('components/issue02/slider-banner-s.vue'),
        'collapse': httpVueLoader('components/issue02/collapse.vue'),
        'tab': httpVueLoader('components/issue02/tab.vue'),
    },
    computed: {
        result() {
            return store.state.result.issue02;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
