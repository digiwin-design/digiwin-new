<template>
    <div class="order">
        <main-header>
            <template slot="content">
                <h1>產線<strong>快跑</strong></h1>
                <p>導入電子看板的生產傳奇-<br><strong>億威電子真實故事</strong></p>
            </template>
        </main-header>

        <article class="beforeAndAfter before">
            <div class="container">
                <h1>生意上門！</h1>
                <h2>插急單一則喜、一則憂</h2>
                <p>「我接到一筆大訂單了！」<br>業務興沖沖地報告老闆：老客戶插急單，希望能在1星期內出貨。但看似好消息，卻即將掀起公司裡的一場動盪...</p>
                <img src="images/order/before-illust.png" alt="">
            </div>
        </article>

        <article class="action">
            <div class="container">
                <h1 class="action-title">專家出手！<br>從客戶困境中找出問題的根源</h1>
                <p class="action-desc">我找到救星了～<br>痛失幾筆訂單後的某一天，老闆找到鼎新，鼎新的專業顧問團隊在探訪的過程中，站在客戶的角度深入了解工廠流程，釐清問題並提供精準作法，一同攜手克服問題...</p>
                
                <div class="action-ekb">
                    <img src="images/order/action-illust1.png" alt="">
                    <p class="action-quote">eKB電子看板<br>透過電腦螢幕（或電視）做呈現，若不在現場亦能同時了解訂單、製令及生產進度...等，針對異常狀況提早因應處理，並即時回報業務進度。</p>
                </div>
            </div>
                
            <div class="action-solution">
                <img src="images/order/action-illust2.png" alt="">
                <div class="action-solution-list">
                    <section>
                        <h1>先進規劃排程解決方案</h1>
                        <p>考慮企業內部物料與產能供需，輔以業務詢單答交回覆，面對抽/插單可將庫存物料重新pegging降低呆料，並提供多個模擬版本，協助產銷做出有利生產排程的決策。</p>
                    </section>
                    <section>
                        <h1>廠區生產追蹤解決方案</h1>
                        <p>進度到哪？廠內或託外廠？良品有多少？耗多少工時？不良重工是否已補足數量？機台稼動狀況？生產參數是否蒐集？清楚掌控生產脈動履歷。</p>
                    </section>
                    <section>
                        <h1>電子看板及產品回溯解決方案</h1>
                        <p>發生異常時，透過已知的生產履歷(批或序)，逐階展開，掌握追蹤召回的範圍。從web電子看板，找出影響訂單準時達交的變因，如物料狀況、良率、生產效率及出貨進度...達到精準生產管理。</p>
                    </section>
                </div>
            </div>
        </article>

        <article class="beforeAndAfter after">
            <div class="container">
                <h1>信心十足！</h1>
                <h2>eKB備戰迎接更多商機</h2>
                <p>多少急單都能因應！<br>自從有了eKB後，相關部門都能透過電子看板達到即時、快速、透明，現在公司急單滿天飛、訂單接不完囉~</p>
                <img src="images/order/after-illust.png" alt="">
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