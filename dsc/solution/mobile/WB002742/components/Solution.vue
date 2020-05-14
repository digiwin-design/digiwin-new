<template>
    <div class="solution">
        <header-component :title="header.title" :lists="header.lists"></header-component>

        <div class="region1 region container">
            <article class="section1">
                <h1 class="mainTitle">矽菱企業導入電子發票經驗談</h1>
                <p>為何導入~除了有部分封測大廠客戶早先要求配合採用電子發票，但仍有大多數客戶仍採行電子計算機發票，故除了滿足客戶需求，考量法令規定與未來趨勢，矽菱企業決定提早因應。</p>
                <img src="images/solution/section1-illust.png" alt="">
                <p>管理部黃副理分享：「使用者當然會有系統操作的不熟悉，因為電子發票必須要不斷的檢核，避免產生作廢的部分。這些層層關卡當然會造成同仁的不便，但是只要熟悉是會很流暢的，也避免我們因忙碌而出現錯誤。另外顧問有詳細的介紹，包含法令的部分，像是B2B跟B2C發票的不同，整個樣式和重點，都有詳細解釋，將過程修正為客戶最簡單能夠導入的方式，讓我們導入非常順利。」</p>
            </article>
            <article class="section2">
                <h1 class="mainTitle">建置電子發票，自動上傳存證與交換是電子交易的基石</h1>
                <p>在檢核過法令的推動時程與相關條件後，鼎新電腦於此規劃三階段的進程，需特別注意的是在存證、交換、電子交易的三個進程中，會因為企業的客戶狀況，而發生併行的狀況，此時在外部交易、內部管理上會越形複雜。</p>
                <img src="images/solution/section2-illust.png" alt="">
            </article>
        </div>

        <div class="region2 region container">
            <article class="section3">
                <h1 class="mainTitle">鼎新方案優點分析</h1>
                <div class="list">
                    <ul>
                        <li>申請程序由鼎新協助，降低檢測難度，加速申請程序</li>
                        <li>單一平台操作，簡便且確保正確上傳及送達</li>
                        <li>支持離線開立與印製電子發票</li>
                        <li>資料無需重工建置(含基本資料與發票明細資料)</li>
                    </ul>
                </div>
            </article>
            <article class="section4">
                <h1 class="mainTitle">我們提供的服務</h1>
                <div class="list">
                    <ul>
                        <li>電子發票自動傳送/B2B的客戶確簽回覆</li>
                        <li>電子發票配號檔通知匯入功能</li>
                        <li>電子發票空白號碼上傳申報</li>
                        <li>會員管理的自動對獎/代印會員中獎發票寄送客戶</li>
                        <li>ERP與Turnkey整合的資料收送狀態回報與雙方監控</li>
                        <li>針對字軌、重號、漏上傳、發票異常處理反覆檢核</li>
                        <li>當日上傳筆數紀錄查詢</li>
                    </ul>
                </div>
            </article>
        </div>

        <article class="section5 container">
            <h1 class="mainTitle">鼎新電子發票方案</h1>
            <img src="images/solution/section5-illust.png" alt="">
        </article>
        
        <article class="section6 container">
            <h1 class="mainTitle">導入電子發票管理方案包</h1>
            <h2>提供的整體規劃與執行步驟</h2>
            <img src="images/solution/section6-illust.png" alt="">
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        header() {
            return {
                title: `
                    導入電子發票<br>
                    您可能會面臨這些問題 !
                `,
                lists: [
                    '申請電子發票程序繁鎖耗時(自行完成系統介接測試含壓力測試約1-2個月)',
                    '上傳後需自行在ERP、Turnkey、財政部平台作檢視查核',
                    '財政部平台作檢視查核ERP資料與財政部平台資料重覆登打，人工處理易錯誤，且需逐筆人工核對',
                    '無離線備援機制，網路斷線時無法開立及列印發票',
                    '不同平台操作問題，人員訓練費時間',
                    '發票資料與出貨單資料接收不同步問題',
                    '問題解決多窗口問題',
                    '年底會計師查帳問題',
                    '發票上傳程序流程與狀況管理問題',
                    'Turnkey監控、自行檢測問題',
                    '問題發生時如何快速找到問題'
                ]
            }
        }
    },
}
</script>
