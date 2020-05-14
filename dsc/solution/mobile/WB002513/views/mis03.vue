<template>
    <div class="mis03">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title
                        title="課程說明"
                        padding-bottom="1.5em"
                    ></section-title>
                    <p>預算資料要花多少時間準備才足夠？<br>預算應該編多少才合理，企業資源的投放與佈局模擬評估？<br>面對巿場競爭，如何強化預算執行過程的監控，以擬定因應行動？</p>
                    <p>面對激烈多變的市場環境及產業競爭，預算編製可以說是企業經營管理很重要的一環，企業財務資源妥善規劃並做有效的配置，能使企業對各項業務活動充分掌握，發揮經營效率，提高企業管理水平及經營效率；所以，編製合理的預算是引導企業實現價值最大化的關鍵因素。</p>
                    <p>目前很多企業面對預算編制時都很困擾，花大量人力利用Excel編制，如何確定編制的是符合企業營運需要的內容？如何快速模擬？找到最適企業的全面預算？而且在編制年度預算時，不能單靠財務部門，而是每個部門在公司目標下達成共識、編制部門預算，但是什麼是預算合理水平？當業務目標設定後，又要投入多少資源？企業必需有效掌握預算管理要領，進而建置完整的預算控管程序包含預算編製與彙總、預算審查、預算控管與績效評核。本活動邀請到鼎元光電科技 林德政副總經理與您分享在預算編制與模擬過程中，如何透過系統運算快速產出， 以協助企業找到最佳預算規劃，創造企業最大的價值。</p>
                </div>
            </article>

            <article class="section2">
                <div class="container">
                    <section-title
                        title="AGENDA"
                        padding-bottom="1.5em"
                    ></section-title>
                    <h2>結合企業策略的全面預算管理要點</h2>
                    <ul>
                        <li>全面預算管理的涵義與特點</li>
                        <li>全面預算管理的內容與實施重點</li>
                        <li>預算執行之監控</li>
                    </ul>
                    <h2>如何運用資訊系統支持集團全面預算管理</h2>
                    <ul>
                        <li>企業如何運用系統快速編制集團預算</li>
                        <li>如何快速有效模擬企業目標與預算編制的完善性</li>
                        <li>導入規劃建議</li>
                    </ul>
                    <h2>鼎元光電-成功案例分享</h2>
                    <ul>
                        <li>全面預算管理導入的策略思考與行動</li>
                        <li>透過資訊化應用帶來的成果與預期效益</li>
                    </ul>
                    <img src="images/mis03/section2-illust.png" alt="">
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'mis03',
    components: {
        'slider-banner-s': httpVueLoader('components/mis03/slider-banner-s.vue'),
    },
    computed: {
        result() {
            return store.state.result.mis03;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
